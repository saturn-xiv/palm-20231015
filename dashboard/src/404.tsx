import { useIntl } from "react-intl";
import { useNavigate } from "react-router-dom";
import { Stack } from "@fluentui/react/lib/Stack";
import { Text } from "@fluentui/react/lib/Text";
import { DefaultButton, PrimaryButton } from "@fluentui/react/lib/Button";

import Layout from "./layouts/application";
import broken_link from "./assets/page-not-found.svg";

function Widget() {
  const intl = useIntl();
  const navigate = useNavigate();
  const title = intl.formatMessage({ id: "404.title" });
  return (
    <Layout title={title}>
      <Stack
        tokens={{ childrenGap: 20 }}
        styles={{
          root: {
            marginTop: 20,
            marginBottom: 20,
          },
        }}
      >
        <Stack.Item align="center">
          <Text variant="xxLarge">{title}</Text>
        </Stack.Item>
        <Stack.Item>
          <img
            src={broken_link}
            alt={title}
            style={{
              display: "inline-block",
              maxWidth: "100%",
            }}
          />
        </Stack.Item>
        <Stack.Item>
          <Stack horizontal tokens={{ childrenGap: 10 }} horizontalAlign="end">
            <DefaultButton
              onClick={() => {
                navigate(-1);
              }}
              text={intl.formatMessage({ id: "buttons.go-back" })}
            />
            <PrimaryButton
              onClick={() => {
                navigate("/");
              }}
              text={intl.formatMessage({ id: "buttons.go-home" })}
            />
          </Stack>
        </Stack.Item>
      </Stack>
    </Layout>
  );
}

export default Widget;
