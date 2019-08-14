const check = () =>{
    const phoneUser = document.querySelectorAll('.phone-user');

    phoneUser.forEach((item) => {
        item.addEventListener('input', () => {
            item.value = item.value.replace(/\D/g, '');
        });
    });
};

export default check;