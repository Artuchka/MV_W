// import React from 'react'
import {useState} from "react";
import CounterMVI from "./counters/CounterMVI.tsx";
import CounterMVC from "./counters/CounterMVC.tsx";
import CounterMVP from "./counters/CounterMVP.tsx";
import CounterMVVM from "./counters/CounterMVVM.tsx";
import {TheoryMVI} from "./theory/TheoryMVI.tsx";
import "./App.scss"
import {TheoryMVС} from "./theory/TheoryMVС.tsx";
import {TheoryMVP} from "./theory/TheoryMVP.tsx";
import {TheoryMVVM} from "./theory/TheoryMVVM.tsx";

enum NavPage {
  MVI = "MVI",
  MVP = "MVP",
  MVC = "MVC",
  MVVM = "MVVM",
}
function App() {

  const [nav, setNav] = useState(NavPage.MVI)

  return (
    <div className={"p-5 bg-light bg-dark-subtle flex-column items-center gap-4"} style={{minHeight: "100vh"}}>
      <div className="nav d-flex gap-3 justify-content-center ">
        <div className={"btn " + ((nav === NavPage.MVI) ? " btn-primary" : "btn-light")} onClick={() => setNav(NavPage.MVI)}>MVI</div>
        <div className={"btn " + ((nav === NavPage.MVC) ? " btn-primary" : "btn-light")} onClick={() => setNav(NavPage.MVC)}>MVC</div>
        <div className={"btn " + ((nav === NavPage.MVP) ? " btn-primary" : "btn-light")} onClick={() => setNav(NavPage.MVP)}>MVP</div>
        <div className={"btn " + ((nav === NavPage.MVVM) ? " btn-primary" : "btn-light")} onClick={() => setNav(NavPage.MVVM)}>MVVM</div>
      </div>

      {nav === NavPage.MVI && <div>
        <h3>MVI Counter</h3>
        <CounterMVI/>
        <TheoryMVI/>
      </div>}

      {nav === NavPage.MVC && <div>
          <h3>MVC Counter</h3>
          <CounterMVC/>
          <TheoryMVС/>
      </div>}
      {nav === NavPage.MVP && <div>
        <h3>MVP Counter</h3>
        <CounterMVP/>
        <TheoryMVP/>
      </div>}


      {nav === NavPage.MVVM && <div>
        <h3>MVVM Counter</h3>
        <CounterMVVM/>
        <TheoryMVVM/>
      </div>}
    </div>
  )
}

export default App
