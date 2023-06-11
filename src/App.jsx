import { Routes, Route } from "react-router-dom";
import { GlobalStyles, theme } from "src/styles";
import Mockman from "mockman-js";
import { ThemeProvider } from "styled-components";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <h1>Twizzle - &quot;Create, Engage, Twizzle&quot;</h1>
      <Routes>
        <Route path="/mockman" element={<Mockman />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
