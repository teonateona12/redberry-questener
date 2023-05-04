import { createSlice } from "@reduxjs/toolkit";

const applicant = {
    first_name: '',
    last_name: '',
    email: '',
    had_covid: '',
    had_antibody_test: '',
    covid_sickness_date: '',
    antibodies: {
        test_date: "",
        number: 0,
    },
    had_vaccine: null,
    vaccination_stage: '',
    i_am_waiting:'',
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
        },
        updateLocal: (state, action) => {
            return { ...state, ...action.payload };
        },
        revertToOriginal:(state, action) => {
            //state = applicant
            return { ...state, ...applicant };
        },
    }
})

export const {updateData, updateLocal, revertToOriginal} = applicantSlice.actions
export default applicantSlice.reducer