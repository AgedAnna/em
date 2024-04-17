interface HomeProps {
  cards: React.ReactNode;
}

const Home: React.FC<HomeProps> = ({ cards }) => {
  return (
    <div>
      <h1>Home</h1>
      <div>{cards}</div>
    </div>
  );
};

export default Home;
