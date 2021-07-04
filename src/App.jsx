// import logo from './logo.svg';
// import React, { useState } from "react";
import "./App.css";
import "./css/main.css";
import "./css/contact.css";
import "./css/pixels.css";
import "./css/phone.css";
import "./css/responsive.css";
import Header from "./components/header/header";
import HeroPage from "./components/heroPage/heroPage";
import Backend from "./components/backend/backend";
import Frontend from "./components/frontend/frontend";
import Responsive from "./components/responsive/responsive";
// import Proyects from "./components/proyects/proyects";
import AboutMe from "./components/aboutMe/aboutMe";
import Contact from "./components/contact/contact";

const App = () => {

    return (
        <>
            <Header />
            <HeroPage />
            <Backend />
            <Frontend />
            <Responsive />
            {/* <Proyects /> */}
            <AboutMe />
            <Contact />
        </>
    );
};

export default App;
