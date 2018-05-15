import React from "react";

import styled, { css } from "react-emotion";

import Address from "./Address";
import PhoneNumber from "./PhoneNumber";
import { Link } from "../../styles/components";
import { borderRadius } from "../../styles";

export default ({ name, url, price, address, addressUrl, phone, imgUrl }) => (
  <Card>
    <a href={url} rel="nofollow">
      <CardImg src={imgUrl} alt={name} />
    </a>
    <div
      className={css`
        margin: 1rem;
      `}
    >
      <CardTitle>
        <Link href={url} rel="nofollow">
          {name}
        </Link>
      </CardTitle>
      {price && <p>{price}</p>}
      <address>
        <Address address={address} url={addressUrl} />
        {phone && <PhoneNumber number={phone} />}
      </address>
    </div>
  </Card>
);

const Card = styled("div")`
  ${borderRadius};
  background-color: white;
`;

const CardImg = styled("img")`
  ${borderRadius};
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
  width: 100%;
  height: 12rem;
  object-fit: cover;
`;

const CardTitle = styled("div")`
  font-size: 1.25rem;
  line-height: 1.4;
  margin-bottom: 0.75rem;
`;
