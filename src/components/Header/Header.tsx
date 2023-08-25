'use client'
import React from 'react'
import { MenuWrapperStyled, NavbarListStyled, NavbarWrapperStyled, QAButtonStyled } from './Header.style'
import { usePathname } from 'next/navigation'
import FullLogo from '@/SVGs/FullLogo'
import SimilarLogoDesign from '@/SVGs/SimilarLogoDesign'
import Link from 'next/link'

export default function Header() {
  const activeMenu = React.useRef<HTMLLIElement | null>(null)
  const menuRef = React.useRef<HTMLUListElement | null>(null)
  const qaRef = React.useRef<HTMLButtonElement | null>(null)
  const [hoveredMenuDetails, setHoveredMenuDetails] = React.useState<{ width: number; anotherWidth: number; left: number; anotherLeft: number }>({ width: 0, anotherWidth: 0, left: 0, anotherLeft: 0 })
  const currRoute = usePathname().split('/')[1]
  const [showSimilarLogo, setShowSimilarLogo] = React.useState<Boolean>(window.innerWidth > 1320)
  const [firstTimeOnRoute, setFirstTimeOnRoute] = React.useState<Boolean>(true)
  const [menuClicked, setMenuClicked] = React.useState<Boolean>(false)
  const menuRoutes = [
    {
      route: '',
      name: 'domů',
    },
    {
      route: 'kontakt',
      name: 'kontakt',
    },
    {
      route: 'montaz',
      name: 'montáž',
    },
    {
      route: 'produkty',
      name: 'produkty',
    },
  ]

  const onHover = (element: any) => {
    if (menuClicked || element.target === menuRef.current || element.target.parentNode === qaRef.current || menuRef.current === null || activeMenu.current === null) return
    if (element.target === qaRef.current) {
      const activeMenuDetails = activeMenu.current.getBoundingClientRect()
      const menuDetails = menuRef.current.getBoundingClientRect()
      const offsetX = activeMenuDetails.x - menuDetails.x
  
      setHoveredMenuDetails({
        left: offsetX,
        anotherLeft: offsetX,
        width: activeMenuDetails.width,
        anotherWidth: activeMenuDetails.width - 15,
      })
    } else {
      const hoveredMenuItemDetails = element.target.getBoundingClientRect()
      const menuDetails = menuRef.current.getBoundingClientRect()
      const anotherOffsetX = hoveredMenuItemDetails.x - menuDetails.x
      let anotherWidth = hoveredMenuItemDetails.width
      if (element.target === activeMenu.current || element.target.parentElement === activeMenu.current) anotherWidth -= 15
  
      setHoveredMenuDetails({
        left: hoveredMenuDetails.left,
        width: hoveredMenuDetails.width,
        anotherLeft: anotherOffsetX,
        anotherWidth: anotherWidth,
      })
    }
  }

  const onLeave = () => {
    if (activeMenu.current === null || menuRef.current === null || menuClicked) return

    const activeMenuDetails = activeMenu.current.getBoundingClientRect()
    const menuDetails = menuRef.current.getBoundingClientRect()
    const offsetX = activeMenuDetails.x - menuDetails.x

    setHoveredMenuDetails({
      left: offsetX,
      anotherLeft: offsetX,
      width: activeMenuDetails.width,
      anotherWidth:activeMenuDetails.width - 15,
    })
  }

  React.useEffect(() => {
    if (activeMenu.current === null || menuRef.current === null) return

    const activeMenuDetails = activeMenu.current.getBoundingClientRect()
    const menuDetails = menuRef.current.getBoundingClientRect()
    const offsetX = activeMenuDetails.x - menuDetails.x

    setHoveredMenuDetails({
      left: offsetX,
      anotherLeft: offsetX,
      width: activeMenuDetails.width,
      anotherWidth: activeMenuDetails.width - 15,
    })

    const resizeWindow = () => {
      let newState = false
      if (window.innerWidth > 1320) newState = true
      if (showSimilarLogo !== newState) setShowSimilarLogo(newState)
      if (activeMenu.current === null || menuRef.current === null) return

      const activeMenuDetails = activeMenu.current.getBoundingClientRect()
      const menuDetails = menuRef.current.getBoundingClientRect()
      const offsetX = activeMenuDetails.x - menuDetails.x
  
      setHoveredMenuDetails({
        left: offsetX,
        anotherLeft: offsetX,
        width: activeMenuDetails.width,
        anotherWidth: activeMenuDetails.width - 15,
      })
    }

    window.addEventListener('resize', resizeWindow);
    return () => window.removeEventListener('resize', resizeWindow)
  }, [activeMenu, showSimilarLogo])

  React.useEffect(() => {
    setMenuClicked(false)
  }, [currRoute])

  if (window.location.hash === '#faq' && firstTimeOnRoute) {
    setFirstTimeOnRoute(false)
    if (currRoute === '')
      setTimeout(() => {
        window.document.getElementById('faq')?.scrollIntoView({ behavior: 'smooth' })
      }, 50)
    else window.document.getElementById('faq')?.scrollIntoView({ behavior: 'smooth' })
  }
  
  return (
    <MenuWrapperStyled>
      <FullLogo height={118} />
      <NavbarWrapperStyled ref={menuRef} width={hoveredMenuDetails.width} anotherWidth={hoveredMenuDetails.anotherWidth} left={hoveredMenuDetails.left} anotherLeft={hoveredMenuDetails.anotherLeft} onMouseMove={onHover} onMouseLeave={onLeave} >
        {menuRoutes.map((menuRouteObj: any, index: number) => {
          const conditionalRef = menuRouteObj.route === currRoute ? { ref: activeMenu } : {}

          return (
            <NavbarListStyled key={index} active={menuRouteObj.route === currRoute} {...conditionalRef}>
              <Link onClick={({ target }: any) => {
                setMenuClicked(true)
                setHoveredMenuDetails({
                  left: target.parentNode.getBoundingClientRect().left - (menuRef.current?.getBoundingClientRect().x || 0),
                  width: target.parentNode.getBoundingClientRect().width,
                  anotherLeft: hoveredMenuDetails.anotherLeft,
                  anotherWidth: target.parentNode.getBoundingClientRect().width - 15,
                })
              }} href={`/${menuRouteObj.route}`}>{menuRouteObj.name}</Link>
            </NavbarListStyled>
          )}
        )}
        <QAButtonStyled ref={qaRef}>
          <Link href='/#faq' onClick={() => setFirstTimeOnRoute(true)}>FAQ</Link>
        </QAButtonStyled>
      </NavbarWrapperStyled>
      {showSimilarLogo && <SimilarLogoDesign height={40} />}
    </MenuWrapperStyled>
  )
}
