import React from 'react'

export default function LightningIcon({ width = 0, height = 0 }: { width?: number, height?: number}) {
  const newWidth = width ? width : height / 1.307
  const newHeight = height ? height : width * 1.307

  return (
    <svg width={newWidth} height={newHeight} viewBox="0 0 104 136" fill="none" xmlns="http://www.w3.org/2000/svg" shapeRendering='crispEdges'>
      <g filter="url(#filter0_d_21_266)">
        <path d="M83.3432 11.1519C84.8179 7.72699 83.7181 3.72713 80.6938 1.52721C77.6694 -0.672715 73.5453 -0.472722 70.721 1.97719L6.73477 57.9752C4.23531 60.1751 3.33551 63.7 4.51025 66.7999C5.685 69.8998 8.68435 71.9997 12.0086 71.9997H39.8776L20.6568 116.848C19.1821 120.273 20.2818 124.273 23.3062 126.473C26.3305 128.673 30.4547 128.473 33.279 126.023L97.2652 70.0248C99.7647 67.8249 100.664 64.3 99.4897 61.2001C98.315 58.1002 95.3406 56.0253 91.9914 56.0253H64.1224L83.3432 11.1519Z" fill="#FDE17C"/>
      </g>
      <defs>
        <filter id="filter0_d_21_266" x="0" y="0" width="104" height="136" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix"/>
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
          <feOffset dy="4"/>
          <feGaussianBlur stdDeviation="2"/>
          <feComposite in2="hardAlpha" operator="out"/>
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_21_266"/>
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_21_266" result="shape"/>
        </filter>
      </defs>
    </svg>
  )
}
