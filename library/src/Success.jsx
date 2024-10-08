import React from 'react'
import QrCode from './Qrcode';

const Success = () => {
  return (
    <div>
      <h1>Entrance submitted successfully</h1>


      <p>You have successfully submitted your entrance form. Your details have been sent to the school administration.</p>
      <p>Your reference Id</p> 


      <p>QR code </p>
      <br />
      <QrCode />
    </div>

  )
}

export default Success
