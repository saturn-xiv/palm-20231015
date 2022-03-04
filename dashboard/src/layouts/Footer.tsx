import Button from "@mui/material/Button";

import { refresh, selectSiteInfo } from "../reducers/site-info";
import { useAppSelector, useAppDispatch } from "../hooks";

function Widget() {
  const site = useAppSelector(selectSiteInfo);

  const dispatch = useAppDispatch();
  return (
    <div>
      footer {site.copyright}
      <Button
        onClick={() =>
          dispatch(
            refresh({
              title: "demo",
              subhead: "test",
              copyright: `@ ${new Date()}`,
              languages: ["en-US"],
            })
          )
        }
      >
        now
      </Button>
    </div>
  );
}

export default Widget;
