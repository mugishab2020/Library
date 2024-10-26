import { QRCodeCanvas } from 'qrcode.react'
import React from 'react'
import QrCode from './Qrcode'
import { useSearchParams } from 'react-router-dom';


const Success = () => {
  const [searchParams] = useSearchParams();
  const refId = searchParams.get('refId');
 
  return (
    <div style={{marginBottom: 30}}>
      <div className='success__top'>
      <h1 className='success__title'>Entrance submitted successfully</h1>
      <div className='success__style-square success__style-square-big'/>
      <div className='success__style-square success__style-square-small'/>
      <div className='success__style-square-scaled'>
      <div className='success__style-square success__style-square-big'/>
      <div className='success__style-square success__style-square-small'/>
      </div>
      <div className='success__style-square-one-two'>
      <div className='success__style-square success__style-square-one'/>
      <div className='success__style-square success__style-square-two'/>
        </div> 
      <div className='success__style-square success__style-square-three'/>
      </div>
      <div className='success__middle-box'>

<img className="green-check" src="https://cdn.iconscout.com/icon/premium/png-512-thumb/white-check-mark-on-green-circle-flat-design-9885176-8018669.png?f=webp&w=512" alt="green-check" />
      <p style={{textAlign: 'center'}}>You have successfully submitted your entrance form. Your details have been sent to the school administration.</p>
      {refId && <h3>Your reference Id: {refId}</h3>} 
      <h3>QR code: </h3>
      <div className="qrcode">
      <QrCode />
      </div>
      </div>
    </div>

  )
}

export default Success
