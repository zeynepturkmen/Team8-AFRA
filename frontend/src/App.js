import "./App.css";
import { BrowserRouter as Router,Routes, Route, useNavigate, Outlet } from "react-router-dom";
import React from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Unauthorized from "./components/Unauthorized";
import BanScreen from "./components/Banned";
import OnlyAdmins from "./components/OnlyAdmins";
import RequireAuth from "./components/RequireAuth";
import RequireAdmin from "./components/RequireAdmin";

import LandingPage from "./screens/LandingPage/LandingPage";
import LoginScreen from "./screens/LoginScreen/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen/RegisterScreen";
import VerificationPage from "./screens/VerificationPage/VerificationPage";
import { useState,Suspense } from "react";
import ProfileScreen from "./screens/ProfileScreen/ProfileScreen";
import AdminPage from "./screens/AdminPage/AdminPage";
import AdminBan from "./screens/AdminPage/AdminBan";
import FixturePage from "./screens/FixturePage/FixturePage";
import CalendarPage from "./screens/CalendarPage/CalendarPage";
import StandingPage from "./screens/StandingPage/StandingPage";
import CreateComment from "./screens/CreateComment/CreateComment";
import MyComments from "./screens/MyComments/MyComments";
import SingleComment from "./screens/CreateComment/SingleComment";
import { gapi} from "gapi-script"
import RefereesScreen from "./screens/RefereesScreen/RefereesScreen";
import SingleReferee from "./screens/SingleReferee/SingleReferee";


function App() {
  const [search, setSearch] = useState("");
  gapi.load("client:auth2", () => {
    gapi.client.init({
      clientId:
        "*****.apps.googleusercontent.com",
      plugin_name: "chat",
    });
  });

  return (
    <Router>
      <Header setSearch={(s) => setSearch(s)} />
          <Routes>
            
              <Route path="/" element={<LandingPage/>}/>
              <Route path="login" element={<LoginScreen />} />
              <Route path="register" element={<RegisterScreen />}  />
              <Route path="unauthorized" element={<Unauthorized />}  />
              <Route path="onlyadmins" element={<OnlyAdmins />}  />
              <Route path="fixture" element={<FixturePage/>} />
              <Route path="standings" element={<StandingPage/>} />
              <Route path="banned" element={<BanScreen/>} />
              <Route path="/referees" element={<RefereesScreen/>} />
              <Route path="/referee/:refereeName" element={<SingleReferee/>} />

              <Route element={<RequireAuth />}>
                 <Route path="calendar" element={<CalendarPage/>} />
                 <Route path="profile" element={<ProfileScreen/>} />
                 <Route path="comment/:id" element={<SingleComment/>} />
                  <Route path="createcomment" element={<CreateComment/>} />
                  <Route path="mycomments" element= {<MyComments/>} />
                  <Route path="verification" element={<VerificationPage/>} />
              </Route>

              <Route element={<RequireAdmin />}>
                <Route path="adminpage" element={<AdminPage/>} />
                <Route path="adminban" element={<AdminBan/>} />
              </Route>
          </Routes>
          <Footer />306282eee262d4bbfbf425d67c4dc01399571ec4
    </Router>
  );
}

export default App;
