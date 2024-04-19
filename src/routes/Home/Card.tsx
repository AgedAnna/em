import React from "react";
import { Card } from "antd";
import img from "../../public/imgs/IMG_3308.jpg";
import img1 from "../../public/imgs/IMG_3309.jpg";
import img2 from "../../public/imgs/IMG_5139.jpg";
import img3 from "../../public/imgs/IMG_5156.jpg";
import img4 from "../../public/imgs/IMG_5301.jpg";
import ButtonSale from "../../components/Buttons/ButtonSale";

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
  <div
    style={{
      display: "flex",
      flexWrap: "wrap",
      textAlign: "center",
      alignItems: "flex-start", // Alterado para flex-start para garantir que os itens não se sobreponham
      justifyContent: "center",
    }}
  >
    {items.map((item, index) => (
      <Card
        key={index}
        hoverable
        style={{
          width: 240,
          margin: "10px",
          flexDirection: "column",
          display: "flex",
          alignItems: "center",
          position: "relative",
        }}
        cover={<img alt={item.description} src={item.img} />}
      >
        <div style={{ alignSelf: "flex-start", marginBottom: "10px" }}>
          <ButtonSale onClick={() => {}} />
        </div>
        <Meta
          title={item.title}
          description={item.price}
          style={{ marginTop: "auto" }}
        />
      </Card>
    ))}
  </div>
);

export default CardCakes;
