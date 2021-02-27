
let text = document.querySelector('#inputText');
const tableDiv = document.getElementById('tableBody');
const newsDiv = document.getElementById('displayNews');


window.onload = async function requestData(){
        await getDataAsync();

}     
        
// Function to fetch url and get data parsed 
async function getDataAsync(){

    const news = axios.get(NEWS_API);
    const table = axios.get(url1, headers);
    const results = await Promise.all([news, table]);

    console.log(results);

    const newsData = results[0].data;
    const tableData = results[1].data;


    displayNews(newsData);
    createIndexYahooTable(tableData);
    negativeNumber();

  
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


function createIndexYahooTable(tableData){ 

    const resulttrending = tableData.finance.result[0].quotes;          

    for(let i = 0; i < 12 ; i++){
        const tr = document.createElement('tr');


        tr.innerHTML = `    <th scope="row">${resulttrending[i].symbol}</th>
                            <td>${resulttrending[i].shortName}</td>
                            <td>${resulttrending[i].regularMarketPrice}</td>
                            <td>${resulttrending[i].regularMarketChange}</td>
                            <td id="percentage${i}">${resulttrending[i].regularMarketChangePercent.toFixed(2)}</td>`

        tableDiv.appendChild(tr);  

    } 
}




$('.carousel').carousel({
    interval: 500
});
