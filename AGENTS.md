# Household Hub — Agent Guidelines & Workspace Rules

## 1. Automatic Project Documentation Maintenance (Mandatory)
After delivering any feature, bug fix, layout adjustment, or major milestone:
- **Always Update `docs/PROJECT_PROGRESS_AND_CONVERSATION_HISTORY.md`**:
  1. Add new items to the top `## Major Features & Engineering Milestones Delivered` list.
  2. Append the conversation turn with date, user prompt, and summary of changes to `## Chronological Conversation Log`.
  3. Update `> **Export Date**:` at the top of the file.
- Keep the documentation committed to git along with the code changes so the project log remains continuously up to date.

## 2. Low-Memory Headless Build Toolchain
- Host environment has 8 GB total RAM. Do NOT launch or require the full Android Studio GUI for building or deploying APKs.
- Always use the headless toolchain:
  - Java: `$env:JAVA_HOME = "C:\Program Files\Android\Android Studio\jbr"`
  - Gradle Daemon: Tuned in `android/gradle.properties` (`-Xmx1024m -XX:+UseG1GC`)
  - Node Memory: `$env:NODE_OPTIONS = "--max-old-space-size=4096"`
  - Automation Script: `powershell -ExecutionPolicy Bypass -File .\build-apk.ps1` (or `npm run build:apk`) which compiles Vite assets, syncs Capacitor, compiles the APK with Gradle, and streams directly to connected devices via ADB.

## 3. Mobile Safe-Area & Pixel Inset Rules
- Any modal overlay must use `.modal-safe-area` on its outer wrapper (`fixed inset-0`) and `max-h-full` on inner card containers to prevent colliding with Android's status bar and 3-button navigation bar.
- Drawers must use `.drawer-safe-header` and `.drawer-safe-footer` for top and bottom clearance.
- Never reintroduce native Android `ActionBar` / `DarkActionBar` in `styles.xml`.
- Maintain dark slate `#0F172A` theme continuity.
