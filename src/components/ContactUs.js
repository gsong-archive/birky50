import React from "react";

import facepaint from "facepaint";
import styled from "react-emotion";

import SectionHeader from "./shared/SectionHeader";
import { btn, formInput } from "../styles";
import { colors } from "../styles/variables";

export default ({ LabelComponent, sectionLabel }) => {
  const sendTo = "birky50@damacy.net";

  return (
    <React.Fragment>
      <SectionHeader>
        <LabelComponent label={sectionLabel} />
      </SectionHeader>

      <Form action={`https://formspree.io/${sendTo}`} method="POST">
        <Label htmlFor="contact_us_name">Name</Label>
        <Input
          type="text"
          name="name"
          id="contact_us_name"
          placeholder="Your Name"
          required
        />

        <Label htmlFor="contact_us_email">Email</Label>
        <Input
          type="email"
          name="email"
          id="contact_us_email"
          placeholder="Your Email"
          required
        />

        <Label htmlFor="contact_us_message">Message</Label>
        <Textarea
          name="message"
          id="contact_us_message"
          placeholder="Message"
          rows="3"
          required
        />

        <input
          type="hidden"
          name="_subject"
          value="Birky 50th Anniversary Message"
        />
        <input type="hidden" name="_gotcha" />

        <Button type="submit">Send</Button>
      </Form>
    </React.Fragment>
  );
};

const Button = styled("button")`
  ${btn};
  grid-column-start: 2;
  justify-self: start;
  cursor: pointer;
  background-color: ${colors.primary};
  color: white;
`;

const breakpoints = [600];
const mq = facepaint(breakpoints.map(bp => `@media (min-width: ${bp}px)`));

const Form = styled("form")(
  mq({
    display: [null, "grid"],
    gridTemplateColumns: [null, "5rem 30rem"],
    gridRowGap: [null, "1rem"]
  })
);

const Label = styled("label")(mq({ marginTop: [null, "0.575rem"] }));

const Input = styled("input")(
  formInput,
  { display: "block" },
  mq({ width: ["100%", "auto"], margin: [".5rem 0 1rem", 0] })
);

const Textarea = Input.withComponent("textarea");
