import { MsalProvider } from '@azure/msal-react'
import '../../styles/globals.scss'
require("../../styles/antd.less");
import type { AppProps } from 'next/app'
import { msalInstance } from '../services/config'
import Layout from '../components/Layout/Layout'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <MsalProvider instance={msalInstance}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </MsalProvider>

  )
}
