/****************************** imports ********************************/

import React from "react";
import Link from "next/link";

/***************************** End of imports **************************/

/*************** ProductItem - React functional Component **************/

export default function ProductItem({ product }) {
  /******************************* return *********************************/
  return (
    /******************************* card *********************************/
    <div className='card'>
      {/******************************** Link **********************************/}
      <Link href={`/product/${product.slug}`}>
        <a>
          {/******************************** img **********************************/}
          <img
            src={product.image}
            alt={product.name}
            className='rounded shadow'
          ></img>
          {/******************************** End of img **********************************/}
        </a>
      </Link>
      {/******************************** End of Link **********************************/}

      {/* className="flex flex-col items-center justify-center p-5" */}
      <div className='flex flex-col items-center justify-center p-5'>
        {/************************************ Link *************************************/}
        <Link href={`/product/${product.slug}`}>
          <a>
            <h2 className='text-lg'>{product.name}</h2>
          </a>
        </Link>
        {/******************************** End of Link **********************************/}

        {/************************************ brand *************************************/}
        <p className='mb-2'>{product.brand} </p>
        {/******************************** End of brand **********************************/}

        {/************************************ price *************************************/}
        <p>{product.price} €</p>
        {/******************************** End of price **********************************/}

        {/************************************ Button *************************************/}
        <button
          className='primary-button'
          type='button'
          onClick={() => alert("add to cart")}
        >
          Add to cart
        </button>
        {/******************************** End of Button **********************************/}
      </div>
    </div>
    /****************************** End of card ***************************/
  );

  /****************************** End of return ***************************/
}

/******************** End of React functional Component ****************/
