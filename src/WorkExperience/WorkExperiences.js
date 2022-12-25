import React from "react";

function WorkExperiences(props) {
    return (
        <section className="work-experiences">
            <h1 className="h1">WORK EXPERIENCE</h1>

            <div className="work-experience">
                <div className="position-company">
                    <p className="position">Software Engineer,</p>
                    <p className="company">Raven Industries, Inc.</p>
                </div>

                <div className="date">
                    May 2022 - Present
                </div>

                <div className="description">
                    <ul className="description-points">
                        <li>
                            Spearheading development of the next-generation Raven Operating Software (ROS) in an
                            Agile team of 7 using Qt and C++.
                        </li>
                        <li>
                            Developing software in a 3-tier architecture (Client, Server, and Database) while
                            consistently following best practices.
                        </li>
                        <li>
                            Specifying, prototyping, developing, and testing applications built with
                            Model-View-Controller (MVC) architectural pattern.
                        </li>
                        <li>
                            Leading the enhancement of a file conversion library to create JSON and CSV files from a
                            proprietary file format.
                        </li>
                        <li>
                            Utilizing Google Test (gtest) to write unit tests ensuring my code meets the quality
                            standards.
                        </li>
                        <li>
                            Debugging ROS with gdb-multiarch, analyzing application and system logs, and documenting
                            code using Doxygen.
                        </li>
                    </ul>
                </div>
            </div>

            <div className="work-experience">
                <div className="position-company">
                    <p className="position">Software Engineer Intern,</p>
                    <p className="company">Raven Industries, Inc.</p>
                </div>

                <div className="date">
                    Sep 2021 - May 2022
                </div>

                <div className="description">
                    <ul className="description-points">
                        <li>
                            Developed a highly-requested feature for the Field Computer product line using Qt and
                            C++ in an Agile environment.
                        </li>
                        <li>
                            Implemented on-device creation of geospatial vector data format shapefiles for the
                            multiline feature in Raven Operating Software.
                        </li>
                        <li>
                            Improved the multiline feature to make it more user-friendly and easier to discover
                            enabling farmers to do the same tasks in 60% less time.
                        </li>
                    </ul>
                </div>
            </div>

            <div className="work-experience">
                <div className="position-company">
                    <p className="position">Software Engineer Intern,</p>
                    <p className="company">Raven Industries, Inc.</p>
                </div>

                <div className="date">
                    May 2021 - Aug 2021
                </div>

                <div className="description">
                    <ul className="description-points">
                        <li>
                            Collaborated in an Agile team of 8 to implement single sign-on for all 4 customer-facing
                            apps for a secure user-authorization process.
                        </li>
                        <li>
                            Undertook displaying telemetry and generating alerts with Grafana to monitor load and
                            throughput of critical services more closely.
                        </li>
                        <li>
                            Streamlined infrastructure with Terraform, reduced moving parts, refactored code,
                            restructured repositories and improved documentation.
                        </li>
                    </ul>
                </div>
            </div>

            <div className="work-experience">
                <div className="position-company">
                    <p className="position">Data Analyst Intern,</p>
                    <p className="company">Diamond Mowers</p>
                </div>

                <div className="date">
                    Aug 2020 - May 2021
                </div>

                <div className="description">
                    <ul className="description-points">
                        <li>
                            Utilized Tableau and R to visualize sales data to aid 3 top executives in making
                            decisions about the company's performance.
                        </li>
                        <li>
                            Wrote analytical reports highlighting underperforming regions for all 3 product lines
                            while identifying underlying performance issues.
                        </li>
                        <li>
                            Conducted 200+ hours of market research to determine users' key pain points as well as
                            the company's competitive analysis.
                        </li>
                    </ul>
                </div>
            </div>

            <div className="work-experience">
                <div className="position-company">
                    <p className="position">Software Engineer Intern,</p>
                    <p className="company">Spidreye</p>
                </div>

                <div className="date">
                    Feb 2020 - Jun 2020
                </div>

                <div className="description">
                    <ul className="description-points">
                        <li>
                            Led an Agile team of 4 to design, develop, deploy, and test a property-review website
                            that gained 75+ users in the first month after launch.
                        </li>
                        <li>
                            Implemented Google Maps API to support location autocompletion when a user is searching
                            for properties for faster results.
                        </li>
                        <li>
                            Utilized Firebase Authentication for user profiles and sending automated welcome emails
                            through Mailchimp.
                        </li>
                    </ul>
                </div>
            </div>
        </section >
    );
}

export default WorkExperiences;
