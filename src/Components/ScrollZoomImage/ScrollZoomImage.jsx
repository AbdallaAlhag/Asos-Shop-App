import React, { useState, useRef, useCallback } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Icon from "@mdi/react";
import { mdiMagnify } from "@mdi/js";

const ZoomImageContainer = styled.div`
  overflow: hidden;
  position: relative;
  width: ${({ width }) => width || "300px"};
  height: ${({ height }) => height || "200px"};
  cursor: none;
`;

const ZoomImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: none;
  transform-origin: ${({ originX, originY }) => `${originX}px ${originY}px`};
  transition: transform 0.1s ease-out;
`;

const MagnifyIcon = styled(Icon)`
  position: absolute;
  pointer-events: none; /* Allow clicks to pass through the icon */
  color: black;
`;

const ScrollZoomImage = ({ src, alt, width, height }) => {
  const [scale, setScale] = useState(1);
  const [origin, setOrigin] = useState({ originX: 0, originY: 0 });
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const containerRef = useRef(null);

  const handleScroll = useCallback(
    (event) => {
      event.preventDefault(); // Prevent the page from scrolling

      const rect = containerRef.current.getBoundingClientRect();
      const offsetX = event.clientX - rect.left;
      const offsetY = event.clientY - rect.top;

      const delta = Math.sign(event.deltaY);
      const newScale = Math.max(1, scale + delta * 0.1);

      setScale(newScale);
      setOrigin({
        originX: offsetX,
        originY: offsetY,
      });
    },
    [scale]
  );

  const handleMouseMove = (event) => {
    const rect = containerRef.current.getBoundingClientRect();
    setMousePos({
      x: event.clientX - rect.left,
      y: event.clientY - rect.top,
    });
  };

  React.useEffect(() => {
    const currentContainer = containerRef.current;

    if (currentContainer) {
      currentContainer.addEventListener("wheel", handleScroll, {
        passive: false,
      });
    }

    return () => {
      if (currentContainer) {
        currentContainer.removeEventListener("wheel", handleScroll);
      }
    };
  }, [handleScroll]);

  return (
    <ZoomImageContainer
      width={width}
      height={height}
      ref={containerRef}
      onMouseMove={handleMouseMove}
    >
      <ZoomImage
        src={src}
        alt={alt}
        style={{
          transform: `scale(${scale})`,
          transformOrigin: `${origin.originX}px ${origin.originY}px`,
        }}
        originX={origin.originX}
        originY={origin.originY}
      />
      {/* Render the magnifying glass icon at the cursor position */}
      <MagnifyIcon
        path={mdiMagnify}
        size={1.5}
        style={{
          top: `${mousePos.y}px`,
          left: `${mousePos.x}px`,
        }}
      />
    </ZoomImageContainer>
  );
};

ScrollZoomImage.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string,
  height: PropTypes.string,
  width: PropTypes.string,
};

export default ScrollZoomImage;
