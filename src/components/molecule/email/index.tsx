import { BodyText, Column, NavLink, Row, Title } from "@/components/atom";
import { BRAND_COLORS } from "@/constants";
import React from "react";
import { FaEnvelope } from "react-icons/fa";

type Props = {
  email?: string;
  title?: string;
};

const EmailUs = ({
  title = "Email us at",
  email = "hello@devseal.tech",
  ...props
}: Props) => {
  return (
    <Column className="items-end">
      <BodyText variant="md">{title}</BodyText>
      <NavLink href={`mailto:${email}`}>
        <Title variant="md" type="h3" className="text-right">
          <Row className="gap-[2.6rem] items-center">
            {" "}
            <FaEnvelope size={24} color={BRAND_COLORS.Grey[600]} />
            {email}
          </Row>
        </Title>
      </NavLink>
    </Column>
  );
};

export default EmailUs;
