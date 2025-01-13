import React from 'react';
import Sko from './Sko'; 
import { useLocation } from 'react-router-dom';

const ModalPage = () => {
    const location = useLocation();
    const carModel = location.state?.carModel;
  return (
    <div style={{ backgroundColor:"#123456" ,width: '100%', height: '100vh' }}>
      <Sko carModel={carModel}/>
    </div>
  );
};

export default ModalPage;
