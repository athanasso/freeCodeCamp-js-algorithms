function checkCashRegister(price, cash, cid) {
  let cashArray = cid.map(e => e[1]*100),
      transformed = [1, 5, 10, 25, 100, 500, 1000, 2000, 10000],
      rawChange = ((cash - price)*100),
      product = [["PENNY", 0],  ["NICKEL", 0],  ["DIME", 0],  ["QUARTER", 0],  ["ONE", 0],  ["FIVE", 0],  ["TEN", 0],  ["TWENTY", 0],  ["ONE HUNDRED", 0]],
      change = {status: "", change: []}; 
  for (let i = cashArray.length - 1; i >= 0; i--) {
    while(cashArray[i] > 0) {
      if (rawChange - transformed[i] >= 0) {
        product[i][1] += transformed[i];
        rawChange -= transformed[i];
        cashArray[i] -= transformed[i];       
      } else { break; }
    }
    if (rawChange === 0) {break;}
  }
  for (let i = product.length -1;i >= 0; i--){
    if (product[i][1] !== 0){
      product[i][1] = product[i][1]/100
    }
  }
  if (rawChange !== 0) {
    change.status = "INSUFFICIENT_FUNDS";
    return change;
  }
  else if (rawChange === 0 && JSON.stringify(product)==JSON.stringify(cid)) {    
    change.status = "CLOSED";
    change.change = product;
    return change;        
  }
  else {  
    product = product.filter(e => e[1] !== 0).reverse();  
    change.status = "OPEN";
    change.change = product;
    return change;
  }
}