$('.carousel').carousel({
    interval: 500
});





let button = document.querySelector("#button");
let text = document.querySelector('#inputText');
const tableDiv = document.getElementById('tableBody');
const newsDiv = document.getElementById('displayNews');


window.onload = async function requestData(){
    // await getDataAsync();
    // await negativeNumber();
    // await getDataFromMarketStack();
};



// async function requestData(){
   
// }


        
        
 


//Function to fetch url and get data parsed 
async function getDataAsync(){


    const summary = axios.get(url, headers);
    const trending = axios.get(url1, headers);
    const news = axios.request(urlNews);
    const charts = axios.request(urlCharts);
    // const ALPHA_DAILY = axios.get(ALPHA_DAILY_URL);
    const results = await Promise.all([summary, trending, news, charts /*ALPHA_DAILY*/]);

    console.log(results);
    // console.log(await ALPHA_DAILY.data['Time Ser']);


    const resultSummary = results[0].data.marketSummaryAndSparkResponse.result;
    const resulttrending = results[1].data.finance.result[0].quotes;
    const resultNews = results[2].data.data.contents[0].content;
    

    console.log(resultSummary);
    console.log(resulttrending);
    console.log(resultNews.body.data.partnerData.cover.image.originalUrl);

              

    for(let i = 0; i < 12 ; i++){
        const tr = document.createElement('tr');


        tr.innerHTML = `    <th scope="row">${resulttrending[i].symbol}</th>
                            <td>${resulttrending[i].shortName}</td>
                            <td>${resulttrending[i].regularMarketPrice}</td>
                            <td>${resulttrending[i].regularMarketChange}</td>
                            <td id="percentage${i}">${resulttrending[i].regularMarketChangePercent.toFixed(2)}</td>`

        tableDiv.appendChild(tr);  

    } 

    // newsDiv.innerHTML = `<a href="${resultNews.canonicalUrl.url}"><img src="${resultNews.body.data.partnerData.cover.image.originalUrl}"></a>`

}



//Add Red Color to negative numbers 
async function negativeNumber(){
    for(let i = 0; i < 12; i++){

    const percentage =  document.querySelector(`#percentage${i}`);

    console.log(percentage.innerText); 

        if(Number(percentage.innerText) < 0){
            percentage.style.color = "red";
            } 
    }  
} 


async function getDataFromMarketStack(){

    axios.get('http://api.marketstack.com/v1/eod?access_key=8ab519ff412561125ca0729e24df2b3c&symbols=AAPL')
    .then(response => {
        const apiResponse = response.data;
        console.log(apiResponse);
    }).catch(error => {
        console.log(error);
    })
}




  


           







//==========================================================================================
// try{
//     const response = await fetch(url, {
//       "method": "GET",
//       "headers": {
//         "x-rapidapi-key": "69cdd731d7mshb69784c2a6313b4p1c5444jsnb4f2c4a294ac",
//             "x-rapidapi-host": "apidojo-yahoo-finance-v1.p.rapidapi.com"
//       }
//     })
//       const response1 = await fetch(url1, {
//         "method": "GET",
//         "headers": {
//           "x-rapidapi-key": "69cdd731d7mshb69784c2a6313b4p1c5444jsnb4f2c4a294ac",
//               "x-rapidapi-host": "apidojo-yahoo-finance-v1.p.rapidapi.com"
//         }
//     });

//     const json = await response.json();
//     const json1 = await response1.json();
//     console.log(json);
//     console.log(json1);


    //code for market summary  =======================

    // const results = json.marketSummaryAndSparkResponse.result;


    // for(let i = 0; i < 5 ; i++){
    //     const tr = document.createElement('tr');


    //     tr.innerHTML = `    <th scope="row">${resultSummary[i].shortName}</th>
    //                         <td>${resultSummary[i].region}</td>
    //                         <td>${resultSummary[i].quoteType}</td>
    //                         <td>${resultSummary[i].spark.previousClose}</td>`

    //     tableDiv.appendChild(tr);
    // }
//==========================================================================================





//Alphavantage API KEY:  W3975TFRO13G7RVG
