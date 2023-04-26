import { Route, Routes } from "react-router-dom";
import { Covid, Office, Personal, Start, Thanks, Vaccine } from "./pages";
import { useDispatch, useSelector } from 'react-redux'
import { updateLocal } from './store/applicantSlice'
import { useEffect } from 'react'

function App() {
  const dispatch = useDispatch()
  const applicant = useSelector((store) => store.applicant) 
  useEffect(() => {
    const localApplicant = JSON.parse(localStorage.getItem('localUser')) || applicant;;
    dispatch(updateLocal(localApplicant))
  }, []);
  return (
    <>
      <Routes>
        <Route path="/" element={<Start />} />
        <Route path="/covid" element={<Covid />} />
        <Route path="/office" element={<Office />} />
        <Route path="/personal" element={<Personal />} />
        <Route path="/thanks" element={<Thanks />} />
        <Route path="/vaccine" element={<Vaccine />} />
      </Routes>
    </>
  );
}

export default App;
