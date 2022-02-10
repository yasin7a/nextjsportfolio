import Image from "next/image";
import Link from "next/link";
const Items = ({ data }) => {
  return (
    <>
      {data.map((item) => (
        <div className="slider" key={item.id}>
          <div style={{ height: "100%" }}>
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
              <Link href={item.link} target="_blank">
                <a>Click To Visit </a>
              </Link>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Items;
