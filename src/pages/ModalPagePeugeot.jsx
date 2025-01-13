import React from 'react';
import Mer from './Mer'; 
import { useLocation } from 'react-router-dom';
import Peugeot from './Peugeot';

const ModalPage = () => {
    const location = useLocation();
    const carModel = location.state?.carModel;
  return (
  <div style={{ backgroundColor:"#123456" ,width: '100%', height: '100vh' }}>
      <Peugeot carModel={carModel}/>
    </div>
  );
};

export default ModalPage;
