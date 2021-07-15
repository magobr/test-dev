export class Methods{

    async loadData (url) {
        let res = await fetch(url, {method: 'GET'});
        let data = await res.json();
        return data;
    }

    async loadOneData (url, id) {
        let res = await fetch(`${url}/${id}`, {method: 'GET'});
        let data = await res.json();
        return data;
    }

    async newRecord (url, data) {
        let res = await fetch(url, {method: 'POST', body: JSON.stringify(data)});
        let dataRes = await res.json();
        return dataRes;
    }

    async deleteRecord (url, id){
        let res = await fetch(`${url}/${id}`, {method: 'DELETE'});
        let dataRes = await res.json();
        return dataRes;
    }

    async updateRecord (url, id, data){
        let res = await fetch(`${url}/${id}`, {method: 'PUT', body: JSON.stringify(data)});
        let dataRes = await res.json();
        return dataRes;
    }

}