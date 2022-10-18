/****************************** imports ********************************/
import Layout from "../components/Layout";
import ProductItem from "../components/ProductItem";
import data from "../utils/data";
/***************************** End of imports **************************/

/***************** Home - React functional Component *****************/
export default function Home() {
  /******************************* return *********************************/
  return (
    /****************************** Layout ********************************/
    <Layout title='Home Page'>
      {/****************************** div ********************************/}
      <div className='grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-4'>
        {/* map products */}
        {data.products.map((product) => (
          // render product by slug
          <ProductItem product={product} key={product.slug}></ProductItem>
        ))}
      </div>
      {/**************************** div end ******************************/}
    </Layout>
    /****************************** end of Layout *************************/
  );

  /****************************** End of return ***************************/
}
/*************** End of Home - React functional Component ************/
