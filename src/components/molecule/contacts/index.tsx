import React from "react";
import { BodyText, Button, Column, NavLink, Row } from "@/components/atom";
import { FOOTER_DATA, SOCIAL_MEDIA_LINKS } from "@/constants";
import { SealAgent } from "@/public/index";

type Props = {
  position?: "left" | "right";
};

const Contacts = (props: Props) => {
  const socialLink = SOCIAL_MEDIA_LINKS.map(({ icon: Icon, id, link }) => link.includes("linkedin") && (
    <NavLink key={id} href={link}>
      <Icon />
    </NavLink>
  ));
  console.log("props position", props.position);
  return (
    <Column className="gap-[1.6rem] mt-[.8rem] sm:items-end text-left sm:text-right max-w-max">
      <BodyText variant="sm" className="text-white">{FOOTER_DATA.main.contacts.title}</BodyText>
      <Column className="gap-[1.2rem]">
        <NavLink href={"mailto:hello@devseal.tech"}>
          <BodyText variant="xs" className="text-grey-200">{FOOTER_DATA.main.contacts.email}</BodyText>
        </NavLink>
        <NavLink href={"mailto:hello@devseal.tech"}>
          <BodyText variant="xs" className="text-grey-200">{FOOTER_DATA.main.contacts.phone}</BodyText>
        </NavLink>
        <Row className={"gap-[1rem] items-center " + (props.position === "right" ? 'justify-end': 'justify-start')}>
          <Row className="gap-[1.5rem] items-center ">{socialLink}</Row>
          <BodyText className="text-grey-200">devSEAL</BodyText>
        </Row>

      </Column>
      <Button href={FOOTER_DATA.header.CTA.link} variant="outlined" className="text-grey-200 mt-[5rem]">
        <Row className="gap-[1.6rem]">
          <SealAgent />
          {FOOTER_DATA.header.CTA.text}
        </Row>
      </Button>
    </Column>
  );
};

export default Contacts;
