import React from "react";

function WorkExperience(props) {
    let position = props.position;
    let company = props.company;
    let date = props.date;
    let description = props.description;

    return (
        <div className="work-experience">
            <div className="position-company">
                <div className="position">{position}</div>
                <div className="company">{company}</div>
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

export default WorkExperience;
