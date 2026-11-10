// Firebase Cloud Sync Configuration Modal for Admin Parents

import React, { useState, useEffect } from "react";
import {
  X,
  Cloud,
  CloudOff,
  CheckCircle2,
  Sparkles,
  ExternalLink,
  Check,
  AlertCircle,
  HelpCircle,
  Trash2,
  Lock,
  ChevronDown,
  ChevronUp
} from "lucide-react";
import {
  getStoredFirebaseConfig,
  saveFirebaseConfig,
  parseFirebaseConfigSnippet,
  testFirebaseConnection,
  type FirebaseConfig
} from "./firebaseSync";

interface FirebaseSettingsModalProps {
  onClose: () => void;
  onConfigSaved: () => void;
}

export const FirebaseSettingsModal: React.FC<FirebaseSettingsModalProps> = ({
  onClose,
  onConfigSaved
}) => {
  const [currentConfig, setCurrentConfig] = useState<FirebaseConfig | null>(() => getStoredFirebaseConfig());
  const [snippetInput, setSnippetInput] = useState("");
  const [parsedConfig, setParsedConfig] = useState<FirebaseConfig | null>(null);

  const [testing, setTesting] = useState(false);
  const [testResult, setTestResult] = useState<{ success: boolean; error?: string } | null>(null);
  const [showGuide, setShowGuide] = useState(false);
  const [saving, setSaving] = useState(false);

  // Auto-parse input as user types or pastes
  useEffect(() => {
    if (!snippetInput.trim()) {
      setParsedConfig(null);
      setTestResult(null);
      return;
    }
    const detected = parseFirebaseConfigSnippet(snippetInput);
    setParsedConfig(detected);
    setTestResult(null);
  }, [snippetInput]);

  const handleTestConnection = async () => {
    const configToTest = parsedConfig || currentConfig;
    if (!configToTest) return;

    setTesting(true);
    setTestResult(null);
    try {
      const res = await testFirebaseConnection(configToTest);
      setTestResult(res);
    } finally {
      setTesting(false);
    }
  };

  const handleSave = () => {
    if (!parsedConfig) return;
    setSaving(true);
    try {
      saveFirebaseConfig(parsedConfig);
      setCurrentConfig(parsedConfig);
      setSnippetInput("");
      setParsedConfig(null);
      setTestResult({ success: true });
      onConfigSaved();
    } finally {
      setSaving(false);
    }
  };

  const handleDisconnect = () => {
    if (confirm("Disconnect Firebase Cloud Sync? The app will return to local simulated sync mode.")) {
      saveFirebaseConfig(null);
      setCurrentConfig(null);
      setSnippetInput("");
      setParsedConfig(null);
      setTestResult(null);
      onConfigSaved();
    }
  };

  const isConnected = !!currentConfig?.projectId;

  return (
    <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl max-w-lg w-full shadow-2xl border border-slate-200 overflow-hidden max-h-[90vh] flex flex-col">
        {/* Header */}
        <div className="p-5 bg-gradient-to-r from-amber-500 via-orange-500 to-amber-600 text-white flex items-center justify-between shrink-0">
          <div className="flex items-center gap-2.5">
            <div className="w-10 h-10 rounded-2xl bg-white/20 flex items-center justify-center shadow-inner">
              <Cloud className="w-5 h-5 text-amber-100" />
            </div>
            <div>
              <h3 className="text-base font-extrabold leading-tight">Firebase Cloud Sync</h3>
              <p className="text-xs text-amber-100">Live multi-device synchronization over internet</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-xl text-white/80 hover:text-white hover:bg-black/15 transition cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Body */}
        <div className="p-6 space-y-5 text-xs overflow-y-auto flex-1">
          {/* Current Status Banner */}
          <div
            className={`p-4 rounded-2xl border flex items-center justify-between gap-3 ${
              isConnected
                ? "bg-emerald-50 border-emerald-200 text-emerald-900"
                : "bg-amber-50 border-amber-200 text-amber-900"
            }`}
          >
            <div className="flex items-center gap-3">
              <div
                className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 ${
                  isConnected ? "bg-emerald-100 text-emerald-700" : "bg-amber-100 text-amber-700"
                }`}
              >
                {isConnected ? <CheckCircle2 className="w-5 h-5 text-emerald-600" /> : <CloudOff className="w-5 h-5 text-amber-600" />}
              </div>
              <div>
                <div className="font-extrabold text-sm">
                  {isConnected ? "Connected to Cloud Firestore" : "Local Simulated Sync Active"}
                </div>
                <p className="text-[11px] opacity-80 mt-0.5">
                  {isConnected
                    ? `Project ID: ${currentConfig?.projectId}`
                    : "Zero-latency multi-tab sync active on this computer. Add Firebase keys below to sync across mobile phones over internet."}
                </p>
              </div>
            </div>

            {isConnected && (
              <button
                type="button"
                onClick={handleDisconnect}
                className="px-2.5 py-1.5 rounded-lg border border-rose-200 bg-white text-rose-700 hover:bg-rose-50 font-bold text-[11px] shrink-0 transition"
              >
                Disconnect
              </button>
            )}
          </div>

          {/* Paste Firebase Config Input */}
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <label className="font-bold text-slate-800 text-xs">
                Paste Firebase Web App Config:
              </label>
              <a
                href="https://console.firebase.google.com/"
                target="_blank"
                rel="noreferrer"
                className="text-amber-700 hover:text-amber-800 font-bold text-[11px] flex items-center gap-1 hover:underline"
              >
                <span>Firebase Console</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>

            <textarea
              rows={4}
              value={snippetInput}
              onChange={e => setSnippetInput(e.target.value)}
              placeholder={`Paste code snippet directly from Firebase console e.g.:\nconst firebaseConfig = {\n  apiKey: "AIzaSy...",\n  projectId: "family-chores",\n  appId: "1:..."\n};`}
              className="w-full p-3 border border-slate-300 rounded-xl font-mono text-[11px] leading-relaxed bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-amber-500 resize-none"
            />

            {parsedConfig && (
              <div className="p-3 bg-indigo-50 border border-indigo-200 rounded-xl text-indigo-900 space-y-1 text-[11px]">
                <div className="font-bold flex items-center gap-1.5 text-indigo-950">
                  <Check className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Valid Firebase Config Detected!</span>
                </div>
                <div className="grid grid-cols-2 gap-1 text-[10px]">
                  <div><strong>Project ID:</strong> {parsedConfig.projectId}</div>
                  <div><strong>API Key:</strong> {parsedConfig.apiKey.slice(0, 8)}...</div>
                  {parsedConfig.appId && <div><strong>App ID:</strong> {parsedConfig.appId.slice(0, 10)}...</div>}
                </div>
              </div>
            )}
          </div>

          {/* Test & Save Actions */}
          <div className="space-y-2">
            {testResult && (
              <div
                className={`p-3 rounded-xl border flex items-center gap-2 text-xs font-semibold ${
                  testResult.success
                    ? "bg-emerald-50 border-emerald-300 text-emerald-800"
                    : "bg-rose-50 border-rose-300 text-rose-800"
                }`}
              >
                {testResult.success ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Connection successful! Firestore database is live and reachable.</span>
                  </>
                ) : (
                  <>
                    <AlertCircle className="w-4 h-4 text-rose-600 shrink-0" />
                    <span>{testResult.error}</span>
                  </>
                )}
              </div>
            )}

            <div className="grid grid-cols-2 gap-2 pt-1">
              <button
                type="button"
                onClick={handleTestConnection}
                disabled={testing || (!parsedConfig && !currentConfig)}
                className="py-2.5 px-3 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold rounded-xl transition text-xs disabled:opacity-50"
              >
                {testing ? "Testing Connection..." : "Test Connection"}
              </button>
              <button
                type="button"
                onClick={handleSave}
                disabled={saving || !parsedConfig}
                className="py-2.5 px-3 bg-amber-600 hover:bg-amber-700 text-white font-extrabold rounded-xl transition text-xs shadow-xs disabled:opacity-50"
              >
                {saving ? "Saving..." : "Save & Activate"}
              </button>
            </div>
          </div>

          {/* Quick 2-Minute Setup Guide Accordion */}
          <div className="border border-slate-200 rounded-2xl overflow-hidden">
            <button
              type="button"
              onClick={() => setShowGuide(prev => !prev)}
              className="w-full p-3.5 bg-slate-50 hover:bg-slate-100 text-slate-800 font-bold text-xs flex items-center justify-between transition"
            >
              <span className="flex items-center gap-2 text-slate-800">
                <HelpCircle className="w-4 h-4 text-amber-600" />
                <span>How to get free Firebase credentials (2 min)</span>
              </span>
              {showGuide ? <ChevronUp className="w-4 h-4 text-slate-500" /> : <ChevronDown className="w-4 h-4 text-slate-500" />}
            </button>

            {showGuide && (
              <div className="p-4 space-y-3 bg-white text-slate-600 text-[11px] leading-relaxed border-t border-slate-200">
                <ol className="list-decimal pl-4 space-y-2">
                  <li>
                    Go to <strong><a href="https://console.firebase.google.com/" target="_blank" rel="noreferrer" className="text-amber-700 underline font-bold">console.firebase.google.com</a></strong> and click <strong>Add project</strong> (e.g. <em>"Family Chores Hub"</em>).
                  </li>
                  <li>
                    In your project dashboard, click the <strong>Web</strong> icon (<strong><code>&lt;/&gt;</code></strong>) to register an app.
                  </li>
                  <li>
                    Copy the <strong><code>const firebaseConfig = &#123; ... &#125;</code></strong> code block and paste it into the box above.
                  </li>
                  <li>
                    In the Firebase sidebar, click <strong>Build &gt; Firestore Database &gt; Create Database</strong>.
                  </li>
                  <li>
                    Choose <strong>Start in test mode</strong> (or paste the rules provided in <code>firestore.rules</code>) and click <strong>Enable</strong>.
                  </li>
                </ol>
                <div className="p-2.5 bg-amber-50 rounded-lg text-amber-900 border border-amber-200 font-medium">
                  💡 <strong>Free Tier:</strong> Firebase Firestore is completely free for family use (up to 50,000 document reads/day).
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
