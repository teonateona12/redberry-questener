import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux'
import { updateData} from '../../store/applicantSlice'
import FormHeader from "../../components/FormHeader";
import { ArrowLeft , ArrowRight, Doctor } from "../../assets";
import { useState} from "react";


const Vaccine = () => {
  const [canAdvance, setCanAdvance] = useState(false);
  const navigate = useNavigate();
  const dispach = useDispatch()
  const applicant = useSelector((store) => store.applicant) 
  console.log(applicant)
  const handleCovidChange = (e) => {
    const value = e.target.value === 'true';
    dispach(updateData({property: "had_vaccine", value: value}))
    canAdvance&&setCanAdvance(false)
  }

  return (
    <div className="px-[200px] text-primaryText">
      <FormHeader partition={3}/>
      <div className="flex justify-between items-top">
        <div>
          <div className="flex flex-col justify-center mt-[42px]">
            <label className="font-bold text-[22px] my-[8px]">უკვე აცრილი ხარ?*</label>
            <div className="flex flex-col justify-center pl-6">
              <label className="flex items-center h-[40px] text-xl">
                <input onChange={e => {}} onClick={handleCovidChange} type="radio" className=" mr-[19px] appearance-none w-[23px] h-[23px] rounded-full border border-[#232323]  checked:border-[#232323]" value="true" checked={applicant.had_vaccine===true} name="hadit"/>
                კი
              </label>
              <label className="flex items-center h-[40px] text-xl">
                <input onChange={e => {}} onClick={handleCovidChange} type="radio" className=" mr-[19px] appearance-none w-[23px] h-[23px] rounded-full border border-[#232323]  checked:border-[#232323]" value="false" checked={applicant.had_vaccine===false} name="hadit"/>
                არა
              </label>
            </div>
          </div>
        </div>
        <img className="h-[748px] mt-[36px]" src={Doctor} alt="" />
      </div>
 

      <div className="flex items-center justify-center">
        <button onClick={() => navigate("/covid")} className="mr-[117px]"><img src={ArrowLeft} alt=""/></button>
        <button onClick={() => navigate("/office")} disabled={!canAdvance}><img src={ArrowRight} className={canAdvance? "filter brightness-0": ""} alt="" /></button>
      </div>
    </div>
  );
};

export default Vaccine;
