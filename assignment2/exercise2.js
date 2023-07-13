
    let plan = "Basic";
    let baseCost;
    
    // Set the base cost based on the selected plan
    switch (plan) {
      case "Basic":
        baseCost = 10;
        break;
      case "Standard":
        baseCost = 15;
        break;
      case "Premium":
        baseCost = 20;
        break;
      default:
        console.log( "Invalid plan selected.");
        break;
    }
    
    let personalTrainer = true;
    let mealPlan = false;
    let additionalCost = 0;

    
  if (personalTrainer) {
    additionalCost += 5;
  }
  
  if (mealPlan) {
    additionalCost += 8;
  }
  
  if (personalTrainer && mealPlan) {
    additionalCost -= 3;
  
  }
    let totalCost = baseCost + additionalCost;
    console.log(`Your total cost is ${totalCost}`);