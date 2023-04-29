$(document).ready(function() {
    // Define the Coingecko API endpoint and the coin's ID (based on its address)
    var PPapiUrl = "https://api.coingecko.com/api/v3/coins/ethereum/contract/0x8442E0e292186854BB6875b2A0fc1308b9Ded793";
    var PepeapiUrl = "https://api.coingecko.com/api/v3/coins/ethereum/contract/0x6982508145454ce325ddbe47a25d4ec3d2311933";
    // Note: replace "ethereum" with the blockchain type if PP is not an Ethereum-based token

    // Make a request to the API and update the price and market cap data on the webpage
    $.get(PPapiUrl, function(data) {
        var price = data.market_data.current_price.usd;
        var supply = 69696969;
        var marketCap = price * supply;

        $("#ppprice").text("PP Price: " + price.toLocaleString("en-US", { style: "currency", currency: "USD", minimumFractionDigits: 2, maximumFractionDigits: 8 }));
        $("#ppmarketcap").text("PP Marketcap: $" + marketCap.toLocaleString("en-US", { maximumFractionDigits: 0 }));
        
    $.get(PepeapiUrl, function(data) {
        var price = data.market_data.current_price.usd;
        var supply = 420690000000000;
        var marketCap = price * supply;

        $("#pepeprice").text("Pepe Price: " + price.toLocaleString("en-US", { style: "currency", currency: "USD", minimumFractionDigits: 2, maximumFractionDigits: 8 }));
        $("#pepemarketcap").text("Pepe Marketcap: $" + marketCap.toLocaleString("en-US", { maximumFractionDigits: 0 }));
    });
});
});
