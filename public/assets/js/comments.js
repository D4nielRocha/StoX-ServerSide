//fetch chainning 

// function marketStackAPI(){
//     fetch('http://api.marketstack.com/v1/eod?access_key=8ab519ff412561125ca0729e24df2b3c&symbols=AAPL')
//     .then( (response) => {
//         if(!response){
//             throw new Error('Error' + response.status);
//         }
//         return response.json();
//     })
//     .then( (data) => {
//         console.log(data);
//         return fetch('http://api.marketstack.com/v1/eod?access_key=8ab519ff412561125ca0729e24df2b3c&symbols=MSFT')
//     })
//     .then( response => {
//         if(!response){
//             throw new Error('Error' + response.status)
//         }
//         console.log(response);
//         return response.json();
//     })
//     .then( data => {
//         const msft = data;
//         console.log(msft);
//     })
// }


//======================================================================================================================================

//Alphavantage API KEY:  W3975TFRO13G7RVG

//======================================================================================================================================

//fetch with try / catch 


//     try{
//         fetch('http://api.marketstack.com/v1/eod?access_key=8ab519ff412561125ca0729e24df2b3c&symbols=MSFT')
//         .then( response => {
//             if(!response){
//                 throw new Error(`Status code error: ${response.status}`);
//             } else {
//                 response.json().then( (data) => {
//                     const info = data.data;
//                     for(let item of info){
//                         console.log(item.volume);
//                     }
//                     })
//                 }
//             }
//         )
//     } catch(err){
//         console.log(err);
//     }
// };


//======================================================================================================================================

//declaring const = axios.get  and then resolving all with Promise.all 



// const summary = axios.get(url, headers);
    // const trending = axios.get(url1, headers);
    // const news = axios.request(urlNews);
    // const charts = axios.request(urlCharts);
    // const news_api = axios.get(NEWS_API);
    // const marketAPI = axios.get(marketURL);
    // const ALPHA_DAILY = axios.get(ALPHA_DAILY_URL);
    // const results = await Promise.all([summary, trending, news, charts, news_api]);
    // const results = await Promise.all([marketAPI]);

    // console.log(results);