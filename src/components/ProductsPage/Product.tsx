import React, { Suspense } from 'react'
import RenderModel from './RenderModel';
import { WrapperStyled, MenuWrapperStyled, ProductTitleStyled, MenuContainerStyled, MenuStyled, ProductDownloadStyled, ContentWrapperStyled, CanvasStyled, ProductDescStyled } from './Product.style';
import Image from 'next/image';
import { FadeLoader } from 'react-spinners';
import { Colors } from '@/utils/Colors';

export default function Product(props: any) {
  const [menu, setMenu] = React.useState<string>('desc')

  const download = (url: any) => {
    const a = document.createElement('a')
    a.href = url
    a.download = url.split('/').pop()
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
  }

  return (
    <WrapperStyled>
      <CanvasStyled>
        <Suspense fallback={<FadeLoader color={Colors.main.orangish} />}>
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
            // eslint-disable-next-line @next/next/no-img-element
            <img src={`/models/${props.model}.png`} alt='technical drawing' />
          ) : (
            <>Chyba</>
          )}
        </ContentWrapperStyled>
        <ProductDownloadStyled type='submit' onClick={() => download(`avatar.png`)}>Stáhnout PDF</ProductDownloadStyled>
      </MenuWrapperStyled>
    </WrapperStyled>
  )
}
