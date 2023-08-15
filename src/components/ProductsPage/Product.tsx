import React from 'react'
import { ProductWrapperStyled, ProductInfoWrapperStyled, ProductTitleStyled, ProductDescStyled, ProductDownloadStyled } from './ProductsPage.style'
import RenderModel from './RenderModel'

export default function Product(props: any) {
  return (
    <ProductWrapperStyled>
      <RenderModel model={props.model} />
      <ProductInfoWrapperStyled>
        <ProductTitleStyled>{props.name}</ProductTitleStyled>
        <ProductDescStyled>{props.desc}</ProductDescStyled>
        <ProductDownloadStyled>Download</ProductDownloadStyled>
      </ProductInfoWrapperStyled>
    </ProductWrapperStyled>
  )
}
