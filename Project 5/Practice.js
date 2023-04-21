// Task 1

var zakatPercentage = 0.025;
var userInput= prompt("Enter your Amount")
var result = zakatPercentage*userInput;
alert("Your Zakat value is"+ Number.parseInt(result));

// Task 02

var gundum = '250'
var jo = '540'
var khajoor = '2115'
var kishmish = '3200'
var familyMembers = prompt("Enter Your Family Members")
var convert = Number(familyMembers)
var fitrahMethod = prompt("Enter Fitrah Method , Type 1 for Gandum, 2 for Jo, 3 for Khajoor , 4 for Kishmish")
var convert2 = Number(fitrahMethod);

if (convert2 = 1) {
  alert("Your Fitrah amount is Rs." + (convert * khajoor))
}
else if(convert2 =2){
  alert(convert*gundum)
}
else if(convert2 =3){
  alert(convert*jo)
}
else if(convert2 =4){
  alert(convert*kishmish)
}
else{
  alert("The value is invalid")
}


// Task 03

var a = prompt("Guess the number?")
a = Number.parseInt(a) // Converting a string into a number
console.log(typeof a)
if (a == 7) {
    alert("Congratulations")
}
else {
    alert("Try again")
}

// Task 4

var sentence = prompt("Enter your name")
console.log(
    sentence[0].toUpperCase() + sentence.slice(1).toLowerCase()
)

// Task 05

var arr = []
var a = prompt("Enter Your Name")
var b = prompt("Enter Your Contact Number")
b = Number.parseInt(b)
arr.push(a, b)
console.log(arr)

for (var i = 0; i < arr.length; i++) {
    console.log(arr[i])
}

// Task 06

// // Task 06
var product = ["Juices", "Lays", "Cold Drinks", "Chocolates", "Biscuits", "Chips", "Cakes" ]
var deletedValues=product.splice(2 ,3)
console.log(product)
console.log(deletedValues)
console.log(product.length)

// Task 7

var a = prompt("Hey whats your nationality")
if (a == "Pakistani") {

    var b = prompt("Hey whats your age")
    if (b >= 18) {

        var c = prompt("What is your gender")
        if (c == "Female") {
            var d = prompt("You are married")
            if (d == "Yes") {
                alert("You are eligible for vote")
            }
            else {
                alert("You are not eligible for vote")
            }
        }

        if (c == "Male") {
            alert("You are eligible for vote")
        }

    }

    else {
        alert("You are not eligible for vote")
    }
}

else {
    alert("You are not eligible for vote")
}

// Task 08

var arr=["Fakhar Zaman", "Saim Ayub", "M Haris", "Zaman Khan", "Ihsanullah", "Shaheen Afridi", "Haris Rauf", "Babar Azam" , "M Rizwan" , "Shadab Khan", "Imad Wasim", "Iftikhar Ahmed", "Naseem Shah", "M Nawaz", "M Wasim"]
var newArr= arr.slice(4,15)
console.log(newArr)