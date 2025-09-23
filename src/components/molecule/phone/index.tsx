import { BodyText, Column, NavLink, Row, Title } from "@/components/atom";
import { BRAND_COLORS } from "@/constants";
import Link from "next/link";
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
      <Link href={`tel:${phone}`}  className="text-grey-600 hover:text-risd-blue-500">
        <Title variant="md" type="h3" className="text-right">
          <Row className="gap-[2.6rem] items-center">
            {" "}
            <FaPhone size={24} color={BRAND_COLORS.Grey[600]} />
            {phone}
          </Row>
        </Title>
      </Link>
    </Column>
  );
};

export default PhoneUs;
