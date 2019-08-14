const sendForm = () => {
    const errorMessage = 'Что-то пошло не так...',
        loadMessage = 'Загрузка...',
         successMesage = 'Спасибо! Мы скоро с вами свяжемся!';


    const form = document.querySelectorAll('form');
    
     const statusMessage = document.createElement('div');
        statusMessage.style.cssText = 'font-size: 2rem;';
    

    form.forEach((item) => {

    
    item.addEventListener('submit', (event) => {
        event.preventDefault();
        item.appendChild(statusMessage);
        statusMessage.textContent = loadMessage;
    
    const formData = new FormData(item);
    
    let body = {};
        formData.forEach((val, key) => {
            body[key] = val;
    });	
    
    let formQuestion = document.querySelector('input[name ="user_quest"]');

    if(formQuestion.value) {
        body['user_quest'] = formQuestion.value;
        formQuestion.value = '';
    }
    
    postData(body).then((response) => {
        if (response.status !== 200){
            throw new Error('status network not 200');
        }
        statusMessage.textContent = successMesage;
        item.reset();
    })


    .catch((error) => {
        statusMessage.textContent = errorMessage;
        console.log(error);
    });
});
});

const postData = (body) => {
    return fetch('./server.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
        });			
    };
};

export default sendForm;