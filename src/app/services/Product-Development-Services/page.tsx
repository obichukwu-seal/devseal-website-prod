import { ProductDevelopments, ProductHero, Range } from '@/components'
import React from 'react'

type Props = {}

const ProductDevelopmentServices = (props: Props) => {
  return (
    <main>
        <ProductHero/>
        <ProductDevelopments/>
        <Range />
    </main>
  )
}

export default ProductDevelopmentServices