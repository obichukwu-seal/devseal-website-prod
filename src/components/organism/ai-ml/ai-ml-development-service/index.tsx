import { Container } from '@/components/atom'
import { SectionHeaders, SlideBox } from '@/components/molecule'
import { AI_ML_CONTENTS } from '@/constants'
import React from 'react'

type Props = {}

const AimlDevelopmentService = (props: Props) => {
    const SECTION_CONTENTS = AI_ML_CONTENTS.sectionFour
  return (
    <Container className='space-y-[8rem] pt-[4.8rem] pb-[8rem]'>
        <SectionHeaders title={SECTION_CONTENTS.title} className='max-w-[47.4rem]' titleClassName='text-white'/>
            <SlideBox data={SECTION_CONTENTS.sectionItems}/>
    </Container>
  )
}

export default AimlDevelopmentService