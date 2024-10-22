import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
  BrowserRouter,
  RouterProvider,
} from "react-router-dom";

import './index.css'

import  App  from './App'

createRoot(document.getElementById('root')).render(
  <StrictMode>
       {/* <RouterProvider router={router} /> */}
       <BrowserRouter>
            <App />
        </BrowserRouter>
  </StrictMode>,
)
