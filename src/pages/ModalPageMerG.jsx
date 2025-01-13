import React from 'react';
import Mer from './Mer'; 
import { useLocation } from 'react-router-dom';
import Peugeot from './Peugeot';
import MerG from './MerG';

const ModalPage = () => {
    const location = useLocation();
    const carModel = location.state?.carModel;
  return (
  <div style={{ backgroundColor:"#123456" ,width: '100%', height: '100vh' }}>
      <MerG carModel={carModel}/>
    </div>
  );
};

export default ModalPage;
