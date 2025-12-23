import "./profilecard.css";
import avatar from "../../assets/image/avatar.png";

const ProfileCard = () => {
  return (
    <div className="card">
      <div className="card-header">
        <img src={avatar} alt="Avatar" className="avatar" />
        <div className="card-info">
          <h2>مرام حصري <span className="verified">✔️</span></h2>
          <p>رسامة في فخ غريب وقعت</p>
        </div>
      </div>
      <hr />
      <p className="card-description">
      طالبة هندسة معلوماتية، ورسّامة رقمية أؤمن بأن الجمال يولد حين يلتقي المنطق بالخيال.
        بيدي وأدواتي  أحوّل الأفكار إلى أعمال تعبّر عن إحساسي ورؤيتي، حيث يصبح الإبداع مساحة تجمع بين التقنية والفن.
        <br />
      </p>
    </div>
  );
};

export default ProfileCard;
