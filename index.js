const calculate = () => {
  const salary = document.getElementById("salary");
  const totalTax = document.getElementById("totalTax");
  const NetPay = document.getElementById("NetPay");
  
  const workValue = document.getElementById("work").value;
  console.log("workValue", workValue);
  
  const perValue = document.getElementById("per").value;
  console.log("perValue", perValue);
  
  const incomeValue = document.getElementById("income").value;
  console.log("incomeValue", incomeValue);
  // ------------
  if (workValue === "British Columbia") {
    var total = 0;
    if (perValue === "monthly") {
      total = (incomeValue * 2.37) / 100;
      console.log("total", total);
    }
    if (perValue === "bi-weekly") {
      total = (incomeValue * 1.106) / 100;
      console.log("total", total);
    }
    if (perValue === "weekly") {
      total = (incomeValue * 0.553) / 100;
      console.log("total", total);
    }
    if (perValue === "daily") {
      total = (incomeValue * 0.079) / 100;
      console.log("total", total);
    }
    if (perValue === "year") {
      console.log("in year");
      total = (incomeValue * 29) / 100;
      // total = subTotal * 12;
      console.log("total", total);
    }
    const integerIncomeValue = parseInt(incomeValue);
    salary.innerText = incomeValue;
    totalTax.innerText = total;
    NetPay.innerHTML = integerIncomeValue - total
  }
  // -----------------------------------
  if (workValue === "Ontario") {
    var total = 0;
    if (perValue === "monthly") {
      total = (incomeValue * 2.64) / 100;
      console.log("total", total);
    }
    if (perValue === "bi-weekly") {
      total = (incomeValue * 1.232) / 100;
      console.log("total", total);
    }
    if (perValue === "weekly") {
      total = (incomeValue * 0.616) / 100;
      console.log("total", total);
    }
    if (perValue === "daily") {
      total = (incomeValue * 0.088) / 100;
      console.log("total", total);
    }
    if (perValue === "year") {
      console.log("in year");
      total = (incomeValue * 32) / 100;
      // total = subTotal * 12;
      console.log("total", total);
    }
    const integerIncomeValue = parseInt(incomeValue);
    salary.innerText = incomeValue;
    totalTax.innerText = total;
    NetPay.innerHTML = integerIncomeValue - total
  }
  // -----------------------------------
  if (workValue === "Alberta") {
    var total = 0;
    if (perValue === "monthly") {
      total = (incomeValue * 2.31) / 100;
      console.log("total", total);
    }
    if (perValue === "bi-weekly") {
      total = (incomeValue * 1.078) / 100;
      console.log("total", total);
    }
    if (perValue === "weekly") {
      total = (incomeValue * 0.539) / 100;
      console.log("total", total);
    }
    if (perValue === "daily") {
      total = (incomeValue * 0.077) / 100;
      console.log("total", total);
    }
    if (perValue === "year") {
      console.log("in year");
      total = (incomeValue * 28) / 100;
      // total = subTotal * 12;
      console.log("total", total);
    }
    const integerIncomeValue = parseInt(incomeValue);
    salary.innerText = incomeValue;
    totalTax.innerText = total;
    NetPay.innerHTML = integerIncomeValue - total
  }
  // -----------------------------------
  if (workValue === "Quebec") {
    var total = 0;
    if (perValue === "monthly") {
      total = (incomeValue * 2.46) / 100;
      console.log("total", total);
    }
    if (perValue === "bi-weekly") {
      total = (incomeValue * 1.148) / 100;
      console.log("total", total);
    }
    if (perValue === "weekly") {
      total = (incomeValue * 0.574) / 100;
      console.log("total", total);
    }
    if (perValue === "daily") {
      total = (incomeValue * 0.082) / 100;
      console.log("total", total);
    }
    if (perValue === "year") {
      console.log("in year");
      total = (incomeValue * 30) / 100;
      // total = subTotal * 12;
      console.log("total", total);
    }
    const integerIncomeValue = parseInt(incomeValue);
    salary.innerText = incomeValue;
    totalTax.innerText = total;
    NetPay.innerHTML = integerIncomeValue - total
  }
  // -----------------------------------
  if (workValue === "Manitoba") {
    var total = 0;
    if (perValue === "monthly") {
      total = (incomeValue * 2.88) / 100;
      console.log("total", total);
    }
    if (perValue === "bi-weekly") {
      total = (incomeValue * 1.344) / 100;
      console.log("total", total);
    }
    if (perValue === "weekly") {
      total = (incomeValue * 0.672) / 100;
      console.log("total", total);
    }
    if (perValue === "daily") {
      total = (incomeValue * 0.096) / 100;
      console.log("total", total);
    }
    if (perValue === "year") {
      console.log("in year");
      total = (incomeValue * 35) / 100;
      // total = subTotal * 12;
      console.log("total", total);
    }
    const integerIncomeValue = parseInt(incomeValue);
    salary.innerText = incomeValue;
    totalTax.innerText = total;
    NetPay.innerHTML = integerIncomeValue - total
  }
  // -----------------------------------
  if (workValue === "New Brunswick") {
    var total = 0;
    if (perValue === "monthly") {
      total = (incomeValue * 2.46) / 100;
      console.log("total", total);
    }
    if (perValue === "bi-weekly") {
      total = (incomeValue * 1.148) / 100;
      console.log("total", total);
    }
    if (perValue === "weekly") {
      total = (incomeValue * 0.574) / 100;
      console.log("total", total);
    }
    if (perValue === "daily") {
      total = (incomeValue * 0.082) / 100;
      console.log("total", total);
    }
    if (perValue === "year") {
      console.log("in year");
      total = (incomeValue * 30) / 100;
      // total = subTotal * 12;
      console.log("total", total);
    }
    const integerIncomeValue = parseInt(incomeValue);
    salary.innerText = incomeValue;
    totalTax.innerText = total;
    NetPay.innerHTML = integerIncomeValue - total
  }
  // ------------------------------
  if (workValue === "Yukon") {
    var total = 0;
    if (perValue === "monthly") {
      total = (incomeValue * 1.65) / 100;
      console.log("total", total);
    }
    if (perValue === "bi-weekly") {
      total = (incomeValue * 0.77) / 100;
      console.log("total", total);
    }
    if (perValue === "weekly") {
      total = (incomeValue * 0.385) / 100;
      console.log("total", total);
    }
    if (perValue === "daily") {
      total = (incomeValue * 0.055) / 100;
      console.log("total", total);
    }
    if (perValue === "year") {
      console.log("in year");
      total = (incomeValue * 20) / 100;
      // total = subTotal * 12;
      console.log("total", total);
    }
    const integerIncomeValue = parseInt(incomeValue);
    salary.innerText = incomeValue;
    totalTax.innerText = total.toFixed(2);
    NetPay.innerHTML = integerIncomeValue - total;
  }
};




function year() {
  const workValue = document.getElementById("work").value;
  console.log("workValue", workValue);

  const perValue = document.getElementById("per").value;
  console.log("perValue", perValue);

  const incomeValue = document.getElementById("income").value;
  console.log("incomeValue", incomeValue);

  if (workValue === "British Columbia") {

  }
  else if (workValue === "Ontario"){

  }else if (workValue === "Alberta"){

  }else if (workValue === "Quebec") {
    
  }else if (workValue === "Manitoba"){

  }else if (workValue === "New Brunswick") {

  }else {
    var total = (incomeValue * 20) / 100;
  }
  const integerIncomeValue = parseInt(incomeValue);
  salary.innerText = incomeValue;
  totalTax.innerText = total.toFixed(2);
  NetPay.innerHTML = integerIncomeValue - total;
}
