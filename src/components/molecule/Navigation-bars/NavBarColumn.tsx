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
import Link from "next/link";
import React, { useCallback, useEffect, useState } from "react";
import { FaChevronDown } from "react-icons/fa";

type Props = {
  close: () => void;
  open: () => void;
  isOpen: boolean;
};

const NavBarColumn = ({ open, close, isOpen = false }: Props) => {
  const [dropDownIndex, setDropDownIndex] = useState(0);
  const closeNavBarHandler = useCallback(() => {
    if (isOpen) {
      close();
      setDropDownIndex(0);
    }
  }, [isOpen, close]);
  const navItems = NAV_LINKS.map((items, index) => {
    return (
      <li key={items.id}>
        <NavLink
          href={
            items.subLinks && items.subLinks?.length > 0 ? "" : items.pathname
          }
          onClick={
            items.subLinks && items.subLinks?.length > 0
              ? () => {
                  setDropDownIndex(index);
                }
              : closeNavBarHandler
          }
        >
          {" "}
          <Row className="justify-between items-center">
            {items.name}
            {items.subLinks && items.subLinks.length > 0 ? (
              <FaChevronDown />
            ) : (
              ""
            )}
          </Row>
        </NavLink>
        {items.subLinks && (
          <>
            {dropDownIndex === index && (
              <ul className=" p-[2rem]">
                {items.subLinks.map(({ icon: Icon, id, name, pathname }) => (
                  <li key={id} className="group/navIcon">
                    <NavLink href={pathname} onClick={closeNavBarHandler}>
                      {" "}
                      <Row className="gap-[1.6rem] p-[1rem] group-hover/navIcon:bg-brandeis-blue-50 rounded-[.8rem] transition-all duration-300 items-center">
                        <Icon
                          className={`size-[1.8rem] group-hover/navIcon:fill-brandeis-blue-600 fill-grey-400`}
                        />
                        {name}
                      </Row>
                    </NavLink>
                  </li>
                ))}
              </ul>
            )}
          </>
        )}
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
          <Link href={"/"}>
          <SealLogoNameExcludedColored />
          </Link>
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
