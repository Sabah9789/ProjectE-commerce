import { useEffect, useState } from "react";

export default function Slider() {
  const [index, setIndex] = useState(0);

  const slides = [
    "picture/88aac0_4a4e3971153947d1ad93f1c5a678f49e~mv2.png",
    "picture/88aac0_7e2e8b95d4f64392803cbad2797d760a~mv2.png",
    "picture/88aac0_e5a369c1b280451099dc18ff03b413a0~mv2.png"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      {slides.map((img, i) => (
        <img
          key={i}
          src={img}
          style={{
            display: i === index ? "block" : "none",
                width: "100%",
                height: "400px",
                objectFit: "contain",
                objectFit:"cover",
                borderRadius: "20px"

          }}
        />
      ))}

      <div style={{ textAlign: "center", marginTop: "10px" }}>
        {slides.map((_, i) => (
          <span
            key={i}
            style={{
              height: "10px",
              width: "10px",
              margin: "5px",
              display: "inline-block",
              borderRadius: "50%",
              background: i === index ? "black" : "gray"
            }}
          ></span>
        ))}
      </div>
    </div>
  );
}