import React from "react";
import ProfileOverview from "../ProfileOverview/ProfileOverview.js";
import WorkExperiences from "../WorkExperience/WorkExperiences.js";
import "./Resume.css";

function Resume() {
    return (
        <section className="resume">
            <ProfileOverview />

            <WorkExperiences />

            <hr className="horizontal-divider" />
        </section>
    );
}

export default Resume;
