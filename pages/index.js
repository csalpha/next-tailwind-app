/****************************** imports ********************************/

import Layout from "../components/Layout";
import ProductItem from "../components/ProductItem";
import data from "../utils/data";

/***************************** End of imports **************************/

/***************** Home - React functional Component *****************/

export default function Home() {
  /******************************* return *********************************/

  return (
    <Layout title='Home Page'>
      {/* className="grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-4" */}
      <div className='grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-4'>
        {data.products.map((product) => (
          <ProductItem product={product} key={product.slug}></ProductItem>
        ))}
      </div>
    </Layout>
  );

  /****************************** End of return ***************************/
}

/*************** End of Home - React functional Component ************/
