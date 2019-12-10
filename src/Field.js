import React from "react";
import withForm from "./withForm";

const Field = props => {
  const { id, label } = props;

  return (
    <p>
      label: {label}; id: {id}
    </p>
  );
};

export default withForm(Field);
