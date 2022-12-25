import React from "react";
import ProfileOverview from "../ProfileOverview/ProfileOverview.js";
import WorkExperiences from "../WorkExperience/WorkExperiences.js";
import HorizontalDivider from "../HorizontalDivider/HorizontalDivider.js";
import Educations from "../Educations/Educations.js";
import "./Resume.css";

function Resume() {
    return (
        <section className="resume">
            <ProfileOverview />

            <WorkExperiences />

            <HorizontalDivider />

            <Educations />
        </section>
    );
}

export default Resume;
