import { BodyText, Column, NavLink, Row, Title } from "@/components/atom";
import { SOCIAL_MEDIA_LINKS } from "@/constants";
import React from "react";

type Props = {};

const ConnectWithUS = ({ ...props }: Props) => {
  const socialLink = SOCIAL_MEDIA_LINKS.map(({ icon: Icon, id, link }) => link.includes("linkedin") && (
    <NavLink key={id} href={link}>
      <Icon />
    </NavLink>
  ));
  return (
    <Column className="items-end gap-[1.6rem]">
      <BodyText variant="md">Connect on socials</BodyText>
      <Column className="gap-[.8remrem] items-end">
        <Row className="gap-[1.6rem] items-center">{socialLink}</Row>
        <Title variant="md" type="h3">
          {" "}
          <span className="text-grey-600">devSEAL</span>
        </Title>
      </Column>
    </Column>
  );
};

export default ConnectWithUS;
