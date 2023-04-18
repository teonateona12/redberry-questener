import { React, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import temperature from "../../assets/temperature.png";
import FormHeader from "../../components/FormHeader";
import arrowleft from "../../assets/arrow-left.svg";
import arrowright from "../../assets/Vector 2.png";

const Covid = () => {
  const [covidStatus, setCovidStatus] = useState("");
  const [antibodyStatus, setAntibodyStatus] = useState("");
  const [date, setDate] = useState("");
  const navigate = useNavigate();

  const handleDateChange = (event) => {
    const inputDate = event.target.value;
    if (event.nativeEvent.inputType !== "deleteContentBackward") {
      const formattedDate = formatInputDate(inputDate);
      setDate(formattedDate);
    } else {
      setDate(inputDate);
    }
  };

  const formatInputDate = (inputDate) => {
    let formattedDate = inputDate
      .replace(/[^\d\b]/g, "")
      .slice(0, 8)
      .replace(/^(\d{2})/, "$1/")
      .replace(/^(\d{2}\/\d{2})/, "$1/")
      .replace(/^(\d{2}\/\d{2}\/\d{4}).*/, "$1");
    return formattedDate;
  };

  const schema = yup.object().shape({
    covidStatus: yup.string().required("გთხოვთ,აირჩიოთ პასუხი"),
    antibodyStatus: yup.string().required("გთხოვთ,აირჩიოთ პასუხი"),
    date: yup.string().min(10, "გთხოვთ,სრულად შეავსოთ თარიღი").required(),
  });

  const onSubmit = (data) => {
    console.log(data);
    navigate("/vaccine");
  };

  const {
    register,
    formState: { errors, isSubmitted },
    handleSubmit,
  } = useForm({
    resolver: yupResolver(schema),
  });

  {
    errors.antibodyStatus ? console.log(errors) : null;
  }

  console.log(antibodyStatus);
  return (
    <div className="w-full h-full flex flex-col px-[200px] bg-[#EAEAEA] ">
      <FormHeader partition={2} />

      <div className="flex justify-between">
        <div className="flex flex-col">
          <form className="mt-[42px] flex flex-col gap-[18px]">
            <label className="font-bold text-[22px] leading-6 text-[#232323]">
              გაქვს გადატანილი Covid-19?*
            </label>
            <div className="flex items-center ml-[19px]">
              <input
                {...register("covidStatus")}
                type="radio"
                name="covidStatus"
                id="covid-yes"
                value="yes"
                checked={covidStatus === "yes"}
                onChange={(event) => setCovidStatus(event.target.value)}
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
                {...register("covidStatus")}
                type="radio"
                name="covidStatus"
                id="covid-no"
                value="no"
                checked={covidStatus === "no"}
                onChange={(event) => setCovidStatus(event.target.value)}
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
                {...register("covidStatus")}
                type="radio"
                name="covidStatus"
                id="covid-currently"
                value="currently"
                checked={covidStatus === "currently"}
                onChange={(event) => setCovidStatus(event.target.value)}
                className="appearance-none w-[23px] h-[23px] rounded-full border border-[#232323]  checked:border-[#232323]"
              />
              <label
                htmlFor="covid-currently"
                className="ml-[19px] font-[400] text-[20px] text-[#000000]"
              >
                ახლა მაქვს
              </label>
            </div>

            {covidStatus ? null : (
              <>
                {errors.covidStatus && (
                  <p className="font-[400] text-[16px] text-[#F15524]">
                    {errors.covidStatus.message}
                  </p>
                )}
              </>
            )}

            {covidStatus === "yes" && (
              <div className="mt-[42px] flex flex-col gap-[18px]">
                <label className="font-bold text-[22px] leading-6 text-[#232323]">
                  ანტისხეულების ტესტი გაქვს გაკეთებული?*
                </label>

                <div className="flex items-center ml-[19px]">
                  <input
                    {...register("antibodyStatus")}
                    type="radio"
                    name="antibodyStatus"
                    id="antibody-yes"
                    value="yes"
                    checked={antibodyStatus === "yes"}
                    onChange={(event) => setAntibodyStatus(event.target.value)}
                    className="appearance-none w-[23px] h-[23px] rounded-full border border-[#232323]  checked:border-[#232323]"
                  />
                  <label
                    htmlFor="antibody-yes"
                    className="ml-[19px] font-[400] text-[20px] text-[#000000]"
                  >
                    კი
                  </label>
                </div>

                <div className="flex items-center ml-[19px]">
                  <input
                    {...register("antibodyStatus")}
                    type="radio"
                    name="antibodyStatus"
                    id="antibody-no"
                    value="no"
                    checked={antibodyStatus === "no"}
                    onChange={(event) => setAntibodyStatus(event.target.value)}
                    className="appearance-none w-[23px] h-[23px] rounded-full border border-[#232323]  checked:border-[#232323]"
                  />
                  <label
                    htmlFor="antibody-no"
                    className="ml-[19px] font-[400] text-[20px] text-[#000000]"
                  >
                    არა
                  </label>
                </div>

                {isSubmitted && !antibodyStatus && errors.antibodyStatus && (
                  <p className="font-[400] text-[16px] text-[#F15524]">
                    {errors.antibodyStatus.message}
                  </p>
                )}
              </div>
            )}

            {covidStatus === "yes" && antibodyStatus === "no" && (
              <div className="mt-[42px] flex flex-col gap-[18px]">
                <label className="font-bold text-[22px] leading-6 text-[#232323]">
                  მიუთითე მიახლოებითი პერიოდი (დღე/თვე/წელი) როდის გქონდა
                  Covid-19*
                </label>
                <input
                  {...register("date")}
                  type="text"
                  value={date}
                  onChange={handleDateChange}
                  placeholder="დდ/თთ/წწ"
                  className="border-[0.8px] border-[#232323] w-[513px] h-[50px] ml-[19px] bg-transparent mt-[11px] placeholder:text-[18px] placeholder:text-[#232323 px-[20px] py-[10px]"
                />
                {!date || errors.date ? (
                  <>
                    {errors.date && (
                      <p className="font-[400] text-[16px] text-[#F15524]">
                        {errors.date.message}
                      </p>
                    )}
                  </>
                ) : null}
              </div>
            )}

            {covidStatus === "yes" && antibodyStatus === "yes" && (
              <div className="mt-[42px] flex flex-col gap-[18px]">
                <label className="font-bold text-[22px] leading-6 text-[#232323]">
                  თუ გახსოვს, გთხოვ მიუთითე ტესტის მიახლოებითი რიცხვი და
                  ანტისხეულების რაოდენობა*
                </label>
                <input
                  type="number"
                  className="w-[488px] h-[50px] ml-[20px] bg-transparent border-[0.8px] border-[#232323] px-[20px] py-[10px] placeholder:text-[18px] placeholder:text-[#232323] [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                  placeholder="რიცხვი"
                />
                <input
                  type="number"
                  className="w-[488px] h-[50px] ml-[20px] bg-transparent border-[0.8px] border-[#232323] px-[20px] py-[10px] placeholder:text-[18px] placeholder:text-[#232323] [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                  placeholder="ანტისხეულების რაოდენობა"
                />
              </div>
            )}
          </form>
        </div>

        <img src={temperature} alt="man" />
      </div>

      <div className="flex gap-[117px] ml-auto mr-auto ">
        <img
          src={arrowleft}
          className="cursor-pointer"
          onClick={() => navigate("/personal")}
        />

        <img
          src={arrowright}
          className="cursor-pointer"
          onClick={handleSubmit(onSubmit)}
        />
      </div>
    </div>
  );
};

export default Covid;
