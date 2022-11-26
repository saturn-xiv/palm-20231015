import { useEffect } from "react";
import Grid from "@mui/material/Grid";
import { useIntl } from "react-intl";

import { useAppDispatch } from "../hooks";
import { setTitle } from "../reducers/layout";
import Layout from "../layouts";

interface IProps {
  title: string;
  image: string;
}

const Widget = ({ title, image }: IProps) => {
  const intl = useIntl();
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(setTitle(intl.formatMessage({ id: title })));
  }, [dispatch, title, intl]);

  return (
    <Layout>
      <Grid item xs={12} md={3.5} />
      <Grid item xs={12} md={5}>
        <p>&nbsp;</p>
        <img alt={title} src={image} />
      </Grid>
    </Layout>
  );
};

export default Widget;
