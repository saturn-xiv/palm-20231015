import { useState, useEffect } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";

import Card, { IProps as ICard } from "./components/Card";
import { ajax_get_options } from "./request";

import background_img from "./assets/windows.png";
import favicon_img from "./assets/favicon.ico";

interface IDesktop {
  siteTitle: string;
  favicon: string;
  backgroundImage: string;
  icons: ICard[];
}

const split_cards = (items: ICard[], size: number): ICard[][] => {
  const rows = [];
  for (let i = 0; ; i++) {
    const begin = i * size;
    let end = (i + 1) * size;
    if (end > items.length) {
      end = items.length;
    }
    rows.push(items.slice(begin, end));
    if (end >= items.length) {
      break;
    }
  }
  return rows;
};

const Widget = () => {
  const [desktop, setDesktop] = useState<IDesktop>({
    siteTitle: "",
    favicon: favicon_img,
    backgroundImage: background_img,
    icons: [],
  });

  useEffect(() => {
    fetch("/api/desktop", ajax_get_options())
      .then((response) => response.json())
      .then((data: IDesktop) => {
        setDesktop(data);
      });
  }, []);

  return (
    <HelmetProvider>
      <div
        style={{
          backgroundImage: `url(${desktop.backgroundImage})`,
          height: "100vh",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="container">
          <div style={{ height: "5vh" }}></div>
          {split_cards(desktop.icons, 12).map((x, i) => (
            <div className="columns" key={i}>
              {x.map((y, j) => (
                <div className="column is-1" key={j}>
                  <Card image={y.image} url={y.url} title={y.title} />
                </div>
              ))}
            </div>
          ))}
        </div>
        <Helmet>
          <title>{desktop.siteTitle}</title>
          <link rel="icon" type="image/x-icon" href={desktop.favicon}></link>
        </Helmet>
      </div>
    </HelmetProvider>
  );
};

export default Widget;
