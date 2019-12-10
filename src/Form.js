import React from "react";

export const FormContext = React.createContext({});

const Form = ({ children, id }) => (
  <FormContext.Provider value={{ id }}>{children}</FormContext.Provider>
);

export default Form;
