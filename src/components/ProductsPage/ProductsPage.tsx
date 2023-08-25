import React from 'react'
import { WrapperStyled } from './ProductsPage.style'
import LazyLoadWrapper from './LazyLoadWrapper'

const products = [
  {
    id: 'hak',
    name: 'Hák',
    desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus illum enim eum molestiae. Doloremque, ipsum inventore repudiandae nihil dolorum officia aliquam! In quidem quae iste delectus laboriosam provident esse temporibus.',
  },
  {
    id: 'omega',
    name: 'Omega',
    desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus illum enim eum molestiae. Doloremque, ipsum inventore repudiandae nihil dolorum officia aliquam! In quidem quae iste delectus laboriosam provident esse temporibus.',
  },
  {
    id: 'z',
    name: 'Z-tko',
    desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus illum enim eum molestiae. Doloremque, ipsum inventore repudiandae nihil dolorum officia aliquam! In quidem quae iste delectus laboriosam provident esse temporibus.',
  },
  {
    id: 'cepicnik',
    name: 'Čepičník',
    desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus illum enim eum molestiae. Doloremque, ipsum inventore repudiandae nihil dolorum officia aliquam! In quidem quae iste delectus laboriosam provident esse temporibus.',
  },
  {
    id: 'M10_hex',
    name: 'M10 hex šroub',
    desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus illum enim eum molestiae. Doloremque, ipsum inventore repudiandae nihil dolorum officia aliquam! In quidem quae iste delectus laboriosam provident esse temporibus.',
  },
  {
    id: 'M10_valcova',
    name: 'M10 šroub',
    desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus illum enim eum molestiae. Doloremque, ipsum inventore repudiandae nihil dolorum officia aliquam! In quidem quae iste delectus laboriosam provident esse temporibus.',
  },
  {
    id: 'M10_valcova_25',
    name: 'M10 šroub 25mm',
    desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus illum enim eum molestiae. Doloremque, ipsum inventore repudiandae nihil dolorum officia aliquam! In quidem quae iste delectus laboriosam provident esse temporibus.',
  },
  {
    id: 'M10',
    name: 'M10 matka',
    desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus illum enim eum molestiae. Doloremque, ipsum inventore repudiandae nihil dolorum officia aliquam! In quidem quae iste delectus laboriosam provident esse temporibus.',
  },
]

export default function ProductsPage() {
  return (
    <WrapperStyled>
      {products.map((product, index) =>
        <LazyLoadWrapper
          key={index}
          model={product.id}
          name={product.name}
          desc={product.desc}
        />
      )}
    </WrapperStyled>
  )
}
