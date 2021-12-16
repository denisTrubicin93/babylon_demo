import React from 'react';
import {
  FreeCamera,
  Vector3,
  HemisphericLight,
  MeshBuilder,
  Color4,
  StandardMaterial,
  Texture,
  SceneLoader,
} from '@babylonjs/core';
import '@babylonjs/loaders';
import '@babylonjs/gui';
import SceneComponent from './SceneComponent'; // uses above component in same directory
import grassTex from './assets/grass2.jpg';
import flowerYellow from './assets/models/flower-blue/flower-red.glb';
// import flowerYellowTexture from './assets/models/flower-blue/Base_Material_baseColor.png'
// import { PBRMaterial } from "babylonjs/Materials/PBR/pbrMaterial";

// console.log(flowerYellow)
// import SceneComponent from 'babylonjs-hook'; // if you install 'babylonjs-hook' NPM.
// let box;
let ground;
const onSceneReady = async (scene: any) => {
  // console.log(flowerYellow)
  scene.clearColor = new Color4(0, 0, 0, 0);
  const camera = new FreeCamera('camera1', new Vector3(0, 1.1, -1), scene);
  camera.setTarget(Vector3.Zero());
  const canvas = scene.getEngine().getRenderingCanvas();
  camera.attachControl(canvas, true);
  const light = new HemisphericLight('light', new Vector3(0, 1, 0), scene);
  light.intensity = 0.7;
  // box = MeshBuilder.CreateBox("box", { size: 2 }, scene);
  // box.position.y = 1;
  ground = MeshBuilder.CreateGround(
    'ground',
    { width: 10, height: 1.3 },
    scene
  );
  ground.position.z = -1.1;
  ground.material = new StandardMaterial('groundMaterial', scene);
  ground.material.diffuseTexture = new Texture(grassTex, scene);
  ground.material.diffuseTexture.uScale =
    // eslint-disable-next-line no-multi-assign
    ground.material.diffuseTexture.vScale = 10;
  // SceneLoader.ImportMesh("", '', flowerYellow, scene, function (newMeshes) {
  //     console.log(newMeshes)
  // })
  // console.log(scene)

  // SceneLoader.ImportMeshAsync("", '', flowerYellow, scene, function (newMeshes) {
  //     setTimeout(() => {
  //         console.log(newMeshes)
  //     }, 2000);

  // })
  console.log(flowerYellow)
  SceneLoader.Append('', flowerYellow, scene, function (model) {
    console.log(model);
    // do something with the scene
  });
  // const importResult = await SceneLoader.ImportMeshAsync(
  //     "",
  //     "",
  //     flowerYellow,
  //     scene,
  //     undefined,
  // );

  // console.log(importResult)
};

// const onRender = (scene) => {
// if (box !== undefined) {
//     var deltaTimeInMillis = scene.getEngine().getDeltaTime();
//     const rpm = 10;
//     box.rotation.y += (rpm / 60) * Math.PI * 2 * (deltaTimeInMillis / 1000);
// }
// };

export default () => (
  <div
    style={{
      position: 'absolute',
      top: '50%',
      width: '100vw',
      height: '500px',
    }}
  >
    {/* <img src="./assets/ball-red.png" alt="" /> */}
    <SceneComponent

      antialias
      onSceneReady={onSceneReady}
      // onRender={onRender}
      id="my-canvas"
    />
  </div>
);
