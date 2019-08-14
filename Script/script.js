window.addEventListener('DOMContentLoaded', function(){
	'use strict';

//button

    const button = () => {
        let addSentenceBtn = document.querySelector('.add-sentence-btn'),
            hidden = document.querySelectorAll('.hidden');
        
            addSentenceBtn.addEventListener('click', () => {
            
                hidden.forEach((item) => {
                    item.classList.remove('hidden');
                });
                addSentenceBtn.style.display = 'none';
            });
    };
    button();


//send-ajax-form
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
sendForm();


//popUp
const togglePopUp = () =>{
    let body = document.querySelector('body');

   
     

        
    body.addEventListener('click', (event) => {
        let target = event.target;
        


        if (target.classList.contains('call-btn')){
                openPopup('.popup-call');

            } else if (target.classList.contains('check-btn')){
                    openPopup('.popup-check');

                } else if (target.classList.contains('discount-btn')){
                        openPopup('.popup-discount');

                    } else if (target.classList.contains('consultation-btn')){
                            openPopup('.popup-consultation');

                        } else if (target.classList.contains('popup-close')
                        || target.classList.contains('popup-call')
                        || target.classList.contains('popup-check')
                        || target.classList.contains('popup-consultation')
                        || target.classList.contains('popup-discount')) {
                            closePopup();
                        };   
    });


    const openPopup = (className) =>{
        let popup = document.querySelector(className);

        popup.style.display = 'block';
        document.body.style.overflow = 'hidden';


    };

   
    const closePopup = () =>{
        let popup = document.querySelectorAll('.popup');
       
            popup.forEach((item) => {
                item.style.display = 'none';                
        });
        document.body.style.overflow = '';
    };    
};
togglePopUp();








//табы
    const tabs = () => {
        const accordionTwo = document.getElementById('accordion-two'),
            panelHeading = accordionTwo.querySelectorAll('.panel-heading'),
            panelCollapse = accordionTwo.querySelectorAll('.panel-collapse');

        const togglePanelCollapse = (index) => {
            for(let i = 0; i < panelCollapse.length; i++){
                if(index === i){
                    panelCollapse[i].style.display = 'block';
                } else {
                    panelCollapse[i].style.display = 'none';
                }
            }
        };


        accordionTwo.addEventListener('click', (event) => {
            let target = event.target;
                target = target.closest('.panel-heading');
    
            if(target){
                panelHeading.forEach((item, i) => {
                    if(item === target){
                        togglePanelCollapse(i);
                    }
                });
            }
        });
    };
    tabs();


// конструктор
    const constr = () => {
        const construct = document.querySelector('.constructor'),
                panelHeading = construct.querySelectorAll('.panel-heading'),
                panelCollapse = construct.querySelectorAll('.panel-collapse'),
                constructBtn = construct.querySelectorAll('.construct-btn')
                
                for (let i = 0; i < panelHeading.length; i++){
                    
                    panelHeading[i].addEventListener('click', () => {
                        panelCollapse.forEach((item) => {
                            item.classList.remove('in');                                
                        });
                        panelCollapse[i].classList.add('in');
                    });
                    constructBtn[i].addEventListener('click', () => {
                        panelCollapse.forEach((item) => {
                            item.classList.remove('in');                                
                        });
                        panelCollapse[i+1].classList.add('in');
                    });
                    


                }

    };
    constr();



//валидация

        const check = () =>{
            const phoneUser = document.querySelectorAll('.phone-user');

            phoneUser.forEach((item) => {
                item.addEventListener('input', () => {
                    item.value = item.value.replace(/\D/g, '');
                });
            });
        }
        check();


});

