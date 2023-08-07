import React from 'react'

export default function BottomArrow({ width = 0, height = 0, open }: { width?: number, height?: number, open: Boolean}) {
  const newWidth = width ? width : height / 0.452
  const newHeight = height ? height : width * 0.452

  return ( 
    <svg style={{ transform: `${open ? 'rotate(180deg)' : 'rotate(0)'}`, transition: 'transform .4s ease' }} width={newWidth} height={newHeight} viewBox="0 0 31 14" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M1 1L14.8624 12.4724C15.2324 12.7785 15.7676 12.7785 16.1376 12.4724L30 1" stroke="black" strokeWidth="2" strokeLinecap="round"/>
    </svg>
  )
}
