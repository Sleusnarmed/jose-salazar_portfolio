asdaslbjndsajbldjbanlsdjlksadaasbjldasjbldbjaldbjlasdblja# **Interactive 3D Developer Desk Portfolio**
*A WebGL Portfolio Featuring a Custom Blender Scene*

## ⭐ Overview
This project is a personal web portfolio that integrates a fully custom 3D scene modeled in **Blender** and rendered on the web using **Three.js** or `<model-viewer>`.  
It serves as a professional showcase of both **3D production** and **front-end development**, making it suitable for internships, scholarships, and job applications.

The goal is to demonstrate competence in:

- 3D modeling basics in Blender  
- GLTF/GLB export workflows  
- WebGL rendering  
- Interface design with HTML/CSS  
- JavaScript interactivity  
- Digital content publishing (GitHub Pages, Netlify, Vercel)

---

## 🎯 Pedagogical Objective
This project strengthens real-world technical abilities, including:

- 3D asset creation and export  
- Integration of 3D elements in modern web environments  
- Layout and design of responsive web interfaces  
- Hosting and publishing a professional, clean portfolio website  

---

## 🖥️ Project Description
The project consists of building a personal portfolio website that includes:

- Your **name**, **avatar/photo**, and **About Me** section  
- A **Skills** section  
- A **Projects** section  
- Contact/social links  
- A **3D interactive scene of a developer desk**, fully modeled by the student in Blender

The final 3D model is displayed through Three.js or the `<model-viewer>` component.

---

## 📂 Folder Structure

---
## 🛠️ Technologies Used


- **CSS3** (Flexbox, Grid, responsive layout)  
- **React**  
- **React Three Fiber** 
- **Blender** for 3D modeling  
- **Vercel** for deployment 


```console
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  60,
  window.innerWidth / window.innerHeight,
  0.1,
  100
);
camera.position.set(2, 2, 3);

const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.getElementById('webgl').appendChild(renderer.domElement);

const controls = new OrbitControls(camera, renderer.domElement);

const loader = new GLTFLoader();
loader.load(
  './assets/3d/setup.glb',
  (gltf) => {
    scene.add(gltf.scene);
  },
  undefined,
  (error) => {
    console.error('Error loading model:', error);
  }
);

function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
}

animate();
```


## 📄 License
### MIT License — Feel free to use or modify.


## 🙌 Acknowledgments

- Blender Foundation

- Three.js Community
