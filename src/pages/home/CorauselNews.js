import { useEffect, useState } from "react";
import Carousel from "better-react-carousel";
import {
  Button,
  IconButton,
  ImageListItem,
  ImageListItemBar,
} from "@mui/material";

// material-ui
// import { Grid } from "@mui/material";

// import { gridSpacing } from "../../store/constants";

const CorauselNews = () => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([
    {
      uuid: "df4ad427-a672-4c67-b6c6-6f81aa00e164",
      title:
        "Tesla stock jumps after announcement it will join S&P 500 in one go",
      description:
        "Tesla's stock price surged early Tuesday after the company b...",
      keywords: "Business, s&p 500, stocks, tesla",
      snippet: "Tesla’s stock price surged early Tuesday after the company...",
      url: "https://nypost.com/2020/12/01/tesla-stock-jumps-on-news-it-will-join-sp-500-in-one-shot/",
      image_url:
        "https://nypost.com/wp-content/uploads/sites/2/2020/12/tesla-52.jpg?quality=90&strip=all&w=1200",
      language: "en",
      published_at: "2020-12-01T14:35:46.000000Z",
      source: "nypost.com",
      categories: ["business"],
      relevance_score: 153.61266,
    },
    {
      uuid: "c9a23881-12dd-4005-8982-7b6552a2eb50",
      title: "Tesla To Join S&P 500 With Full Market Cap On December 21",
      description:
        "Tesla will be added to the S&P 500 index all at once at its ...",
      keywords: "Tesla, S&P500, EV, Automotive, Stocks, Investing",
      snippet:
        "Tesla (NASDAQ: TSLA) will be added to the S&P 500 index all ...",
      url: "https://oilprice.com/Latest-Energy-News/World-News/Tesla-To-Join-SP-500-With-Full-Market-Cap-On-December-21.html",
      image_url:
        "https://d32r1sh890xpii.cloudfront.net/news/718x300/2020-12-01_xwjdajwctl.jpg",
      language: "en",
      published_at: "2020-12-01T16:30:00.000000Z",
      source: "oilprice.com",
      categories: ["general", "business"],
      relevance_score: 146.92773,
    },
    {
      uuid: "18afdb1c-7742-4016-bf8c-a2f114e11199",
      title: "Tesla to Enter S&P 500 at Full Weight in December",
      description:
        "The electric-vehicle maker will be added to the broad stock-...",
      keywords:
        "Motor Vehicles, Alternative Fuel Vehicles, Trusts Funds Financial Vehicles, Diversified Holding Companies, Automotive",
      snippet: "S&P Dow Jones Indices said it will add Tesla Inc.’s full w...",
      url: "https://www.wsj.com/articles/tesla-to-enter-s-p-500-at-full-weight-in-december-11606780897?mod=pls_whats_news_us_business_f",
      image_url: "https://images.wsj.net/im-265933/social",
      language: "en",
      published_at: "2020-12-01T00:01:00.000000Z",
      source: "online.wsj.com",
      categories: ["business"],
      relevance_score: 128.22346,
    },
  ]);
  useEffect(() => {
    setLoading(false);
  }, []);

  return (
    <Carousel loop showDots autoplay={3000}>
      {data.map((v) => (
        <Carousel.Item>
          <ImageListItem key={v.uuid}>
            <img
              src={`${v.image_url}`}
              srcSet={`${v.image_url}`}
              alt={v.title}
              loading="lazy"
              style={{
                height: 400,
                borderRadius: 12,
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                backgroundSize: "cover",
              }}
            />
            <ImageListItemBar
              title={v.title}
              subtitle={v.description}
              sx={{
                borderBottomLeftRadius: 12,
                borderBottomRightRadius: 12,
                px: 3,
                // py: 8,
                lineHeight: 5,
              }}
              actionIcon={<Button variant="outlined">Read more</Button>}
            />
          </ImageListItem>

          {/* <div
            style={{
              backgroundImage: `url(${v.image_url})`,
              height: 400,
              borderRadius: 12,
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
          /> */}
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default CorauselNews;
