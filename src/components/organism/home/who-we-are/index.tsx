"use client"
import { BodyText, Container, NavLink, Title } from "@/components/atom";
import { MissionCard, SectionHeaders, VisionCard } from "@/components/molecule";
import { HOME_PAGE_CONTENTS } from "@/constants/home-page-data";
import React from "react";
import TheSeals from "../the-seals";

type Props = {};

const WhoWeAre = (props: Props) => {
  return (
    <Container className="space-y-[4.8rem]">
      <header {...props}>
        <article className="space-y-[2.4rem]">
          <Title variant="lg" type="h2">{HOME_PAGE_CONTENTS.sectionThree.sectionOne.title}</Title>
          <BodyText variant="md">
            At <b>devSEAL</b> Technologies, we build and deliver world-class digital products to
            customers around the world. Our team of software engineers, also referred to as <b>&quot;The SEALs&quot;</b>,
            are uncompromising to our core values of Trust, Integrity, Excellence & Dedication. While we are experts at digital solution
            delivery, we also excel at customer satisfaction as demonstrated in customer feedback & loyalty.
            <br /><br /> We operate from our best cost locations in Africa and the United States, and continue to
            grow our team as we pursue our mission of delivering Information Technology Excellence with Military Precision.
            <br /> <br /> Let us earn your trust by showing you what our SEAL&apos;s are capable of. Reach out today at
            <NavLink href={`mailto:${HOME_PAGE_CONTENTS.sectionThree.sectionOne.email}`} className="text-risd-blue-600 font-bold"> hello@devseal.tech</NavLink>

          </BodyText>
        </article>
      </header>

      <TheSeals />
    </Container>
  );
};

export default WhoWeAre;
