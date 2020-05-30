
// accepts 'tipAmt', 'billAmt', 'tipPercent' and sums total from allPayments objects
function sumPaymentTotal(type) {
  let total = 0;

  for (let key in allPayments) {
    let payment = allPayments[key];

    total += Number(payment[type]);
  }

  return total;
}

// converts the bill and tip amount into a tip percent
function calculateTipPercent(billAmt, tipAmt) {
  return Math.round(100 / (billAmt / tipAmt));
}

// expects a table row element, appends a newly created td element from the value
function appendTd(tr, value) {
  let newTd = document.createElement('td');
  newTd.innerText = value;

  tr.append(newTd);
}

function appendDeleteBtn(tr){
  let newTd = document.createElement('td');
  newTd.innerText = 'X';

  newTd.addEventListener("click",function(){
    rmServerId = newTd.parentElement.id;
    delete allServers[rmServerId];
    newTd.parentElement.remove();
    updateServerTable();
  })

  tr.append(newTd);
}

function appendPaymentDeleteBtn(tr){
  let newTd = document.createElement('td');
  newTd.innerText = 'X';

  newTd.addEventListener("click",function(){
    rmPaymentId = newTd.parentElement.id;
    delete allPayments[rmPaymentId];
    newTd.parentElement.remove();
    updateSummary();
    updateServerTable();
  })

  tr.append(newTd);
}