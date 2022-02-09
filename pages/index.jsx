import Head from "next/head";
import Loader from "../components/Loader";
import dynamic from "next/dynamic";

const App = dynamic(() => import("../components/App"), {
  loading: () => <Loader />,
  ssr: false,
});

export default function Home() {
  return (
    <>
      <Head>
        <title>Yasin | Portfolio</title>
      </Head>
      <App />
    </>
  );
}
