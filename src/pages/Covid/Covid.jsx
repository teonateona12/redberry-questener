import { React, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { useSelector, useDispatch } from "react-redux";
import { updateData } from "../../store/applicantSlice";
import { yupResolver } from "@hookform/resolvers/yup";
import temperature from "../../assets/temperature.png";
import FormHeader from "../../components/FormHeader";
import arrowleft from "../../assets/arrow-left.svg";
import arrowright from "../../assets/Vector 2.png";

const Covid = () => {
  const applicantForm = useSelector((store) => store.applicant);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const schema = yup.object().shape({
    covidStatus: yup.string().required("გთხოვთ,აირჩიოთ პასუხი"),
    antibodyStatus: yup.string().required("გთხოვთ,აირჩიოთ პასუხი"),
    date: yup.string().when("antibodyStatus", {
      is: "no",
      then: (schema) =>
        schema
          .min(10, "გთხოვთ, სრულად შეავსოთ თარი")
          .required("Please enter a date"),
      otherwise: (schema) => schema.notRequired(),
    }),
    antibodyTestDate: yup.string().when("antibodyStatus", {
      is: "yes",
      then: (schema) => schema.required("გთხოვთ, შეიყვანოთ რიცხვი"),
    }),
    antibodyCount: yup.string().when("antibodyStatus", {
      is: "yes",
      then: (schema) => schema.required("გთხოვთ, შეიყვანოთ რაოდენობა"),
    }),
  });

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    resolver: yupResolver(schema),
  });

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
                {...register("covidStatus", {
                  onChange: (e) =>
                    dispatch(
                      updateData({
                        property: "had_covid",
                        value: e.target.value,
                      })
                    ),
                })}
                type="radio"
                id="covid-yes"
                value="yes"
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
                {...register("covidStatus", {
                  onChange: (e) =>
                    dispatch(
                      updateData({
                        property: "had_covid",
                        value: e.target.value,
                      })
                    ),
                })}
                type="radio"
                id="covid-no"
                value="no"
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
                {...register("covidStatus", {
                  onChange: (e) =>
                    dispatch(
                      updateData({
                        property: "had_covid",
                        value: e.target.value,
                      })
                    ),
                })}
                type="radio"
                id="have_right_now"
                value="have_right_now"
                className="appearance-none w-[23px] h-[23px] rounded-full border border-[#232323]  checked:border-[#232323]"
              />
              <label
                htmlFor="have_right_now"
                className="ml-[19px] font-[400] text-[20px] text-[#000000]"
              >
                ახლა მაქვს
              </label>
            </div>

            {applicantForm.had_covid ? null : (
              <>
                {errors.covidStatus && (
                  <p className="font-[400] text-[16px] text-[#F15524]">
                    {errors.covidStatus.message}
                  </p>
                )}
              </>
            )}

            {applicantForm.had_covid === "yes" && (
              <div className="mt-[42px] flex flex-col gap-[18px]">
                <label className="font-bold text-[22px] leading-6 text-[#232323]">
                  ანტისხეულების ტესტი გაქვს გაკეთებული?*
                </label>

                <div className="flex items-center ml-[19px]">
                  <input
                    {...register("antibodyStatus", {
                      onChange: (e) =>
                        dispatch(
                          updateData({
                            property: "had_antibody_test",
                            value: e.target.value === "yes" ? true : false,
                          })
                        ),
                    })}
                    type="radio"
                    id="antibody-yes"
                    value="yes"
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
                    {...register("antibodyStatus", {
                      onChange: (e) => {
                        dispatch(
                          updateData({
                            property: "had_antibody_test",
                            value: e.target.value === "yes" ? true : false,
                          })
                        );
                      },
                    })}
                    type="radio"
                    id="antibody-no"
                    value="no"
                    className="appearance-none w-[23px] h-[23px] rounded-full border border-[#232323]  checked:border-[#232323]"
                  />
                  <label
                    htmlFor="antibody-no"
                    className="ml-[19px] font-[400] text-[20px] text-[#000000]"
                  >
                    არა
                  </label>
                </div>

                {!applicantForm.had_antibody_test && errors.antibodyStatus && (
                  <p className="font-[400] text-[16px] text-[#F15524]">
                    {errors.antibodyStatus.message}
                  </p>
                )}
              </div>
            )}

            {applicantForm.had_covid === "yes" &&
              applicantForm.had_antibody_test === false && (
                <div className="mt-[42px] flex flex-col gap-[18px]">
                  <label className="font-bold text-[22px] leading-6 text-[#232323]">
                    მიუთითე მიახლოებითი პერიოდი (დღე/თვე/წელი) როდის გქონდა
                    Covid-19*
                  </label>
                  <input
                    {...register("date", {
                      onChange: (e) => {
                        let date = new Date(e.target.value);
                        dispatch(
                          updateData({
                            property: "covid_sickness_date",
                            value: date.toISOString(),
                          })
                        );
                      },
                    })}
                    type="string"
                    onFocus={(e) => {
                      e.target.type = "date";
                    }}
                    value={applicantForm.covid_sickness_date.substr(0, 10)}
                    placeholder="დდ/თთ/წწ"
                    className="border-[0.8px] border-[#232323] w-[513px] h-[50px] ml-[19px] bg-transparent mt-[11px] placeholder:text-[18px] placeholder:text-[#232323 px-[20px] py-[10px]"
                  />

                  {!applicantForm.covid_sickness_date || errors.date ? (
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

            {applicantForm.had_covid === "yes" &&
              applicantForm.had_antibody_test === true && (
                <div className="mt-[42px] flex flex-col gap-[18px]">
                  <label className="font-bold text-[22px] leading-6 text-[#232323]">
                    თუ გახსოვს, გთხოვ მიუთითე ტესტის მიახლოებითი რიცხვი და
                    ანტისხეულების რაოდენობა*
                  </label>
                  <input
                    {...register("antibodyTestDate", {
                      onChange: (e) =>
                        dispatch(
                          updateData({
                            property: "antibodies",
                            value: {
                              ...applicantForm.antibodies,
                              test_date: e.target.value,
                            },
                          })
                        ),
                    })}
                    className="w-[488px] h-[50px] ml-[20px] bg-transparent border-[0.8px] border-[#232323] px-[20px] py-[10px] placeholder:text-[18px] placeholder:text-[#232323] [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                    placeholder="რიცხვი"
                  />
                  <input
                    {...register("antibodyCount", {
                      onChange: (e) =>
                        dispatch(
                          updateData({
                            property: "antibodies",
                            value: {
                              ...applicantForm.antibodies,
                              number: e.target.value,
                            },
                          })
                        ),
                    })}
                    type="number"
                    className="w-[488px] h-[50px] ml-[20px] bg-transparent border-[0.8px] border-[#232323] px-[20px] py-[10px] placeholder:text-[18px] placeholder:text-[#232323] [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                    placeholder="ანტისხეულების რაოდენობა"
                  />
                  {errors.antibodyTestDate || errors.antibodyCount ? (
                    <>
                      <p className="font-[400] text-[16px] text-[#F15524]">
                        გთხოვთ, სრულად შეავსოთ მოცემული ველი
                      </p>
                    </>
                  ) : null}
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
          onClick={handleSubmit(() => navigate("/vaccine"))}
        />
      </div>
    </div>
  );
};

export default Covid;
