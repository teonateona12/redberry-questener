import { Route, Routes } from "react-router-dom";
import { Covid, Office, Personal, Start, Thanks, Vaccine } from "./pages";

function App() {
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
