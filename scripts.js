document.addEventListener('DOMContentLoaded', function() {
console.log("Entered scripts.js file");

const addCards = (items) => {
    console.log('Adding cards:', items);
    items.forEach(item => {
        let itemToAppend = '<div class="col s4 center-align">'+
                '<div class="card medium"><div class="card-image waves-effect waves-block waves-light"><img class="activator" src="'+item.path+'">'+
                '</div><div class="card-content">'+
                '<span class="card-title activator grey-text text-darken-4">'+item.title+'<i class="material-icons right">more_vert</i></span><p><a href="#">'+item.link+'</a></p></div>'+
                '<div class="card-reveal">'+
                '<span class="card-title grey-text text-darken-4">'+item.subTitle+'<i class="material-icons right">close</i></span>'+
                '<p class="card-text">'+item.description+'</p>'+
                '</div></div></div>';
        $("#card-section").append(itemToAppend)
    });
    console.log('Cards added successfully');
}

const formSubmitted = () => {
    let formData = {};
    formData.title = $('#title').val();
    formData.path = $('#path').val();

    console.log('Form submitted:', formData);
    postPicture(formData);
}

function postPicture(picture) {
    console.log('Posting picture:', picture);
    $.ajax({
        url:'/api/pictures',
        type:'POST',
        data:picture,
        success: (result) => {
            console.log('Post Picture Result:', result);
            if (result.statusCode === 201) {
                alert('picture posted');
                location.reload();
            }
        },
        error: (err) => {
            console.error('Post Picture Error:', err);
        }
    });
}

function getAllPictures() {
    console.log('Fetching all pictures');
    $.get('/api/pictures',(result)=>{
        if (result.statusCode === 200) {
            addCards(result.data);
        }
    });
}

let socket = io();
socket.on('number',(msg)=>{
    console.log('Random Number: ' + msg);
});

$(document).ready(function(){
    $('.materialboxed').materialbox();
    $('#formSubmit').click(()=>{
        formSubmitted();
    });
    $('.modal').modal();
    getAllPictures();
    console.log('ready');
    console.log('Application ready');
});
});