"use client";
import { Button, Column, NavCard, NavLink, Row } from "@/components/atom";
import { BRAND_COLORS, ISubLinks, NAV_LINKS } from "@/constants";
import { SealLogoWhite } from "@/public/index";
import Link from "next/link";
import { useState } from "react";

type Props = {};

const NavBarRow = (props: Props) => {
  const [sublinks, setSubLinks] = useState<ISubLinks[]>();
  const navItems = NAV_LINKS.map((items) => {
    return (
      <li key={items.id} onMouseOver={() => setSubLinks(items.subLinks)}>
        <NavLink
          href={
            items.subLinks && items.subLinks?.length > 0 ? "" : items.pathname
          }
          className="w-full"
        >
          {" "}
          {items.name}
        </NavLink>
      </li>
    );
  });

  return (
    <Row className="justify-between hidden lg:flex gap-[2.5rem] items-center">
      <Link href={"/"}>
        <SealLogoWhite />
      </Link>
      <ul>
        <Row className="gap-[2.5rem]">{navItems}</Row>
        {sublinks && (
          <NavCard
            classsName="absolute mt-6 left-1/2 -translate-x-1/2 xl:w-1/4 w-1/2"
            onMouseLeave={() => setSubLinks(undefined)}
          >
            {sublinks.map(({ icon: Icon, id, name, pathname }, index) => (
              <li key={id}>
                <Column className="group/icon space-y-[1.6rem] w-full">
                  <Row className="gap-[1.6rem]  group-hover/icon:bg-brandeis-alt-50 p-[.8rem] rounded-lg">
                    <Icon
                      className={`group-hover/icon:fill-brandeis-blue-600 fill-grey-400 size-[2.4rem]`}
                    />
                    <Link
                      href={pathname}
                      className="group-hover/icon:text-brandeis-blue-600 text-grey-400 w-full"
                    >
                      <div className="w-full">{name}</div>
                    </Link>
                  </Row>
                </Column>
              </li>
            ))}
          </NavCard>
        )}
      </ul>
      <Button href={"/bookings"} variant="primary">
        Book a free consultation
      </Button>
    </Row>
  );
};

export default NavBarRow;
