import { Methods } from "/public/js/class/Methods.js";
import { View } from "/public/js/class/View.js";
const view = new View;
const methods = new Methods;

export class Buttons {
    actionDelete(btn){
        for (let i = 0; i < btn.length; i++) {
            const unicElement = btn[i];
            unicElement.addEventListener("click", async ()=>{
                let splitData = unicElement.id.split('-')
                let deleteRecord = await methods.deleteRecord("/carros", splitData[1]);
                if (deleteRecord.linesAffected != 0) {
                    console.log(unicElement.id);
                    document.getElementById(`item-${splitData[1]}`).remove();
                }
            });
        }
    }

    actionEdit(btn, renderRoot){
        for (let i = 0; i < btn.length; i++) {
            const unicElement = btn[i];
            unicElement.addEventListener("click", async ()=>{
                let splitData = unicElement.id.split('-');
                let loadOneData = await methods.loadOneData("/carros", splitData[1]);
                let formData = await view.editData(renderRoot, loadOneData[0]);

                const btnEditData = document.getElementById("btnEditData");
                btnEditData.addEventListener("click", async ()=>{
            
                    let data = {
                        "marca": document.getElementById('marcaEdit').value,
                        "modelo":document.getElementById('modeloEdit').value, 
                        "ano": parseInt(document.getElementById('anoEdit').value),
                    }
                    console.log(data);
        
                    let updateRecord = await methods.updateRecord("/carros", splitData[1], data)
                    console.log(updateRecord);
                    location.reload(); 
                });
    
                const btnEditDataCanel = document.getElementById("btnEditDataCanel");
                btnEditDataCanel.addEventListener("click", ()=>{
                    let contentEdit = document.getElementById("content-edit");
                    contentEdit.remove();
                })
    
            });
        }
    }
}