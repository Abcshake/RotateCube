import { BoxGeometry,BufferGeometry, Mesh, MeshStandardMaterial, MathUtils, TextureLoader  } from 'three';
import randomColor from 'randomcolor'; 
import bwtexture from '../../assets/textures/uv-test-bw.png';
import coltexture from "../../assets/textures/uv-test-col.png";

function createCube() {
  const geometry = new BoxGeometry(2, 2, 2);
  const material = createMaterial();
  const cube = new Mesh(geometry, material);

  cube.rotation.set(-0.5, -0.1, 0.8);

  const radiansPerSecond = MathUtils.degToRad(30);

  cube.tick = (delta) => {
    // increase the cube's rotation each frame
    cube.rotation.z += delta * radiansPerSecond;
    cube.rotation.x += delta * radiansPerSecond;
    cube.rotation.y += delta * radiansPerSecond;
  };

  return cube;
}


function createMaterial() { 
  const textureLoader = new TextureLoader();
  const texture = textureLoader.load(bwtexture);

  //create the mesh material
  const material = new MeshStandardMaterial({
    map : texture,
    });
  return material;
};
export {createCube};