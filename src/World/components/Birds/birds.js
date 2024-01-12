import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import Parrot from './models/Parrot.glb?url';
import Flamingo  from './models/Flamingo.glb?url';
import Stork from './models/Stork.glb?url';
import { setupModel } from './setupModel';

async function loadBirds() {
    const loader = new GLTFLoader();
    
    const [parrotData, flamingoData, storkData] = await Promise.all([
        loader.loadAsync(Parrot),
        loader.loadAsync(Flamingo),
        loader.loadAsync(Stork)
    ]);
   
    console.log('Squaak', parrotData);

    const parrot = setupModel(parrotData);  
    parrot.position.set(0,0,2.5);
    const flamingo = setupModel(flamingoData);
    flamingo.position.set(7.5,0,-10);
    const stork = setupModel(storkData);
    stork.position.set(0,2.5, -10);

    return {
        parrot,
        flamingo,
        stork
    }
}

export {loadBirds};