import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { GeneralInfo } from './General.jsx'
import { EducationalInfo } from './Educational.jsx'
import { PracticalInfo } from './Practical.jsx'
import { PrintButton } from './Button.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GeneralInfo />
    <EducationalInfo />
    <PracticalInfo />
    <PrintButton />

  </React.StrictMode>,
)
