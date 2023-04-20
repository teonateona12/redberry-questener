import { Persons } from "../../assets";
import FormHeader from "../../components/FormHeader";
import { ArrowRight } from "../../assets";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import * as yup from 'yup'
import {yupResolver} from '@hookform/resolvers/yup'


const Personal = () => {
  const navigate = useNavigate();
  
  const schema = yup.object().shape({
    name: yup.string().required().min(2),
    email: yup.string().email().required().matches(/@redberry\.ge$/, 'Email must end with " @redberry.ge"'),
    surname: yup.string().required().min(2),
  })


    const {  register,handleSubmit, formState: { errors } } = useForm({
      resolver: yupResolver(schema),
    });
  
  const onSubmit = (data) => {
    console.log(data);
    navigate("/Covid")
  };

  return (
    <div className="pl-[200px] pr-[165px] w-full h-full ">
      <FormHeader partition={1} />

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex  items-start ">
          <div className="">
            <div className="mt-[42px]">
              <h1>სახელი</h1>
              <input
                className="mt-[1px] border-2 border-[#232323]   "
                type="text"
                {...register("name" )}
              />
            </div>
            <div className="mt-[47px]">
              <h2>გვარი*</h2>
              <input
                className="mt-[1px] border-2 border-[#232323]"
                type="text"
                {...register("surname")}
              />
            </div>
            <div className="mt-[47px]">
              <h3>მეილი*</h3>
              <input
                className="mt-[1px] border-2 border-[#232323]"
                type="email"
                {...register("email")}

              />
            </div>
            <hr className=" mt-[111px]" />
            <div className="">
              <h4>*_ით მონიშნული ველების შევსება სავალდებულოა</h4>
            </div>
          </div>

          <div>
            <img className="ml-[138px]  mt-[-50px]" src={Persons} alt="" />
          </div>
        </div>
        <button  type="submit"  className="flex justify-center items-center  ">
        <img   src={ArrowRight} alt="" />
      </button>
      </form>

      
    </div>
  );
};

export default Personal;
