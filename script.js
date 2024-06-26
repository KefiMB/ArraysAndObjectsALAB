console.log("Arrays and Objects!")

//Part 1

const objectToCsv = function (data) {

  const csvRows = [];

  const headers = Object.keys(data[0]);

  csvRows.push(headers.join(','));

  for (const row of data) {
    const values = headers.map(header => {
      const val = row[header]
      return `"${val}"`;
    });


    csvRows.push(values.join(','));
  }

  return csvRows.join('\n');
};

const data = [{
  "ID": 42,
  "Name": "Bruce",
  "Occupation": "Knight",
  "Age": 41
},
{
  "ID": 57,
  "Name": "Bob",
  "Occupation": "Fry Cook",
  "Age": 19
},
{
  "ID": 63,
  "Name": "Blaine",
  "Occupation": "Quiz Master",
  "Age": 58
},
{
  "ID": 98,
  "Name": "Bill",
  "Occupation": "Doctors Assistant",
  "Age": 26
},
];
const csvData = objectToCsv(data);
console.log(csvData);
console.log("===============================")

// Part 2

const csvColumns = "dataRows"
for (let i = 0; i < "dataRows"; i++) {
  console.log(dataRows`${(8)}`)
}

let csvData2 = [
  ["ID", "Name", "Occupation", "Age"],
  ["42", "Bruce", "Knight", "41"],
  ["57", "Bob", "Fry Cook", "19"],
  ["63", "Blaine", "Quiz Master", "58"],
  ["98", "Bill", "Doctor's Assistant", "26"]
];
console.log(csvData2);
console.log("===============================")

// Part 3
const array = [
  { id: 42, name: "Bruce", occupation: "Knight", age: 41 },
  { id: 57, name: "Bob", occupation: "Fry Cook", age: 19 },
  { id: 63, name: "Blaine", occupation: "Quiz Master", age: 58 },
  { id: 98, name: "Bill", occupation: "Docto's Assistant", age: 26 },
];
 
const groupedObjects = array.reduce((result, obj) => {
  (result[obj.category] = result[obj.category] || []).push(obj);
  return result;
}, {});
 
console.log(groupedObjects);
console.log("===============================")

//Part 4
const array2 = [
  { id: 42, name: "Bruce", occupation: "Knight", age: 41 },
  { id: 57, name: "Bob", occupation: "Fry Cook", age: 19 },
  { id: 63, name: "Blaine", occupation: "Quiz Master", age: 58 },
  { id: 98, name: "Bill", occupation: "Docto's Assistant", age: 26 },
];

let arr = [{ id: "42", name: "Bruce", occupation: "Knight", age: "41" },
 { id: "57", name: "Bob", occupation: "Fry Cook", age: "19" }, 
 { id: "63", name: "Blaine", occupation: "Quiz Master", age: "58" }, 
{ id: "98", name: "Bill", occupation: "Doctor’s Assistant", age: "26" }]

let newData1 = arr.splice(1, 1, {id: "48", name: "Barry", occupation: "Runner", age: "25"})
console.log(arr)

const newArray = [{id: "42", name: "Bruce", occupation: "Knight", age: "41" },
{ id: "48", name: "Barry", occupation: "Runner", age: "25"},
{ id: "57", name: "Bob", occupation: "Fry Cook", age: "19" }, 
{ id: "63", name: "Blaine", occupation: "Quiz Master", age: "58" }, 
{ id: "98", name: "Bill", occupation: "Doctor’s Assistant", age: "26"}]

const newData2 = data.concat({id: 7, name: "Bilbo", occupation: "None", age: 111});
console.log(newArray)

function calAvg(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
      sum += arr[i];
  }
  return sum / arr.length;
}

const arr2 = [41, 25, 19, 58, 26];
const average = calAvg(arr2);
console.log("Average:", average);

console.log("===============================")

//Part 5
 const dataArr = [
{ id: "42", name: "Bruce", occupation: "Knight", age: "41" },
{ id: "48", name: "Barry", occupation: "Runner", age: "25"},
{ id: "57", name: "Bob", occupation: "Fry Cook", age: "19" }, 
{ id: "63", name: "Blaine", occupation: "Quiz Master", age: "58" }, 
{ id: "7", name: "Bilbo", occupation: "None", age: "111"}
 ];

 const objectsToCsv = function (data) {
  const objToCsv = [];
  const headers = Object.keys(data[0]);
  csvRows.push(headers.join(','));

  for (const row of data) {
    const values = headers.map(header => {
      const val = row[header]
      return `"${val}"`;
    });


    csvRows.push(values.join(','));
  }

  return csvRows.join('\n');
};

const data3 = [{
  "ID": 42,
  "Name": "Bruce",
  "Occupation": "Knight",
  "Age": 41
},
{
  "ID": 48 ,
  "Name": "Barry",
  "Occupation": "Runner",
  "Age": 25
},
{
  "ID": 63,
  "Name": "Blaine",
  "Occupation": "Quiz Master",
  "Age": 58
},
{
  "ID": 7,
  "Name": "Bilbo",
  "Occupation": "None",
  "Age": 111
},
];
const csvData3 = objectToCsv(data3);
console.log(csvData3);
console.log("===============================")
