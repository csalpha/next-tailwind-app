/***************** imports *****************/
import "../styles/globals.css";
import { StoreProvider } from "../utils/Store";
/*************** end imports ***************/
/**
 * MyApp
 * @author   Carlos
 * @param    {any} Component    Component
 * @param    {any} pageProps    pageProps
 * @return   {any} res    response
 */
/***************** MyApp - React functional Component *****************/
function MyApp({ Component, pageProps }) {
  /*************** return ***************/
  return (
    /*************** StoreProvider ***************/
    <StoreProvider>
      {/*************** Component ***************/}
      <Component {...pageProps} />
      {/************** Component end *************/}
    </StoreProvider>
    /************* StoreProvider end *************/
  );
}
// export
export default MyApp;
