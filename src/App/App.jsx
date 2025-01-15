import "./App.css";
import { Header } from "../Components/Header";
import { Skills } from "../Components/Skills";
import { Proyects } from "../Components/Proyects";
import { Education } from "../Components/Education";
import { Footer } from "../Components/Footer";

function App() {
  return (
    <>
      <Header />
      <Skills />
      <Education />
      <Proyects />
      <Footer />
    </>
  );
}

export default App;
