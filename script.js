const convertButton = document.querySelector('.convert-button');
const selectOutput = document.querySelector('.select-output');

function convertCurrency() {
    const inputCurrencyValue = (document.querySelector('.input-value').value)
    const currencyToConvert = document.querySelector('.currency-to-convert')
    const currencyConverted = document.querySelector('.currency-converted')

    const dolarToday = 5.05
    const euroToday = 5.86
    const libraToday = 6.20
    const bitcoinToday = 0.000013

    const convertedValueDolar = inputCurrencyValue / dolarToday
    const convertedValueEuro = inputCurrencyValue / euroToday
    const convertedValueLibra = inputCurrencyValue / libraToday
    const convertedValueBitcoin = inputCurrencyValue / bitcoinToday

    if (selectOutput.value === "dolar") {
        currencyConverted.innerHTML = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD'
        }).format(convertedValueDolar)

    } else if (selectOutput.value === "euro") {
        currencyConverted.innerHTML = new Intl.NumberFormat('de-DE', {
            style: 'currency',
            currency: 'EUR'
        }).format(convertedValueEuro)

    } else if (selectOutput.value === "libra") {
        currencyConverted.innerHTML = new Intl.NumberFormat('en-GB', {
            style: 'currency',
            currency: 'GBP'
        }).format(convertedValueLibra)

    } else if (selectOutput.value === "bitcoin") {
        currencyConverted.innerHTML = `${new Intl.NumberFormat('en-US', {
            minimumFractionDigits: 8,
            maximumFractionDigits: 8
        }).format(convertedValueBitcoin)} BTC`
    }

    currencyToConvert.innerHTML = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    }).format(inputCurrencyValue)
}


function changeCurrency() {
    const currencyName = document.getElementById('currency-name')
    const currencyImage = document.querySelector('.currency-usd')

    if (selectOutput.value === "dolar") {
        currencyName.innerHTML = "Dólar Americano"
        currencyImage.src = "./assets/usd.png"
    }
    if (selectOutput.value === "euro") {
        currencyName.innerHTML = "Euro"
        currencyImage.src = "./assets/euro.png"
    }
    if (selectOutput.value === "libra") {
        currencyName.innerHTML = "Libra Esterlina"
        currencyImage.src = "./assets/libra.png"
    }

    if (selectOutput.value === "bitcoin") {
        currencyName.innerHTML = "Bitcoin"
        currencyImage.src = "./assets/bitcoin.png"
    }
    convertCurrency()
}

selectOutput.addEventListener("change", changeCurrency)

convertButton.addEventListener("click", convertCurrency);