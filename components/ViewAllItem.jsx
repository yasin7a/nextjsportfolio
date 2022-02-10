import data from "../data/slider";

import Link from "next/link";
import Items from "./items";
const ViewAllItem = () => {
  return (
    <>
      <section>
        <div className="container viewall">
          <h1>All Projects</h1>
          <Link href="/">
            <a>Back to home</a>
          </Link>
          <div className="wrapitem">
            <Items data={data} />
          </div>
        </div>
      </section>
    </>
  );
};

export default ViewAllItem;
