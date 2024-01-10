import React from 'react'

export default function ParachuteIcon({ width = 0, height = 0, color = '#FDE17C' }: { width?: number, height?: number, color?: string }) {
  const newWidth = width ? width : height / 1
  const newHeight = height ? height : width * 1

  return (
    <svg width={newWidth} height={newHeight} viewBox="0 0 135 136" fill="none" xmlns="http://www.w3.org/2000/svg" shapeRendering='crispEdges'>
      <g filter="url(#filter0_d_21_265)">
        <path d="M99.5827 48C99.6582 46.675 99.7085 45.35 99.7085 44C99.7085 31.25 95.7076 20 89.593 12.1C83.4784 4.225 75.6025 0 67.5 0C59.3975 0 51.5216 4.225 45.407 12.1C39.2924 20 35.2915 31.25 35.2915 44C35.2915 45.35 35.3418 46.675 35.4173 48H63.4739V80H55.4218C53.6604 80 51.9745 80.375 50.4647 81.05L20.2441 48H27.3652C27.2897 46.675 27.2394 45.35 27.2394 44C27.2394 28 32.8255 13.7 41.6074 4.175C18.684 12.325 7.76327 30.65 4.13982 43.4C3.46042 45.775 5.34764 48 7.83876 48H9.34854L44.6521 86.575C43.8217 88.2 43.3436 90.05 43.3436 92V116C43.3436 122.625 48.7536 128 55.4218 128H79.5782C86.2464 128 91.6564 122.625 91.6564 116V92C91.6564 90.05 91.1783 88.2 90.3479 86.575L125.651 48H127.161C129.652 48 131.54 45.775 130.86 43.4C127.237 30.65 116.316 12.325 93.3926 4.175C102.174 13.7 107.761 28.025 107.761 44C107.761 45.35 107.71 46.675 107.635 48H114.756L84.5353 81.05C83.0255 80.375 81.3396 80 79.5782 80H71.5261V48H99.5827Z" fill={color}/>
      </g>
      <defs>
        <filter id="filter0_d_21_265" x="0" y="0" width="135" height="136" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix"/>
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
          <feOffset dy="4"/>
          <feGaussianBlur stdDeviation="2"/>
          <feComposite in2="hardAlpha" operator="out"/>
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_21_265"/>
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_21_265" result="shape"/>
        </filter>
      </defs>
    </svg>
  )
}
