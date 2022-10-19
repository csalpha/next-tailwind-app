/****************************** imports ********************************/
import React, { useContext } from "react";
import Layout from "../../components/Layout";
import data from "../../utils/data";
import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";
import { Store } from "../../utils/Store";
/***************************** End of imports **************************/

/*************** ProductItem - React functional Component **************/
export default function ProductScreen() {
  // get state and dispatch
  const { state, dispatch } = useContext(Store);

  /******************************  define constants ********************************/
  const { query } = useRouter(); // get query
  const { slug } = query; // get slug
  const product = data.products.find((x) => x.slug === slug); // get product
  /*********************************  end constants **********************************/

  /********************************* product is not defined **********************************/
  if (!product) {
    return <div>Product Not Found</div>;
  }
  /***************************** end product is not defined **********************************/

  /********************************* addToCart function **********************************/
  const addToCartHandler = () => {
    /**
     * find - search in the items of the cart
     * for the product that we have in this page
     */
    const existItem = state.cart.cartItems.find((x) => x.slug === product.slug); // get existItem

    // if we have the product in the cart -> increase the quantity
    // get quantity
    const quantity = existItem //true
      ? existItem.quantity + 1 // false
      : 1;

    if (product.countInStock < quantity) {
      alert("Sorry, this item is temporarily out of stock");
      return;
    }
    // use the dispatch from the store provider
    // dispatch this action: CART_ADD_ITEM
    dispatch({
      type: "CART_ADD_ITEM", // string
      // payload object
      payload: {
        ...product, // product properties
        quantity, // product quantity
      },
    });
  };
  /***************************** end addToCart function **********************************/

  /********************************* return **************************************************/
  return (
    /********************************* Layout **************************************************/
    <Layout title={product.name}>
      {/********************************** div **********************************/}
      <div className='py-2'>
        {/********************************** link *********************************/}
        <Link href='/'>back to products</Link>
        {/****************************** end of link ******************************/}
      </div>
      {/********************************* div end *******************************/}
      {/********************************** div **********************************/}
      <div className='grid md:grid-cols-4 md:gap-3'>
        {/********************************** div **********************************/}
        <div className='md:col-span-2'>
          {/********************************** Image *********************************/}
          <Image
            src={product.image}
            alt={product.name}
            width={640}
            height={640}
            layout='responsive'
          ></Image>
          {/******************************* end of Image *****************************/}
        </div>
        {/********************************* div end *******************************/}

        {/********************************** div **********************************/}
        <div>
          {/********************************** ul ***********************************/}
          <ul>
            {/********************************** li ***********************************/}
            <li>
              <h1 className='text-lg'>{product.name}</h1>
            </li>
            <li>Category: {product.category}</li>
            <li>Brand: {product.brand}</li>
            <li>
              {product.rating} of {product.numReviews} reviews
            </li>
            <li>Description: {product.description}</li>
            {/******************************* end li **********************************/}
          </ul>
          {/******************************* end ul **********************************/}

          {/********************************** div **********************************/}
        </div>
        {/********************************* div end *******************************/}

        {/********************************** div **********************************/}
        <div className='card p-5'>
          {/********************************** div **********************************/}
          <div className='mb-2 flex justify-between'>
            <div>Price</div>
            <div>€ {product.price}</div>
          </div>
          {/********************************* div end *******************************/}
          {/********************************** div **********************************/}
          <div className='mb-2 flex justify-between'>
            <div>Status</div>
            <div>{product.countInStock > 0 ? "In Stock" : "Unavailable"}</div>
          </div>
          {/********************************* div end *******************************/}
          {/********************************** button **********************************/}
          <button className='primary-button w-full' onClick={addToCartHandler}>
            Add to cart
          </button>
          {/********************************* button end *******************************/}
        </div>
        {/********************************* div end *******************************/}
      </div>
      {/********************************* div end *******************************/}
    </Layout>
    /******************************* End of Layout *********************************************/
  );
  /******************************** end return ***********************************************/
}
/******************** End of React functional Component ****************/
