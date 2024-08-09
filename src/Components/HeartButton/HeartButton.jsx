import { useRef } from "react";
import mojs from "@mojs/core";
import styled from "styled-components";

const HButton = styled.div`
  width: 40px;
  height: 40px;
  margin: 20px auto; /* Center the button horizontally within its container */
  border-radius: 5px;
  background: none;
  cursor: pointer;
  transition: background 0.5s ease;
  position: relative; /* Make the position relative to the parent */
  border: none; /* Remove default button border */
  padding: 0; /* Remove default button padding */

  &:before,
  &:after {
    transition: background 0.5s ease;
    position: absolute;
    content: "";
    left: 20px; /* Adjust to center the heart shape */
    top: 0;
    width: 20px;
    height: 32px; /* Adjust height to keep the heart shape proportional */
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
border:none;
background: transparent;
`;
// eslint-disable-next-line react/prop-types
const HeartButton = ({ onClick }) => {
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
        <HButton ref={heartRef} onClick={handleAnimation} id="heart">
          {/* Heart shape */}
        </HButton>
    </TempBtn>
  );
};

export default HeartButton;
