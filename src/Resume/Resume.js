import React from "react";
import Helmet from "react-helmet";
import LeftSide from "../LeftSide/LeftSide.js";
import RightSide from "../RightSide/RightSide.js";
import "./Resume.css";

function Resume() {
    return (
        <section className="resume">
            <Helmet>
                <title>Resume - Taha Afzal</title>
            </Helmet>

            <LeftSide />
            <RightSide />

        </section>
    );
}

export default Resume;
