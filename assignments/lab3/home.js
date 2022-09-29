const postLoad = () => {
  let addPeople = document.getElementById("addButton");
  let detailsSection = document.getElementById("people-details-section");
  let cancelButton = document.getElementById("cancel-button");
  let saveButton = document.getElementById("save-button");
  let firstName = document.getElementById("firstName");
  let lastName = document.getElementById("lastName");
  let peopleList = document.getElementById("listPeople");

  addPeople.onclick = () => {
    detailsSection.style.display = "block";
    peopleList.style.display = "none";
    addPeople.style.display = "none";
  }

  cancelButton.onclick = () => {
    detailsSection.style.display = "none";
    peopleList.style.display = "block";
    addPeople.style.display = "block";
  }

  saveButton.onclick = () => {
    let peopleFirstName = firstName.value;
    let peopleLastName = lastName.value;

    let newPeople = document.createElement("ul");
    newPeople.append(peopleFirstName + " " + peopleLastName);

    peopleList.append(newPeople);
    detailsSection.style.display = "none";
    peopleList.style.display = "block";
    addPeople.style.display = "block";
  }
}
window.onload = postLoad;