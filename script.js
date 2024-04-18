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



