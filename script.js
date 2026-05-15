const getSumBtn = document.createElement("button");
getSumBtn.innerText = "Get Total Price";

document.body.appendChild(getSumBtn);

const getSum = () => {

    let prices = document.querySelectorAll(".prices");

    let sum = 0;

    prices.forEach((price) => {
        sum += Number(price.innerText);
    });

    // Create row
    let tr = document.createElement("tr");

    // Create cell
    let td = document.createElement("td");

    td.setAttribute("colspan", "2");
    td.innerText = sum;

    tr.appendChild(td);

    // Append to table
    document.querySelector("table").appendChild(tr);
};

getSumBtn.addEventListener("click", getSum);