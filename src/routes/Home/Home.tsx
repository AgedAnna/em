import { Divider } from "antd";

interface HomeProps {
  cards: React.ReactNode;
  carousel: React.ReactNode;
}

const Home: React.FC<HomeProps> = ({ cards, carousel }) => {
  return (
    <div>
      <div>
        <div>{carousel}</div>
      </div>
      <Divider />
      <div>{cards}</div>
    </div>
  );
};

export default Home;
