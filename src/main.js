import { World } from "./World/World";
let world;
function main() {
  //Get a reference to the container element
  const container = document.querySelector("#scene-container");
  const button = document.querySelector("#render-button");
  //Create an instance of the world app
  world = new World(container);
 
  world.render();

  button.addEventListener("click", () => {
    if (world.isStarted){
      world.stop();
    } else {
      world.start();
      console.log(world.isStarted);
    }
  });
}

//call main to start the app
main();