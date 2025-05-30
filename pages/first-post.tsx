import React from "react";
import Link from "next/link";
import Layout from "../components/layout";
import Head from "next/head";

export default function FirstPost() {
  return (<>
    <Layout>
      <Head>
        <title>First Post</title>
      </Head>
      <h1>First Post</h1>
      <h2>
        <Link href="/">Back to home</Link>
      </h2>
    </Layout>
  </>);
}