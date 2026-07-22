const input = document.getElementById("noteInput");
const addNoteBtn = document.getElementById("addNoteBtn");
const showNotesContainer = document.getElementById("showNotes");

const notes = [];
const noNoteMessage = document.createElement("p");
noNoteMessage.textContent = "No note added yet."
showNotesContainer.appendChild(noNoteMessage);

addNoteBtn.addEventListener("click", () => {
    const note = input.value.trim();
    if (note === "") {
        return;
    }
    if (notes.length === 0) {
        showNotesContainer.removeChild(noNoteMessage);
    }
    
        notes.push(note);
        console.log(notes);
        const paragraph = document.createElement("p");
        paragraph.textContent = note;
        showNotesContainer.appendChild(paragraph);
        input.value = "";
    
})