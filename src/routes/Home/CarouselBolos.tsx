import { Carousel } from "antd";
import React from "react";
import bolo from "../../public/imgs/IMG-20200511-WA0027.jpg";
import bolo1 from "../../public/imgs/IMG-20200511-WA0043.jpg";
import bolo2 from "../../public/imgs/IMG-20200511-WA0079.jpg";
import bolo3 from "../../public/imgs/IMG-20200511-WA0091.jpg";
import bolo4 from "../../public/imgs/IMG-20200511-WA0098.jpg";
import bolo5 from "../../public/imgs/IMG-20200511-WA0108.jpg";
import bolo6 from "../../public/imgs/IMG-20200511-WA0132.jpg";
import bolo7 from "../../public/imgs/IMG-20200511-WA0134.jpg";

const contentStyle: React.CSSProperties = {
  height: "100%",
  width: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  padding: "5px",
  borderRadius: "30px",

};

const CarouselCakes: React.FC = () => (
  <Carousel autoplay>
    <div style={{ alignItems: "center" }}>
      <img src={bolo} style={contentStyle} alt="Bolo Vulcão Morango" />
    </div>
    <div>
      <img src={bolo1} style={contentStyle} alt="Bolo Vulcão Morango" />
    </div>
    <div>
      <img src={bolo2} style={contentStyle} alt="Bolo Vulcão Morango" />
    </div>
    <div>
      <img src={bolo3} style={contentStyle} alt="Bolo Caseirinho Limão" />
    </div>
    <div>
      <img src={bolo4} style={contentStyle} alt="Bolo Vulcão Ninho" />
    </div>
    <div>
      <img src={bolo7} style={contentStyle} alt="Bolo Vulcão Ninho" />
    </div>
    <div>
      <img src={bolo5} style={contentStyle} alt="Bolo Caseirinho Brigadeiro" />
    </div>
    <div>
      <img src={bolo6} style={contentStyle} alt="Bolo Caseirinho Formigueiro" />
    </div>
  </Carousel>
);

export default CarouselCakes;
