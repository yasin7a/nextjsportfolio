import Image from "next/image";
import data from "../data/slider";
import Link from "next/link";
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
            {data.map((item) => (
              <div className="slider" key={item.id}>
                <Link href={item.link} target="_blank">
                  <a>
                    <div className="browser">
                      <div className="browser-body">
                        <div className="img">
                          <Image
                            src={item.img}
                            qualit={100}
                            alt="screenshots of website"
                            layout="fill"
                          />
                        </div>
                        <div className="info">
                          <h3>{item.title}</h3>
                          <p>{item.description}</p>
                          <div className="tech">
                            {item.techs.map((tech, index) => {
                              return <span key={index}>{tech}</span>;
                            })}
                          </div>
                        </div>
                        <code>{item.id}</code>
                      </div>
                    </div>
                  </a>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default ViewAllItem;
