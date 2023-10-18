import SignInPage from "./pages/SignIn";
import SignUpPage from "./pages/SignUp";
import TopicPage from "./pages/Topic"
import { Routes, Route } from 'react-router-dom';

function App() {

  return (
    <div id="App">
      <Routes>
        <Route path="/" element={<TopicPage />} />
        <Route path="/signin" element={<SignInPage />} />
        <Route path="/signup" element={<SignUpPage />} />
      </Routes>
    </div>
  )
}

export default App