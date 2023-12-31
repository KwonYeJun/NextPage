/* eslint-disable @next/next/no-sync-scripts */

import React, { ReactNode } from 'react'
import Head from 'next/head'
import Header from './Header'

type Props = {
  children?: ReactNode
  title?: string
}

const Layout = ({ children, title = 'This is the default title' }: Props) => (
  <div className="max-w-screen-lg mx-auto">

    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>

    <Header />

    {children}

  
  </div>
)

export default Layout
