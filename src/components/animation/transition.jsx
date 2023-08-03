import "./styles.css";
import ICON from "../../../public/icon.png";
import IMAGE from "../../../public/bgLogo01.png";
import LOGO from "../../../public/logo01.png";

const Transition = () => {
  return (
    <div className="container_transition">
      {/* :::::ARROW ANIMATION::::: */}
      <div className="arrow"></div>
      <div className="container_icon">
        <img
          alt=""
          src={ICON}
          className="icon01"
          style={{ width: "50px", height: "50px" }}
        />
        <img
          alt=""
          src={ICON}
          className="icon02"
          style={{ width: "50px", height: "50px" }}
        />
        <img
          alt=""
          src={ICON}
          className="icon03"
          style={{ width: "50px", height: "50px" }}
        />
      </div>
      <div className="container_logo">
        <img
          alt=""
          src={LOGO}
          className="primary_logo"
          style={{ width: "200px" }}
        />
      </div>
      <div className="container_logo">
        <img
          src={IMAGE}
          className="logo_01"
          style={{
            top: 50,
            right: 50,
            width: "100px",
            height: "100px",
            position: "absolute",
          }}
        />
      </div>
      <div className="container_logo">
        <img
          src={IMAGE}
          className="logo_02"
          style={{
            lef: 0,
            bottom: 50,
            width: "100px",
            height: "100px",
            position: "absolute",
          }}
        />
      </div>
    </div>
  );
};

export default Transition;
