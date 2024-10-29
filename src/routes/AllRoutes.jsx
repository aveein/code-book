import {
  Route,
  Routes,

} from "react-router-dom";

import { Home, PageNotFound, ProductsList } from "../pages";




export const AllRoutes = () => {
  return (
    <>
       <Routes>
           <Route path="/" element={<Home />} /> 
           <Route path="/products" element={<ProductsList />} /> 
           <Route path="*" element={<PageNotFound />} /> 
      </Routes>
    </>
 
  )
}
