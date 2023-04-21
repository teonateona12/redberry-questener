import FormHeader from "../../components/FormHeader";
import { useState, useEffect } from "react";
import { ArrowLeft , OfficeImage } from "../../assets";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux'
import { updateData } from '../../store/applicantSlice'
import { useForm } from 'react-hook-form';
import { yupResolver} from '@hookform/resolvers/yup'
import officeSchema from "../../schemas/officeValidationSchema";



const Office = () => {
  const navigate = useNavigate();
  const dispach = useDispatch()
  const applicant = useSelector((store) => store.applicant) 
  const [hasMounted, setHasMounted] = useState(false);
  useEffect(() => {
    hasMounted? localStorage.setItem('localUser', JSON.stringify(applicant)) : setHasMounted(true);
  }, [applicant, hasMounted]);

  const handleApplicantChange = (e) => {
    e.target.name=="number_of_days_from_office"? dispach(updateData({property: e.target.name, value: +e.target.value})) : dispach(updateData({property: e.target.name, value: e.target.value}))
  }
  const {register, handleSubmit, formState: {errors}} = new useForm({
    resolver: yupResolver(officeSchema)
  })
  const onValid = (data) =>{
    navigate("/thanks")
  }

  return (
    <form onSubmit={handleSubmit(onValid)} className="px-40 bg-bgMain text-primaryText overflow-x-hidden">
      <FormHeader partition={4}/> 
      <div className="flex justify-between items-top">
        <div className="w-[606px] min-w-80">
          <p className="mt-10 font-normal text-2xl">
            რედბერის მთავარი ღირებულება ჩვენი გუნდის თითოეული წევრია. გარემო,
            რომელსაც ჩვენი თანამშრომლები ქმნით, ბევრისთვის არის და ყოფილა წლების
            განმავლობაში მიზნებისთვის ერთად ბრძოლის მიზეზი, ბევრისთვის კი —
            ჩვენთან გადმოსვლის. <br/> <br/>პანდემიის პერიოდში ერთმანეთსაც იშვიათად
            ვნახულობთ პირისპირ და ყოველდღიური კომუნიკაციაც გაიშვიათდა.
          </p>
          <div className="flex flex-col justify-center mt-12">
          <label className="font-bold text-2xl my-2">რა სიხშირით შეიძლება გვქონდეს საერთო არაფორმალური ონლაინ შეხვედრები, სადაც ყველა სურვილისამებრ ჩაერთვება?*</label>
          <div className="flex flex-col justify-center pl-6">
              <label className="flex items-center h-10 text-xl">
                <input {...register("non_formal_meetings")} type="radio"  onChange={handleApplicantChange} checked={applicant.non_formal_meetings=="twice_a_week"} className=" mr-5 appearance-none w-6 h-6 rounded-full border border-gray-900 checked:border-gray-900" value="twice_a_week" name="non_formal_meetings"/>
                კვირაში ორჯერ
              </label>
              <label className="flex items-center h-10 text-xl">
                <input {...register("non_formal_meetings")} type="radio"  onChange={handleApplicantChange} checked={applicant.non_formal_meetings=="once_a_week"} className=" mr-5 appearance-none w-6 h-6 rounded-full border border-gray-900 checked:border-gray-900" value="once_a_week" name="non_formal_meetings"/>
                კვირაში ერთხელ
              </label>
              <label className="flex items-center h-10 text-xl">
                <input {...register("non_formal_meetings")} type="radio"  onChange={handleApplicantChange} checked={applicant.non_formal_meetings=="bi_weekly"} className=" mr-5 appearance-none w-6 h-6 rounded-full border border-gray-900 checked:border-gray-900" value="bi_weekly" name="non_formal_meetings"/>
                ორ კვირაში ერთხელ
              </label>
              <label className="flex items-center h-10 text-xl">
                <input {...register("non_formal_meetings")} type="radio"  onChange={handleApplicantChange} checked={applicant.non_formal_meetings=="once_a_month"} className=" mr-5 appearance-none w-6 h-6 rounded-full border border-gray-900 checked:border-gray-900" value="once_a_month" name="non_formal_meetings"/>
                თვეში ერთხელ
              </label>
              <p className={applicant.non_formal_meetings!=""?"hidden":"text-error"}>{errors.non_formal_meetings?.message}</p>
          </div>
          <label className="font-bold text-2xl mt-10">კვირაში რამდენი დღე ისურვებდი ოფისიდან მუშაობას?*</label>
          <div className="flex flex-col justify-center pl-6">
              <label className="flex items-center h-10 text-xl">
                <input {...register("number_of_days_from_office")} type="radio" onChange={handleApplicantChange} checked={applicant.number_of_days_from_office==0} className=" mr-5 appearance-none w-6 h-6 rounded-full border border-gray-900 checked:border-gray-900" value={0} name="number_of_days_from_office"/>
                0
              </label>
              <label className="flex items-center h-10 text-xl">
                <input {...register("number_of_days_from_office")} type="radio" onChange={handleApplicantChange} checked={applicant.number_of_days_from_office==1} className=" mr-5 appearance-none w-6 h-6 rounded-full border border-gray-900 checked:border-gray-900" value={1} name="number_of_days_from_office"/>
                1
              </label>
              <label className="flex items-center h-10 text-xl">
                <input {...register("number_of_days_from_office")} type="radio" onChange={handleApplicantChange} checked={applicant.number_of_days_from_office==2} className=" mr-5 appearance-none w-6 h-6 rounded-full border border-gray-900 checked:border-gray-900" value={2} name="number_of_days_from_office"/>
                2
              </label>
              <label className="flex items-center h-10 text-xl">
                <input {...register("number_of_days_from_office")} type="radio" onChange={handleApplicantChange} checked={applicant.number_of_days_from_office==3} className=" mr-5 appearance-none w-6 h-6 rounded-full border border-gray-900 checked:border-gray-900" value={3} name="number_of_days_from_office"/>
                3
              </label>
              <label className="flex items-center h-10 text-xl">
                <input {...register("number_of_days_from_office")} type="radio" onChange={handleApplicantChange} checked={applicant.number_of_days_from_office==4} className=" mr-5 appearance-none w-6 h-6 rounded-full border border-gray-900 checked:border-gray-900" value={4} name="number_of_days_from_office"/>
                4
              </label>
              <label className="flex items-center h-10 text-xl">
                <input {...register("number_of_days_from_office")} type="radio" onChange={handleApplicantChange} checked={applicant.number_of_days_from_office==5} className=" mr-5 appearance-none w-6 h-6 rounded-full border border-gray-900 checked:border-gray-900" value={5} name="number_of_days_from_office"/>
                5
              </label>
              <p className={applicant.number_of_days_from_office!==null?"hidden":"text-error"}>{errors.number_of_days_from_office?.message}</p>
          </div>
          <label className="font-bold text-2xl mb-2 mt-12">რას ფიქრობ ფიზიკურ შეკრებებზე?</label>
          <input {...register("what_about_meetings_in_live")} onChange={handleApplicantChange} value={applicant.what_about_meetings_in_live} type="text" className="p-2 text-xl border border-gray-700 bg-transparent h-48 mt-5]" name="what_about_meetings_in_live"/>
          <label className="font-bold text-2xl mb-2 mt-11">რას ფიქრობ არსებულ გარემოზე:<br/>რა მოგწონს, რას დაამატებდი, რას შეცვლიდი?</label>
          <input {...register("tell_us_your_opinion_about_us")} onChange={handleApplicantChange} value={applicant.tell_us_your_opinion_about_us} type="text" className="p-2 text-xl border border-gray-700 bg-transparent h-48 mt-5]" name="tell_us_your_opinion_about_us"/>
          </div>

          <div className="flex justify-end mt-14 mb-24">
            <button className={applicant.non_formal_meetings!=""&&applicant.number_of_days_from_office!=null? "bg-[#208298] h-14 w-48 rounded-full text-white font-bold text-xl flex justify-center items-center" : "bg-[#999] h-14 w-48 rounded-full text-white font-bold text-xl flex justify-center items-center"} type="submit">
                დასრულება
            </button>
          </div>
        </div>
        <img className="mt-18 max-w-[703px] max-h-[703px]" src={OfficeImage} alt="" />
        </div>
      <div className="flex items-center justify-center mb-20">
        <button onClick={()=>{navigate("/vaccine")}} className="mr-28">
          <img src={ArrowLeft} alt="" />
        </button>
      </div>
    </form>
  );
};

export default Office;
