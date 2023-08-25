import React from 'react'
import useOnScreen from '@/hooks/useOnScreen';
import dynamic from 'next/dynamic';
import { CanvasLoadingStyled, ContentLoadingStyled, ContentMenuFullLoadingStyled, ContentMenuHalfLoadingStyled, ContentMenuLoadingStyled, ContentMenuWrapperLoadingStyled, ContentTitleLoadingStyled, ContentWrapperLoadingStyled, DownloadLoadingStyled, ProductLoadingWrapperStyled } from './ProductsPage.style';
const Product = dynamic(() => import('./Product'))

export default function LazyLoadWrapper(props: any) {
  const ref = React.useRef<any>()
  const isOnScreen = useOnScreen(ref)
  const [wasOnScreen, setWasOnScreen] =  React.useState(false)

  React.useEffect(() => {
    if (!wasOnScreen) {
      setTimeout(() => {
        setWasOnScreen(isOnScreen)
      }, 200)
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOnScreen])

  return (
    <div ref={ref}>
      {wasOnScreen ? (
        <Product {...props} />
      ) : (
        <ProductLoadingWrapperStyled>
          <CanvasLoadingStyled />
          <ContentLoadingStyled>
            <ContentTitleLoadingStyled />
            <ContentMenuWrapperLoadingStyled>
              <ContentMenuLoadingStyled />
              <ContentMenuLoadingStyled />
            </ContentMenuWrapperLoadingStyled>
            <ContentWrapperLoadingStyled>
              <ContentMenuHalfLoadingStyled />
              <ContentMenuFullLoadingStyled />
              <ContentMenuHalfLoadingStyled />
              <ContentMenuFullLoadingStyled />
              <ContentMenuHalfLoadingStyled />
            </ContentWrapperLoadingStyled>
            <DownloadLoadingStyled />
          </ContentLoadingStyled>
        </ProductLoadingWrapperStyled>
      )}
    </div>
  )
}
