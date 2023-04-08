import React from 'react';
import { Title } from '../assets';


const FormHeader = ({partition}) => {
  return (
    <div className="flex justify-between items-center pt-24 pb-6 border-b border-primaryText border-b-2 border-b-0.3">
        <img src={Title} alt="redberry-title-red" />
        <h3 className="text-4xl font-bold">{partition}/4</h3>
    </div>
  );
}

export default FormHeader;