import React from "react";
import { Button } from "@react-email/button";
import { Html } from "@react-email/html";
import { Heading } from "@react-email/heading";
import { Text } from "@react-email/text";
import { Hr } from "@react-email/hr";

export default function ForgotPasswordEmail({ params }) {
  const { name, url } = params; // Destructure the params object

  return (
    <Html>
      <Heading as="h2"> Hello {name} </Heading>
      <Text>
        We received the reset password request. If it's not you, please ignore it.
      </Text>
      <Button
        // pX={20}
        // pY={20}
        href={params.url}
        style={{ background: "#000", color: "#FFFFFF", width: "120px", padding: "16px", textAlign: "center" }}
      >
        Click Me
      </Button>
      <Hr />

      <Heading as="h3">Regards</Heading>
      <Text>Coding with xyz</Text>
    </Html>
  );
}
