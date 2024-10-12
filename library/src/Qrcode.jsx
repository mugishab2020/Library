import React from 'react';
import { QRCodeSVG } from 'qrcode.react';

const QrCode = () => {
  const value = "https://ur.library.org";

  return (
    <div className="qr-code-container">
      <QRCodeSVG value={value} size={128} level={"H"} />
      <p>Scan the QR code</p>
    </div>
  );
};

export default QrCode;
