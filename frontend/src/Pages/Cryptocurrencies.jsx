import Layout from "../components/Layout/Layout";
import CoinList from "../components/CoinList";

const Cryptocurrencies = () => {
  
  return (
    <Layout>
      <CoinList amount={100}/>
    </Layout>
  );
};

export default Cryptocurrencies;
