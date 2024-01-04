import { PerspectiveCamera } from "three";

function createCamera() {
    const camera = new PerspectiveCamera(
        35, // fov = Field Of View
        1, // aspect ratio (dummy value)
        0.1, // near clipping plane
        100, // far clipping plane
    )
    // move the camera back so we can view the scene
    camera.position.set(0, 0, 20);

    // camera.tick = (delta) => {
    //     if (camera.position.z >= 30){
    //         camera.position.z -= 1*delta;
    //         console.log(camera.position.z);
    //     } else {
    //         camera.position.z += 2*delta;
    //         console.log(camera.position.z);
    //     }
    // }

    return camera;
}

export {createCamera};