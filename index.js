let express = require("express");
let app = express();

function getWelcomeMessage() {
  return "Welcome to our service!";
}

app.get("/welcome", (req, res) => {
  res.send(getWelcomeMessage());
});

function getGreetingMessage(username) {
  return "Hello, " + username + "!";
}

app.get("/greet", (req, res) => {
  const { username } = req.query;
  res.send(getGreetingMessage(username));
});

function checkPassword(password) {
  if (password.length > 15) {
    return "Password is strong.";
  } else {
    return "Password is weak.";
  }
}

app.get("/check-password", (req, res) => {
  const { password } = req.query;
  res.send(checkPassword(password));
});

function calculateSum(num1, num2) {
  const sum = num1 + num2;
  return sum.toString();
}

app.get("/sum", (req, res) => {
  const { num1, num2 } = req.query;
  const parsedNum1 = parseFloat(num1);
  const parsedNum2 = parseFloat(num2);

  res.send(calculateSum(parsedNum1, parsedNum2));
});

function checkSubscriptionStatus(userName, subscribed) {
  if (subscribed === "true") {
    return userName + " is subscribed";
  } else {
    return userName + " is not subscribed";
  }
}

app.get("/subscription-status", (req, res) => {
  let userName = req.query.userName;
  let subscribed = req.query.isSubscribed;

  res.send(checkSubscriptionStatus(userName, subscribed));
});

function calculateDiscountedPrice(price, discount) {
  const finalPrice = price - (price * discount) / 100;
  return finalPrice.toString(); 
}

app.get("/discounted-price", (req, res) => {
  const { price, discount } = req.query;
  const parsedPrice = parseFloat(price);
  const parsedDiscount = parseFloat(discount);

  res.send(calculateDiscountedPrice(parsedPrice, parsedDiscount));
});

function getGreeting(age, gender, name) {
  return "Hello, " + name + "! You are a " + age + "year old " + gender + "."
}

app.get("/personalized-greeting" , (req , res ) => {
  let age = req.query.age
  let gender = req.query.gender
  let name = req.query.name

  res.send(getGreeting(age, gender, name))
  
})

function calculateDiscountedPrice(price, discount, tax){
  let discountedPrice = price - (price * (discount / 100))
  let finalPrice = discountedPrice + (discountedPrice * (tax / 100))
  return finalPrice.toString()
}

app.get("/final-price" , ( req , res ) => {
  let price = parseFloat(req.query.price)
  let discount  = parseFloat(req.query.discount)
  let tax = parseFloat(req.query.tax)

  res.send(calculateDiscountedPrice(price, discount, tax))
})

function calculateTotalExerciseTime(running, cycling, swimming) {
  return running + cycling + swimming;
}

app.get("/total-exercise-time" , ( req , res ) => {
  let running = parseInt(req.query.running);
  let cycling = parseInt(req.query.cycling);
  let swimming = parseInt(req.query.swimming);

   res.send(calculateTotalExerciseTime(running, cycling, swimming).toString());
    })

const port = 3000;
app.listen(port, () => {
  console.log("Server is running on http://localhost:" + port);
});
