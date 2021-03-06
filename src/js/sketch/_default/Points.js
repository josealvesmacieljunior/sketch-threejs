import * as THREE from 'three';
import MathEx from 'js-util/MathEx';

export default class Points {
  constructor() {
    this.uniforms = {
      time: {
        type: 'f',
        value: 0
      },
    };
    this.obj;
  }
  createObj() {
    // Define Geometry
    const geometry = new THREE.BufferGeometry();

    // Define Material
    const material = new THREE.RawShaderMaterial({
      uniforms: this.uniforms,
      vertexShader: require('./glsl/points.vs'),
      fragmentShader: require('./glsl/points.fs'),
    });

    // Create Object3D
    this.obj = new THREE.Points(geometry, material);
    this.obj.name = 'Points';
  }
  render(time) {
    this.uniforms.time.value += time;
  }
}
