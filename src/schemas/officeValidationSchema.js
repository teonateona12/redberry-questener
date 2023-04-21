import * as yup from 'yup';

const officeSchema = yup.object().shape({
    non_formal_meetings: yup.string().required("ამ ველის შევსება აუცილებელია").oneOf(["twice_a_week", "once_a_week", "once_in_a_two_weeks", "once_in_a_month"], 'გთხოვთ აირჩიოთ შესაბამისი ვარიანტი'),
    number_of_days_from_office: yup.number().nullable().typeError('გთხოვთ აირჩიოთ დღეების რაოდენობა').required('გთხოვთ აირჩიოთ დღეების რაოდენობა'),
    what_about_meetings_in_live: yup.string(),
    tell_us_your_opinion_about_us: yup.string()
});

export default officeSchema;