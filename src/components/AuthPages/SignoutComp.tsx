

import React from "react";
import { useMsal } from "@azure/msal-react";
import { Button } from "antd";
import { Error } from "../ActionDisplays/message";

export const SignoutComp = () => {
    const { instance, accounts } = useMsal();

    const handleLogout = (logoutType: string) => {
        if (logoutType === "redirect") {
            instance.logoutRedirect().then(() => {
                console.log("Logout");
            }
            )
                .catch(e => {
                    Error(e);
                });
        }
    }
    return (
        <div style={{ display: "flex", width: "100%", justifyContent: "end" }}>
            <Button type="primary" size="large" onClick={() => handleLogout("redirect")}>Sign Out</Button>
        </div>
    );
}