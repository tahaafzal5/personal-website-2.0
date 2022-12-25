import React from "react";
import Memoji from "../Assets/Images/memoji.png";
import "./ProfileOverview.css";

function ProfileOverview() {
    return (
        <section className="profile-overview">
            <div>
                <img class="memoji" src={Memoji} alt="Taha's Memoji, in a circular frame, with shadow underneath as profile picture."></img>
            </div>
            <div class="name-title">
                <p class="name">Taha Afzal</p>
                <p class="title">Software Engineer</p>
            </div>
        </section>
    );
}

export default ProfileOverview;