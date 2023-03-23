let url = "https://v2.jokeapi.dev/joke/Dark?amount=10";
//#region <Mock data>
let stringResponse = [
    {
      "id": "01coin",
      "symbol": "zoc",
      "name": "01coin"
    },
    {
      "id": "0chain",
      "symbol": "zcn",
      "name": "Zus"
    },
    {
      "id": "0vix-protocol",
      "symbol": "vix",
      "name": "0VIX Protocol"
    },
    {
      "id": "0x",
      "symbol": "zrx",
      "name": "0x"
    },
    {
      "id": "0x0-ai-ai-smart-contract",
      "symbol": "0x0",
      "name": "0x0.ai: AI Smart Contract"
    },
    {
      "id": "0xdao",
      "symbol": "oxd",
      "name": "0xDAO"
    },
    {
      "id": "0xdao-v2",
      "symbol": "oxd v2",
      "name": "0xDAO V2"
    },
    {
      "id": "0xmonero",
      "symbol": "0xmr",
      "name": "0xMonero"
    },
    {
      "id": "0xpad",
      "symbol": "0xpad",
      "name": "0xPAD"
    },
    {
      "id": "0xtrade",
      "symbol": "0xt",
      "name": "0xTrade"
    },
    {
      "id": "0xwallet-token",
      "symbol": "0xw",
      "name": "0xWallet Token"
    },
    {
      "id": "11957-olga",
      "symbol": "realt-s-11957-olga-st-detroit-mi",
      "name": "RealT - 11957 Olga St, Detroit, MI 48213"
    },
    {
      "id": "12405-santa-rosa",
      "symbol": "realt-s-12405-santa-rosa-dr-detroit-mi",
      "name": "RealT - 12405 Santa Rosa Dr, Detroit, MI 48204"
    },
    {
      "id": "12ships",
      "symbol": "tshp",
      "name": "12Ships"
    },
    {
      "id": "1337",
      "symbol": "1337",
      "name": "Elite"
    },
    {
      "id": "14066-santa-rosa",
      "symbol": "realt-s-14066-santa-rosa-dr-detroit-mi",
      "name": "RealT - 14066 Santa Rosa Dr, Detroit, MI 48238"
    },
    {
      "id": "1617-s-avers",
      "symbol": "realt-s-1617-s.avers-ave-chicago-il",
      "name": "RealT - 1617 S Avers Ave, Chicago, IL 60623"
    },
    {
      "id": "1815-s-avers",
      "symbol": "realt-s-1815-s.avers-ave-chicago-il",
      "name": "RealT - 1815 S Avers Ave, Chicago, IL 60623"
    },
    {
      "id": "1art",
      "symbol": "1art",
      "name": "OneArt"
    },
    {
      "id": "1bch",
      "symbol": "1bch",
      "name": "1BCH"
    },
    {
      "id": "1box",
      "symbol": "1box",
      "name": "1BOX"
    }]
//#endregion

let jokes = [];

$.ajax({
    type: "GET",
    url : url,
    async : false,
    success: function(response){
        readResponseToArray(response,jokes);
    },
    error: function(response){
      
      console.log(response);
        
    }
  });

  

jokes.forEach(joke =>{
    console.log(joke);
});




function updateCoinsWithMoreData(jokes){
    
}

function readResponseToArray(response,array){
    
    for(let i = 0; i < 10; i++){
        if(response['jokes'] == undefined) break;
        console.log('pushing joke');
        array.push(response['jokes'][i]);
    }
}



