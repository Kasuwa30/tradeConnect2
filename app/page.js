import Banner from "./components/banner/banner";
import Footer from "./components/footer/footer";
import Header from "./components/header/header";
import Product from "./components/products/product";
import Feature from "./components/features/feature";
export default function Home() {
  return (
    <div>
      <Header />
      <Banner />
      <Product />
      <Feature />
      <Footer />
    </div>
  );
}
