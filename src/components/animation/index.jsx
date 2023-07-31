import { useSpring, animated } from "@react-spring/web";

const Animation = () => {
  const springsLeft = useSpring({
    from: { x: "0%", y: 0 },
    to: { x: "150%", y: "50%" }, // Cambiamos la coordenada y a "50%" para que la letra suba
    config: {
      duration: 500,
    },
  });
  const springsRight = useSpring({
    from: { x: "0%", y: 0, rotate: "0deg" },
    to: { x: "50%", y: "-50%", rotate: "-90deg" }, // Cambiamos la coordenada y a "-50%" para que la letra baje
    config: {
      duration: 300,
    },
  });

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "absolute",
        top: 10,
        left: 0,
        right: 0,
      }}
    >
      <animated.div style={springsLeft}>
        <p style={{ color: "#62ea1b", fontSize: "3.8rem", fontWeight: "bold" }}>
          Z
        </p>
      </animated.div>
      <animated.div style={springsRight}>
        <p style={{ color: "#000000", fontSize: "3.8rem", fontWeight: "bold" }}>
          Z
        </p>
      </animated.div>
    </div>
  );
};

export default Animation;
