//@flow strict
import React from "react";

import styled, { cx, css } from "react-emotion";

import Address from "./Address";
import PhoneNumber from "./PhoneNumber";
import { Link } from "../../styles/components";
import { borderRadius } from "../../styles";
import { supportsObjectFit } from "../../styles/cssFeatures";

export type Props = {
  name: string,
  url: string,
  price?: string,
  address: string,
  addressUrl: string,
  phone?: string,
  imgUrl: string,
};

export default class Card extends React.Component<Props> {
  render = () => {
    const { name, url, price, address, addressUrl, phone, imgUrl } = this.props;

    return (
      <Container>
        <ImgLink href={url} imgUrl={imgUrl} rel="nofollow">
          {supportsObjectFit && <CardImg src={imgUrl} alt={name} />}
        </ImgLink>
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
          {/* flowlint-next-line sketchy-null-string:off */}
          {price && <p>{price}</p>}
          <address>
            <Address address={address} url={addressUrl} />
            {/* flowlint-next-line sketchy-null-string:off */}
            {phone && <PhoneNumber number={phone} />}
          </address>
        </div>
      </Container>
    );
  };
}

const noBottomBorderRadius = css`
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
`;

const Container = styled.div`
  ${borderRadius};
  background-color: white;
`;

const ImgLink = styled.a(props => {
  let style;
  if (!supportsObjectFit) {
    style = css`
      display: block;
      height: 12rem;
      background-image: url(${props.imgUrl});
      background-size: cover;
      background-position: center center;
    `;
    return cx(borderRadius, noBottomBorderRadius, style);
  }
});

const CardImg = styled.img(
  borderRadius,
  noBottomBorderRadius,
  css`
    width: 100%;
    height: 12rem;
    object-fit: cover;
  `
);

const CardTitle = styled.div`
  font-size: 1.25rem;
  line-height: 1.4;
  margin-bottom: 0.75rem;
`;
