import React from "react";

import { Nav, NavItem, NavLink } from "reactstrap";

export default ({ sections, onClick }) => {
  const navItems = sections.map(({ id, navLabel, LabelComponent }) => (
    <NavItem key={id}>
      <NavLink href={`#${id}`} onClick={onClick(id)}>
        <LabelComponent label={navLabel} />
      </NavLink>
    </NavItem>
  ));

  return <Nav fill={true}>{navItems}</Nav>;
};
