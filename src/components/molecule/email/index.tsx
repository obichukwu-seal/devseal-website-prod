import { BodyText, Column, NavLink, Row, Title } from "@/components/atom";
import { BRAND_COLORS } from "@/constants";
import Link from "next/link";
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
    <Column className="md:items-end items-center">
      <BodyText variant="md">{title}</BodyText>
      <Link href={`mailto:${email}`} className="text-grey-600 hover:text-risd-blue-500">
        <Title variant="md" type="h3" className="text-right">
          <Row className="gap-[2.6rem] items-center">
            {" "}
            <FaEnvelope size={24} color={BRAND_COLORS.Grey[600]} />
            {email}
          </Row>
        </Title>
      </Link>
    </Column>
  );
};

export default EmailUs;
