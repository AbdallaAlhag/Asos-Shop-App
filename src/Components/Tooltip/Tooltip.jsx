import { useFloating, useHover, useInteractions } from "@floating-ui/react";
import { useState } from "react";
import styled from "styled-components";

const FloatingToolTip = styled.div`
  background: ${(props) => props.background || "#333"};
  width: ${(props) => props.width || "120px"};
  height: auto;
  color: ${(props) => props.color || "white"};
  padding: ${(props) => props.padding || "12px"};
  pointer-events: none;
  position: absolute;
  z-index: 1000;
  border-radius: ${(props) => props.borderRadius || "8px"};
  box-shadow: ${(props) => props.boxShadow || "0px 4px 8px rgba(0, 0, 0, 0.2)"};
  font-size: ${(props) => props.fontSize || "10px"};
  display: flex;
  align-items: center;
  justify-content: center;
  white-space: nowrap;
`;

// eslint-disable-next-line react/prop-types
function Tooltip({ children, content, tooltipStyles }) {
  const [isOpen, setIsOpen] = useState(false);

  const {
    refs,
    floatingStyles,
    context = "",
  } = useFloating({
    open: isOpen,
    onOpenChange: setIsOpen,
    placement: "bottom",
  });

  const hover = useHover(context);
  const { getReferenceProps, getFloatingProps } = useInteractions([hover]);

  return (
    <>
      <div
        ref={refs.setReference}
        {...getReferenceProps()}
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
      >
        {children}
      </div>
      {isOpen && (
        <FloatingToolTip
          ref={refs.setFloating}
          style={{ ...floatingStyles, top: "5px" }}
          {...getFloatingProps()}
          {...tooltipStyles} // Correctly pass the tooltipStyles here
        >
          {content}
        </FloatingToolTip>
      )}
    </>
  );
}

export default Tooltip;

