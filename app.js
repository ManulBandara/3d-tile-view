// let scene, camera, renderer, floor;

// init();
// animate();

// function init() {
//   // SCENE
//   scene = new THREE.Scene();
//   scene.background = new THREE.Color(0xaaaaaa);

//   // CAMERA
//   camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);
//   camera.position.set(0, 5, 10);
//   camera.lookAt(0, 0, 0);

//   // RENDERER
//   renderer = new THREE.WebGLRenderer();
//   renderer.setSize(window.innerWidth, window.innerHeight);
//   document.body.appendChild(renderer.domElement);

//   // LIGHT
//   const light = new THREE.HemisphereLight(0xffffff, 0x444444);
//   scene.add(light);

//   // FLOOR
//   const texture = new THREE.TextureLoader().load('assets/tiles/tile1.webp');
//   texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
//   texture.repeat.set(4, 4);

//   const geo = new THREE.PlaneGeometry(20, 20);
//   const mat = new THREE.MeshStandardMaterial({ map: texture });

//   floor = new THREE.Mesh(geo, mat);
//   floor.rotation.x = -Math.PI / 2;
//   scene.add(floor);

//   // WALLS (ROOM FEEL)
//   const wallMat = new THREE.MeshStandardMaterial({ color: 0xffffff });

//   const backWall = new THREE.Mesh(new THREE.PlaneGeometry(20, 10), wallMat);
//   backWall.position.set(0, 5, -10);
//   scene.add(backWall);

//   const leftWall = new THREE.Mesh(new THREE.PlaneGeometry(20, 10), wallMat);
//   leftWall.position.set(-10, 5, 0);
//   leftWall.rotation.y = Math.PI / 2;
//   scene.add(leftWall);

//   const rightWall = new THREE.Mesh(new THREE.PlaneGeometry(20, 10), wallMat);
//   rightWall.position.set(10, 5, 0);
//   rightWall.rotation.y = Math.PI / 2;
//   scene.add(rightWall);
// }

// function changeTile(path) {
//   const texture = new THREE.TextureLoader().load(path);
//   texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
//   texture.repeat.set(4, 4);

//   floor.material.map = texture;
//   floor.material.needsUpdate = true;
// }

// function animate() {
//   requestAnimationFrame(animate);
//   renderer.render(scene, camera);
// }