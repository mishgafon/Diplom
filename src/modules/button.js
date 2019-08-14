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

export default button;