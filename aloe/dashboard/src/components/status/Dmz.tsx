import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { FormattedMessage } from "react-intl";

import { Dmz } from "../../protocols/ops-router_pb";

interface IProps {
  dmz: Dmz;
}

const Widget = ({ dmz }: IProps) => {
  return (
    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="dmz-content"
        id="dmz-header"
      >
        <Typography>
          <FormattedMessage id="pages.dashboard.dmz.title" />
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        <fieldset>
          <legend>{dmz.getDevice()}</legend>
          <ul>
            <li>
              <FormattedMessage id="forms.fields.mac" />: {dmz.getMac()}
            </li>
            <li>
              <FormattedMessage id="forms.fields.metric" />: {dmz.getMetric()}
            </li>
            <li>Address: {dmz.getAddress()}</li>
            <li>DNS 1: {dmz.getDns1()}</li>
            {dmz.getDns2() && <li>DNS 2:{dmz.getDns2()}</li>}
          </ul>
        </fieldset>
      </AccordionDetails>
    </Accordion>
  );
};

export default Widget;
