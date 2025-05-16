function convertTemperature() {
    let temp = parseFloat(document.getElementById("temperature").value);
    let unit = document.getElementById("unit").value;
    let convertedTemp = "";

    if (isNaN(temp)) {
        document.getElementById("result").innerText = "Please enter a valid number!";
        return;
    }

    if (unit === "Celsius") {
        convertedTemp = `${temp}°C = ${(temp * 9/5 + 32).toFixed(2)}°F = ${(temp + 273.15).toFixed(2)}K`;
    } else if (unit === "Fahrenheit") {
        convertedTemp = `${temp}°F = ${((temp - 32) * 5/9).toFixed(2)}°C = ${(((temp - 32) * 5/9) + 273.15).toFixed(2)}K`;
    } else if (unit === "Kelvin") {
        convertedTemp = `${temp}K = ${(temp - 273.15).toFixed(2)}°C = ${((temp - 273.15) * 9/5 + 32).toFixed(2)}°F`;
    }

    document.getElementById("result").innerText = convertedTemp;
}