import { Routes, Route } from "react-router-dom";
import { Home } from "../screens/home";
import { Details } from "../screens/details";


export function AppRoutes() {

    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/details/:id" element={<Details />} />
        </Routes>
    )
}