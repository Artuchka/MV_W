// import React from 'react'
import './App.css'
import CounterMVI from "./counters/CounterMVI.tsx";
import CounterMVC from "./counters/CounterMVC.tsx";
import CounterMVP from "./counters/CounterMVP.tsx";
import CounterMVVM from "./counters/CounterMVVM.tsx";
import {useState} from "react";

enum NavPage {
  MVI = "MVI",
  MVP = "MVP",
  MVC = "MVC",
  MVVM = "MVVM",
}
function App() {

  const [nav, setNav] = useState(NavPage.MVI)

  return (
    <div className={"root"}>
      <div className="nav">
        <div className={"nav-item" + ((nav === NavPage.MVI) ? " active" : "")} onClick={() => setNav(NavPage.MVI)}>MVI</div>
        <div className={"nav-item" + ((nav === NavPage.MVP) ? " active" : "")} onClick={() => setNav(NavPage.MVP)}>MVP</div>
        <div className={"nav-item" + ((nav === NavPage.MVC) ? " active" : "")} onClick={() => setNav(NavPage.MVC)}>MVC</div>
        <div className={"nav-item" + ((nav === NavPage.MVVM) ? " active" : "")} onClick={() => setNav(NavPage.MVVM)}>MVVM</div>
      </div>

      {nav === NavPage.MVI && <div>
        <h3>MVI Counter</h3>
        <CounterMVI/>
      </div>}

      {nav === NavPage.MVP && <div>
        <h3>MVP Counter</h3>
        <CounterMVP/>
      </div>}

      {nav === NavPage.MVC && <div>
        <h3>MVC Counter</h3>
        <CounterMVC/>
      </div>}

      {nav === NavPage.MVVM && <div>
        <h3>MVVM Counter</h3>
        <CounterMVVM/>
      </div>}
    </div>
  )
}

export default App
