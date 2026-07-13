// create a function to Launch a browser using if-else//
function launchBrowser(browserName)
{
if 
   (browserName == "Chrome")
   {
console.log("Launching browser:", browserName)
}
else {
    console.log ("Launching default broswer", browserName)
}
}
launchBrowser ("firefox");

//create a function to run tests smoke, sanity and regression
//
//using switch fn//
function testType(x) {
switch (x) 
{
case "smoke":
console.log("Testype is ",x);
break;
case  "sanity":
console.log("Test type is", x);
break;
case "regression":
console.log("Test type is", x);
break;
default: 
console.log ("Running sanity by default");
}

}
testType("unit");
