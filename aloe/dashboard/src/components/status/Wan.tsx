import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { FormattedMessage } from "react-intl";
import Button from "@mui/material/Button";

import { Wan, WanPool } from "../../protocols/ops-router_pb";
import WanPoolItem from "./WanPool";

interface IStatusPanelProps {
  wan: Wan;
}

const StatusPanel = ({ wan }: IStatusPanelProps) => {
  if (wan.getDhcp()) {
    return <li>DHCP</li>;
  }
  {
    const it = wan.getStatic();
    if (it) {
      return (
        <li>
          <ul>
            <li>Address: {it?.getAddress()}</li>
            <li>Gateway: {it?.getGateway()}</li>
            <li>DNS 1: {it?.getDns1()}</li>
            {it?.getDns2() && <li>DNS 2:{it?.getDns2()}</li>}
          </ul>
        </li>
      );
    }
  }
  return (
    <li>
      <Button variant="text" color="error">
        DISABLED
      </Button>
    </li>
  );
};

interface IProps {
  devices: Wan[];
  pool: WanPool;
}

const Widget = ({ pool, devices }: IProps) => {
  return (
    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="wan-content"
        id="wan-header"
      >
        <Typography>
          <FormattedMessage id="pages.dashboard.wan.title" />
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        <fieldset>
          <legend>
            <FormattedMessage id="pages.dashboard.wan.pool" />
          </legend>
          {pool.getItemsList().map((it) => (
            <span key={it.getDevice()} style={{ marginRight: "30px" }}>
              <WanPoolItem device={it.getDevice()} weight={it.getWeight()} />
            </span>
          ))}
        </fieldset>

        {devices.map((it) => (
          <fieldset key={it.getDevice()}>
            <legend>{it.getDevice()}</legend>
            <ul>
              <li>
                <FormattedMessage id="forms.fields.name" />: {it.getName()}
              </li>
              <li>
                <FormattedMessage id="forms.fields.mac" />: {it.getMac()}
              </li>
              <li>
                <FormattedMessage id="forms.fields.capacity" />:
                {it.getCapacity()}
              </li>
              <li>
                <FormattedMessage id="forms.fields.metric" />: {it.getMetric()}
              </li>

              <StatusPanel wan={it} />
            </ul>
          </fieldset>
        ))}
      </AccordionDetails>
    </Accordion>
  );
};

export default Widget;
