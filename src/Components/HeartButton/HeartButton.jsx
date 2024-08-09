/* eslint-disable react/prop-types */
import { useRef } from "react";
import mojs from "@mojs/core";
import styled from "styled-components";

export const HButton = styled.div`
  width: ${({ width }) => width || "40px"};
  height: ${({ height }) => height || "40px"};
  margin: ${({ margin }) => margin || "20px auto"}; /* Default to centered */
  position: ${({ position }) =>
    position || "relative"}; /* Default to relative */
  top: ${({ top }) => top || "auto"}; /* Custom top positioning */
  left: ${({ left }) => left || "auto"}; /* Custom left positioning */
  border-radius: 5px;
  background: none;
  cursor: pointer;
  transition: background 0.5s ease;
  border: none;
  padding: 0;

  &:hover {
    animation: bounce 0.3s ease-in-out;
  }

  @keyframes bounce {
    0%,
    100% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(5px);
    }
  }
  &:before,
  &:after {
    transition: background 0.5s ease;
    position: absolute;
    content: "";
    left: ${({ width }) =>
      width ? `${parseInt(width) / 2}px` : "20px"}; /* Adjust to center */
    top: 0;
    width: ${({ width }) => (width ? `${parseInt(width) / 2}px` : "20px")};
    height: ${({ height }) =>
      height
        ? `${parseInt(height) * 0.8}px`
        : "32px"}; /* Proportional height */
    background: dimgrey;
    border-radius: 50px 50px 0 0;
    transform: rotate(-45deg);
    transform-origin: 0 100%;
  }

  &:after {
    left: 0;
    transform: rotate(45deg);
    transform-origin: 100% 100%;
  }

  &.active:before,
  &.active:after {
    background: red !important;
  }
`;
const TempBtn = styled.button`
  border: none;
  background: transparent;
`;
// eslint-disable-next-line react/prop-types
const HeartButton = ({
  onClick,
  width,
  height,
  margin,
  position,
  top,
  left,
}) => {
  const heartRef = useRef(null);

  // Function to handle the animation
  const handleAnimation = () => {
    const el = heartRef.current;

    // Mo.js timeline and tweens
    const scaleCurve = mojs.easing.path(
      "M0,100 L25,99.9999983 C26.2328835,75.0708847 19.7847843,0 100,0"
    );
    const timeline = new mojs.Timeline();

    const burst1 = new mojs.Burst({
      parent: el,
      radius: { 0: 100 },
      angle: { 0: 45 },
      y: -10,
      count: 10,
      children: {
        shape: "circle",
        radius: 30,
        fill: ["red", "white"],
        strokeWidth: 15,
        duration: 500,
      },
    });

    const burst2 = new mojs.Burst({
      parent: el,
      radius: { 0: 100 },
      angle: { 0: -45 },
      y: -10,
      count: 10,
      children: {
        shape: "circle",
        radius: 30,
        fill: ["white", "red"],
        strokeWidth: 15,
        duration: 400,
      },
    });

    const scaleTween = new mojs.Tween({
      duration: 900,
      onUpdate: (progress) => {
        const scaleProgress = scaleCurve(progress);
        el.style.transform = `scale3d(${scaleProgress}, ${scaleProgress}, 1)`;
      },
    });

    timeline.add(burst1, burst2, scaleTween);

    // Toggle active class and play animation
    if (el.classList.contains("active")) {
      el.classList.remove("active");
    } else {
      timeline.play();
      el.classList.add("active");
    }
  };

  return (
    <TempBtn onClick={onClick}>
      <HButton
        ref={heartRef}
        width={width}
        height={height}
        margin={margin}
        position={position}
        top={top}
        left={left}
        onClick={handleAnimation}
        id="heart"
      >
        {/* Heart shape */}
      </HButton>
    </TempBtn>
  );
};

export default HeartButton;
