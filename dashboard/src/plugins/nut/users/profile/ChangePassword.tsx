import { useIntl, FormattedMessage } from "react-intl";
import ProForm, { ProFormText } from "@ant-design/pro-form";
import { message, Card } from "antd";

import { PASSWORD_VALIDATOR } from "../../../../components/form";
import { graphql_ } from "../../../../request";

interface IFormData {
  currentPassword: string;
  newPassword: string;
  passwordConfirmation: string;
}

const Widget = () => {
  const intl = useIntl();
  const onSubmit = async (data: IFormData) => {
    graphql_(
      `
        mutation PostForm($currentPassword: String!, $newPassword: String!) {
          userChangePassword(
            currentPassword: $currentPassword
            newPassword: $newPassword
          ) {
            createdAt
          }
        }
      `,
      {
        newPassword: data.newPassword,
        currentPassword: data.currentPassword,
      },
      () => {
        message.success(intl.formatMessage({ id: "flashes.successed" }));
      }
    );
  };

  return (
    <Card title={<FormattedMessage id="nut.users.profile.change-password" />}>
      <ProForm<IFormData> onFinish={onSubmit}>
        <ProFormText.Password
          width="md"
          name="currentPassword"
          rules={[{ required: true }]}
          label={<FormattedMessage id="fields.current-password" />}
        />
        <ProFormText.Password
          width="md"
          name="newPassword"
          rules={PASSWORD_VALIDATOR}
          label={<FormattedMessage id="fields.new-password" />}
        />
        <ProFormText.Password
          width="md"
          name="passwordConfirmation"
          rules={[
            {
              required: true,
            },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue("newPassword") === value) {
                  return Promise.resolve();
                }
                return Promise.reject(
                  new Error(
                    intl.formatMessage({
                      id: "helpers.password-confirmation",
                    })
                  )
                );
              },
            }),
          ]}
          label={<FormattedMessage id="fields.password-confirmation" />}
        />
      </ProForm>
    </Card>
  );
};

export default Widget;
