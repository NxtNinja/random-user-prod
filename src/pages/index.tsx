import DisplayCards from "@/components/DisplayCards";
import Nav from "@/components/Nav";
import Head from "next/head";
import { Toaster } from "react-hot-toast";

const index = () => {
  return (
    <>
      <Head>
        <title>RandomUser App</title>
      </Head>
      <div className="container mx-auto">
        <Nav />
        <DisplayCards />
      </div>
      <Toaster position="top-center" reverseOrder={false} />
    </>
  );
};

export default index;
