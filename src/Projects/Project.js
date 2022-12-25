import React from "react";

function Project(props) {
    let project = props.project;
    let role = props.role;
    let date = props.date;
    let description = props.description;

    return (
        <div className="personal-project">
            <div className="project-role">
                <div className="project">{project}</div>
                <div className="role">{role}</div>
            </div>
            <div className="date">{date}</div>
            <div className="description">
                <ul className="description-points">
                    {description.map((point) => (
                        <li>{point}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default Project;