import Video from "../../dist/video.mp4";

const style = {
  position: "absolute",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  width: "100%",
  height: "100%",
};

const VideoFrame = () => {
  return (
    <video style={style} autoPlay controls width={"100%"}>
      <source src={Video} type="video/mp4" />
    </video>
  );
};

export default VideoFrame;
