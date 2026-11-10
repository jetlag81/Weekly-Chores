// Clean SVG QR Code Renderer for Device Pairing

import React, { useMemo } from "react";
import { generateQRCode } from "./qrCode";

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
  const qr = useMemo(() => {
    try {
      return generateQRCode(value);
    } catch (e) {
      console.error("Failed to generate QR Code:", e);
      return null;
    }
  }, [value]);

  if (!qr) {
    return (
      <div
        style={{ width: size, height: size }}
        className={`flex items-center justify-center bg-slate-100 rounded-xl text-xs text-slate-400 ${className}`}
      >
        QR unavailable
      </div>
    );
  }

  // Add 3-module quiet zone margin around the QR code
  const margin = 3;
  const viewBoxSize = qr.size + margin * 2;

  return (
    <div
      className={`inline-block p-3 bg-white rounded-2xl shadow-sm border border-slate-200 ${className}`}
      style={{ width: size + 24, height: size + 24 }}
    >
      <svg
        viewBox={`0 0 ${viewBoxSize} ${viewBoxSize}`}
        shapeRendering="crispEdges"
        className="w-full h-full"
      >
        {/* White background */}
        <rect width={viewBoxSize} height={viewBoxSize} fill="#ffffff" />
        {/* QR Modules */}
        <g transform={`translate(${margin}, ${margin})`} fill="#1e1b4b">
          <path d={qr.svgPath} />
        </g>
      </svg>
    </div>
  );
};
