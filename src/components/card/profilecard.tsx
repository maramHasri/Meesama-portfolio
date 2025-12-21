import React from "react";
import "./profilecard.css";
import avatar from "../../assets/image/avatar.png";

const ProfileCard = () => {
  return (
    <div className="card">
      <div className="card-header">
        <img src={avatar} alt="Avatar" className="avatar" />
        <div className="card-info">
          <h2>مرام حصري <span className="verified">✔️</span></h2>
          <p>رسامة و مصممة UI\UX بالمقام الأول</p>
        </div>
      </div>
      <hr />
      <p className="card-description">
        أصمم واجهات التطبيقات و المواقع باستخدام فيغما
        <br />
        رسامة ديجيتال ...<a href="#">قراءة المزيد</a>
      </p>
    </div>
  );
};

export default ProfileCard;
