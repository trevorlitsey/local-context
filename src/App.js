import React from "react";
import Form from "./Form";
import Field from "./Field";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Form id="123">
          <Field label="Name" />
          <Field label="Start Date" />
        </Form>
        <Form id="456">
          <Field label="Name" />
          <Field label="Start Date" />
        </Form>
      </header>
    </div>
  );
}

export default App;
