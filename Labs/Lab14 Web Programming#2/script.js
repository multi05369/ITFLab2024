let ____ = 0;
var phonenumber = [];
const addBtn = document.getElementById("your-id");
const saveButton = document.getElementById("your-id");
console.log(saveButton.value)

function display(){
    document.getElementById("your-id").innerHTML = document.getElementById("your-id").value + "'s Phone Book"
    document.getElementById("your-id").value = "";
};
function setImage(){
    document.getElementById("your-id").style.backgroundImage = "url(" + document.getElementById("your-id").value + ")";
    document.getElementById("your-id").value = "";
};
function updateRow(){
    ____ += 1;
    const row = document.createElement("tr");
    const cellNo = document.createElement("td");
    const cellName = document.createElement("td");
    const cellTel = document.createElement("td");
    cellNo.textContent = count;
    cellName.textContent = document.getElementById("your-id").value;
    cellTel.textContent = document.getElementById("your-id").value;
    row.appendChild(cellNo);
    row.appendChild(cellName);
    row.appendChild(cellTel);
    const table = document.getElementById("your-id");
    table.appendChild(row);
    
    let arr = [];
    arr.___(count);
    arr.___(document.getElementById("your-id").value);
    arr.___(document.getElementById("your-id").value);
    phonenumber.push(arr);
    console.log(phonenumber);
    
    document.getElementById("your-id").value = "";
    document.getElementById("your-idl").value = "";
};
