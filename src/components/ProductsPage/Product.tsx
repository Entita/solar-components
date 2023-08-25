import React, { Suspense } from 'react'
import RenderModel from './RenderModel';
import { WrapperStyled, MenuWrapperStyled, ProductTitleStyled, MenuContainerStyled, MenuStyled, ProductDownloadStyled, ContentWrapperStyled, CanvasStyled, ProductDescStyled } from './Product.style';
import Image from 'next/image';

export default function Product(props: any) {
  const [menu, setMenu] = React.useState<string>('desc')

  return (
    <WrapperStyled>
      <CanvasStyled>
        <Suspense fallback={<>Loading</>}>
          <RenderModel model={props.model} />
        </Suspense>
      </CanvasStyled>
      <MenuWrapperStyled>
        <ProductTitleStyled>{props.name}</ProductTitleStyled>
        <MenuContainerStyled>
          <MenuStyled selected={menu === 'desc'} onClick={() => menu !== 'desc' && setMenu('desc')}>Popis</MenuStyled>
          <MenuStyled selected={menu === 'drawing'} onClick={() => menu !== 'drawing' && setMenu('drawing')}>Technický výkres</MenuStyled>
        </MenuContainerStyled>
        <ContentWrapperStyled>
          {menu === 'desc' ? (
            <ProductDescStyled>{props.desc}</ProductDescStyled>
          ) : menu === 'drawing' ? (
            <Image src='/technical_drawing.png' alt='technical drawing' height={186} width={271} />
          ) : (
            <>Chyba</>
          )}
        </ContentWrapperStyled>
        <ProductDownloadStyled>Stáhnout PDF</ProductDownloadStyled>
      </MenuWrapperStyled>
    </WrapperStyled>
  )
}
