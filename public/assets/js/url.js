    const API_KEY = "69cdd731d7mshb69784c2a6313b4p1c5444jsnb4f2c4a294ac";
    const ALPHA_API_KEY = 'W3975TFRO13G7RVG';
    // const init = {method: 'GET', headers: `${headers}`, mode: 'cors', cache: 'default'};
    const url1 = `https://apidojo-yahoo-finance-v1.p.rapidapi.com/market/get-trending-tickers?region=US`;
    // const url = `https://newsapi.org/v2/top-headlines?sources?category=${news_source}&apiKey=${API_KEY}`;
    // const url = `https://apidojo-yahoo-finance-v1.p.rapidapi.com/market/get-popular-watchlists`;
    // const url = `https://apidojo-yahoo-finance-v1.p.rapidapi.com/market/v2/get-movers?region=US&lang=en-US&start=0&count=6`;
    const url = `https://apidojo-yahoo-finance-v1.p.rapidapi.com/market/v2/get-summary?region=US"`;
    const urlNews = {
        method: 'GET',
        url: 'https://apidojo-yahoo-finance-v1.p.rapidapi.com/news/v2/get-details',
        params: {uuid: '9803606d-a324-3864-83a8-2bd621e6ccbd', region: 'US'},
        headers: {
          'x-rapidapi-key': '69cdd731d7mshb69784c2a6313b4p1c5444jsnb4f2c4a294ac',
          'x-rapidapi-host': 'apidojo-yahoo-finance-v1.p.rapidapi.com'
        }
      };

      const urlCharts = {
        method: 'GET',
        url: 'https://apidojo-yahoo-finance-v1.p.rapidapi.com/market/get-charts',
        params: {
          symbol: '^GSPC',
          interval: '5m',
          range: '1d',
          region: 'US',
          comparisons: '^GDAXI,^FCHI'
        },
        headers: {
          'x-rapidapi-key': '69cdd731d7mshb69784c2a6313b4p1c5444jsnb4f2c4a294ac',
          'x-rapidapi-host': 'apidojo-yahoo-finance-v1.p.rapidapi.com'
        }
      };

    const headers = {
            "method": "GET",
            "headers": {
                "x-rapidapi-key": "69cdd731d7mshb69784c2a6313b4p1c5444jsnb4f2c4a294ac",
                    "x-rapidapi-host": "apidojo-yahoo-finance-v1.p.rapidapi.com"
            }};


      const ALPHA_DAILY_URL = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=MSFT&apikey=${ALPHA_API_KEY}`;



      //======================MARKETSTACK ===================================//

      const marketURL = 'https://api.marketstack.com/v1/tickers/msft/eod';

      const params = {
        access_key: '8ab519ff412561125ca0729e24df2b3c' 
      };

