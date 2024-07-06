import React from "react";
import { inject } from "@vercel/analytics";

type Props = {};

const Analytics = (props: Props) => {
  inject();
  return <></>;
};

export default Analytics;
