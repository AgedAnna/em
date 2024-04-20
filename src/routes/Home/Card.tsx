import React from "react";
import { Card, Tooltip } from "antd";
import img from "../../public/imgs/IMG_3308.jpg";
import img1 from "../../public/imgs/IMG_3309.jpg";
import img2 from "../../public/imgs/IMG_5139.jpg";
import img3 from "../../public/imgs/IMG_5156.jpg";
import img4 from "../../public/imgs/IMG_5301.jpg";
import ButtonSale from "../../components/Buttons/ButtonSale";
import style from "./Home.module.css";

const { Meta } = Card;

const items = [
  {
    img: img,
    title: "Torta Morango Massa Branca",
    description: "Bolo Vulcão Morango",
    price: "R$ 180,00",
  },
  {
    img: img1,
    title: "Bolo Vulcão Morango",
    description: "Bolo Vulcão Morango",
    price: "R$ 100,00",
  },
  {
    img: img2,
    title: "Torta Morango Massa Preta",
    description: "Bolo Vulcão Morango",
    price: "R$ 100,00",
  },
  {
    img: img3,
    title: "Torta Morango Massa Branca",
    description: "Bolo Vulcão Morango",
    price: "R$ 100,00",
  },
  {
    img: img4,
    title: "Torta Morango Massa Branca",
    description: "Bolo Vulcão Morango",
    price: "R$ 100,00",
  },
  {
    img: img4,
    title: "Bolo Vulcão Morango",
    description: "Bolo Vulcão Morango",
    price: "R$ 100,00",
  },
  {
    img: img4,
    title: "Bolo Vulcão Morango",
    description: "Bolo Vulcão Morango",
    price: "R$ 100,00",
  },
  {
    img: img4,
    title: "Bolo Vulcão Morango",
    description: "Bolo Vulcão Morango",
    price: "R$ 100,00",
  },
  {
    img: img4,
    title: "Bolo Vulcão Morango",
    description: "Bolo Vulcão Morango",
    price: "R$ 100,00",
  },
  {
    img: img4,
    title: "Bolo Vulcão Morango",
    description: "Bolo Vulcão Morango",
    price: "R$ 100,00",
  },
  {
    img: img4,
    title: "Bolo Vulcão Morango",
    description: "Bolo Vulcão Morango",
    price: "R$ 100,00",
  },
  {
    img: img4,
    title: "Bolo Vulcão Morango",
    description: "Bolo Vulcão Morango",
    price: "R$ 100,00",
  },
];

const CardCakes: React.FC = () => (
  <div className={style.cardsDiv}>
    {items.map((item, index) => (
      <Card
        className={style.cards}
        key={index}
        hoverable
        cover={<img alt={item.description} src={item.img} />}
      >
        <div style={{ marginBottom: "10px" }}>
          <ButtonSale onClick={() => {}} />
        </div>
        <Tooltip title={item.title} color={"#d5834a"}>
          <Meta title={item.title} description={item.price}></Meta>
        </Tooltip>
      </Card>
    ))}
  </div>
);

export default CardCakes;
