import * as yup from 'yup';

const vaccineSchema = yup.object().shape({
    had_vaccine: yup.string().required("ამ ველის შევსება აუცილებელია").oneOf(["true", "false"], 'გთხოვთ აირჩიოთ კი ან არა'),
    vaccination_stage: yup.string().required("ამ ველის შევსება აუცილებელია").oneOf(["already_had_it_and_not_planning", "not_planning", "registered_and_waiting", "first_dosage_and_not_registered_on_the_second", "fully_vaccinated", "first_dosage_and_registered_on_the_second"], 'გთხოვთ აირჩიოთ კი ან არა'),
});

export default vaccineSchema;