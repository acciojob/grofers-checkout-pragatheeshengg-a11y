const getSumBtn = document.createElement("button");

getSumBtn.innerText = "Get Total Price";

document.body.appendChild(getSumBtn);

const getSum = () => {

    let prices = document.querySelectorAll(".prices");

    let sum = 0;

    prices.forEach((price) => {
        sum += Number(price.innerText);
    });

    let tr = document.createElement("tr");

    let td = document.createElement("td");

    td.setAttribute("colspan", "2");

    td.setAttribute("id", "ans");

    td.innerText = sum;

    tr.appendChild(td);

    document.querySelector("table").appendChild(tr);
};

getSumBtn.addEventListener("click", getSum);