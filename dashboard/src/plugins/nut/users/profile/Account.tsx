import { useIntl, FormattedMessage } from "react-intl";
import ProForm, { ProFormText, ProFormSelect } from "@ant-design/pro-form";
import { message, Card } from "antd";
import moment_timezone from "moment-timezone";

import {
  REAL_NAME_VALIDATOR,
  URL_VALIDATOR,
} from "../../../../components/form";
import { graphql } from "../../../../request";
import { selectSiteInfo } from "../../../../reducers/site-info";
import { selectCurrentUser } from "../../../../reducers/current-user";
import { useAppSelector } from "../../../../hooks";
import { IOk } from "../../..";

interface IFormData {
  nickName: string;
  email: string;
  realName: string;
  logo: string;
  lang: string;
  timeZone: string;
}

interface IFormRequest {
  user: { realName: string; logo: string; lang: string; timeZone: string };
}
interface IFormResponse {
  userUpdateProfile: IOk;
}

const Widget = () => {
  const intl = useIntl();
  const site = useAppSelector(selectSiteInfo);
  const user = useAppSelector(selectCurrentUser);
  const onSubmit = async (data: IFormData) => {
    const response = await graphql<IFormRequest, IFormResponse>(
      `
        mutation PostForm($user: UserUpdateProfileRequest!) {
          userUpdateProfile(form: $user) {
            createdAt
          }
        }
      `,
      {
        user: {
          realName: data.realName,
          logo: data.logo,
          lang: data.lang,
          timeZone: data.timeZone,
        },
      }
    );
    if (response.data) {
      message.success(intl.formatMessage({ id: "flashes.successed" }));
    } else {
      response.errors?.forEach((it) => {
        message.error(it.message);
      });
    }
  };

  return (
    <Card title={<FormattedMessage id="nut.users.profile.account" />}>
      <ProForm<IFormData> onFinish={onSubmit}>
        <ProFormText
          required
          width="md"
          name="nickName"
          initialValue={user?.nickName}
          disabled
          label={<FormattedMessage id="fields.nick-name" />}
        />
        <ProFormText
          width="md"
          name="realName"
          rules={REAL_NAME_VALIDATOR}
          initialValue={user?.realName}
          label={<FormattedMessage id="fields.real-name" />}
        />
        <ProFormText
          required
          width="md"
          name="email"
          initialValue={user?.email}
          disabled
          label={<FormattedMessage id="fields.email" />}
        />
        <ProFormText
          width="md"
          name="logo"
          initialValue={user?.logo}
          rules={URL_VALIDATOR}
          label={<FormattedMessage id="fields.avatar" />}
        />
        <ProForm.Group>
          <ProFormSelect
            required
            initialValue={user?.lang}
            options={site.languages.map((it) => {
              return {
                value: it,
                label: intl.formatMessage({ id: `languages.${it}` }),
              };
            })}
            name="lang"
            label={<FormattedMessage id="fields.language" />}
          />
          <ProFormSelect
            required
            initialValue={user?.timeZone}
            options={moment_timezone.tz.names().map((it) => {
              return {
                value: it,
                label: it,
              };
            })}
            name="timeZone"
            label={<FormattedMessage id="fields.time-zone" />}
          />
        </ProForm.Group>
      </ProForm>
    </Card>
  );
};

export default Widget;
