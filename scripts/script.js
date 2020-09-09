
function iniciarCalculo()
{
    let name = document.getElementById("name").value;
    let crush = document.getElementById("crush").value;
    let x = document.getElementById("result");
    let randomNumber = Math.ceil(Math.random() * 100);
    x.innerHTML = `The chemistry of love between ${name} and ${crush} is of ${randomNumber}%`;
}