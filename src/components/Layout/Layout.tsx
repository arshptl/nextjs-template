import { AuthenticatedTemplate } from "@azure/msal-react";
import React from "react";
import Navbar from "../Navbar";
import styles from "./Layout.module.scss";


const Layout = ({ children }: any) => {
  return (
    <div>
      <AuthenticatedTemplate>
        <Navbar />
      </AuthenticatedTemplate>
      <div className={styles.padding}>
        {children}
      </div>
    </div>
  );
};

export default Layout;

