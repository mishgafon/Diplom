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

export default togglePopUp;