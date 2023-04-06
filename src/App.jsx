import { Route, Routes} from 'react-router-dom'
import {Covid, Office, Personal, Start, Thanks, Vaccine } from './pages'
import { useDispatch, useSelector } from 'react-redux'
import { updateData } from './store/applicantSlice'


function App() {
  const dispach = useDispatch()
  const applicant = useSelector((store) => store.applicant) 
  
  return (
    <>
      <Routes>
        <Route path='/' element={<Start/>}/>
        <Route path='/covid' element={<Covid/>}/>
        <Route path='/office' element={<Office/>}/>
        <Route path='/personal' element={<Personal/>}/>
        <Route path='/thanks' element={<Thanks/>}/>
        <Route path='/vaccine' element={<Vaccine/>}/>
      </Routes>
    </>
  )
}

export default App;
