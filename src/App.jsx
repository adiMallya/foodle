import { Routes, Route } from "react-router-dom";
import Mockman from "mockman-js";

function App() {
  return (
    <>
      <h1>Twizzle - &quot;Create, Engage, Twizzle&quot;</h1>
      <Routes>
        <Route path="/mockman" element={<Mockman />} />
      </Routes>
    </>
  );
}

export default App;
