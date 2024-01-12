import React from 'react'
import ReactDOM from 'react-dom/client'
import { MainPage } from './components/MainPage'
import { SecondPage } from './components/SecondPage'
import { ThirdPage } from './components/ThirdPage'
import { Footer } from './components/Footer'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <MainPage />
    <SecondPage />
    <ThirdPage />
    <Footer />
  </React.StrictMode>,
)
