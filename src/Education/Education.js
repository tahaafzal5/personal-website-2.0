import React from "react";

function Education(props) {
    let degree = props.degree;
    let institution = props.institution;
    let date = props.date;
    let gpa = props.gpa;

    return (
        <div className="education">
            <div className="degree-institution">
                <div className="degree">{degree}</div>
                <div className="institution">{institution}</div>
            </div>
            <div className="date">{date}</div>
            <div className="gpa">{gpa}</div>
        </div>
    );
}

export default Education;
