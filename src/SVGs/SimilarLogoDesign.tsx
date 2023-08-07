import React from 'react'

export default function SimilarLogoDesign({ width = 0, height = 0 }: { width?: number, height?: number}) {
  const newWidth = width ? width : height / 0.69
  const newHeight = height ? height : width * 0.69

  return (
    <svg width={newWidth} height={newHeight} viewBox="0 0 84 58" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M36.808 41.8876L57.8022 1.71965C58.582 0.227669 60.4365 -0.330715 61.9104 0.482697L81.828 11.4746C83.7615 12.5416 83.9184 15.2614 82.1203 16.5437L41.2086 45.7197C38.6392 47.5521 35.3461 44.6844 36.808 41.8876Z" fill="#F6B047"/>
      <path d="M47.192 16.1123L26.1978 56.2802C25.418 57.7722 23.5634 58.3306 22.0895 57.5172L2.1719 46.5253C0.238387 45.4582 0.0815334 42.7384 1.87956 41.4562L42.7913 12.2802C45.3607 10.4478 48.6538 13.3154 47.192 16.1123Z" fill="#F6D047"/>
    </svg>
  )
}
