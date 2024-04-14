import "./App.css";
import { FootballerListComponent } from "./components/FootballerListComponent";
import { FooterComponent } from "./components/FooterComponent";
import { HeaderComponent } from "./components/HeaderComponent";

function App() {
  return (
    <>
      <HeaderComponent />
      <FootballerListComponent />
      <FooterComponent />
    </>
  );
}

export default App;
