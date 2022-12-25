import React from "react";
import ProfileOverview from "../ProfileOverview/ProfileOverview.js";
import WorkExperiences from "../WorkExperience/WorkExperiences.js";
import HorizontalDivider from "../HorizontalDivider/HorizontalDivider.js";
import Educations from "../Education/Educations.js";
import HonorsAndAwards from "../HonorAndAward/HonorsAndAwards.js";
import Projects from "../Projects/Projects.js";
import "./Resume.css";

function Resume() {
    return (
        <section className="resume">
            <ProfileOverview />

            <WorkExperiences />

            <HorizontalDivider />

            <Educations />

            <HorizontalDivider />

            <HonorsAndAwards />

            <HorizontalDivider />

            <Projects />
        </section>
    );
}

export default Resume;
