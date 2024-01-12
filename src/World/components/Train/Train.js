import { Group, MathUtils } from "three";
import { createGeometries } from "./geometries.js";
import { createMaterials } from "./materials.js";
import { createMeshes } from "./meshes.js";

const wheelSpeed = MathUtils.degToRad(24);

class Train extends Group {
    constructor(){
        super();
        this.mesh = createMeshes();
        this.add(
            this.mesh.nose,
            this.mesh.cabin,
            this.mesh.chimney,
            this.mesh.smallWheelRear,
            this.mesh.smallWheelCenter,
            this.mesh.smallWheelFront,
            this.mesh.bigWheel
          );
    }

    tick(delta) {
        this.mesh.bigWheel.rotation.y += wheelSpeed * delta;
        this.mesh.smallWheelRear.rotation.y += wheelSpeed * delta;
        this.mesh.smallWheelCenter.rotation.y += wheelSpeed * delta;
        this.mesh.smallWheelFront.rotation.y += wheelSpeed * delta;
}
}


export { Train };