import Head from "next/head";
import Link from "next/link";
import Script from "next/script";
import { Layout } from "../../components/layout";

export default function FirstPost() {
  return (
    <Layout>
      <Head>
        <title>First Post</title>
      </Head>
      <Script
        src="/hello.js"
        onLoad={() => console.log("script element first load")}
      />

      <h1>First Post</h1>
      <h2>
        <Link href="/">Back to home</Link>
      </h2>
    </Layout>
  );
}
