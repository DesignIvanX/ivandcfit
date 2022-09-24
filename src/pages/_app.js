import Canva from "../components/Canva";
import "../styles/styles.global.css";
function MyApp({ Component, pageProps }) {
  return (
    <>
      <Canva>
        <Component {...pageProps} />
      </Canva>
    </>
  );
}

export default MyApp;
