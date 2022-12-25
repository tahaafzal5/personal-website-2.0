import React from "react";

function LeadershipOrAffiliation(props) {
    const organization = props.organization;
    const role = props.role;
    const date = props.date;
    const description = props.description;

    return (
        <div className="leadership-or-affiliation">
            <div className="organization-role">
                <div className="organization">{organization}</div>
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

export default LeadershipOrAffiliation;
