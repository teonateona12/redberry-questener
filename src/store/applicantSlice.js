import { createSlice } from "@reduxjs/toolkit";

const applicant = {
    first_name: 'gela',
    last_name: 'babluani',
    email: 'gela@redberry.ge',
    had_covid: 'yes',
    had_antibody_test: true,
    antibodies: {
      test_date: '2022-04-30T13:34:31.347Z',
      number: 570,
    },
    had_vaccine: true,
    vaccination_stage: 'first_dosage_and_registered_on_the_second',
    non_formal_meetings: 'once_a_week',
    number_of_days_from_office: 3,
    what_about_meetings_in_live: 'I will enjoy very much',
    tell_us_your_opinion_about_us: "It's great to be here! Just... why do guys have Postman logo? 🤔",
};

const applicantSlice = createSlice({
    name: 'applicant',
    initialState: applicant,
    reducers: {
        updateData: (state, action) => {
            state[action.payload.property] = action.payload.value;
        }
    }
})

export const {updateData} = applicantSlice.actions
export default applicantSlice.reducer