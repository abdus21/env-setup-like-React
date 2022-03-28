import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import 'boxicons/css/boxicons.min.css';
import './min.scss';
import axios from 'axios';

dataShow();
function dataShow(){
    const plist = document.getElementById('all_list')
    axios.get('http://localhost:5050/product').then(res =>{
        let list = '';
        res.data.map(data =>{
            let {name,price,sale,photo} = data;
            list+= `
            <div class="col-md-4 my-2">
            <div class="card shadow">
                <img src="${photo}" alt="">
                <div class="card-body">
                    <p>${name}</p>
                    <p>price: ${price}</p>
                    <p>sale: ${sale}</p>
                </div>
            </div>
        </div>
            `
        })
        plist.innerHTML = list
    })
}



