export class View{
    async newData(renderRoot){
        let divElement = `
            <div class="item-content">
                <div><input class="w3-input" id="marca" type="text" placeholder="Marca"></div>
                <div><input class="w3-input" id="modelo" type="text" placeholder="Modelo"></div>
                <div><input class="w3-input" id="ano" type="text" placeholder="Ano"></div>
                <div><button class="w3-button w3-green" id="btn">Inserir Registro</button></div>
            </div>
        `
        renderRoot.innerHTML += divElement;

        return {
            "Message": "Render registration form"
        }
    }

    async editData(renderRoot, data){
        let divElement = `
            <div id="content-edit">
                <div><input class="w3-input" id="marcaEdit" type="text" placeholder="Marca" value="${data.marca}"></div>
                <div><input class="w3-input" id="modeloEdit" type="text" placeholder="Modelo" value="${data.modelo}"></div>
                <div><input class="w3-input" id="anoEdit" type="text" placeholder="Ano" value="${data.ano}"></div>
                <div>
                    <button class="w3-button w3-green" id="btnEditData">Atualizar Registro</button>
                    <button class="w3-button w3-red" id="btnEditDataCanel">Cancelar</button>
                </div>
            </div>
        `
        if (renderRoot.innerHTML) {
            renderRoot.innerHTML = '';
        }
        renderRoot.innerHTML = divElement;
        return {
            "Message": "Render registration form"
        }
    }

    async dataView (renderRoot, data){
        let divElement = '';
        for (let i = 0; i < data.length; i++) {
            divElement = `
                <div class="item-content" id="item-${data[i].id}" >
                    <div class="item-content-Detail" >${data[i].marca}</div>
                    <div class="item-content-Detail">${data[i].modelo}</div>
                    <div class="item-content-Detail">${data[i].ano}</div>
                    <div class="item-content-Detail">
                        <button class="btnDelete w3-button w3-red" id="del-${data[i].id}">Excluir</button> 
                        <button class="btnEdit w3-button w3-orange" id="edit-${data[i].id}">Editar</button>
                    </div>
                </div>
            `
            renderRoot.innerHTML += divElement;
        }
    
        return {
            "Message": "Records loaded successfully"
        }
    }

}