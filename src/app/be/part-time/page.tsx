import Head from "next/head";
import { NextPage } from "next";

const PartTimePrograms: NextPage = () => {
  return (
    <>
      <Head>
        <title>B.E. Programs (Part-Time)</title>
      </Head>
      <main className="min-h-screen bg-black text-white p-6">
        <h1 className="text-3xl font-bold mb-4">B.E. Programs (Part-Time)</h1>
        <p className="mb-4 text-lg">
          IET is presently offering <b>Part-Time 4-Year B.E. Programs</b> in the
          following five branches:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-base">
          <li>B.E. (Mechanical Engineering)</li>
          <li>B.E. (Computer Engineering)</li>
          <li>B.E. (Electronics & Instrumentation Engineering)</li>
          <li>B.E. (Information Technology)</li>
          <li>B.E. (Electronics & Telecommunication Engineering)</li>
        </ul>
      </main>
    </>
  );
};

export default PartTimePrograms;
