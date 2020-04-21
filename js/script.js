var locations = [];

function addLocations() {
  var locationValue = document.getElementById("location").value;
  var caseValue = document.getElementById("cases").value;
  if (
    locationValue == "" ||
    caseValue == "" ||
    locationValue == null ||
    caseValue == null
  ) {
    return;
  }
  var locationText = locationValue + ", " + caseValue;
  var listNode = document.getElementById("listCase");
  liNode = document.createElement("li");
  txtNode = document.createTextNode(locationText);
  liNode.appendChild(txtNode);
  listNode.appendChild(liNode);

  var newLocation = {
    state: locationValue,
    cases: caseValue,
  };
  locations.push(newLocation);
  document.getElementById("location").value = "";
  document.getElementById("cases").value = "";
}

function submitCase() {
  var day = document.getElementById("day").value;
  var date = document.getElementById("date").value;
  var time = document.getElementById("time").value;
  var totalConfirmed = document.getElementById("totalConfirmed").value;
  var discharged = document.getElementById("discharged").value;
  var deaths = document.getElementById("deaths").value;
  var newCases = document.getElementById("newCases").value;
  var newDischarged = document.getElementById("newDischarged").value;
  var newDeaths = document.getElementById("newDeaths").value;

  var newcase = {
    day: day,
    date: date,
    time: time,
    totalConfirmed: totalConfirmed,
    totalDischarged: discharged,
    totalDeaths: deaths,
    newCases: newCases,
    newDischarged: newDischarged,
    newDeaths: newDeaths,
    locations: locations,
  };
  console.log(newcase);

  firebase
    .database()
    .ref("cases/")
    .push()
    .set(newcase)
    .then(() => {
      console.log("saved");
    })
    .catch((error) => {
      console.log(error);
    });
}
