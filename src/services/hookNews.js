import { useState, useEffect } from 'react';

function useNbaNews(defaultValue) {
  const [nbaNews, setNbaNews] = useState(defaultValue);

  useEffect(() => {
    fetch('http://site.api.espn.com/apis/site/v2/sports/basketball/nba/news')
      .then((response) => response.json())
      .then((apinews) => {
        setNbaNews(apinews.articles);
      });
  }, []);

  return [ nbaNews ];
}

function useWnbaNews(defaultValue) {
  const [wnbaNews, setWnbaNews] = useState(defaultValue);
  
  useEffect(() => {
    fetch('http://site.api.espn.com/apis/site/v2/sports/basketball/wnba/news')
      .then((response) => response.json())
      .then((apinews) => {
        setWnbaNews(apinews.articles);
      });
  }, []);
  
  return [ wnbaNews ];
}

export function useNews() {
  const [ nbaNews ] = useNbaNews([]);
  const [ wnbaNews ] = useWnbaNews([]);

  const arrNews = nbaNews.concat(wnbaNews);
  const nbaNew = arrNews.splice(1,1);

  return [ arrNews, nbaNew ];
}
