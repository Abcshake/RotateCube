import { createCamera } from './components/camera.js';
import { createAxesHelper, createGridHelper } from './components/Train/helpers.js';
import { createScene } from './components/scene.js';
import { createLights } from './components/lights.js';
import { loadBirds } from './components/Birds/birds.js';
import { Train } from './components/Train/Train.js';
import { createRenderer } from './systems/renderer.js';
import { Resizer } from './systems/Resizer.js';
import { Loop } from './systems/Loop.js';
import { createControls } from './systems/controls.js';

// These variables are module-scoped: we cannot access them
// from outside the module
let camera;
let renderer;
let scene;
let loop;
let isStarted;
let controls;
class World {
  constructor(container) {
    camera = createCamera();
    scene = createScene();
    renderer = createRenderer(scene, camera);
    loop = new Loop(scene, camera, renderer);
    container.append(renderer.domElement);
    controls = createControls(camera, renderer.domElement);
    this.isStarted = false;
    const {ambientLight, mainLight} = createLights();
    //const train = new Train();  
   
    loop.updatables.push(controls);
 
    scene.add(mainLight, ambientLight);
    
    const resizer = new Resizer(container, camera, renderer);
    //Render the world everytime the window is resized
    // resizer.onResize = () => {
    //   this.render();
    // }
    scene.add(createAxesHelper(), createGridHelper());
  }

  async init() {
    const {parrot, flamingo, stork} = await loadBirds();
    //move the target to the center of the front bird
    controls.target.copy(parrot.position);
    scene.add(parrot, flamingo, stork);
  }

  render() {
    // draw a single frame
    renderer.render(scene, camera);
  }
  //Expose loop methods for the world to call in mainjs
  start() {
    this.isStarted = true;
    loop.start(scene,camera,isStarted);
  }
  stop() {
    loop.stop();
    this.isStarted = false;
  }

}

export { World };
