console.log("Let's do this!")

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


// Part 2

const csvColumns= "dataRows"
for (let i = 0; i < "dataRows"; i++){
  console.log(dataRows `${(8)}`)
}

let csvData2 = [
  ["ID", "Name", "Occupation", "Age"],
  ["42", "Bruce", "Knight", "41"],
  ["57", "Bob", "Fry Cook", "19"],
  ["63", "Blaine", "Quiz Master", "58"],
  ["98", "Bill", "Doctor's Assistant", "26"]
];
console.log(csvData2);

// Part 3
