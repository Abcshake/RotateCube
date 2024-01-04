import { createCamera } from './components/camera.js';
import { createCube } from './components/cube.js';
import { createScene } from './components/scene.js';
import { createLights } from './components/lights.js';
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
class World {
  constructor(container) {
    camera = createCamera();
    scene = createScene();
    renderer = createRenderer(scene, camera);
    loop = new Loop(scene, camera, renderer);
    container.append(renderer.domElement);
    this.isStarted = false;
    
    const cube = createCube();
    const controls = createControls(camera, renderer.domElement);
    console.log(controls.enableDamping);
    controls.target.copy(cube.position);
    const {ambientLight, mainLight} = createLights();
    //loop.updatables.push(cube);
 
    loop.updatables.push(controls, cube);
    scene.add(cube, mainLight, ambientLight);
    
    const resizer = new Resizer(container, camera, renderer);
    //Render the world everytime the window is resized
    // resizer.onResize = () => {
    //   this.render();
    // }
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
