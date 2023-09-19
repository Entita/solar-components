import React, { Suspense } from 'react'
import Image from 'next/image';
import RenderModel from './RenderModel';
import { WrapperStyled, MenuWrapperStyled, ProductTitleStyled, MenuContainerStyled, MenuStyled, ProductDownloadStyled, ContentWrapperStyled, CanvasStyled, ProductDescStyled, ProductLoadingWrapperStyled } from './Product.style';
import { FadeLoader } from 'react-spinners';
import ZoomInIcon from '@mui/icons-material/ZoomIn';
import { Colors } from '@/utils/Colors';

const ProductLoading = ({ model, canvasSize }: { model: string, canvasSize: { width: number; height: number } }) => {
  const containerRef = React.useRef<HTMLDivElement | null>(null)

  return (
    <ProductLoadingWrapperStyled ref={containerRef}>
      <FadeLoader color={Colors.main.orangish} />
      <Image unoptimized={false} priority src={`/models/${model}_bg.png`} alt={`${model} loading`} width={canvasSize.width - 6} height={canvasSize.height - 6} />
    </ProductLoadingWrapperStyled>
  )
}

export default function Product(props: any) {
  const [menu, setMenu] = React.useState<string>('desc')
  const [size, setSize] = React.useState<{ width: number; height: number }>({ width: 0, height: 0 })
  const [canvasSize, setCanvasSize] = React.useState<{ width: number; height: number }>({ width: 0, height: 0 })
  const [loadingImage, setLoadingImage] = React.useState<boolean>(true)
  const containerRef = React.useRef<HTMLDivElement | null>(null)
  const canvasRef = React.useRef<HTMLDivElement | null>(null)

  const download = (url: any) => {
    const a = document.createElement('a')
    a.href = url
    a.download = url.split('/').pop()
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
  }


  React.useEffect(() => {
    if (!containerRef.current) return

    const container = containerRef.current.getBoundingClientRect()
    setSize({ width: container.width, height: container.height })
  }, [containerRef])

  React.useEffect(() => {
    if (!canvasRef.current) return

    const canvas = canvasRef.current.getBoundingClientRect()
    setCanvasSize({ width: canvas.width, height: canvas.height })
  }, [canvasRef])

  return (
    <WrapperStyled>
      <CanvasStyled ref={canvasRef}>
        <Suspense fallback={<ProductLoading model={props.model} canvasSize={canvasSize} />}>
          <RenderModel model={props.model} />
        </Suspense>
      </CanvasStyled>
      <MenuWrapperStyled>
        <ProductTitleStyled>{props.name}</ProductTitleStyled>
        <MenuContainerStyled>
          <MenuStyled selected={menu === 'desc'} onClick={() => menu !== 'desc' && setMenu('desc')}>Popis</MenuStyled>
          <MenuStyled selected={menu === 'drawing'} onClick={() => menu !== 'drawing' && setMenu('drawing')}>Technický výkres</MenuStyled>
        </MenuContainerStyled>
        <ContentWrapperStyled ref={containerRef}>
          {menu === 'desc' ? (
            <ProductDescStyled>{props.desc}</ProductDescStyled>
          ) : menu === 'drawing' ? (
            <>
              {loadingImage ? (
                <FadeLoader color={Colors.main.orangish} />
              ) : (
                <ZoomInIcon />
              )}
              <Image onLoadingComplete={() => setLoadingImage(false)} unoptimized={false} priority onClick={({ target }: any) => props.setZoomedElement(target)} src={`/models/${props.model}.svg`} alt='technical drawing' width={size.width} height={size.height - 1} />
            </>
          ) : (
            <>Chyba</>
          )}
        </ContentWrapperStyled>
        <ProductDownloadStyled type='submit' onClick={() => download(`avatar.png`)}>Stáhnout PDF</ProductDownloadStyled>
      </MenuWrapperStyled>
    </WrapperStyled>
  )
}
