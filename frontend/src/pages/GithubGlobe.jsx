



// // src/pages/GithubGlobe.jsx
// "use client";

// import { useEffect, useRef, useState } from "react";
// import { motion } from "framer-motion";
// import { ComposableMap, Geographies, Geography, Line } from "react-simple-maps";
// import { Package, Ship, Clock, MapPin, Globe, Waves } from "lucide-react";
// import "../styles/GithubGlobe.css";  // Import external CSS

// const geoUrl = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

// const route = {
//   start: { name: "Beijing", coords: [116.4, 39.9] },
//   end: { name: "Colombo", coords: [79.9, 6.9] },
// };

// export default function GithubGlobe() {
//   const containerRef = useRef(null);
//   const [rotation, setRotation] = useState([-98, -23]);
//   const [isDragging, setIsDragging] = useState(false);
//   const velocity = useRef({ x: 0, y: 0 });
//   const lastPos = useRef({ x: 0, y: 0 });
//   const rafId = useRef(null);

//   // Mouse/Touch Drag Handler
//   const handleStart = (clientX, clientY) => {
//     setIsDragging(true);
//     lastPos.current = { x: clientX, y: clientY };
//     velocity.current = { x: 0, y: 0 };
//   };

//   const handleMove = (clientX, clientY) => {
//     if (!isDragging) return;

//     const deltaX = clientX - lastPos.current.x;
//     const deltaY = clientY - lastPos.current.y;

//     velocity.current = { x: deltaX * 0.1, y: deltaY * 0.1 };

//     setRotation((prev) => [
//       prev[0] + deltaX * 0.3,
//       Math.max(-85, Math.min(85, prev[1] + deltaY * 0.3)),
//     ]);

//     lastPos.current = { x: clientX, y: clientY };
//   };

//   const handleEnd = () => {
//     setIsDragging(false);

//     // Inertia animation
//     const animate = () => {
//       if (Math.abs(velocity.current.x) < 0.1 && Math.abs(velocity.current.y) < 0.1) {
//         return;
//       }

//       setRotation((prev) => [
//         prev[0] + velocity.current.x,
//         Math.max(-85, Math.min(85, prev[1] + velocity.current.y)),
//       ]);

//       velocity.current.x *= 0.95;
//       velocity.current.y *= 0.95;

//       rafId.current = requestAnimationFrame(animate);
//     };

//     rafId.current = requestAnimationFrame(animate);
//   };

//   useEffect(() => {
//     return () => {
//       if (rafId.current) cancelAnimationFrame(rafId.current);
//     };
//   }, []);

//   // Animate arc
//   useEffect(() => {
//     const animateArc = () => {
//       if (!containerRef.current) return;
//       const path = containerRef.current.querySelector("path[line-id]");
//       if (!path) return;

//       const length = path.getTotalLength();
//       path.style.strokeDasharray = `${length}`;
//       path.style.strokeDashoffset = `${length}`;

//       path.style.transition = "none";
//       path.style.strokeDashoffset = `${length}`;
//       path.getBoundingClientRect();
//       path.style.transition = "stroke-dashoffset 2.5s linear";
//       path.style.strokeDashoffset = "0";

//       setTimeout(() => requestAnimationFrame(animateArc), 2500);
//     };

//     const timer = setTimeout(animateArc, 600);
//     return () => clearTimeout(timer);
//   }, []);

//   const greatCircle = (start, end) => {
//     const points = [];
//     for (let i = 0; i <= 60; i++) {
//       const t = i / 60;
//       const lng = start[0] + t * (end[0] - start[0]);
//       const lat = start[1] + t * (end[1] - start[1]);
//       points.push([lng, lat]);
//     }
//     return points;
//   };

//   return (
//     <div className="dashboard-container">
//       {/* Left Panel */}
//       <div className="left-panel">
//         <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="dashboard-content">
//           <div className="header">
//             <div className="header-icon"><Globe className="icon-large" /></div>
//             <div>
//               <h1 className="header-title">Global Shipment Tracker</h1>
//               <p className="header-subtitle">Drag the globe to explore</p>
//             </div>
//           </div>

//           <motion.div initial={{ scale: 0.95 }} animate={{ scale: 1 }} transition={{ delay: 0.1 }} className="status-card">
//             <div className="card-header">
//               <div className="route-info">
//                 <MapPin className="icon-medium" />
//                 <div><p className="label">Active Route</p><p className="route-text">{route.start.name} to {route.end.name}</p></div>
//               </div>
//               <div className="status-badge"><div className="status-dot" /><span className="status-text">In Transit</span></div>
//             </div>
//             <div className="metrics-grid">
//               <div className="metric-card"><div className="metric-header"><Ship className="icon-small" /><span className="metric-label">Distance</span></div><p className="metric-value">4,370 km</p></div>
//               <div className="metric-card"><div className="metric-header"><Clock className="icon-small" /><span className="metric-label">ETA</span></div><p className="metric-value">5 days</p></div>
//             </div>
//           </motion.div>

//           <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }} className="cargo-card">
//             <div className="card-header"><Package className="icon-medium" /><h3 className="card-title">Cargo Manifest</h3></div>
//             <div className="cargo-details">
//               <div className="detail-item"><span className="detail-label">Vessel Type</span><span className="detail-value">Ultra Large Container Ship</span></div>
//               <div className="detail-item"><span className="detail-label">Capacity</span><span className="detail-value">20,000 TEU</span></div>
//               <div className="detail-item"><span className="detail-label">Current Load</span><span className="detail-value">15,000 TEU (75%)</span></div>
//             </div>
//             <div className="progress-section">
//               <div className="progress-header"><span>Load Progress</span><span>75%</span></div>
//               <div className="progress-bar"><motion.div className="progress-fill" initial={{ width: 0 }} animate={{ width: "75%" }} transition={{ duration: 1.5 }} /></div>
//             </div>
//           </motion.div>

//           <div className="footer"><div className="footer-content"><Waves className="icon-medium" /><span className="footer-text">Powered by real-time satellite tracking</span></div></div>
//         </motion.div>
//       </div>

//       {/* Right Panel - Interactive Globe */}
//       <div className="right-panel">
//         <div className="globe-gradient" />
//         <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8 }} className="globe-container">
//           <div className="globe-wrapper">
//             <div className="glow-effect"><div className="glow-circle" /></div>

//             <div
//               ref={containerRef}
//               className="globe-svg-container"
//               onMouseDown={(e) => handleStart(e.clientX, e.clientY)}
//               onMouseMove={(e) => handleMove(e.clientX, e.clientY)}
//               onMouseUp={handleEnd}
//               onMouseLeave={handleEnd}
//               onTouchStart={(e) => handleStart(e.touches[0].clientX, e.touches[0].clientY)}
//               onTouchMove={(e) => handleMove(e.touches[0].clientX, e.touches[0].clientY)}
//               onTouchEnd={handleEnd}
//               style={{ cursor: isDragging ? "grabbing" : "grab" }}
//             >
//               <ComposableMap
//                 projection="geoOrthographic"
//                 projectionConfig={{ rotate: [rotation[0], rotation[1], 0], scale: 280 }}
//                 width={800}
//                 height={800}
//                 className="globe-map"
//               >
//                 <defs>
//                   <radialGradient id="globeGradient">
//                     <stop offset="0%" stopColor="#1e293b" />
//                     <stop offset="100%" stopColor="#0f172a" />
//                   </radialGradient>
//                 </defs>

//                 <Geographies geography={geoUrl}>
//                   {({ geographies }) =>
//                     geographies.map((geo) => (
//                       <Geography
//                         key={geo.rsmKey}
//                         geography={geo}
//                         fill="url(#globeGradient)"
//                         stroke="#1e40af"
//                         strokeWidth={0.5}
//                         style={{ default: { outline: "none" }, hover: { fill: "#1e40af", outline: "none" } }}
//                       />
//                     ))
//                   }
//                 </Geographies>

//                 <Line coordinates={greatCircle(route.start.coords, route.end.coords)} stroke="url(#arcGradient)" strokeWidth={3} strokeLinecap="round" line-id="shipping-arc" />

//                 <defs>
//                   <linearGradient id="arcGradient" x1="0%" y1="0%" x2="100%" y2="0%">
//                     <stop offset="0%" stopColor="#00ffff" stopOpacity={1}><animate attributeName="stopOpacity" values="0.3;1;0.3" dur="2s" repeatCount="indefinite" /></stop>
//                     <stop offset="100%" stopColor="#00ffff" stopOpacity={0.3}><animate attributeName="stopOpacity" values="0;0.6;0" dur="2s" repeatCount="indefinite" /></stop>
//                   </linearGradient>
//                 </defs>

//                 <motion.circle cx={route.start.coords[0]} cy={route.start.coords[1]} r={6} fill="#10b981" initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.5, type: "spring" }} />
//                 <motion.circle cx={route.end.coords[0]} cy={route.end.coords[1]} r={6} fill="#f59e0b" initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.7, type: "spring" }} />
//                 <motion.circle cx={route.start.coords[0]} cy={route.start.coords[1]} r={10} fill="none" stroke="#10b981" strokeWidth={2} animate={{ r: [10, 35], opacity: [0.8, 0] }} transition={{ duration: 2, repeat: Infinity }} />
//               </ComposableMap>
//             </div>

//             <div className="globe-shadow" />
//             <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1 }} className="legend">
//               <div className="legend-item"><div className="legend-dot origin" /><span>Origin</span></div>
//               <div className="legend-item"><div className="legend-dot destination" /><span>Destination</span></div>
//               <div className="legend-item"><div className="legend-line" /><span>Live Route</span></div>
//             </motion.div>

//             {/* Drag Hint */}
//             <div className="drag-hint">
//               <span>Drag to rotate</span>
//             </div>
//           </div>
//         </motion.div>
//       </div>
//     </div>
//   );
// }


"use client"

import { useEffect, useRef } from "react"
import Globe from "globe.gl"

const GlobeGithubTheme = () => {
  const globeEl = useRef()
  const globeInstance = useRef(null)

  useEffect(() => {
    if (!globeInstance.current && globeEl.current) {
      const globe = Globe({ animateIn: true })(globeEl.current)

      // GitHub dark-mode style
      globe
        .showGraticules(false)
        .backgroundColor("#0d1117") // GitHub dark background
        .showAtmosphere(true)
        .atmosphereColor("#1f6feb") // GitHub blue glow
        .atmosphereAltitude(0.15)

      // Ocean color (GitHub dark slate)
      globe.globeMaterial().color.set("#161b22")

      // Countries
      fetch(
        "https://raw.githubusercontent.com/nvkelso/natural-earth-vector/master/geojson/ne_110m_admin_0_countries.geojson"
      )
        .then((res) => res.json())
        .then((geojson) => {
          globe
            .polygonsData(geojson.features)
            .polygonAltitude(0.008)
            .polygonCapColor(() => "#21262d") // GitHub surface gray
            .polygonSideColor(() => "#30363d") // subtle side shading
            .polygonStrokeColor(() => "#1f6feb") // GitHub blue stroke
        })
        .catch((err) => console.error("[v0] Error loading GeoJSON:", err))

      // Sample arc (China → Sri Lanka)
      const chinaCoords = { lat: 39.9526, lng: 116.4074 }
      const sriLankaCoords = { lat: 6.9271, lng: 80.7789 }

      const arcsData = [
        {
          startLat: chinaCoords.lat,
          startLng: chinaCoords.lng,
          endLat: sriLankaCoords.lat,
          endLng: sriLankaCoords.lng,
          color: ["#1f6feb", "#58a6ff"], // GitHub blues
          labels: { start: "China", end: "Sri Lanka" },
        },
      ]

      globe
        .arcsData(arcsData)
        .arcColor((d) => d.color)
        .arcAltitude(0.35)
        .arcStroke(2)
        .arcDashLength(0.15)
        .arcDashGap(0.03)
        .arcDashAnimateTime(1800)

      // Camera
      globe.pointOfView({ lat: 20, lng: 0, altitude: 2.7 })

      // Controls
      globe.controls().autoRotate = true
      globe.controls().autoRotateSpeed = 0.35
      globe.controls().enableZoom = true

      globeInstance.current = globe
    }
  }, [])

  return (
    <div
      ref={globeEl}
      style={{
        position: "relative",
        width: "100%",
        height: "100vh",
        background: "#0d1117", // GitHub page dark-bg
        overflow: "hidden",
      }}
    ></div>
  )
}

export default GlobeGithubTheme
