// import 'ar.js';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  @ViewChild('arScene', { static: true })
  arScene!: ElementRef;

  ngOnInit(): void {
    // Create a Three.js scene
    const scene = new THREE.Scene();

    // Create a Three.js camera
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.01, 1000);
    camera.position.z = 5;

    // Create a Three.js renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    this.arScene.nativeElement.appendChild(renderer.domElement);

    // Load the 3D model
    const loader = new GLTFLoader();
    loader.load('assets/Koltuk.glb', (gltf) => {
      const model = gltf.scene;
      scene.add(model);

      // Set different colors for different parts of the object
      // model.traverse((child) => {
      //   if (child instanceof THREE.Mesh) {
      //     if (child.name === 'part1') {
      //       child.material.color.set(0xff0000); // Red color
      //     } else if (child.name === 'part2') {
      //       child.material.color.set(0x00ff00); // Green color
      //     } else if (child.name === 'part3') {
      //       child.material.color.set(0x0000ff); // Blue color
      //     }
      //   }
      // });
    });

    // Create a Three.js ambient light
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    // Create a Three.js directional light
    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5);
    directionalLight.position.set(0, 1, 0);
    scene.add(directionalLight);

    // Create OrbitControls
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.25;
    controls.enableZoom = true;
    controls.autoRotate = true;
    controls.autoRotateSpeed = 2;

    // Render the scene
    function animate() {
      requestAnimationFrame(animate);
      controls.update();
      renderer.render(scene, camera);
    }
    animate();

    // Create AR.js scene
    // const arScene = document.createElement('a-scene');
    // arScene.setAttribute('embedded', '');
    // arScene.setAttribute('arjs', '');
    // arScene.setAttribute('renderer', 'logarithmicDepthBuffer: true;');
    // arScene.setAttribute('vr-mode-ui', 'enabled: false;');
    // arScene.setAttribute('camera', 'far: 10000;');

    // // Create AR.js markerless component
    // const arMarkerless = document.createElement('a-markerless');
    // arMarkerless.setAttribute('type', 'pattern');
    // arMarkerless.setAttribute('url', 'assets/pattern-markerless.patt');

    // // Add AR.js markerless component to AR.js scene
    // arScene.appendChild(arMarkerless);

    // // Add AR.js scene to the DOM
    // document.body.appendChild(arScene);
  }

  openCamera() {
    // Open the camera
    console.log("Camera is live now")
    navigator.mediaDevices.getUserMedia({ video: true })
      .then((stream) => {
        const video = document.createElement('video');
        video.srcObject = stream;
        video.play();

        // Create AR.js scene
        const arScene = document.createElement('a-scene');
        arScene.setAttribute('embedded', '');
        arScene.setAttribute('arjs', '');
        arScene.setAttribute('renderer', 'logarithmicDepthBuffer: true;');
        arScene.setAttribute('vr-mode-ui', 'enabled: false;');
        arScene.setAttribute('camera', 'far: 10000;');

        // Create AR.js markerless component
        const arMarkerless = document.createElement('a-markerless');
        arMarkerless.setAttribute('type', 'pattern');
        arMarkerless.setAttribute('url', 'assets/pattern-markerless.patt');

        // Add AR.js markerless component to AR.js scene
        arScene.appendChild(arMarkerless);

        // Add AR.js scene to the DOM
        document.body.appendChild(arScene);
      })
      .catch((error) => {
        console.error('Error accessing the camera:', error);
      });
  }
}
