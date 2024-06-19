"use client";
import {
  Button,
  CancelButton,
  Column,
  HamburgerBtn,
  NavLink,
  Row,
} from "@/components/atom";
import { NAV_LINKS } from "@/constants";
import { SealLogoNameExcludedColored } from "@/public/index";
import React, { useCallback, useEffect } from "react";

type Props = {
  close: () => void;
  open: () => void;
  isOpen: boolean;
};

const NavBarColumn = ({ open, close, isOpen = false }: Props) => {
  const closeNavBarHandler = useCallback(() => {
    if (isOpen) {
      close();
    }
  }, [isOpen, close]);
  const navItems = NAV_LINKS.map((items, index) => {
    return (
      <li key={items.id}>
        <NavLink href={items.pathname} onClick={closeNavBarHandler}>
          {" "}
          {items.name}
        </NavLink>
      </li>
    );
  });

  useEffect(() => {
    const disableScrollClss = "overflow-hidden";
    if (isOpen) {
      document.body.classList.add(disableScrollClss);
    } else {
      document.body.classList.remove(disableScrollClss);
    }
  }, [isOpen]);

  return (
    <Column
      className={`gap-[2.5rem] w-full z-[999] justify-between flex lg:hidden px-10 h-full bg-white ${
        isOpen ? "absolute top-0 left-0 " : ""
      }`}
    >
      <span>
        <Row className="justify-between gap-[2.5rem]">
          <SealLogoNameExcludedColored />
          {!isOpen ? (
            <HamburgerBtn onClick={open} />
          ) : (
            <CancelButton onClick={close} />
          )}
        </Row>
        <ul
          className={`overflow-hidden bg-white w-full px-10  ${
            isOpen ? "h-full py-4" : "h-0"
          } transition-all duration-300`}
        >
          <Column className="gap-[2.5rem]">{navItems}</Column>
        </ul>
      </span>

      <span className="py-1">
        <Button href={"/bookings"} variant="primary">
          Book a free consultation
        </Button>
      </span>
    </Column>
  );
};

export default NavBarColumn;
