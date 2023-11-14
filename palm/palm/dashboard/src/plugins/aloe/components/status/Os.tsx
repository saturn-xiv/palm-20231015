import { Duration } from "google-protobuf/google/protobuf/duration_pb";
import Typography from "@mui/material/Typography";
import dayjs from "dayjs";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { FormattedMessage, useIntl } from "react-intl";

import { RouterStatusResponse } from "../../protocols/ops-router_pb";
import CodeBox from "../CodeBox";

interface IProps {
  uptime: Duration;
  firewall: string;
  ip: RouterStatusResponse.Ip;
}

const Widget = ({ uptime, firewall, ip }: IProps) => {
  const intl = useIntl();
  return (
    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="os-content"
        id="os-header"
      >
        <Typography>
          <FormattedMessage id="pages.dashboard.status.os.title" />
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        <CodeBox
          title={intl.formatMessage({
            id: "pages.dashboard.status.os.ip.address",
          })}
          body={ip.getAddress()}
        />
        <CodeBox
          title={intl.formatMessage({
            id: "pages.dashboard.status.os.ip.route",
          })}
          body={ip.getRoute()}
        />
        <CodeBox
          title={intl.formatMessage({
            id: "pages.dashboard.status.os.ip.rule",
          })}
          body={ip.getRule()}
        />
        <CodeBox
          title={intl.formatMessage({
            id: "pages.dashboard.status.os.firewall",
          })}
          body={firewall}
        />

        <Typography variant="body2" gutterBottom>
          <FormattedMessage id="pages.dashboard.status.os.uptime" />:
          {dayjs.duration({ seconds: uptime.getSeconds() }).humanize(true)}
        </Typography>
      </AccordionDetails>
    </Accordion>
  );
};

export default Widget;
