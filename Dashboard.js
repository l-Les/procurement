function overlay() {
    let overlay = document.querySelector('#overlay');

    if (overlay.style.display === 'none') {
        overlay.style.display = 'block'
    } else {
        overlay.style.display = 'none'
    }
}

// editing the dashboard

function edit_Btn() {
    let tdElements = document.getElementsByTagName("td")
    isEditable = tdElements[0].getAttribute("contenteditable")
    if(isEditable == 'true'){
        alert("table is now locked")
    } else {
        alert("You can now edit the table")
    }

    for (let i = 0; i < tdElements.length; i++) {
        if(isEditable == 'true') {
            tdElements[i].setAttribute("contenteditable", "false")            
        } else {
            tdElements[i].setAttribute("contenteditable", "true")            
        }
    }
}

function add_Btn() {
    alert("this is for add button")
}

function save_Btn() {
    alert("this is for printing purposes")
}

function delete_Btn() {
    alert("this is for deleting")
}