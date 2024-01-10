import React from 'react'

export default function FistIcon({ width = 0, height = 0, color = '#FDE17C' }: { width?: number, height?: number, color?: string }) {
  const newWidth = width ? width : height / 1.27
  const newHeight = height ? height : width * 1.27

  return (
    <svg width={newWidth} height={newHeight} viewBox="0 0 110 140" fill="none" xmlns="http://www.w3.org/2000/svg" shapeRendering='crispEdges'>
      <g filter="url(#filter0_d_21_264)">
      <path d="M49.8126 1.36263C43.7682 -0.616027 37.2574 2.68737 35.2768 8.73765L31.6893 19.6966L29.5592 26.2036L25.7101 37.9616C25.0524 39.9708 22.8721 41.077 20.8649 40.42C18.8577 39.7629 17.7536 37.5815 18.4113 35.5723L20.4068 29.4764L17.7935 30.5167C13.5515 32.212 10.2903 35.6944 8.87022 40.0324L6.03013 48.7083C3.19004 57.3841 4.35414 66.8652 9.1982 74.5935L17.4632 87.84L10.2883 109.758C8.96539 113.799 11.1583 118.132 15.1955 119.453L51.6899 131.4C55.727 132.722 60.0575 130.524 61.3804 126.483L69.2504 102.442C81.3679 101.606 92.3557 93.5749 96.3692 81.3145L102.348 63.0495L103.544 59.3965L104.74 55.7435C106.721 49.6933 103.424 43.1792 97.3791 41.2006C94.5508 40.2747 91.6449 40.5115 89.1382 41.612C90.5583 35.808 87.2943 29.8103 81.5236 27.9212C78.6953 26.9954 75.7894 27.2322 73.2826 28.3327C74.7028 22.5287 71.4388 16.531 65.6681 14.6419C62.8398 13.7161 59.9339 13.9529 57.4271 15.0534C58.8473 9.24938 55.5832 3.25169 49.8126 1.36263Z" fill={color}/>
      </g>
    <defs>
      <filter id="filter0_d_21_264" x="0.504547" y="0.789062" width="108.811" height="138.995" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
        <feFlood floodOpacity="0" result="BackgroundImageFix"/>
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
        <feOffset dy="4"/>
        <feGaussianBlur stdDeviation="2"/>
        <feComposite in2="hardAlpha" operator="out"/>
        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_21_264"/>
        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_21_264" result="shape"/>
      </filter>
    </defs>
    </svg>
  )
}
