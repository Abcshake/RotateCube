import { WebGLRenderer } from "three";


function createRenderer(scene, camera) {
    const renderer = new WebGLRenderer({ antialias: true });

    //turn on the physically correct lighting model
    renderer.physicallyCorrectLights = true;
    //Call the renderer over and over again to generate a stream of frame
    renderer.setAnimationLoop(() => {
        renderer.render(scene, camera);
    });
    return renderer;
}

export {createRenderer};