import Signup from "./components/Signup";
import Profile from "./components/profile";
import Profile2 from "./components/profile2";
import Email from "./components/email";
import { library } from '@fortawesome/fontawesome-svg-core';
import {fas} from '@fortawesome/free-solid-svg-icons';
import {fab} from '@fortawesome/free-brands-svg-icons';
import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Signup/>} />
        <Route exact path="/profile/:username" element={<Profile/>} />
        <Route exact path="/extrainfo/:username" element={<Profile2/>} />
        <Route exact path="/email/:username" element={<Email/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
library.add(fab,fas);