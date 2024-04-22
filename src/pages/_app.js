import "../styles/globals.css";
import "tailwindcss/tailwind.css";
import { DataTransferProvider } from "../data/context/DataTransferContext";
import { DataBaseProvider } from "../data/context/DataBaseContext";
import { AuthProvider } from '../data/context/AuthContext'

function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider>
    <DataBaseProvider>
      <DataTransferProvider>
        <Component {...pageProps} />
      </DataTransferProvider>
    </DataBaseProvider>
    </AuthProvider>
  );
}

export default MyApp;
