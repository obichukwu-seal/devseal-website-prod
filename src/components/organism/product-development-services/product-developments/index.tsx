import { Container } from '@/components/atom'
import { SectionHeaders, SlideBox } from '@/components/molecule'
import { PRODUCT_DEVELOPMENT_SERVICE } from '@/constants/product-development-services'
import React from 'react'

type Props = {}

const ProductDevelopments = (props: Props) => {
    const SECTION_CONTENTS = PRODUCT_DEVELOPMENT_SERVICE.sectionFour
  return (
    <Container className='space-y-[8rem] pt-[4.8rem] pb-[8rem]'>
        <SectionHeaders title={SECTION_CONTENTS.title} className='max-w-[47.4rem]' titleClassName='text-white' />
            <SlideBox data={SECTION_CONTENTS.sectionItems}/>
    </Container>
  )
}

export default ProductDevelopments