import { useFloating, useHover, useInteractions } from "@floating-ui/react";
import { useState } from "react";
import styled from "styled-components";

const FloatingToolTip = styled.div`
  background: #333;
  width: 120px;
  height: auto;
  color: white;
  padding: 12px;
  pointer-events: none;
  position: absolute;
  z-index: 1000;
  border-radius: 8px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
  font-size: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  white-space: nowrap;
`;

// eslint-disable-next-line react/prop-types
function Tooltip({ children, content }) {
  const [isOpen, setIsOpen] = useState(false);

  const { refs, floatingStyles, context } = useFloating({
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
        >
          {content}
        </FloatingToolTip>
      )}
    </>
  );
}


export default Tooltip;