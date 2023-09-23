import {
  Body,
  Container,
  Column,
  Head,
  Heading,
  Hr,
  Html,
  Img,
  Link,
  Preview,
  Row,
  Section,
  Text,
} from "@react-email/components";
import * as React from "react";

const baseUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "";

export const contactEmailTemplate = ({
  messageContent,
}: {
  messageContent: string;
}) => (
  <Html>
    <Head />
    <Preview>Thanks for reaching out</Preview>
    <Body style={main}>
      <Container style={container}>
        <Hr style={global.hr} />
        <Section style={message}>
          <Img
            src={`https://li-moshi.com/image/favicon.png`}
            width="66"
            height="66"
            alt="Li-Moshi.com"
            style={{ margin: "auto" }}
          />
          <Heading style={global.heading}>Thanks for reaching out.</Heading>
          <Text style={global.text}>
            An email had been delivered with following content:
          </Text>
          <Text style={{ ...global.text, marginTop: 24 }}>
            {`${messageContent}`}
          </Text>
        </Section>
        <Hr style={global.hr} />

        <Section style={paddingY}>
          <Text style={global.heading}>Moshi-Li</Text>
          <Row style={categories.container}>
            <Column align="center">
              <Link href="https://li-moshi.com/" style={categories.text}>
                Home
              </Link>
            </Column>
            <Column align="center">
              <Link href="https://li-moshi.com/resume" style={categories.text}>
                Resume
              </Link>
            </Column>
            <Column align="center">
              <Link href="https://li-moshi.com/about" style={categories.text}>
                About
              </Link>
            </Column>
          </Row>
        </Section>
        <Hr style={{ ...global.hr, marginTop: "12px" }} />
        <Section style={paddingY}>
          <Text style={footer.text}>
            © 2023 li.moshi-com, Inc. All Rights Reserved.
          </Text>
        </Section>
      </Container>
    </Body>
  </Html>
);

const paddingX = {
  paddingLeft: "40px",
  paddingRight: "40px",
};

const paddingY = {
  paddingTop: "22px",
  paddingBottom: "22px",
};

const paragraph = {
  margin: "0",
  lineHeight: "2",
};

const global = {
  paddingX,
  paddingY,
  defaultPadding: {
    ...paddingX,
    ...paddingY,
  },
  paragraphWithBold: { ...paragraph, fontWeight: "bold" },
  heading: {
    fontSize: "24px",
    lineHeight: "1.3",
    fontWeight: "700",
    textAlign: "center",
    letterSpacing: "-1px",
  } as React.CSSProperties,
  text: {
    ...paragraph,
    color: "#747474",
    fontWeight: "500",
  },
  button: {
    border: "1px solid #929292",
    fontSize: "16px",
    textDecoration: "none",
    padding: "10px 0px",
    width: "220px",
    display: "block",
    textAlign: "center",
    fontWeight: 500,
    color: "#000",
  } as React.CSSProperties,
  hr: {
    borderColor: "#E5E5E5",
    margin: "0",
  },
};

const main = {
  backgroundColor: "#ffffff",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};

const container = {
  margin: "10px auto",
  width: "600px",
  border: "1px solid #E5E5E5",
};

const track = {
  container: {
    padding: "22px 40px",
    backgroundColor: "#F7F7F7",
  },
  number: {
    margin: "12px 0 0 0",
    fontWeight: 500,
    lineHeight: "1.4",
    color: "#6F6F6F",
  },
};

const message = {
  padding: "40px 74px",
  textAlign: "center",
} as React.CSSProperties;

const categories = {
  container: {
    width: "370px",
    margin: "auto",
    paddingTop: "12px",
  },
  text: {
    fontWeight: "500",
    color: "#000",
  },
};

const footer = {
  policy: {
    width: "166px",
    margin: "auto",
  },
  text: {
    margin: "0",
    color: "#AFAFAF",
    fontSize: "13px",
    textAlign: "center",
  } as React.CSSProperties,
};
