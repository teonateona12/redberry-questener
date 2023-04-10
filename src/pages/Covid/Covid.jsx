import React, { useState } from "react";
import temperature from "../../assets/temperature.png";
import FormHeader from "../../components/FormHeader";

const Covid = () => {
  const [covidStatus, setCovidStatus] = useState("");

  const handleCovidStatusChange = (event) => {
    setCovidStatus(event.target.value);
    // handle form submission
  };

  return (
    <div className="w-full h-full flex flex-col px-[200px] bg-[#EAEAEA;]">
      <FormHeader partition={2} />
      <div className="formWrapper">
        <form className="mt-[42px] flex flex-col gap-[18px]">
          <label className="font-bold text-[24px] leading-6 text-[#232323]">
            გაქვს გადატანილი Covid-19?*
          </label>

          <div className="flex items-center ml-[19px]">
            <input
              type="radio"
              name="covidStatus"
              id="covid-yes"
              value="yes"
              checked={covidStatus === "yes"}
              onChange={handleCovidStatusChange}
              className="appearance-none w-[23px] h-[23px] rounded-full border border-[#232323]  checked:border-[#232323]"
            />
            <label
              htmlFor="covid-yes"
              className="ml-[19px] font-[400] text-[20px] text-[#000000]"
            >
              კი
            </label>
          </div>

          <div className="flex items-center ml-[19px]">
            <input
              type="radio"
              name="covidStatus"
              id="covid-no"
              value="no"
              checked={covidStatus === "no"}
              onChange={handleCovidStatusChange}
              className="appearance-none w-[23px] h-[23px] rounded-full border border-[#232323]  checked:border-[#232323]"
            />
            <label
              htmlFor="covid-no"
              className="ml-[19px] font-[400] text-[20px] text-[#000000]"
            >
              არა
            </label>
          </div>

          <div className="flex items-center ml-[19px]">
            <input
              type="radio"
              name="covidStatus"
              id="covid-currently"
              value="currently"
              checked={covidStatus === "currently"}
              onChange={handleCovidStatusChange}
              className="appearance-none w-[23px] h-[23px] rounded-full border border-[#232323]  checked:border-[#232323]"
            />
            <label
              htmlFor="covid-currently"
              className="ml-[19px] font-[400] text-[20px] text-[#000000]"
            >
              ახლა მაქვს
            </label>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Covid;
