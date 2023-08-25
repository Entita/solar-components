import React from 'react'

export default function useOnScreen(ref: any) {
  const [isIntersecting, setIntersecting] = React.useState(false)

  React.useEffect(() => {
    const observer = new IntersectionObserver(([entry]) =>
      setIntersecting(entry.isIntersecting),
    )

    if (ref.current) observer.observe(ref.current)
  }, [])

  return isIntersecting
}
