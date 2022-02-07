const button = document.getElementById("convert.calc")
const select = document.getElementById("currency-select-dolar")

const convertValues = async () => {
    const inputReais = document.getElementById("input-value").value
    const realValueText = document.getElementById("real-value-text")
    const currencyValueText = document.getElementById("currency-value-text")
   
    const data = await fetch("https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL").then(response => response.json())
    
    const dolar = data.USDBRL.ask;
    const euro = data.EURBRL.ask;
    
    
    realValueText.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(inputReais)

    if (select.value === "US$ Dólar americano"){
        currencyValueText.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputReais / dolar);
}

    if (select.value === "€ Euro"){
        currencyValueText.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputReais / euro);
}

};

changeCurrency = () => {
    const currencyName = document.getElementById("currency-name")
    const currencyImg = document.getElementById("currency-image-convers")

    if (select.value === "US$ Dólar americano") {
        currencyName.innerHTML = "Dólar americano"
        currencyImg.src = "./assets/estados-unidos (1) 1.svg"
    }

    if (select.value === "€ Euro") {
        currencyName.innerHTML = "Euro"
        currencyImg.src = "./assets/Euro.svg"
    }

    convertValues()
}

button.addEventListener("click", convertValues)
select.addEventListener("change", changeCurrency)