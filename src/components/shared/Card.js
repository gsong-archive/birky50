import React from "react";

import {
  Card,
  CardBody,
  CardImg,
  CardSubtitle,
  CardText,
  CardTitle
} from "reactstrap";

import Address from "./Address";
import PhoneNumber from "./PhoneNumber";

import "./Card.css";

export default ({ name, url, price, address, address_url, phone, img_url }) => (
  <Card>
    <a href={url}>
      <CardImg top width="100%" src={img_url} alt={name} />
    </a>
    <CardBody>
      <CardTitle>
        <a href={url}>{name}</a>
      </CardTitle>
      {price && <CardSubtitle>{price}</CardSubtitle>}
      <CardText tag="div" className="card-text-top-margin">
        <Address address={address} url={address_url} />
      </CardText>
      {phone && (
        <CardText tag="div">
          <PhoneNumber number={phone} />
        </CardText>
      )}
    </CardBody>
  </Card>
);
