import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import Courses from "./Courses";
import Enquire from "./Enquire";
import Enquiries from "./Enquiries";

const Main = () => {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/courses" element={<Courses />} />
                <Route path="/courses/enquire/:cid" element={<Enquire />} />
                <Route path="/enquiries" element={<Enquiries />} />
                <Route exact path="/" element={<Navigate to="/courses" replace />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Main;