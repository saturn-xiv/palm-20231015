import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { FormattedMessage } from "react-intl";

import { Lan } from "../../protocols/ops-router_pb";

interface IProps {
  lan: Lan;
}

const Widget = ({ lan }: IProps) => {
  return (
    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="lan-content"
        id="lan-header"
      >
        <Typography>
          <FormattedMessage id="pages.dashboard.lan.title" />
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        <fieldset>
          <legend>{lan.getDevice()}</legend>
          <ul>
            <li>
              <FormattedMessage id="forms.fields.mac" />: {lan.getMac()}
            </li>
            <li>
              <FormattedMessage id="forms.fields.metric" />: {lan.getMetric()}
            </li>
            <li>Address: {lan.getAddress()}</li>
            <li>DNS 1: {lan.getDns1()}</li>
            {lan.getDns2() && <li>DNS 2:{lan.getDns2()}</li>}
          </ul>
        </fieldset>
      </AccordionDetails>
    </Accordion>
  );
};

export default Widget;
