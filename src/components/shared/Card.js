//@flow strict
import React from "react";

import styled, { css } from "react-emotion";

import Address from "./Address";
import PhoneNumber from "./PhoneNumber";
import { Link } from "../../styles/components";
import { borderRadius } from "../../styles";

export type CardType = {
  name: string,
  url: string,
  price?: string,
  address: string,
  addressUrl: string,
  phone?: string,
  imgUrl: string
};

export default ({
  name,
  url,
  price,
  address,
  addressUrl,
  phone,
  imgUrl
}: CardType) => (
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
      {price !== undefined && <p>{price}</p>}
      <address>
        <Address address={address} url={addressUrl} />
        {phone !== undefined && <PhoneNumber number={phone} />}
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
