import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { exec, spawn } from 'node:child_process';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';

function jsxSourceLocBabelPlugin({ types: t }: any) {
  return {
    name: 'jsx-source-loc',
    visitor: {
      JSXOpeningElement(pathNode: any, state: any) {
        const loc = pathNode.node.loc;
        if (!loc) return;

        // Skip Fragment (<> or <React.Fragment> or <Fragment>)
        const nameNode = pathNode.node.name;
        if (t.isJSXIdentifier(nameNode) && nameNode.name === 'Fragment') return;
        if (
          t.isJSXMemberExpression(nameNode) &&
          t.isJSXIdentifier(nameNode.property) &&
          nameNode.property.name === 'Fragment'
        ) {
          return;
        }

        // Only inject onto lowercase intrinsic DOM elements (div, button, span, etc.)
        // so we don't pollute custom component props
        if (!t.isJSXIdentifier(nameNode) || !/^[a-z]/.test(nameNode.name)) {
          return;
        }

        const hasAttr = pathNode.node.attributes.some(
          (attr: any) =>
            t.isJSXAttribute(attr) &&
            t.isJSXIdentifier(attr.name) &&
            attr.name.name === 'data-source-loc'
        );
        if (hasAttr) return;

        const filename = state.filename
          ? path.basename(state.filename)
          : 'weekly_chores_household_hub.tsx';
        if (filename === 'main.tsx') return;
        const line = loc.start.line;
        const column = loc.start.column + 1;

        // Find enclosing function/component name if any
        let compName = '';
        let parent = pathNode.findParent(
          (p: any) =>
            p.isFunctionDeclaration() ||
            p.isVariableDeclarator() ||
            p.isClassDeclaration()
        );
        if (parent) {
          if (parent.isFunctionDeclaration() && parent.node.id) {
            compName = parent.node.id.name;
          } else if (parent.isVariableDeclarator() && t.isIdentifier(parent.node.id)) {
            compName = parent.node.id.name;
          } else if (parent.isClassDeclaration() && parent.node.id) {
            compName = parent.node.id.name;
          }
        }

        pathNode.node.attributes.push(
          t.jsxAttribute(
            t.jsxIdentifier('data-source-loc'),
            t.stringLiteral(`${filename}:${line}:${column}`)
          )
        );

        if (compName) {
          pathNode.node.attributes.push(
            t.jsxAttribute(
              t.jsxIdentifier('data-source-comp'),
              t.stringLiteral(compName)
            )
          );
        }
      },
    },
  };
}

export default defineConfig({
  plugins: [
    react({
      babel: {
        plugins: [jsxSourceLocBabelPlugin],
      },
    }),
    {
      name: 'vscode-click-to-source',
      configureServer(server) {
        let currentCsvMapState: any = {
          sheetIndex: 1,
          rowIndex: null,
          colIndex: null,
          tsxLine: null,
          updatedAt: Date.now(),
        };

        server.middlewares.use('/__csv-map-state', (req, res) => {
          const url = new URL(req.url || '', 'http://localhost');
          if (req.method === 'POST' || url.searchParams.has('sheetIndex')) {
            const sIdx = parseInt(url.searchParams.get('sheetIndex') || '0', 10);
            const rIdx = url.searchParams.has('rowIndex')
              ? parseInt(url.searchParams.get('rowIndex')!, 10)
              : null;
            const cIdx = url.searchParams.has('colIndex')
              ? parseInt(url.searchParams.get('colIndex')!, 10)
              : null;
            const tLine = url.searchParams.has('tsxLine')
              ? parseInt(url.searchParams.get('tsxLine')!, 10)
              : null;
            currentCsvMapState = {
              sheetIndex: isNaN(sIdx) ? 0 : sIdx,
              rowIndex: rIdx !== null && !isNaN(rIdx) ? rIdx : null,
              colIndex: cIdx !== null && !isNaN(cIdx) ? cIdx : null,
              tsxLine: tLine !== null && !isNaN(tLine) ? tLine : null,
              updatedAt: Date.now(),
            };
          }
          res.setHeader('Content-Type', 'application/json');
          res.end(JSON.stringify(currentCsvMapState));
        });

        server.middlewares.use('/__popout-csv-map', (req, res) => {
          const mapUrl = 'http://localhost:5173/?view=csv-map';
          const browserCandidates = [
            'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
            'C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe',
            'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe',
            'C:\\Program Files\\Microsoft\\Edge\\Application\\msedge.exe',
          ];
          const browserExe = browserCandidates.find((p) => fs.existsSync(p));
          if (browserExe) {
            const profileDir = path.join(os.tmpdir(), 'chores-csv-map-app-profile');
            const child = spawn(
              browserExe,
              [
                `--user-data-dir=${profileDir}`,
                `--app=${mapUrl}`,
                '--window-size=1320,840',
                '--no-first-run',
                '--no-default-browser-check',
              ],
              { detached: true, stdio: 'ignore' }
            );
            child.unref();
          } else {
            exec(`start "" "${mapUrl}"`);
          }
          res.setHeader('Content-Type', 'application/json');
          res.end(JSON.stringify({ ok: true, url: mapUrl }));
        });

        server.middlewares.use('/__open-in-vscode', (req, res) => {
          const url = new URL(req.url || '', 'http://localhost');
          const file = url.searchParams.get('file') || 'weekly_chores_household_hub.tsx';
          const line = parseInt(url.searchParams.get('line') || '1', 10);
          const col = parseInt(url.searchParams.get('col') || '1', 10);

          const fullPath = path.resolve(process.cwd(), file);
          const target = `${fullPath}:${line}:${col}`;

          const cleanEnv = { ...process.env };
          delete cleanEnv.ELECTRON_RUN_AS_NODE;

          const codeExe = 'C:\\Users\\thomv\\AppData\\Local\\Programs\\Microsoft VS Code\\Code.exe';
          if (fs.existsSync(codeExe)) {
            const child = spawn(codeExe, ['-r', '-g', target], {
              env: cleanEnv,
              detached: true,
              stdio: 'ignore',
            });
            child.unref();
          } else {
            exec(`code.cmd -r -g "${target}"`, { env: cleanEnv });
          }

          res.setHeader('Content-Type', 'application/json');
          res.end(JSON.stringify({ ok: true, target }));
        });

        server.middlewares.use('/__source-preview', (req, res) => {
          const url = new URL(req.url || '', 'http://localhost');
          const file = url.searchParams.get('file') || 'weekly_chores_household_hub.tsx';
          const line = parseInt(url.searchParams.get('line') || '1', 10);

          try {
            const fullPath = path.resolve(process.cwd(), path.basename(file));
            const content = fs.readFileSync(fullPath, 'utf-8').split(/\r?\n/);
            const start = Math.max(1, line - 1);
            const end = Math.min(content.length, line + 1);
            const snippet = [];
            for (let i = start; i <= end; i++) {
              snippet.push({ line: i, text: content[i - 1] ?? '' });
            }
            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify({ ok: true, snippet }));
          } catch (e: any) {
            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify({ ok: false, error: e?.message }));
          }
        });
      },
    },
  ],
  server: {
    port: 5173,
    strictPort: false,
  },
});
