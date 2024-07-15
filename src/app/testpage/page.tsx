"use client"
import { Container, HeroHeadingTitle, HeroSlider, NavCard } from "@/components"
import { AiHand,HomepageHeroImage, IndustryImageHero }  from "@/public/index"

const images ={HomepageHeroImage,IndustryImageHero}
const TestPage = () => {
  return (
    <>
    <Container>
      <HeroHeadingTitle title="Comprehensive Product Development Services" subtitle="Turn your ideas into successful products with our dedicated development teams." type="left"  cta={{
          pathname: "",
          text: "Get Started"
        }}/>
      <HeroSlider images={images}/>
    </Container>
        </>
  )
}

export default TestPage