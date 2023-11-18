import background_img from "./assets/windows.png";

function Widget() {
  return (
    <div
      style={{
        backgroundImage: `url(${background_img})`,
        height: "100vh",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      aaa
    </div>
  );
}

export default Widget;
