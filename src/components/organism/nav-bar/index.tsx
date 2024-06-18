"use client";
import Container from "@/components/atom/container";
import { NavBarColumn, NavBarRow } from "@/components/molecule";
import { useMediaQuery } from "@/hooks";
import React, { useCallback, useState } from "react";
type Props = {};

const NavBar = (props: Props) => {
  const isAboveMediumScreens = useMediaQuery("(min-width: 1024px)");
  const [isNavOpen, setIsNavOpen] = useState(false);
  const handleToggleNav = useCallback(() => {
    setIsNavOpen((prev) => !prev);
  }, []);
  return (
    <nav>
      <Container
        className={`py-[2.6rem] ${
          isNavOpen && !isAboveMediumScreens ? "h-full" : "h-auto"
        }`}
      >
        <NavBarRow />
        <NavBarColumn
          isOpen={isNavOpen}
          open={handleToggleNav}
          close={handleToggleNav}
        />
      </Container>
    </nav>
  );
};

export default NavBar;
