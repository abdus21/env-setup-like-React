

class Alert {

   static danger(msg){
        return `<p class="alert alert-danger">${msg}</p>`
    }
   static success(msg){
        return `<p class="alert alert-success">${msg}</p>`
    }
   static warning(msg){
        return `<p class="alert alert-warning">${msg}</p>`
    }
}





export default Alert;