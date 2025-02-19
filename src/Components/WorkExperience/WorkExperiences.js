import React from "react";
import WorkExperience from "./WorkExperience.js";

function WorkExperiences() {
    return (
        <section className="work-experiences">
            <h1 className="heading">WORK EXPERIENCE</h1>

            <WorkExperience
                position="Software Engineer II"
                company="CNH"
                date="Dec 2024 - Present"
                description={[
                    "Spearheading the development of Viper 4+'s embedded system software in an Agile environment, utilizing Qt and C++.",
                    "Debugging multi-threaded software using gdb-multiarch, analyzing system logs, and documenting code with Doxygen.",
                    "Improving release cycles by 20% by implementing and maintaining CI/CD pipelines, automating build, test, and release workflows."
                ]}
            />

            <WorkExperience
                position="Software Engineer"
                company="CNH"
                date="May 2022 - Nov 2024"
                description={[
                    "Collaborated with the team to transition the Viper 4+ build system from qmake to CMake, reducing build times by 25%.",
                    "Implemented features to create field boundaries, ensuring efficient chemical usage and preventing accidental sprays in waterways.",
                    "Enhanced a file conversion library, expanding support to JSON, CSV, and XML formats, ensuring 100% error-free conversions.",
                    "Mentored an intern in implementing the Delta-T quality measurement system to assess spray effectiveness based on weather conditions."
                ]}
            />

            <WorkExperience
                position="Software Engineer Intern"
                company="Raven Industries, Inc."
                date="Sep 2021 - May 2022"
                description={[
                    "Implemented on-device creation of geospatial vector data format shapefiles for the multiline feature in Raven Operating Software.",
                    "Developed this highly-requested feature for the Field Computer product line using Qt and C++ in an Agile environment.",
                    "Improved the multiline feature to make it more user-friendly and easier to discover enabling farmers to save 60% of their time."
                ]}
            />

            <WorkExperience
                position="Software Engineer Intern"
                company="Raven Industries, Inc."
                date="May 2021 - Aug 2021"
                description={[
                    "Collaborated in an Agile team of 8 to implement single sign - on for all 4 customer-facing apps for a secure user-authorization process.",
                    "Undertook displaying telemetry and generating alerts with Grafana to monitor load and throughput of critical services more closely.",
                    "Streamlined infrastructure with Terraform, reduced moving parts, refactored code, and improved documentation."
                ]}
            />

            <WorkExperience
                position="Data Analyst Intern"
                company="Diamond Mowers"
                date="Aug 2020 - May 2021"
                description={[
                    "Utilized Tableau and R to visualize sales data to aid 3 top executives in making decisions about the company's performance.",
                    "Wrote analytical reports highlighting underperforming regions for all 3 product lines while identifying underlying performance issues.",
                    "Conducted 200+ hours of market research to determine users' key pain points as well as the company's competitive analysis."
                ]}
            />

            <WorkExperience
                position="Software Engineer Intern"
                company="Spidreye"
                date="Feb 2020 - Jun 2020"
                description={[
                    "Led an Agile team of 4 to design, develop, deploy, and test a property-review website that gained 75+ users in the first month after launch.",
                    "Implemented Google Maps API to support location autocompletion when a user is searching for properties for faster results.",
                    "Utilized Firebase Authentication for user profiles and sending automated welcome emails through Mailchimp."
                ]}
            />
        </section>
    );
}

export default WorkExperiences;
