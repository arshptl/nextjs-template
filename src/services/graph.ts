import { graphConfig, loginRequest, msalInstance } from "./config";

/**
 * Attaches a given access token to a Microsoft Graph API call. Returns information about the user
 */
export async function callMsGraph(accessToken: string) {
  const account = msalInstance.getActiveAccount();
  if (!account) {
    throw Error(
      "No active account! Verify a user has been signed in and setActiveAccount has been called."
    );
  }

  // const response = await msalInstance.acquireTokenSilent({
  //     ...loginRequest,
  //     account: account
  // });

  const headers = new Headers();

  const bearer = `Bearer ${accessToken}`;

  headers.append("Authorization", bearer);
  headers.append("Access-Control-Allow-Origin", "*");
  headers.append("Access-Control-Allow-Headers", "X-Requested-With");

  const options = {
    method: "GET",
    headers: headers,
  };

  return fetch(graphConfig.graphMeEndpoint, options)
    .then((response) => response.json())
    .catch((error) => Error(error));
}
