import { AmbientLight, DirectionalLight, HemisphereLight } from "three";

function createLights() {
    //create ambient light light with color and intensity arguments
    const ambientLight = new HemisphereLight(
        'white', //bright sky color
        'darksLategrey', //dark ground color
        10, //intensity
        );
    const mainLight = new DirectionalLight('white', 5);
    //move the light right, up and towards us
    mainLight.position.set(10, 10, 10);

    return {
        ambientLight,
        mainLight
    };
}

export { createLights };