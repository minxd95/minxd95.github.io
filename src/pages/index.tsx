import * as React from "react";
import { HeadFC, PageProps } from "gatsby";
import Layout from "../components/layout";

const IndexPage = ({}: PageProps) => {
  return (
    <main className="w-screen h-screen">
      <Layout />
    </main>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
