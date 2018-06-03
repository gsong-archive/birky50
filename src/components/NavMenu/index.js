//@flow strict
import React from "react";
import styled, { css } from "react-emotion";

import { Link } from "../../styles/components";

import type { SectionData } from "../Section.type";

type Props = {
  sections: SectionData,
  onClick: string => (SyntheticMouseEvent<HTMLLinkElement>) => void,
};

export default ({ sections, onClick }: Props) => {
  const navItems = sections.map(
    ({ id, navLabel, LabelComponent, color }, i) => (
      <NavItem key={id}>
        <NavLink href={`#${id}`} onClick={onClick(id)}>
          <span
            className={css`
              display: inline-block;
              border-bottom: 4px solid ${color};
              padding-bottom: 0.15em;
            `}
          >
            <LabelComponent label={navLabel} />
          </span>
        </NavLink>
      </NavItem>
    )
  );

  return (
    <nav>
      <NavContainer>{navItems}</NavContainer>
    </nav>
  );
};

const NavContainer = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  list-style-type: none;
  padding: 0.25rem 0 0.75rem;
  margin: 0;
`;

const NavItem = styled.li`
  text-align: center;
`;

const NavLink = styled(Link)`
  display: block;
  font-size: 1.1rem;
  padding: 0.75rem 1rem;
`;
