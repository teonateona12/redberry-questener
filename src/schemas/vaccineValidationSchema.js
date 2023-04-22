import * as yup from 'yup';

const vaccineSchema = yup.object().shape({
    had_vaccine: yup.string().required("ამ ველის შევსება აუცილებელია").oneOf(["true", "false"], 'გთხოვთ აირჩიოთ კი ან არა'),
    vaccination_stage: yup.string().when("had_vaccine",{is:'true', then: (vaccineSchema)=> vaccineSchema.oneOf(["first_dosage_and_not_registered_yet", "fully_vaccinated", "first_dosage_and_registered_on_the_second"], 'გთხოვთ აირჩიოთ').required("ამ ველის შევსება აუცილებელია"), otherwise: (vaccineSchema)=> vaccineSchema.notRequired()}),
    i_am_waiting: yup.string().when("had_vaccine",{is:'false', then: (vaccineSchema)=> vaccineSchema.oneOf(["had_covid_and_planning_to_be_vaccinated", "not_planning", "registered_and_waiting"], 'გთხოვთ აირჩიოთ').required("ამ ველის შევსება აუცილებელია"), otherwise: (vaccineSchema)=> vaccineSchema.notRequired()})
});

export default vaccineSchema;
