'use client';

import { useEffect, useRef } from 'react';
import * as THREE from 'three';

export function CyberneticGridShader() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    const scene = new THREE.Scene();
    const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
    const clock = new THREE.Clock();

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
        vec2 uv    = (gl_FragCoord.xy - 0.5 * iResolution.xy) / iResolution.y;
        vec2 mouse = (iMouse - 0.5 * iResolution.xy) / iResolution.y;

        float t         = iTime * 0.2;
        float mouseDist = length(uv - mouse);

        // warp sutil ao redor do mouse
        float warp = sin(mouseDist * 20.0 - t * 4.0) * 0.06;
        warp *= smoothstep(0.35, 0.0, mouseDist);
        uv += warp;

        // linhas de grade
        vec2 gridUv = abs(fract(uv * 12.0) - 0.5);
        float line  = pow(1.0 - min(gridUv.x, gridUv.y), 60.0);

        // cor accent navy: #1E3A5F = vec3(0.118, 0.227, 0.373)
        vec3 gridColor = vec3(0.118, 0.227, 0.373);
        float pulse    = 0.5 + sin(t * 1.5) * 0.15;
        vec3 color     = gridColor * line * pulse;

        // pulsos de energia — accent-light #2A5298
        float energy = sin(uv.x * 20.0 + t * 4.0)
                     * sin(uv.y * 20.0 + t * 2.5);
        energy = smoothstep(0.85, 1.0, energy);
        color += vec3(0.165, 0.322, 0.596) * energy * line * 0.6;

        // alpha bem reduzido — sutil sobre fundo branco
        float alpha = (line * pulse + energy * line * 0.3) * 0.10;
        alpha += random(uv + t * 0.05) * 0.008; // noise mínimo

        gl_FragColor = vec4(color, alpha);
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
