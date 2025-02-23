import Banner from "../Shared/Banner/Banner";
import Product from "./Product/Product";

const Home = () => {
  return (
    <div>
      <div className="p-5">
        <Banner />
      </div>
      <div className=" p-5">
        <Product />
      </div>
    </div>
  );
};

export default Home;
