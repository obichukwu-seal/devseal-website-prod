import React from "react";
import { BodyText, Column, NavLink, Row } from "@/components/atom";
import { SOCIAL_MEDIA_LINKS } from "@/constants";

type Props = {};

const Contacts = (props: Props) => {
  const socialLink = SOCIAL_MEDIA_LINKS.map(({ icon: Icon, id, link }) => (
    <NavLink key={id} href={link}>
      <Icon />
    </NavLink>
  ));
  return (
    <Column className="gap-[2.5rem] mt-[.8rem] sm:items-end text-left sm:text-right">
      <NavLink href={"mailto:hello@devseal.tech"}>
        <BodyText variant="xs">hello@devseal.tech</BodyText>
      </NavLink>
      <Row className="gap-[1rem] items-center">
        <Row className="gap-[1.5rem] items-center">{socialLink}</Row>
        <BodyText>devSEAL</BodyText>
      </Row>
    </Column>
  );
};

export default Contacts;
