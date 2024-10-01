import Banner from "./components/banner/banner";
import Header from "./components/header/header";
import Product from "./components/products/product";
export default function Home() {
  return (
    <div>
      <Header />
      <Banner />
      <Product />
    </div>
  );
}
