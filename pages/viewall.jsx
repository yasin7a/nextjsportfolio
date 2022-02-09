import Head from "next/head";
import Loader from "../components/Loader";
import dynamic from "next/dynamic";
const ViewAllItem = dynamic(() => import("../components/ViewAllItem"), {
  loading: () => <Loader />,
   ssr: false 
});

const ViewAll = () => {
  return (
    <>
      <Head>
        <title>Yasin | All Work</title>
      </Head>
        <ViewAllItem />
    </>
  );
};

export default ViewAll;
