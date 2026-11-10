// Standard Compliant QR Code Display using official 'qrcode' library

import React, { useState, useEffect } from "react";
import QRCode from "qrcode";

interface QRCodeDisplayProps {
  value: string;
  size?: number;
  className?: string;
}

export const QRCodeDisplay: React.FC<QRCodeDisplayProps> = ({
  value,
  size = 180,
  className = ""
}) => {
  const [svgContent, setSvgContent] = useState<string>("");
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let isMounted = true;
    if (!value) {
      setSvgContent("");
      return;
    }

    QRCode.toString(value, {
      type: "svg",
      margin: 2,
      errorCorrectionLevel: "M",
      color: {
        dark: "#1e1b4b",
        light: "#ffffff"
      }
    })
      .then(svg => {
        if (isMounted) {
          setSvgContent(svg);
          setError(null);
        }
      })
      .catch(err => {
        if (isMounted) {
          console.error("QR Code generation error:", err);
          setError("Failed to generate QR");
        }
      });

    return () => {
      isMounted = false;
    };
  }, [value]);

  if (error || !svgContent) {
    return (
      <div
        style={{ width: size + 24, height: size + 24 }}
        className={`flex items-center justify-center bg-slate-100 rounded-2xl text-xs text-slate-400 border border-slate-200 ${className}`}
      >
        {error || "Generating QR..."}
      </div>
    );
  }

  return (
    <div
      className={`inline-block p-2 bg-white rounded-2xl shadow-sm border border-slate-200 select-none ${className}`}
      style={{ width: size + 16, height: size + 16 }}
    >
      <div
        className="w-full h-full flex items-center justify-center [&>svg]:w-full [&>svg]:h-full [&>svg]:rounded-xl"
        dangerouslySetInnerHTML={{ __html: svgContent }}
      />
    </div>
  );
};
