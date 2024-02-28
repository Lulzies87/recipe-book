import { Header } from "./Header";
import { Recipes } from "./Recipes";
import { SideBar } from "./SideBar";
import "./App.scss";

function App() {
  return (
    <main>
      <Header />
      <SideBar />
      <Recipes />
    </main>
  );
}

export default App;
