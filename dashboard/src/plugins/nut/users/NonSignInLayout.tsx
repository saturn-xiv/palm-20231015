import { ReactNode } from "react";
import { useNavigate } from "react-router-dom";
import { useIntl } from "react-intl";
import { Nav } from "@fluentui/react/lib/Nav";

import Layout from "../../../layouts/application";

interface IProps {
  title: string;
  children: ReactNode;
}

function Widget({ title, children }: IProps) {
  const navigate = useNavigate();
  const intl = useIntl();
  return (
    <Layout title={title}>
      {children}
      <Nav
        onLinkClick={(ev, it) => {
          ev?.preventDefault();
          if (it && it.url) {
            navigate(it.url);
          }
        }}
        groups={[
          {
            links: [
              {
                name: intl.formatMessage({ id: "nut.users.sign-in.title" }),
                icon: "Signin",
                url: "/users/sign-in",
              },
              {
                name: intl.formatMessage({ id: "nut.users.sign-up.title" }),
                icon: "AddFriend",
                url: "/users/sign-up",
              },
              {
                name: intl.formatMessage({ id: "nut.users.confirm.title" }),
                icon: "VerifiedBrand",
                url: "/users/confirm",
              },
              {
                name: intl.formatMessage({ id: "nut.users.unlock.title" }),
                icon: "Unlock",
                url: "/users/unlock",
              },
              {
                name: intl.formatMessage({
                  id: "nut.users.forgot-password.title",
                }),
                icon: "PasswordField",
                url: "/users/forgot-password",
              },
              {
                name: intl.formatMessage({ id: "nut.leave-words.new.title" }),
                icon: "Comment",
                url: "/leave-words/new",
              },
            ],
          },
        ]}
      />
    </Layout>
  );
}

export default Widget;
