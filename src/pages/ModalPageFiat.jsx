import React from 'react';

import { useLocation } from 'react-router-dom';
import Fiat from './Fiat';

const ModalPage = () => {
    const location = useLocation();
    const carModel = location.state?.carModel;
  return (
    <div style={{ backgroundColor:"#123456" ,width: '100%', height: '100vh' }}>
      <Fiat carModel={carModel}/>
    </div>
  );
};

export default ModalPage;
