/****************************** imports ********************************/

import React from "react";
import Head from "next/head";
import Link from "next/link";

/***************************** End of imports **************************/

/***************** Layout - React functional Component *****************/

export default function Layout({ title, children }) {
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
              <a className='p-2'>Cart</a>
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
