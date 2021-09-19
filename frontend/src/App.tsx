import React from "react";
import "./App.css";
import { Symfoni } from "./hardhat/SymfoniContext";
import { Swap } from "./components/Swap";

function App() {
  return (
  
    <div className="App">
      <Symfoni autoInit={true}>
        <div className="min-h-screen bg-green-200">
          <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 ">
            <div className="text-red-500 text-7xl pt-28 pb-10 font-myLuckiest ">
              FORTUNE SWAP
            </div>
            <Swap
              tokenA="0xAc06DAA1A5A1e5Db0af0F986763dd86427e836e9"
              tokenB="0xa9c2f5108e3Ab77a14DB22fb378a09Ebc1AB1447"
            ></Swap>
          </div>
        </div>
      </Symfoni>
    </div>
  );
}

export default App;
