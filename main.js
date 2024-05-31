let url = 'http://localhost:3000/products';
let tbody = document.querySelector("tbody");
fetch(url).then(res => res.json()).then(data =>{
    let html = data.map(pro => {
        return /*html*/`
        <tr>
            <td>${pro.id}</td>
            <td>${pro.name}</td>
            <td>${pro.price}</td>
            <td>Sua|Xoa</td>
        </tr>
        `;
    }).join('');
    tbody.innerHTML = html;
}).catch(err => console.log(err));