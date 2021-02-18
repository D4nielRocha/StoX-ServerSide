        let button = document.querySelector("#button");
        let text = document.querySelector('#inputText');


        // let stockSearch = text.value;

        
        function requestData(){
          let stockSearch = text.value;
          console.log(stockSearch);
        

        const API_KEY = "69cdd731d7mshb69784c2a6313b4p1c5444jsnb4f2c4a294ac";
        const headers = new Headers();
        // const init = {method: 'GET', headers: `${headers}`, mode: 'cors', cache: 'default'};
        const url = `https://apidojo-yahoo-finance-v1.p.rapidapi.com/stock/v2/get-financials?symbol=${stockSearch}&region=US`;
        // const url = `https://newsapi.org/v2/top-headlines?sources?category=${news_source}&apiKey=${API_KEY}`;
        
        getDataAsync();

        
        //Function to fetch url and get data parsed 
        async function getDataAsync(){
        
        
        try{
            const response = await fetch(url, {
              "method": "GET",
              "headers": {
                "x-rapidapi-key": "69cdd731d7mshb69784c2a6313b4p1c5444jsnb4f2c4a294ac",
		            "x-rapidapi-host": "apidojo-yahoo-finance-v1.p.rapidapi.com"
              }
            });
    
            const json = await response.json();
            console.log(json);
    
            console.log(json.price.shortName);  
            console.log(json.price.regularMarketPrice.raw);  
            
           
    
            // console.log(json.price.shortName);
        } catch(err){
            console.log(err);
        }

    }
        
        }
    


    button.addEventListener('click', () =>{
        requestData();
        // console.log(json.price.shortName);
    })




 