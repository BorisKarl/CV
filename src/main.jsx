import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { GeneralInfo } from './components/General.jsx'
import { EducationalInfo } from "./components/Educational.jsx";
import { PracticalInfo } from "./components/Practical.jsx";
import { PrintButton } from "./components/Button.jsx";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GeneralInfo />
    <EducationalInfo />
    <PracticalInfo />
    <PrintButton />

  </React.StrictMode>,
)
