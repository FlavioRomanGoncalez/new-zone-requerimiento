import { useSpring, animated } from "@react-spring/web";

const Animation = () => {
  const springsLeft = useSpring({
    from: { x: "0%", y: 0 },
    to: { x: "50%", y: 50 },
    config: {
      duration: 1000,
    },
  });

  const springsRight = useSpring({
    from: { x: "0%", y: 0 },
    to: { x: "50%", y: -50 },
    config: {
      duration: 1500,
    },
  });

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <animated.div
        style={{
          transform: springsLeft.x.to(
            (x) => `translateX(${x}) translateY(${springsLeft.y}%)`
          ),
        }}
      >
        <p style={{ fontSize: "2rem", fontWeight: "bold" }}>Z</p>
      </animated.div>
      <animated.div
        style={{
          transform: springsRight.x.to(
            (x) => `translateX(${x}) translateY(${springsRight.y}%)`
          ),
        }}
      >
        <p style={{ fontSize: "2rem", fontWeight: "bold" }}>Z</p>
      </animated.div>
    </div>
  );
};

export default Animation;
