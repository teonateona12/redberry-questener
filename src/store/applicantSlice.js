import { createSlice } from "@reduxjs/toolkit";

const applicant = {
    first_name: '',
    last_name: '',
    email: '',
    had_covid: '',
    had_antibody_test: null,
    antibodies: {
      test_date: '',
      number: 0,
    },
    had_vaccine: null,
    vaccination_stage: '',
    non_formal_meetings: '',
    number_of_days_from_office: null,
    what_about_meetings_in_live: '',
    tell_us_your_opinion_about_us: '',
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