import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

const RegularTetrahedron = ({ setHoveredUrl }) => {
    const ref = useRef(null);
    const groupRef = useRef(null);

    useEffect(() => {
        const currentRef = ref.current;
        if (!currentRef) return;

        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        camera.position.z = 4;

        const renderer = new THREE.WebGLRenderer();
        renderer.setSize(window.innerWidth, window.innerHeight);
        currentRef.appendChild(renderer.domElement);

        const group = new THREE.Group();
        groupRef.current = group;
        scene.add(group);

        // 初期の回転角度を設定
        group.rotation.set(Math.PI / 12, Math.PI / 12, Math.PI / 3);

        const tetraGeometry = new THREE.TetrahedronGeometry(1);

        const edges = new THREE.LineSegments(
            new THREE.EdgesGeometry(tetraGeometry),
            new THREE.LineBasicMaterial({ color: 0xffffff })
        );
        group.add(edges);

        const urls = ["/", "/about", "/blog", "/link"];
        const labels = ["HOME", "ABOUT", "BLOG", "LINK"];
        const vertices = tetraGeometry.getAttribute('position');
        const spheres = [];
        
        for (let i = 0; i < vertices.count; i++) {
            const vertex = new THREE.Vector3().fromBufferAttribute(vertices, i);
            const sphereGeometry = new THREE.SphereGeometry(0.1, 32, 32);
            const sphereMaterial = new THREE.MeshBasicMaterial({ color: 0xff0000 });
            const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
            sphere.position.copy(vertex);
            sphere.userData = { 
                URL: urls[i],
                label: labels[i]
            };
            group.add(sphere);
            spheres.push(sphere);
        }

        const raycaster = new THREE.Raycaster();
        const mouse = new THREE.Vector2();

        const onMouseMove = (event) => {
            mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
            mouse.y = - (event.clientY / window.innerHeight) * 2 + 1;
            raycaster.setFromCamera(mouse, camera);
            const intersects = raycaster.intersectObjects(spheres);
            
            if (intersects.length > 0) {
                setHoveredUrl(intersects[0].object.userData.label);
            } else {
                setHoveredUrl('');
            }
        };

        const onMouseClick = (event) => {
            mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
            mouse.y = - (event.clientY / window.innerHeight) * 2 + 1;
            raycaster.setFromCamera(mouse, camera);
            const intersects = raycaster.intersectObjects(spheres);
            if (intersects.length > 0) {
                const url = intersects[0].object.userData.URL;
                url === "/" ? window.location.href = "/" : window.location.href = url;
            }
        };

        window.addEventListener('mousemove', onMouseMove);
        window.addEventListener('click', onMouseClick);

        const controls = new OrbitControls(camera, renderer.domElement);
        controls.enableDamping = true;
        controls.dampingFactor = 0.25;
        controls.maxPolarAngle = Math.PI;
        controls.autoRotate = true;
        controls.autoRotateSpeed = 2.0;
        controls.enableZoom = false;

        const animate = () => {
            requestAnimationFrame(animate);
            controls.update();
            renderer.render(scene, camera);
        };
        animate();

        return () => {
            window.removeEventListener('mousemove', onMouseMove);
            window.removeEventListener('click', onMouseClick);
            currentRef.removeChild(renderer.domElement);
        };
    }, [setHoveredUrl]);

    return <div ref={ref} style={{ width: '100%', height: '100vh' }} />;
};

export default RegularTetrahedron;