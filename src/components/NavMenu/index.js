//@flow strict
import React from "react";
import styled from "react-emotion";

import { Link } from "../../styles/components";

import type { SectionData } from "../Section.type";

type Props = {
  sections: SectionData,
  onClick: string => (SyntheticMouseEvent<HTMLLinkElement>) => void,
};

export default ({ sections, onClick }: Props) => {
  const navItems = sections.map(({ id, navLabel, LabelComponent }, i) => (
    <NavItem key={id}>
      <NavLink href={`#${id}`} onClick={onClick(id)}>
        <LabelComponent label={navLabel} />
      </NavLink>
    </NavItem>
  ));

  return (
    <nav>
      <NavContainer>{navItems}</NavContainer>
    </nav>
  );
};

const NavContainer = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  list-style-type: none;
  padding: 0;
  margin: 0;
`;

const NavItem = styled.li`
  flex-grow: 1;
  text-align: center;
`;

const NavLink = styled(Link)`
  display: block;
  font-size: 1.15rem;
  padding: 0.75rem 1rem;
`;
