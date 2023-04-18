import FormHeader from "../../components/FormHeader";
import { ArrowLeft , ArrowRight, OfficeImage } from "../../assets";
import { useState} from "react";
import { useNavigate } from "react-router-dom";
//გამზადებული იმპორტები მომავალი ფუნქციებისთვის
// import { useDispatch, useSelector } from 'react-redux'
// import { updateData } from '../../store/applicantSlice'
// import { useForm } from 'react-hook-form';
// import { yupResolver} from '@hookform/resolvers/yup'


const Office = () => {
  const [canAdvance, setCanAdvance] = useState(false);
  const navigate = useNavigate();

  return (
    <form className="px-[200px] bg-bgMain text-primaryText overflow-x-hidden">
      <FormHeader partition={4}/> 
      <div className="flex justify-between items-top">
        <div className="w-[606px] min-w-[500px]">
          <p className="mt-[42px] font-normal text-[22px]">
            რედბერის მთავარი ღირებულება ჩვენი გუნდის თითოეული წევრია. გარემო,
            რომელსაც ჩვენი თანამშრომლები ქმნით, ბევრისთვის არის და ყოფილა წლების
            განმავლობაში მიზნებისთვის ერთად ბრძოლის მიზეზი, ბევრისთვის კი —
            ჩვენთან გადმოსვლის. <br/> <br/>პანდემიის პერიოდში ერთმანეთსაც იშვიათად
            ვნახულობთ პირისპირ და ყოველდღიური კომუნიკაციაც გაიშვიათდა.
          </p>
          <div className="flex flex-col justify-center mt-[42px]">
          <label className="font-bold text-[22px] my-[8px]">რა სიხშირით შეიძლება გვქონდეს საერთო არაფორმალური ონლაინ შეხვედრები, სადაც ყველა სურვილისამებრ ჩაერთვება?*</label>
          <div className="flex flex-col justify-center pl-6">
              <label className="flex items-center h-[40px] text-xl">
                <input type="radio" className=" mr-[19px] appearance-none w-[23px] h-[23px] rounded-full border border-[#232323] checked:border-[#232323]" value="once_a_week" name="non_formal_meetings"/>
                კვირაში ორჯერ
              </label>
              <label className="flex items-center h-[40px] text-xl">
                <input type="radio" className=" mr-[19px] appearance-none w-[23px] h-[23px] rounded-full border border-[#232323] checked:border-[#232323]" value="twice_a_week" name="non_formal_meetings"/>
                კვირაში ერთხელ
              </label>
              <label className="flex items-center h-[40px] text-xl">
                <input type="radio" className=" mr-[19px] appearance-none w-[23px] h-[23px] rounded-full border border-[#232323] checked:border-[#232323]" value="bi_weekly" name="non_formal_meetings"/>
                ორ კვირაში ერთხელ
              </label>
              <label className="flex items-center h-[40px] text-xl">
                <input type="radio" className=" mr-[19px] appearance-none w-[23px] h-[23px] rounded-full border border-[#232323] checked:border-[#232323]" value="once_a_month" name="non_formal_meetings"/>
                თვეში ერთხელ
              </label>
          </div>
          <label className="font-bold text-[22px] mt-[43px]">კვირაში რამდენი დღე ისურვებდი ოფისიდან მუშაობას?*</label>
          <div className="flex flex-col justify-center pl-6">
              <label className="flex items-center h-[40px] text-xl">
                <input type="radio" className=" mr-[19px] appearance-none w-[23px] h-[23px] rounded-full border border-[#232323] checked:border-[#232323]" value={0} name="number_of_days_from_office"/>
                0
              </label>
              <label className="flex items-center h-[40px] text-xl">
                <input type="radio" className=" mr-[19px] appearance-none w-[23px] h-[23px] rounded-full border border-[#232323] checked:border-[#232323]" value={1} name="number_of_days_from_office"/>
                1
              </label>
              <label className="flex items-center h-[40px] text-xl">
                <input type="radio" className=" mr-[19px] appearance-none w-[23px] h-[23px] rounded-full border border-[#232323] checked:border-[#232323]" value={2} name="number_of_days_from_office"/>
                2
              </label>
              <label className="flex items-center h-[40px] text-xl">
                <input type="radio" className=" mr-[19px] appearance-none w-[23px] h-[23px] rounded-full border border-[#232323] checked:border-[#232323]" value={3} name="number_of_days_from_office"/>
                3
              </label>
              <label className="flex items-center h-[40px] text-xl">
                <input type="radio" className=" mr-[19px] appearance-none w-[23px] h-[23px] rounded-full border border-[#232323] checked:border-[#232323]" value={4} name="number_of_days_from_office"/>
                4
              </label>
              <label className="flex items-center h-[40px] text-xl">
                <input type="radio" className=" mr-[19px] appearance-none w-[23px] h-[23px] rounded-full border border-[#232323] checked:border-[#232323]" value={5} name="number_of_days_from_office"/>
                5
              </label>
          </div>
          <label className="font-bold text-[22px] mt-[51px]">რას ფიქრობ ფიზიკურ შეკრებებზე?</label>
          <input type="text" className="border border-gray-700 bg-transparent h-[184px] mt-[20px]"/>
          <label className="font-bold text-[22px] mt-[47px]">რას ფიქრობ არსებულ გარემოზე:<br/>რა მოგწონს, რას დაამატებდი, რას შეცვლიდი?</label>
          <input type="text" className="border border-gray-700 bg-transparent h-[184px] mt-[20px]"/>
          </div>

          <div className="flex justify-end mt-[54px] mb-[90px]">
            <button className={canAdvance? "bg-[#208298] h-[56px] w-[180px] rounded-full text-white font-bold text-xl flex justify-center items-center" : "bg-[#999] h-[56px] w-[180px] rounded-full text-white font-bold text-xl flex justify-center items-center"} type="submit">
                დასრულება
            </button>
          </div>
        </div>
        <img className="mt-[71px] max-w-[703px] max-h-[703px]" src={OfficeImage} alt="" />
        </div>
      <div className="flex items-center justify-center mb-[103.37px]">
        <button onClick={()=>{navigate("/vaccine")}} className="mr-[117px]">
          <img src={ArrowLeft} alt="" />
        </button>
      </div>
    </form>
  );
};

export default Office;
