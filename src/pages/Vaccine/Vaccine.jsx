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
    dispach(updateData({property: "vaccination_stage", value: ""}))
    canAdvance&&setCanAdvance(false)
  }
  const handleDosage = (e) => {
    setCanAdvance(true)
    dispach(updateData({property: "vaccination_stage", value: e.target.value}))
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
                <input onChange={e => {}} onClick={handleCovidChange} type="radio" className="mr-[19px] appearance-none w-[23px] h-[23px] rounded-full border border-[#232323] checked:border-[#232323]" value="true" checked={applicant.had_vaccine===true} name="hadit"/>
                კი
              </label>
              <label className="flex items-center h-[40px] text-xl">
                <input onChange={e => {}} onClick={handleCovidChange} type="radio" className="mr-[19px] appearance-none w-[23px] h-[23px] rounded-full border border-[#232323] checked:border-[#232323]" value="false" checked={applicant.had_vaccine===false} name="hadit"/>
                არა
              </label>
            </div>
          </div>
          {applicant.had_vaccine == null? "" : (applicant.had_vaccine? (
            <div className="flex flex-col justify-center mt-[46px]">
            <label className="font-bold text-[22px] my-[8px]">აირჩიე რა ეტაპზე ხარ*</label>
            <div className="flex flex-col justify-center pl-6">
               <label className="flex items-center h-[40px] text-xl">
                 <input onChange={e => {}} onClick={handleDosage} type="radio" className="mr-[19px] appearance-none w-[23px] h-[23px] rounded-full border border-[#232323] checked:border-[#232323]" value="first_dosage_and_registered_on_the_second" checked={applicant.vaccination_stage==="first_dosage_and_registered_on_the_second"} name="stage"/>
                 პირველი დოზა და დარეგისტრირებული ვარ მეორეზე
               </label>
               <label className="flex items-center h-[40px] text-xl">
                 <input onChange={e => {}} onClick={handleDosage} type="radio" className="mr-[19px] appearance-none w-[23px] h-[23px] rounded-full border border-[#232323] checked:border-[#232323]" value="fully_vaccinated" checked={applicant.vaccination_stage==="fully_vaccinated"} name="stage"/>
                 სრულად აცრილი ვარ
               </label>
               <label className="flex items-center h-[40px] text-xl">
                 <input onChange={e => {}} onClick={handleDosage} type="radio" className="mr-[19px] appearance-none w-[23px] h-[23px] rounded-full border border-[#232323] checked:border-[#232323]" value="first_dosage_and_not_registered_on_the_second" checked={applicant.vaccination_stage==="first_dosage_and_not_registered_on_the_second"} name="stage"/>
                 პირველი დოზა და არ დავრეგისტრირებულვარ მეორეზე
               </label>
            </div>
            </div>            
          ) : (
            <div className="flex flex-col justify-center mt-[46px]">
            <label className="font-bold text-[22px] my-[8px]">რას ელოდები?*</label>
            <div className="flex flex-col justify-center pl-6">
               <label className="flex items-center  h-[40px] text-xl">
                 <input onChange={e => {}} onClick={handleDosage} type="radio" className="mr-[19px] appearance-none w-[23px] h-[23px] rounded-full border border-[#232323] checked:border-[#232323]" value="registered_and_waiting" checked={applicant.vaccination_stage==="registered_and_waiting"} name="stage"/>
                 დარეგისტრირებული ვარ და ველოდები რიცხვს
               </label>
               <label className="flex items-center h-[40px] text-xl">
                 <input onChange={e => {}} onClick={handleDosage} type="radio" className="mr-[19px] appearance-none w-[23px] h-[23px] rounded-full border border-[#232323] checked:border-[#232323]" value="not_planning" checked={applicant.vaccination_stage==="not_planning"} name="stage"/>
                 არ ვგეგმავ
               </label>
               <label className="flex items-center h-[40px] text-xl">
                 <input onChange={e => {}} onClick={handleDosage} type="radio" className="mr-[19px] appearance-none w-[23px] h-[23px] rounded-full border border-[#232323] checked:border-[#232323]" value="already_had_it_and_not_planning" checked={applicant.vaccination_stage==="already_had_it_and_not_planning"} name="stage"/>
                 გადატანილი მაქვს და ვგეგმავ აცრას
               </label>
            </div>
            </div> 
          ))}
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
