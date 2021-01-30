//------- JOURNAL ENTRIES ---------
const formEl = document.querySelector("#journal-form");
const saveEntry = document.querySelector("#save-entry");
var moodInput = document.querySelector("#mood");
var textBoxEl = document.querySelector("#day-description");
var entryDetails = document.querySelector("#entry-details");
var journal = document.querySelector("#journal");
var currentDate = new Date();
var entryIdCounter = 0;


var addEntry = function (event) {
    event.preventDefault();

    var moodType = moodInput.value;
    var dayDescription = textBoxEl.value;

    console.log("mood", moodType);
    console.log("description", dayDescription);

    if (moodType && dayDescription) {
        //clear the form by overwriting the input
        moodInput.value = "";
        textBoxEl.value = "";


        var journalEntries = JSON.parse(localStorage.getItem("journalEntries"));
        if(journalEntries === null) {
            journalEntries = [];
        }
        var submitEntry = {
            mood: moodType,
            description: dayDescription
        };

        journalEntries.push(submitEntry);
        localStorage.setItem("journalEntries", JSON.stringify(journalEntries));

        console.log("entries", submitEntry.mood);
    } else {
        alert("Please submit an entry!");
    }

    createEntry();

}


function createEntry() {
    // add in journal section
    var journalEntries = JSON.parse(localStorage.getItem("journalEntries")) || [];
    journal.innerHTML = "";

    console.log("journal entries", journalEntries);

    for (let i = 0; i < journalEntries.length; i++) {

        var entryContainer = document.createElement("div")
        entryContainer.className = "entry";
        entryContainer.style.backgroundColor = "red"
        entryContainer.setAttribute("data-entry-id", i);
        journal.appendChild(entryContainer);

        var showDate = document.createElement("p");
        showDate.className = "current-date"
        showDate.innerText = currentDate.toDateString();
        entryContainer.appendChild(showDate);


        var entryTitle = document.createElement("h3");
        entryTitle.textContent = journalEntries[i].mood;
        entryContainer.appendChild(entryTitle);

        var entryDescription = document.createElement("p");
        entryDescription.textContent = journalEntries[i].description;
        entryContainer.appendChild(entryDescription);
        console.log("Description", entryDescription);

        var deleteBtn = document.createElement("button");
        deleteBtn.id = "deleteBtn";
        deleteBtn.className = "deleteBtn";
        deleteBtn.setAttribute("data-entry-id", i);
        deleteBtn.textContent = "Delete Entry";
        entryContainer.appendChild(deleteBtn);


    }
}



createEntry();

saveEntry.addEventListener("click", addEntry);