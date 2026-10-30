import React, { useRef, useState } from "react";

interface ThreeDCardProps {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  maxTilt?: number;
  scale?: number;
  glareColor?: string;
}

export function ThreeDCard({
  children,
  className = "",
  style,
  maxTilt = 10,
  scale = 1.02,
  glareColor = "rgba(255,255,255,0.06)",
}: ThreeDCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [transform, setTransform] = useState("perspective(800px) rotateX(0deg) rotateY(0deg) scale(1)");
  const [glareStyle, setGlareStyle] = useState<React.CSSProperties>({ opacity: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    const dx = (e.clientX - cx) / (rect.width / 2);
    const dy = (e.clientY - cy) / (rect.height / 2);
    setTransform(
      `perspective(800px) rotateX(${-dy * maxTilt}deg) rotateY(${dx * maxTilt}deg) scale(${scale})`,
    );
    const glareX = ((e.clientX - rect.left) / rect.width) * 100;
    const glareY = ((e.clientY - rect.top) / rect.height) * 100;
    setGlareStyle({
      opacity: 1,
      background: `radial-gradient(circle at ${glareX}% ${glareY}%, ${glareColor} 0%, transparent 60%)`,
    });
  };

  const handleMouseLeave = () => {
    setTransform("perspective(800px) rotateX(0deg) rotateY(0deg) scale(1)");
    setGlareStyle({ opacity: 0 });
  };

  return (
    <div
      ref={cardRef}
      className={`relative ${className}`}
      style={{ ...style, transform, transition: "transform 0.18s ease, box-shadow 0.18s ease" }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div
        className="pointer-events-none absolute inset-0 rounded-[inherit] z-10 transition-opacity duration-300"
        style={glareStyle}
      />
      {children}
    </div>
  );
}
