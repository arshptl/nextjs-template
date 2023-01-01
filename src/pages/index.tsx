import Head from 'next/head'
import type { NextPage } from "next";
import {
  AuthenticatedTemplate,
  UnauthenticatedTemplate,
} from "@azure/msal-react";
import { SigninComp } from "../components/AuthPages/SigninComp";
import { SignoutComp } from "../components/AuthPages/SignoutComp";
import { Inter } from '@next/font/google'
import styles from '../../styles/Home.module.scss'

const inter = Inter({ subsets: ['latin'] })

const Home: NextPage = () => {
  return (
    <div>
      <UnauthenticatedTemplate>
        <Head>
          <title>Login</title>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>
        <SigninComp />
      </UnauthenticatedTemplate>
      <AuthenticatedTemplate>
        <Head>
          <title>Home</title>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>
        <br />
        <SignoutComp />
        <br />
      </AuthenticatedTemplate>
    </div>
  );
};

export default Home;
