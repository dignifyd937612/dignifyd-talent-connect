"use client";

import { useRef } from "react";
import { motion } from "motion/react";
import DottedMap from "dotted-map";
import { useTheme } from "next-themes";

export default function WorldMap({
  dots = [],
  markers = [],
  lineColor = "#ac4bff",
}) {
  const svgRef = useRef(null);

  const map = new DottedMap({
    height: 100,
    grid: "diagonal",
  });

  const { theme } = useTheme();

  const svgMap = map.getSVG({
    radius: 0.22,
    color: "#7008e7",
    shape: "circle",
  });

  const projectPoint = (lat, lng) => {
    const x = (lng + 180) * (800 / 360);
    const y = (90 - lat) * (400 / 180);

    return { x, y };
  };

  const createCurvedPath = (start, end) => {
    const midX = (start.x + end.x) / 2;
    const midY = Math.min(start.y, end.y) - 50;

    return `M ${start.x} ${start.y} Q ${midX} ${midY} ${end.x} ${end.y}`;
  };

  return (
    <div className="relative mx-auto w-full max-w-[1200px] overflow-hidden rounded-[24px] bg-white dark:bg-black">
      <div className="relative aspect-[2/1] w-full">
        <img
          src={`data:image/svg+xml;utf8,${encodeURIComponent(svgMap)}`}
          className="pointer-events-none absolute inset-0 block h-full w-full object-contain select-none"
          alt="world map"
          draggable={false}
        />

        <svg
          ref={svgRef}
          viewBox="0 0 800 400"
          preserveAspectRatio="xMidYMid meet"
          className="pointer-events-none absolute inset-0 h-full w-full select-none"
        >
          {dots.map((dot, i) => {
            const startPoint = projectPoint(dot.start.lat, dot.start.lng);

            const endPoint = projectPoint(dot.end.lat, dot.end.lng);

            return (
              <g key={`path-group-${i}`}>
                <motion.path
                  d={createCurvedPath(startPoint, endPoint)}
                  fill="none"
                  stroke="url(#path-gradient)"
                  strokeWidth="1"
                  initial={{
                    pathLength: 0,
                  }}
                  animate={{
                    pathLength: 1,
                  }}
                  transition={{
                    duration: 1,
                    delay: 0.5 * i,
                    ease: "easeOut",
                  }}
                />
              </g>
            );
          })}

          <defs>
            <linearGradient
              id="path-gradient"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="0%"
            >
              <stop offset="0%" stopColor="white" stopOpacity="0" />

              <stop offset="5%" stopColor={lineColor} stopOpacity="1" />

              <stop offset="95%" stopColor={lineColor} stopOpacity="1" />

              <stop offset="100%" stopColor="white" stopOpacity="0" />
            </linearGradient>
          </defs>

          {dots.map((dot, i) => {
            const start = projectPoint(dot.start.lat, dot.start.lng);

            const end = projectPoint(dot.end.lat, dot.end.lng);

            return (
              <g key={`points-group-${i}`}>
                <circle cx={start.x} cy={start.y} r="2" fill={lineColor} />

                <circle
                  cx={start.x}
                  cy={start.y}
                  r="2"
                  fill={lineColor}
                  opacity="0.5"
                >
                  <animate
                    attributeName="r"
                    from="2"
                    to="8"
                    dur="1.5s"
                    begin="0s"
                    repeatCount="indefinite"
                  />

                  <animate
                    attributeName="opacity"
                    from="0.5"
                    to="0"
                    dur="1.5s"
                    begin="0s"
                    repeatCount="indefinite"
                  />
                </circle>

                <circle cx={end.x} cy={end.y} r="2" fill={lineColor} />

                <circle
                  cx={end.x}
                  cy={end.y}
                  r="2"
                  fill={lineColor}
                  opacity="0.5"
                >
                  <animate
                    attributeName="r"
                    from="2"
                    to="8"
                    dur="1.5s"
                    begin="0s"
                    repeatCount="indefinite"
                  />

                  <animate
                    attributeName="opacity"
                    from="0.5"
                    to="0"
                    dur="1.5s"
                    begin="0s"
                    repeatCount="indefinite"
                  />
                </circle>
              </g>
            );
          })}

          {markers.map((marker, index) => {
            const point = projectPoint(marker.lat, marker.lng);

            return (
              <foreignObject
                key={index}
                x={point.x - 10}
                y={point.y - 10}
                width="20"
                height="20"
                style={{
                  overflow: "visible",
                  pointerEvents: "auto",
                }}
              >
                <div className="group relative h-5 w-5 cursor-pointer rounded-full border border-white bg-white shadow-lg transition-transform duration-300 hover:scale-125">
                  <img
                    src={marker.src}
                    alt={marker.label}
                    className="h-full w-full rounded-full object-cover"
                    draggable={false}
                  />

                  <div className="absolute bottom-7 left-1/2 hidden -translate-x-1/2 rounded-md bg-black px-2 py-1 text-xs whitespace-nowrap text-white shadow-xl group-hover:block">
                    {marker.label}
                  </div>
                </div>
              </foreignObject>
            );
          })}
        </svg>
      </div>
    </div>
  );
}
