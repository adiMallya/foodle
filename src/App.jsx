import { Routes, Route } from "react-router-dom";
import Mockman from "mockman-js";
import { ThemeProvider } from "styled-components";
import { Toaster } from "react-hot-toast";

import { LoginForm, SignUpForm, PrivateRoute } from "src/features/auth";
import { PostDetail } from "src/features/posts";
import { Home, Saved, Explore } from "src/pages";
import { GlobalStyles, theme } from "src/styles";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Toaster position="top-center" reverseOrder={false} />
      <Routes>
        <Route element={<PrivateRoute />}>
          <Route path="/" element={<Home />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/saved" element={<Saved />} />
          <Route path="/post/:postId" element={<PostDetail />} />
        </Route>
        <Route path="/login" element={<LoginForm />} />
        <Route path="/signup" element={<SignUpForm />} />
        <Route path="/mockman" element={<Mockman />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
