import { useEffect, useState } from "react";

const ServerData = () => {
  const [fortniteData, setFortniteData] = useState([]);
  useEffect(() => {
    const fortniteFetch = async () => {
      const res = await fetch("https://fortnite-api.com/v2/news");

      if (res.ok) {
        const { data } = await res.json();
        setFortniteData(data.br.motds);
        return;
      }
      setFortniteData([]);
    };
    fortniteFetch();
  }, []);

  return (
    <div>
      {fortniteData.map((data) => (
        <div className="serverContainer" key={data.id}>
          <h1 className="title">{data.title}</h1>
          <h2 className="body">{data.body}</h2>
          <img className="img" src={data.image} alt={data.title} />
        </div>
      ))}
    </div>
  );
};

export default ServerData;
