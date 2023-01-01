import React from "react";
import { useMsal } from "@azure/msal-react";
import { loginRequest } from "../../services/config";
import { Button } from "antd";
import Image from "next/image";
import simformlogo from "../../../public/assets/simformlogo.svg";
import styles from "./Signin.module.scss";
import { Error, Success } from "../ActionDisplays/message";

export const SigninComp = () => {
  const { instance } = useMsal();

  const handleLogin = (loginType: string) => {
    if (loginType === "redirect") {
      instance.loginRedirect(loginRequest).then((res) => {
        Success("User successfullt loggedin");
      }).catch((e) => {
        Error(e);
      })
    }
  };
  return (
    <>
      <div className={styles.loginMaster}>
        <div className={styles.loginWrapper}>
          <form>
            <div className={styles.brandLogo}>
              <Image src={simformlogo} alt="logo" />
            </div>
            <div className={styles.textCenter}>
              <Button
                //   className={styles.btn, styles.btnPrimary}
                //   type="button"
                type="primary"
                size="large"
                onClick={() => handleLogin("redirect")}
              >
                Login with 365
              </Button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
