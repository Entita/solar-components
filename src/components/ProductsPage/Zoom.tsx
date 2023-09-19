import React from 'react'
import styled from "styled-components";

const ZoomWrapperBackgroundStyled = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9;
  backdrop-filter: blur(2px) brightness(.6);
  cursor: zoom-out;
`;

const ZoomWrapperStyled = styled.div`
  background-color: white;
`;

export default function Zoom({ setZoomedElement, children } : { setZoomedElement: Function, children: any}) {
  const ref = React.useRef<any>(null)
  
  React.useEffect(() => {
    if (!ref.current) return
    ref.current.innerHTML = ''
    
    const clonedElement = children.cloneNode(true)
    const windowHeight = window.innerHeight - 100
    const windowWidth = window.innerWidth - 200
    const elementHeight = children.clientHeight
    const elementWidth = children.clientWidth

    let scale = windowHeight / elementHeight
    const isElementInViewport = windowWidth - elementWidth * scale > 0
    if (!isElementInViewport) scale = windowWidth / (elementWidth * scale) * scale

    const zoomIcon = clonedElement.querySelector('#zoom')
    if (zoomIcon) clonedElement.removeChild(zoomIcon)
    ref.current.style.scale = scale
    ref.current.append(clonedElement)
  }, [ref, children])

  return (
    <ZoomWrapperBackgroundStyled onClick={() => setZoomedElement(null)}>
      <ZoomWrapperStyled ref={ref} />
    </ZoomWrapperBackgroundStyled>
  )
}
