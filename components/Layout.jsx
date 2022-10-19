/****************************** imports ********************************/

import React, { useContext } from "react";
import Head from "next/head";
import Link from "next/link";
import { Store } from "../utils/Store";

/***************************** End of imports **************************/

/***************** Layout - React functional Component *****************/

export default function Layout({ title, children }) {
  /****************************** constants ********************************/
  const { state } = useContext(Store); // get state
  const { cart } = state; // get cart
  /**************************** end constants ******************************/

  /******************************* return *********************************/
  return (
    <>
      {/******************************** Head ******************************* */}

      <Head>
        {/******************************** Title ******************************* */}

        <title>{title ? title + " - Next App" : "Next App"}</title>

        {/***************************** End of title *************************** */}

        {/******************************** Metadata ******************************* */}

        <meta charset='UTF-8' />
        <meta name='description' content='next app' />
        <meta name='copyright' content='2022 - Next App' />
        <meta name='author' content='Carlos Serôdio' />
        <meta name='keywords' content='next, tailwind, javascript' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />

        {/***************************** End of metadata **************************** */}

        <link rel='icon' href='/favicon.ico' />
      </Head>

      {/***************************** End of Head *************************** */}

      {/******************************** div ******************************* */}
      <div className='flex min-h-screen flex-col justify-between'>
        {/******************************** Header ******************************/}

        <header>
          {/******************************** nav *********************************/}

          <nav className='flex h-12 items-center px-4 justify-between shadow-md'>
            {/******************************* links ***************************** */}
            {/* className="text-lg font-bold" */}
            <Link href='/'>
              <a className='text-lg font-bold'>Next App</a>
            </Link>
            {/* className="p-2" */}
            <Link href='/cart'>
              <a className='p-2'>
                Cart
                {cart.cartItems.length > 0 && (
                  <span className='ml-1 rounded-full bg-red-600 px-2 py-1 text-xs font-bold text-white'>
                    {/* sum all quantities in the cart items */}
                    {cart.cartItems.reduce((a, c) => a + c.quantity, 0)}
                  </span>
                )}
              </a>
            </Link>

            <Link href='/login'>
              <a className='p-2'>Login</a>
            </Link>

            {/***************************** End of links ************************ */}
          </nav>

          {/***************************** End of nav **************************** */}
        </header>

        {/***************************** End of Header *************************** */}

        {/******************************** main ********************************* */}

        <main className='container m-auto mt-4 px-4'>{children}</main>

        {/****************************** End of main **************************** */}

        {/******************************** footer ******************************* */}

        <footer className='flex h-10 justify-center items-center shadow-inner'>
          <p>
            &copy; {new Date().getFullYear()} Copyright:{" Carlos Serôdio"}
          </p>
        </footer>

        {/***************************** End of footer *************************** */}
      </div>
      {/***************************** End of div *************************** */}
    </>
  );
  /****************************** End of return ***************************/
}

/******************** End of React functional Component ****************/
