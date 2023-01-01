/* eslint-disable default-case */
/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */

import { Configuration, PublicClientApplication } from "@azure/msal-browser";

export const msalConfig: Configuration = {
  auth: {
    clientId: `${process.env.NEXT_PUBLIC_AZURE_AD_CLIENT_ID}`,
    authority: `https://login.microsoftonline.com/${process.env.NEXT_PUBLIC_AZURE_AD_TENANT_ID}`,
  },
  cache: {
    cacheLocation: "localStorage", // This configures where your cache will be stored
    storeAuthStateInCookie: true, // Set this to "true" if you are having issues on IE11 or Edge
  },
};

// export const loginRequest = {
//   scopes: ["User.Read"],
//   prompt: "select_account",
// };

export const tokenRequest = {
  scopes: ["Mail.Read"], // Replace ... with your custom scopes
};

export const graphConfig = {
  graphMeEndpoint: "https://graph.microsoft.com/v1.0/me",
};

// Add here scopes for id token to be used at MS Identity Platform endpoints.
export const loginRequest = {
  scopes: ["User.Read"],
  prompt: "select_account",
};

export const loginSilentRequest = {
  scopes: [`${process.env.NEXT_PUBLIC_AZURE_AD_CLIENT_ID}/user.read`],
};

export const msalInstance = new PublicClientApplication(msalConfig);
