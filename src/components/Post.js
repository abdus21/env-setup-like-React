

class Post {

    constructor(){
        this.post_content_loaded = document.getElementById('post_content_loaded')
    }

    showPost(posts){
        let load = '';
        posts.reverse().map(data =>{
            const {id,name,user_photo,content,photo} = data;
            load += `
            <div class="card shadow-sm my-4">
                        <div class="card-body">
                            <div class="user-timline-area d-flex justify-content-between">
                                <div class="user-timeline-info d-flex">
                                    <img src="${user_photo}" alt="">
                                    <h6>${name}</h6>
                                </div>
                                <button>...</button>
                            </div>
                            <div class="user-timeline-content">
                                <p>${content}</p>
                                <img src="${photo}" class="w-100" alt="">
                            </div>
                        </div>
                    </div>
            `
        });
        this.post_content_loaded.innerHTML = load
    }
}




let post = new Post;


export default post;