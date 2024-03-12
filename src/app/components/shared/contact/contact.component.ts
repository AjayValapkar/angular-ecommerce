import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent  {
  // @ViewChild('arScene', { static: true })
  // arScene!: ElementRef;

  // ngOnInit(): void {
  //   // Create an AR scene
  //   const scene = document.createElement('a-scene');
  //   scene.setAttribute('embedded', '');

  //   // Add the AR scene to the DOM
  //   this.arScene.nativeElement.appendChild(scene);

  //   // Add a camera to the scene
  //   const camera = document.createElement('a-entity');
  //   camera.setAttribute('camera', '');

  //   scene.appendChild(camera);

  //   // Add a 3D model to the scene
  //   const model = document.createElement('a-entity');
  //   model.setAttribute('gltf-model', 'url(assets/Kultuk.glb)');
  //   model.setAttribute('scale', '0.5 0.5 0.5');
  //   model.setAttribute('position', '0 0 -5');

  //   scene.appendChild(model);
  // }
}
