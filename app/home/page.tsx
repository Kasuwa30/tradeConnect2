import LandingPageLayout from "../../components/layout/LandingPageLayout";
import Header from "../components/header/header";
import Banner from "../components/banner/banner";
import Product from "../components/products/product";
import Feature from "../components/features/feature";
import Footer from "../components/footer/footer";
function Page() {
  return (
    <LandingPageLayout>
      <Header />
      <Banner />
      <Product />
      <Feature />
      <Footer />
    </LandingPageLayout>
  );
}

export default Page;
