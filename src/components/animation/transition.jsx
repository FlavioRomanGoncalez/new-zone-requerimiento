import "./styles.css";
import ICON from "../../../public/icon.png";
import { useSpring, animated } from "@react-spring/web";

const Transition = () => {
  const springArrow = useSpring({
    from: { x: "100%" },
    to: { x: "-100%" },
    config: {
      duration: 1000,
    },
  });

  const springIcon01 = useSpring({
    from: { x: "0%" },
    to: { x: "100%" },
    config: {
      duration: 1000,
    },
  });
  const springIcon02 = useSpring({
    from: { x: "0%" },
    to: { x: "50%" },
    config: {
      duration: 2000,
    },
  });
  const springIcon03 = useSpring({
    from: { x: "0%" },
    to: { x: "50%" },
    config: {
      duration: 3000,
    },
  });

  //   const springLogo = useSpring({
  //     from: { x: "0%" },
  //     to: { x: "50%" },
  //     config: {
  //       duration: 2000,
  //     },
  //   });

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
          src={ICON}
          className="logo"
          style={{ width: "50px", height: "50px" }}
        />
      </div>
      {/* :::::ICONS::::: */}
      {/* <div style={{ display: "flex", alignItems: "center", columnGap: "10px" }}>
        <animated.div style={{ ...springIcon01 }}>
          <img style={{ width: "50px", height: "50px" }} src={ICON} alt="" />
        </animated.div>
        <animated.div style={{ ...springIcon02 }}>
          <img style={{ width: "50px", height: "50px" }} src={ICON} alt="" />
        </animated.div>
        <animated.div style={{ ...springIcon03 }}>
          <img style={{ width: "50px", height: "50px" }} src={ICON} alt="" />
        </animated.div>
      </div> */}
      {/* {[1, 2, 3].map((value, index) => {
        return (
          <animated.div key={index} style={{ ...springIcon }}>
            <img style={{ width: "50px", height: "50px" }} src={ICON} alt="" />
          </animated.div>
        );
      })} */}
      {/* <animated.div style={{ ...springArrow }} className="arrow">
        <img style={{ width: "50px", height: "50px" }} src={ICON} alt="" />
      </animated.div> */}
    </div>
  );
};

export default Transition;
