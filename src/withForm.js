import React, { useContext } from "react";

import { FormContext } from "./Form";

const withForm = Component => {
  return props => {
    const context = useContext(FormContext);

    return <Component {...props} {...context} />;
  };
};

export default withForm;
