const convertBtn = document.getElementById('Convert');
const resultEl = document.getElementById('result');
const tempEl = document.getElementById('temp');
const type = document.getElementById('type');

convertBtn.addEventListener('click',(e) => {
  e.preventDefault()
  let temp = tempEl.value;
  if(type.value === "celcius") {
      let converted = Math.round((temp - 32) / 1.8)
        resultEl.textContent = `${converted} °C`
  }
  else {
    let converted = Math.round((temp * (9/5)) + 32)
      resultEl.textContent = `${converted} °F`
  }

});