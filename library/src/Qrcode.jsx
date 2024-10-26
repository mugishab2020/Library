import React from 'react';
import { QRCodeSVG } from 'qrcode.react';
import { useSearchParams } from 'react-router-dom';

const QrCode = ({params}) => {
  const [searchParams] = useSearchParams();
  const refId = searchParams.get('refId');
  const value = `/qr-result/${refId}`; // This can be any URL or text you'd like to encode as a QR code.

  return (
    <div className="qr-code-container">
      <QRCodeSVG value={value} size={128} level={"H"} />
      <p>Scan the QR code</p>
    </div>
  );
};

export default QrCode;