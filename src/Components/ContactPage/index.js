import React, { useContext } from "react";
import "./ContactPage.module.css";
import { contextData } from "../../ContextProvider/ContextProvider";

const ContactPage = () => {
  const { data } = useContext(contextData);
  return (
    <div style={{ marginTop: data.margin, color:"#fbeaeb"}}>Details will be added soon!.</div>
  );
};

export default ContactPage;
