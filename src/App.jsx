import { Suspense } from "react";
import "./App.css";
import DaisyNab from "./components/DaisyNav/DaisyNab";
import NavBar from "./components/Navbar/NavBar";
import PricingOption from "./components/PricingOption/PricingOption";
import ResultsChart from "./components/ResultsChart/ResultsChart";


const pricingPromise = fetch("pricingData.json").then((res) => res.json());

function App() {
  return (
    <>
      <header>
        <NavBar></NavBar>
        {/* <DaisyNab></DaisyNab> */}
      </header>

      <main>
        <Suspense
          fallback={
            <span className="loading loading-spinner loading-lg"></span>
          }
        >
          <PricingOption pricingPromise={pricingPromise}></PricingOption>
        </Suspense>

        <ResultsChart></ResultsChart>
      </main>

      <footer></footer>
    </>
  );
}

export default App;
