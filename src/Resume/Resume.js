import React from "react";
import ProfileOverview from "../ProfileOverview/ProfileOverview.js";
import WorkExperiences from "../WorkExperience/WorkExperiences.js";
import HorizontalDivider from "../HorizontalDivider/HorizontalDivider.js";
import "./Resume.css";

function Resume() {
    return (
        <section className="resume">
            <ProfileOverview />

            <WorkExperiences />

            <HorizontalDivider />
        </section>
    );
}

export default Resume;
