import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux'
import { updateData} from '../../store/applicantSlice'
import FormHeader from "../../components/FormHeader";
import { ArrowLeft , ArrowRight, Doctor } from "../../assets";
import { useForm } from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup'
import vaccineSchema from "../../schemas/vaccineValidationSchema";
import { useState, useEffect} from "react";


const Vaccine = () => {
  const navigate = useNavigate();
  const dispach = useDispatch()
  const applicant = useSelector((store) => store.applicant) 
  const [hasMounted, setHasMounted] = useState(false);
  useEffect(() => {
    hasMounted? localStorage.setItem('localUser', JSON.stringify(applicant)) : setHasMounted(true);
  }, [applicant, hasMounted]);
  const handleDosage = (e) => {
    dispach(updateData({property: "vaccination_stage", value: e.target.value}))
  }
  const {register, handleSubmit, setValue, formState: {errors}} = new useForm({
    resolver: yupResolver(vaccineSchema)
  })
  const onValid = (data) =>{
    navigate("/office")
  }
  const handleCovidChange = (e) => {
    const value = e.target.value === 'true';
    dispach(updateData({property: "had_vaccine", value: value}))
    dispach(updateData({property: "vaccination_stage", value: null}))
    setValue("vaccination_stage", null)
  }
  return (
  <form onSubmit={handleSubmit(onValid)} className="px-40 w-full h-full bg-bgMain text-primaryText overflow-x-hidden">
  <FormHeader partition={3}/>
  <div className="flex justify-between items-top">
    <div>
      <div className="flex flex-col justify-center mt-10">
        <label className="font-bold text-2xl my-2">უკვე აცრილი ხარ?*</label>
        <div className="flex flex-col justify-center pl-6">
          <label className="flex items-center h-10 text-xl">
            <input {...register("had_vaccine")}  onChange={handleCovidChange} type="radio" className="mr-5 appearance-none w-6 h-6 rounded-full border border-gray-900 checked:border-gray-900" value="true" checked={applicant.had_vaccine===true} name="had_vaccine"/>
            კი
          </label>
          <label className="flex items-center h-10 text-xl">
            <input {...register("had_vaccine")}  onChange={handleCovidChange} type="radio" className="mr-5 appearance-none w-6 h-6 rounded-full border border-gray-900 checked:border-gray-900" value="false" checked={applicant.had_vaccine===false} name="had_vaccine"/>
            არა
          </label>
          <p className={applicant.had_vaccine!==null?"hidden":"text-error"}>{errors.had_vaccine?.message}</p>
        </div>
      </div>
      {applicant.had_vaccine == null? "" : (applicant.had_vaccine? (
        <div className="flex flex-col justify-center mt-12">
        <label className="font-bold text-2xl my-2">აირჩიე რა ეტაპზე ხარ*</label>
        <div className="flex flex-col justify-center pl-6">
           <label className="flex items-center h-10 text-xl">
             <input {...register("vaccination_stage")} onChange={handleDosage} type="radio" className="mr-5 appearance-none w-6 h-6 rounded-full border border-gray-900 checked:border-gray-900" value="first_dosage_and_registered_on_the_second" checked={applicant.vaccination_stage==="first_dosage_and_registered_on_the_second"} name="vaccination_stage"/>
             პირველი დოზა და დარეგისტრირებული ვარ მეორეზე
           </label>
           <label className="flex items-center h-10 text-xl">
             <input {...register("vaccination_stage")} onChange={handleDosage} type="radio" className="mr-5 appearance-none w-6 h-6 rounded-full border border-gray-900 checked:border-gray-900" value="fully_vaccinated" checked={applicant.vaccination_stage==="fully_vaccinated"} name="vaccination_stage"/>
                 სრულად აცრილი ვარ
           </label>
           <label className="flex items-center h-10 text-xl">
             <input {...register("vaccination_stage")} onChange={handleDosage} type="radio" className="mr-5 appearance-none w-6 h-6 rounded-full border border-gray-900 checked:border-gray-900" value="first_dosage_and_not_registered_on_the_second" checked={applicant.vaccination_stage==="first_dosage_and_not_registered_on_the_second"} name="vaccination_stage"/>
                 პირველი დოზა და არ დავრეგისტრირებულვარ მეორეზე
           </label>
            </div>
            </div>            
          ) : (
            <div className="flex flex-col justify-center mt-12">
            <label className="font-bold text-2xl my-2">რას ელოდები?*</label>
            <div className="flex flex-col justify-center pl-6">
               <label className="flex items-center h-10 text-xl">
                 <input {...register("vaccination_stage")} onChange={e => {}} onClick={handleDosage} type="radio" className="mr-5 appearance-none w-6 h-6 rounded-full border border-gray-900 checked:border-gray-900" value="registered_and_waiting" checked={applicant.vaccination_stage==="registered_and_waiting"} name="vaccination_stage"/>
                 დარეგისტრირებული ვარ და ველოდები რიცხვს
               </label>
               <label className="flex items-center h-10 text-xl">
                 <input {...register("vaccination_stage")} onChange={e => {}} onClick={handleDosage} type="radio" className="mr-5 appearance-none w-6 h-6 rounded-full border border-gray-900 checked:border-gray-900" value="not_planning" checked={applicant.vaccination_stage==="not_planning"} name="vaccination_stage"/>
                 არ ვგეგმავ
               </label>
               <label className="flex items-center h-10 text-xl">
                 <input {...register("vaccination_stage")} onChange={e => {}} onClick={handleDosage} type="radio" className="mr-5 appearance-none w-6 h-6 rounded-full border border-gray-900 checked:border-gray-900" value="already_had_it_and_not_planning" checked={applicant.vaccination_stage==="already_had_it_and_not_planning"} name="vaccination_stage"/>
                 გადატანილი მაქვს და ვგეგმავ აცრას
               </label>
            </div>
            </div> 
          ))}
          <p className={applicant.had_vaccine === null || applicant.vaccination_stage !== null? "hidden" : "text-error ml-6"}>{errors.vaccination_stage?.message}</p>
          {applicant.vaccination_stage=="first_dosage_and_not_registered_on_the_second"? (
            <p className="w-96 pl-16 text-xl mt-10">
              რომ არ გადადო, <br/>
              ბარემ ახლავე დარეგისტრირდი
              <a className="block text-link" href="https://booking.moh.gov.ge/">https://booking.moh.gov.ge/</a>
            </p>
          ):""}
          {applicant.vaccination_stage=="already_had_it_and_not_planning"? (
            <div className="w-112 pl-16 text-xl mt-10">
              <p>ახალი პროტოკოლით კოვიდის გადატანიდან 1 თვის შემდეგ შეგიძლიათ ვაქცინის გაკეთება.</p>
              <p>👉 რეგისტრაციის ბმული</p>
              <a className="block text-link" href="https://booking.moh.gov.ge/">https://booking.moh.gov.ge/</a>
            </div>          
          ):""}
          {applicant.vaccination_stage=="not_planning"? (
            <a className="block text-link pl-16 text-xl mt-10" href="https://booking.moh.gov.ge/">https://booking.moh.gov.ge/</a>
          ):""}
        </div>
        <img className="mt-9" src={Doctor} alt="" />
      </div>
      <div className="flex items-center justify-center">
        <button onClick={() => navigate("/covid")} className="mr-28"><img src={ArrowLeft} alt=""/></button>
        <button type="submit"><img src={ArrowRight} className={applicant.had_vaccine!== null&& applicant.vaccination_stage!==null? "filter brightness-0": ""} alt="" /></button>
      </div>
    </form>
  );
};

export default Vaccine;
