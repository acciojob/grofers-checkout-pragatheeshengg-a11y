const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);
let done=0;
const getSum = () => {
//Add your code here
	if(done!=0){/*initial click 1st done is 0 condition fail then done=1 now the 2nd click done is!=0 so return noting */
        return ;
    }
     
    done=1;
    let prc=document.querySelectorAll('.prices');
let sum=0;
for(let i=0;i<prc.length;i++){
        let temp=prc[i].textContent;
        sum+=Number(temp);
}
/*alert(`The sum is : ${sum}`);*/
 let tr=document.createElement('tr');
 let td1=document.createElement('td');
 let td2=document.createElement('td');
 td1.textContent="Total";
 td2.textContent=`${sum}`;
 tr.appendChild(td1);
 tr.appendChild(td2);
 
 let table=document.querySelector('table');
 table.appendChild(tr);
  
};

getSumBtn.addEventListener("click", getSum);

