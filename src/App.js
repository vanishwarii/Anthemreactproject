import "./App.css";
import MainContent from "../src/Components/Main/maincontent";
import Routing from "./Routing";
import PharmacyProvider from "./Pharmacyprovider/Pharmacyprovider";

function App() {
  return (
    <>
      <PharmacyProvider>
        <Routing />
      </PharmacyProvider>
    </>
  );
}

export default App;
