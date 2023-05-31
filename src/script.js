import * as THREE from "three";

const scene = new THREE.Scene();
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({
  color: 0xff0000,
  wireframe: true,
  shininess: 10,
});
const mesh = new THREE.Mesh(geometry, material);

scene.add(mesh);

const SIZES = {
  WIDTH: 800,
  HEIGHT: 600,
};

const camera = new THREE.PerspectiveCamera(75, SIZES.WIDTH / SIZES.HEIGHT);
camera.position.z = 3;
scene.add(camera);

const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector("canvas.webgl"),
});
renderer.setSize(SIZES.WIDTH, SIZES.HEIGHT);

function animate() {
  mesh.rotation.x += 0.01;
  mesh.rotation.y += 0.01;
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
}

animate();
