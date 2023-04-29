import { Persons } from "../../assets";
import FormHeader from "../../components/FormHeader";
import { ArrowRight } from "../../assets";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useEffect } from "react";
import axios from "axios";

const Personal = () => {
  const navigate = useNavigate();

  const PersonalSchema = yup.object().shape({
    name: yup
      .string()
      .required("სახელის ველის შევსება სავალდებულოა")
      .min(2, "სახელის ველი უნდა შედგებოდეს მინიმუმ 3 სიმბოლოსგან")
      .max(255, "სახელის ველი უნდა შედგებოდეს მაქსიმუმ 255 სიმბოლოსგან"),
    email: yup
      .string()
      .email("თქვენ მიერ შეყვანილი მეილი არასწორია")
      .required("მეილის ველის შევსება სავალდებულოა")
      .matches(
        /@redberry\.ge$/,
        "გთხოვთ დარეგისტრირდეთ Redberry-ს მეილით (youremail@redberry.ge)"
      ),
    surname: yup
      .string()
      .required("გვარის ველის შევსება სავალდებულოა")
      .min(2, "გვარის ველი უნდა შედგებოდეს მინიმუმ 3 სიმბოლოსგან")
      .max(255, "გვარის ველი უნდა შედგებოდეს მაქსიმუმ 255 სიმბოლოსგან"),
  });

  const {
    register,
    handleSubmit,
    setValue,
    getValues,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(PersonalSchema),
  });

  const onSubmit = async (data) => {
    navigate("/Covid");
  };
  const saveFormDataToLocalStorage = (formData) => {
    localStorage.setItem("formData", JSON.stringify(formData));
  };

  useEffect(() => {
    const formData = JSON.parse(localStorage.getItem("formData"));

    if (formData) {
      Object.keys(formData).forEach((key) => {
        setValue(key, formData[key]);
      });
    }
  }, []);

  return (
    <div className="pl-[200px] pr-[165px] w-full h-full ">
      <FormHeader partition={1} />

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex  items-start ">
          <div className="">
            <div className="mt-10">
              <h1>სახელი</h1>
              <input
                className="mt-px border-2 border-[#232323]   "
                type="text"
                {...register("name")}
                onChange={(e) =>
                  saveFormDataToLocalStorage({ ...getValues(), name: e.target.value })}
              />
              <p className="text-red-500">{errors.name?.message}</p>
            </div>
            <div className="mt-12">
              <h2>გვარი*</h2>
              <input
                className="mt-px border-2 border-[#232323]"
                type="text"
                {...register("surname")}
                onChange={(e) =>
                  saveFormDataToLocalStorage({ ...getValues(), surname: e.target.value })}
                  
              />
              <p className="text-red-500">{errors.surname?.message}</p>
            </div>
            <div className="mt-12">
              <h3>მეილი*</h3>
              <input
                className="mt-px border-2 border-[#232323]"
                type="email"
                {...register("email")}
                onChange={(e) =>
                  saveFormDataToLocalStorage({ ...getValues(), email: e.target.value })}
              />
              <p className="text-red-500">{errors.email?.message}</p>
            </div>
            <hr className=" mt-28" />
            <div className="">
              <h4>*_ით მონიშნული ველების შევსება სავალდებულოა</h4>
            </div>
          </div>

          <div>
            <img className="ml-[138px]  mt-[-50px]" src={Persons} alt="" />
          </div>
        </div>
        <div className="flex justify-center items-center">
          <button type="submit" className=" m-auto">
          <img src={ArrowRight} alt="" />
        </button>
        </div>
        
      </form>
    </div>
  );
};

export default Personal;
