import { Methods } from "/public/js/class/Methods.js";
import { View } from "/public/js/class/View.js";
import { Buttons } from "/public/js/class/Buttons.js";

let methods = new Methods;
let view = new View;
let buttons = new Buttons;

const root = document.getElementById('root');
const rootForm = document.getElementById('rootForm');
const rootFormEdit = document.getElementById('rootFormEdit');

(async ()=>{
    let formData = await view.newData(rootForm);
    let allData = await methods.loadData("/carros");  
    let resDataView = await view.dataView(root, allData);
    console.log([resDataView, formData]);
    
    const btn = document.getElementById("btn");
    btn.addEventListener("click", async ()=>{
        let data = {
            "marca": document.getElementById('marca').value,
            "modelo":document.getElementById('modelo').value, 
            "ano": parseInt(document.getElementById('ano').value),
        }
        console.log(data);
        let newRecord = await methods.newRecord("/carros", data);
        if (newRecord.data) {
            root.innerHTML = null;
            let allData = await methods.loadData("/carros");  
            let resDataView = await view.dataView(root, allData);
            console.log([resDataView, formData]);
        }
        const btnDelete = document.getElementsByClassName("btnDelete");
        buttons.actionDelete(btnDelete);

        const btnEdit = document.getElementsByClassName("btnEdit");
        buttons.actionEdit(btnEdit, rootFormEdit);        
    });

    const btnDelete = document.getElementsByClassName("btnDelete");
    buttons.actionDelete(btnDelete);

    const btnEdit = document.getElementsByClassName("btnEdit");
    buttons.actionEdit(btnEdit, rootFormEdit);

})()