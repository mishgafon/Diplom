const tabs = () => {
    const accordionTwo = document.getElementById('accordion-two'),
        panelHeading = accordionTwo.querySelectorAll('.panel-heading'),
        panelCollapse = accordionTwo.querySelectorAll('.panel-collapse'),
        link = accordionTwo.querySelectorAll('a');

        link.forEach((item) => {
            item.href = "#!";
            });


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

export default tabs;