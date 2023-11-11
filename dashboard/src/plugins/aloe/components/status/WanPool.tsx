import Badge from "@mui/material/Badge";
import DevicesIcon from "@mui/icons-material/Devices";

interface IProps {
  device: string;
  weight: number;
}

const Widget = ({ device, weight }: IProps) => (
  <Badge badgeContent={weight} color="primary">
    <DevicesIcon color="action" /> {device}
  </Badge>
);

export default Widget;
