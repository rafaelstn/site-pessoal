'use client';

import { useEffect, useRef } from 'react';
import * as THREE from 'three';

export function MatrixShader() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const scene = new THREE.Scene();
    const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
    const clock = new THREE.Clock();

    let renderer: THREE.WebGLRenderer;
    try {
      renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      container.appendChild(renderer.domElement);
    } catch {
      return;
    }

    const vertexShader = `
      void main() {
        gl_Position = vec4(position, 1.0);
      }
    `;

    const fragmentShader = `
      precision highp float;
      uniform vec2 iResolution;
      uniform float iTime;
      uniform vec2 iMouse;

      float random(vec2 st) {
        return fract(sin(dot(st.xy, vec2(12.9898, 78.233))) * 43758.5453123);
      }

      void main() {
        vec2 uv = (gl_FragCoord.xy * 2.0 - iResolution.xy) / iResolution.y;
        vec2 mouse = (iMouse * 2.0 - iResolution) / iResolution.y;

        float dist = length(uv - mouse);
        float warp = smoothstep(0.6, 0.0, dist);
        uv += normalize(uv - mouse + vec2(0.001)) * warp * 0.15;

        float gridSize = 28.0;
        vec2 gridUv = fract(uv * gridSize);
        vec2 gridId = floor(uv * gridSize);

        float t = iTime * 1.5;
        float rainSpeed = 0.35;
        float fall = fract(gridId.y * 0.1 - t * rainSpeed + random(gridId.xx) * 2.0);

        float character = random(gridId + floor(t * 4.0 * random(gridId.yx)));
        character = step(0.97, character); // mais esparso

        float glow = 1.0 - smoothstep(0.0, 0.85, gridUv.y);
        float intensity = character * glow * fall;

        // Paleta navy/accent bem sutil sobre fundo claro
        vec3 color1 = vec3(0.118, 0.227, 0.373); // #1E3A5F accent
        vec3 color2 = vec3(0.165, 0.322, 0.596); // #2A5298 accent-light
        vec3 finalColor = mix(color1, color2, random(gridId)) * intensity;
        finalColor *= (1.0 - random(gridId + t) * 0.15);

        // Opacidade bem reduzida — efeito sutil sobre fundo branco
        float alpha = intensity * 0.18;

        gl_FragColor = vec4(finalColor, alpha);
      }
    `;

    const uniforms = {
      iTime:       { value: 0 },
      iResolution: { value: new THREE.Vector2() },
      iMouse:      { value: new THREE.Vector2(0, 0) },
    };

    const material = new THREE.ShaderMaterial({
      vertexShader,
      fragmentShader,
      uniforms,
      transparent: true,
    });

    const geometry = new THREE.PlaneGeometry(2, 2);
    scene.add(new THREE.Mesh(geometry, material));

    const onResize = () => {
      const w = container.clientWidth;
      const h = container.clientHeight;
      renderer.setSize(w, h);
      uniforms.iResolution.value.set(w, h);
    };

    const onMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      uniforms.iMouse.value.set(
        e.clientX - rect.left,
        rect.height - (e.clientY - rect.top)
      );
    };

    window.addEventListener('resize', onResize);
    window.addEventListener('mousemove', onMouseMove);
    onResize();

    renderer.setAnimationLoop(() => {
      uniforms.iTime.value = clock.getElapsedTime();
      renderer.render(scene, camera);
    });

    return () => {
      window.removeEventListener('resize', onResize);
      window.removeEventListener('mousemove', onMouseMove);
      renderer.setAnimationLoop(null);
      const canvas = renderer.domElement;
      if (canvas.parentNode) canvas.parentNode.removeChild(canvas);
      material.dispose();
      geometry.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 pointer-events-none"
      aria-hidden="true"
    />
  );
}
