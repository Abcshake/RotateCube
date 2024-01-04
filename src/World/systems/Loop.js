import { Clock } from "three";

const clock = new Clock();

class Loop {
    constructor(scene, camera, renderer) {
        this.scene = scene;
        this.camera = camera;
        this.renderer = renderer;
        //list of animated objects
        this.updatables = [];
    }
    start() {
        this.renderer.setAnimationLoop(() => {
            //tell every animated object to tick forward one frame
            this.tick();
            //Render a frame
            this.renderer.render(this.scene, this.camera);
        });
    }
    stop() {
        this.renderer.setAnimationLoop(null);
    }  
    
    tick() {
        //get the delta time before the last frame once per frame
        const delta = clock.getDelta();
      
        for (const object of this.updatables) {
            
            object.tick(delta);
        }
    }
}

export { Loop };