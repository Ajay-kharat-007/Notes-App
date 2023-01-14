showNotes();

let addBtn = document.getElementById("addBtn");
addBtn.addEventListener("click",()=>{
    let notes = localStorage.getItem("notes")
    let addTxt = document.getElementById("addTxt")
    if(notes == null){
        notesObj = [];
    }else{
        notesObj = JSON.parse(notes)
    }
    notesObj.push(addTxt.value)
    addTxt.value = ""
    localStorage.setItem("notes",JSON.stringify(notesObj))
    showNotes();
})

function showNotes () {
    let notes = localStorage.getItem('notes')
    if(notes == null){
        notesObj = []
    }else{
        notesObj = JSON.parse(notes)
    }

    let bor_to_add_note = "";

    notesObj.forEach((elem,index)=>{
        bor_to_add_note += `
        <div class="noteCard my-2 mx-2 card" style="width: 18rem;">
                <div class="card-body">
                    <h5 class="card-title p-2"  style="text-align:center; border-Bottom: 1px solid grey">Note ${index + 1}</h5>
                    <p class="card-text p-2" style="font-size : 20px; border-Bottom:1px solid grey"> ${elem}</p>
                    <button id="${index}"onclick="deleteNote(this.id)" class="btn btn-primary">Delete Note</button>
                </div>
            </div>`
    })
    let notesElem = document.getElementById("notes")
    if(notesObj.length != 0){
        notesElem.innerHTML = html
    }else{
        notesElem.innerHTML = `Nothing to show Here ! Use "Add a note" Section above to add a note !!`
    }
}


function deleteNote(index){
    let notes = localStorage.getItem('notes')
    if(notes == null){
        notesObj = []
    }else{
        notesObj = JSON.parse(notes)
    }

    notesObj.splice(index, 1)
    localStorage.setItem("notes",JSON.stringify(notesObj))
    showNotes();
}