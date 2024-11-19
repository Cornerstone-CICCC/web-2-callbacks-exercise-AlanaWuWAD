const fs = require("fs");

fs.readFile("./firstname.txt", "utf-8", (err, data1) => {
  const word1 = data1;
  fs.readFile("./lastname.txt", "utf-8", (err,data2)=> {
    const word2 = data2;
    fs.readFile("./hobbies.txt", "utf-8", (err,data3)=>{
      const word3 = data3;
      const array = JSON.parse(word3); 
      fs.readFile("./age.txt", "utf-8", (err,data4) => {
        const word4 = data4;
        console.log(`${word1} ${word2} is ${word4} years old and his hobbies are ${array[0]} and ${array[1]}`)
      })
    })
  })
})