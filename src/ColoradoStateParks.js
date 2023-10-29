import React from "react";
import howManyParks from "./parks/howManyParks";
// import aDifferentName from "./parks/howManyParks";
import MesaVerde from "./parks/MesaVerde";
import { trees, wildlife } from "./parks/RockyMountain";
import * as RMFunctions from "./parks/RockyMountain";
import {
  trees as parkTrees,
  wildlife as parkWildlife,
} from "./parks/RockyMountain";

function ColoradoStateParks() {
  howManyParks(); // => "42 parks!"
  
  // aDifferentName(); // => "42 parks!"
  
  console.log(trees);
// => "Aspen and Pine"
wildlife();
// => "Elk, Bighorn Sheep, Moose"

console.log(RMFunctions.trees);
// => "Aspen and Pine"
RMFunctions.wildlife();
// => "Elk, Bighorn Sheep, Moose"
RMFunctions.elevation();
// => Attempted import error

console.log(parkTrees);
// > "Aspen and Pine"
parkWildlife();
// > "Elk, Bighorn Sheep, Moose"

  return(
    <div>
      <h1>Colorado State Parks!</h1>;
      <MesaVerde />
    </div>
  ) 
}
export default ColoradoStateParks;

/*
export default function ColoradoStateParks() {
   howManyParks(); // => "42 parks!"
  // aDifferentName(); // => "42 parks!"

  return(
    <div>
      <h1>Colorado State Parks!</h1>;
      <MesaVerde />
    </div>
  ) 
}
 */