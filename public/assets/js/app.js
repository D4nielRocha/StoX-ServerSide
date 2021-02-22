
let button = document.querySelector("#button");
let text = document.querySelector('#inputText');
const tableDiv = document.getElementById('tableBody');
const newsDiv = document.getElementById('displayNews');


window.onload = async function requestData(){
         getDataAsync();    
//     // await getDataAsync();
//     // await displayNews(dataJson);
//     // await negativeNumber();
//     // await getDataFromMarketStack();





// async function requestData(){
   
}


        
        
 


//Function to fetch url and get data parsed 
async function getDataAsync(){

    //get msft
    axios.get('http://api.marketstack.com/v1/eod?access_key=8ab519ff412561125ca0729e24df2b3c&symbols=MSFTxx').then( res => {
        // console.log(res.data.data);
        // for(let item of res.data.data){
        //     console.log(item.close);
        // }
    }).catch( err => {
        console.log('ERRORRRRRR' + err);
    })
    axios.get('http://api.marketstack.com/v1/eod?access_key=8ab519ff412561125ca0729e24df2b3c&symbols=TSLA').then( res => {
        // console.log(res.data.data);
        const closes = [];
        for(let item of res.data.data){
            closes.push(item.close);
        }
        return Promise.resolve(closes);
    }).then( data => {
        for(let i = 0; i < 5; i++){
            console.log(data[i]);
        }
    });

    //     try{
    //     fetch('http://api.marketstack.com/v1/eod?access_key=8ab519ff412561125ca0729e24df2b3c&symbols=MSFT')
    //     .then( (response) => {
    //         if(!response){
    //             throw new Error(`Status code error: ${response.status}`);
    //         } else {
    //             response.json().then( (data) => {
    //                 const info = data.data;
    //                 for(let item of info){
    //                     console.log(item.volume);
    //                 }
    //                 })
    //             }
    //         }
    //     )
    // } catch(err){
    //     console.log(err);
    // }
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


async function displayNews(data){

    const display_carousel = document.getElementById('carousel-inner');

    const news = data.articles;

    for(let i = 1; i < 5; i++){
        const news_carousel = ` <div class="carousel-item">
        <div class="view h-100">
        <img class="d-block h-100" src="${news[i].urlToImage}"
        alt="First slide">
        <div class="mask rgba-black-strong h-100"></div>
        </div>
        <div class="carousel-caption h-100">
        <a href="${news[i].url}"><h3 class="h3-responsive">${news[i].title.slice(0,40)}</h3></a>
        <p>${news[i].description.slice(0.10)}...</p>
        </div>
    </div>` 

    display_carousel.innerHTML += news_carousel;

    }

    display_carousel.firstElementChild.classList.add('active');


};


function createIndexYahooTable(results){
    
    const resultSummary = results[0].data.marketSummaryAndSparkResponse.result;
    const resulttrending = results[1].data.finance.result[0].quotes;
    const resultNews = results[2].data.data.contents[0].content;
    

              

    for(let i = 0; i < 12 ; i++){
        const tr = document.createElement('tr');


        tr.innerHTML = `    <th scope="row">${resulttrending[i].symbol}</th>
                            <td>${resulttrending[i].shortName}</td>
                            <td>${resulttrending[i].regularMarketPrice}</td>
                            <td>${resulttrending[i].regularMarketChange}</td>
                            <td id="percentage${i}">${resulttrending[i].regularMarketChangePercent.toFixed(2)}</td>`

        tableDiv.appendChild(tr);  

    } 

    newsDiv.innerHTML = `<a href="${resultNews.canonicalUrl.url}"><img src="${resultNews.body.data.partnerData.cover.image.originalUrl}"></a>`
}




$('.carousel').carousel({
    interval: 500
});



