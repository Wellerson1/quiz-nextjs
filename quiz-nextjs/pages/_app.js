import "../styles/globals.css";
import "tailwindcss/tailwind.css";
import { DataTransferProvider } from "../data/context/DataTransferContext";
import { DataBaseProvider } from "../data/context/DataBaseContext";

function MyApp({ Component, pageProps }) {
  return (
    <DataBaseProvider>
      <DataTransferProvider>
        <Component {...pageProps} />
      </DataTransferProvider>
    </DataBaseProvider>
  );
}

export default MyApp;
