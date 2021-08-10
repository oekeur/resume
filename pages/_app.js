import "../styles/globals.scss";
import { AppWrapper } from "../context/state"; // import based on where you put it

function Application({ Component, pageProps }) {
  return (
    <AppWrapper>
      <Component {...pageProps} />
    </AppWrapper>
  );
}

export default Application;
