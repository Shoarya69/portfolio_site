import App from "./App";
import NotFound from "./not_found";
import { Routes, Route } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";

export default function Main_App(){
   return(
     <>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App/>} />
                <Route path="*" element={<NotFound/>}/>
            </Routes>
        </BrowserRouter>
    </>
   )
}