const convertButton = document.querySelector(".convert-button")
const currencySelect = document.querySelector(".currency-select")


function convertValues() {

  const inputCurrencyValue = document.querySelector(".input-currency").value
  const currencyValueToConvert = document.querySelector(".currency-value-to-convert")  //esse comando pega o valor do real 
  const currencyValueCoverted = document.querySelector(".currency-value")              //esse comando pega o valor do dolar

  console.log(currencySelect.value)

  const dolarToday = 5.2

  const euroToday = 6.2

  const bitcoinToday = 29.1

  const libraToday = 7.2



  if (currencySelect.value == "dolar") {
    currencyValueCoverted.innerHTML = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD"
    })
      .format(inputCurrencyValue / dolarToday)
  }
  if (currencySelect.value == "euro") {
    currencyValueCoverted.innerHTML = new Intl.NumberFormat("de-DE", {
      style: "currency",
      currency: "EUR"
    })
      .format(inputCurrencyValue / euroToday)
  }
  if (currencySelect.value == "bitcoin") {
    currencyValueCoverted.innerHTML = new Intl.NumberFormat("btc", {
      style: "currency",
      currency: "BTC"
    })
      .format(inputCurrencyValue / bitcoinToday)
  }
  if (currencySelect.value == "libra") {
    currencyValueCoverted.innerHTML = new Intl.NumberFormat("GBP", {
      style: "currency",
      currency: "GBP"
    })
      .format(inputCurrencyValue / libraToday)
  }


  currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL"
  })
    .format(inputCurrencyValue)
}


function changeCurrency() {
  const currencyName = document.getElementById("currency-name")

  const currencyImage = document.querySelector(".currency-img")

  if (currencySelect.value == "dolar") {
    currencyName.innerHTML = "Dólar americano"
    currencyImage.src = "./assets/logo-usa.png"
  }
  if (currencySelect.value == "euro") {
    currencyName.innerHTML = "Euro"
    currencyImage.src = "./assets/logo-euro.png"
  }
  if (currencySelect.value == "bitcoin") {
    currencyName.innerHTML = "Bitcoin"
    currencyImage.src = "./assets/logo-bitcoin.png"
  }

  if (currencySelect.value == "libra") {
    currencyName.innerHTML = "LIbra"
    currencyImage.src = "./assets/logo-libra.png"
  }

  convertValues()

}


currencySelect.addEventListener("change", changeCurrency)
convertButton.addEventListener("click", convertValues)