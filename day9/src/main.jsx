import { createRoot } from 'react-dom/client'
import './App.css'
import App from './App.jsx'
import {ToastContainer} from 'react-toastify'
import Wrapper from './Wrapper.jsx'
createRoot(document.getElementById('root')).render(<Wrapper App ={<App />} ToastContainer = {<ToastContainer/>} />)
 // <>
  //   <App />
  //   <ToastContainer/>
  // </>,
