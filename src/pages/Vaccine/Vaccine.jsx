import { useNavigate } from "react-router-dom";
import FormHeader from "../../components/FormHeader";
import { ArrowLeft , ArrowRight, Doctor } from "../../assets";
import { useState} from "react";


const Vaccine = () => {
  const [canAdvance, setCanAdvance] = useState(false);
  const navigate = useNavigate();

  return (
    <div>
      <FormHeader partition={3}/> 

      <div className="flex items-center justify-center">
        <button onClick={() => navigate("/covid")} className="mr-[117px]"><img src={ArrowLeft} alt=""/></button>
        <button onClick={() => navigate("/office")} disabled={!canAdvance}><img src={ArrowRight} className={canAdvance? "filter brightness-0": ""} alt="" /></button>
      </div>
    </div>
  );
};

export default Vaccine;
