import { BodyText, Column, NavLink, Row, Title } from "@/components/atom";
import { BRAND_COLORS } from "@/constants";
import React from "react";
import { FaPhone } from "react-icons/fa";

type Props = {
  phone?: string;
  title?: string;
};

const PhoneUs = ({
  title = "Phone us at",
  phone = "+234 201 330 0447",
  ...props
}: Props) => {
  return (
    <Column className="md:items-end items-center">
      <BodyText variant="md">{title}</BodyText>
      <NavLink href={`tel:${phone}`}>
        <Title variant="md" type="h3" className="text-right">
          <Row className="gap-[2.6rem] items-center">
            {" "}
            <FaPhone size={24} color={BRAND_COLORS.Grey[600]} />
            {phone}
          </Row>
        </Title>
      </NavLink>
    </Column>
  );
};

export default PhoneUs;
