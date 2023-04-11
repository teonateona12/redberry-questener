import { Persons } from "../../assets";
import FormHeader from "../../components/FormHeader";
import { ArrowRight } from "../../assets";

const Personal = () => {
  return (
    <div className="pl-[200px] pr-[165px] w-full h-full ">
      <FormHeader partition={1} />

      <div className="flex  items-start ">
        <div className="">
          <div className="mt-[42px]">
            <h1>სახელი</h1>
            <input
              className="mt-[1px] border-2 border-[#232323]   "
              type="text"
            />
          </div>
          <div className="mt-[47px]">
            <h2>გვარი*</h2>
            <input className="mt-[1px] border-2 border-[#232323]" type="text" />
          </div>
          <div className="mt-[47px]">
            <h3>მეილი*</h3>
            <input className="mt-[1px] border-2 border-[#232323]" type="text" />
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

      <div className="flex justify-center items-center  ">
        <img src={ArrowRight} alt="" />
      </div>
    </div>
  );
};

export default Personal;
