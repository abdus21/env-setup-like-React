import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import 'boxicons/css/boxicons.min.css';
import 'bootstrap/js/dist/modal'
import './min.scss';
import axios from 'axios';
import post from './components/Post';
import Alert from './components/Alert';

document.addEventListener('DOMContentLoaded',getPost)
document.getElementById('post_form').addEventListener('submit',newPost)

//get post function
function getPost(){
    axios.get('http://localhost:5050/post').then(res =>{ post.showPost(res.data) })
}

//new post creat function
function newPost(e){
    e.preventDefault();
    let formData = new FormData(e.target);
    let entrice = Object.fromEntries(formData);
    const {name,auth_photo,content,post_photo} = entrice;

    if(name == '' || auth_photo == '' || content == '' || post_photo == ''){
       document.querySelector('.msg').innerHTML = Alert.danger('All field are required');
    }else{
        document.querySelector('.msg').innerHTML = Alert.success('Data Stable');
        axios.post('http://localhost:5050/post',{
            id           : '',
            name         : name,
            user_photo   : auth_photo,
            content      : content,
            photo        : post_photo
        }).then(res =>{getPost()})
        e.target.reset()
    };

}






