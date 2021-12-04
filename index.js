
function LosSlowo(data) {
const i = Math.floor(Math.random()*data.length);
document.getElementById("parola").innerHTML = data[i];
}

//get data from google spreadsheet
let dane=[];
fetch('https://sheets.googleapis.com/v4/spreadsheets/1ldOy8yB9xLS799HQk25sbeSpymeXgcTMJG6-K-KgjyI/values/Arkusz1!A1:A200?key=AIzaSyANN5VFY4UtYKEMSBXwTriQJtcQpbnes9s')
  .then(response => response.json())
  .then(data => dane=data.values)
  .then(data => LosSlowo(dane));

 function onClickNext() {
   LosSlowo(dane)
}
