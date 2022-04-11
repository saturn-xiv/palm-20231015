import { graphql, http_get } from "..";
import { IProfile as IUser } from "../../reducers/current-user";
import { IState as ISiteInfo } from "../../reducers/site-info";
import { IMenu } from "../../reducers/side-bar";

export interface ILayout {
  siteInfo: ISiteInfo;
  userProfile?: IUser;
  sideBar: IMenu[];
}

interface IFetchLayoutResponse {
  layout: ILayout;
}

export const by_graphql = async (): Promise<ILayout> => {
  const it = await graphql<{}, IFetchLayoutResponse>(
    `
      query Fetch {
        layout {
          siteInfo {
            title
            keywords
            description
            subhead
            copyright
            languages
            author {
              email
              name
            }
          }
          userProfile {
            realName
            nickName
            email
            lang
            logo
            timeZone
          }
          sideBar {
            to
            label
            items {
              to
              label
            }
          }
        }
      }
    `,
    {}
  );
  if (it.data) {
    return it.data?.layout;
  }
  throw new Error(it.errors?.map((it) => it.message).join(""));
};

const api = async (): Promise<ILayout> => {
  const it: ILayout = await http_get("/layout");
  return it;
};
export default api;
