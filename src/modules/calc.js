const calculator = () => {


    const body = document.querySelector('body'),
        constructor = document.querySelector('.constructor'),
        checkbox = constructor.querySelectorAll('.onoffswitch-checkbox'),
        secondItem = constructor.querySelector('.second-item'),
        calcResult = document.getElementById('calc-result'),
        formControl = constructor.querySelectorAll('.form-control'),

        myOnOffSwitch = document.querySelector('#myonoffswitch'),
        myOnOffSwitchTwo = document.querySelector('#myonoffswitch-two'),
        typeSeptic = document.querySelector("#type_septik"),
        selectCircle = document.querySelector('.select-circle'),
        selectCircleTwo = document.querySelector('.select-circle2'),
        firstWell = document.querySelector("#first_well"),
        secondWell = document.querySelector("#second_well"),
        firstWellTwo = document.querySelector("#first_well2"),
        secondWellTwo = document.querySelector("#second_well2"),
        selectWellCount = document.querySelector('.select-well-count'),
        secondWellCountTwo = document.querySelector('.select-well-count2'),
        bottomSeptik = document.querySelector("#bottom_septik"),
        typeSeptik = document.querySelector("#type_septik"),
        distanceToHouse = document.querySelector('#distance_to_house'),
        distanceSeptik = document.querySelector("#distance_septik"),
        priceSeptic = document.querySelector("#price_septik"),
        buttonCollapse = document.querySelector('#collapseFour button');

        secondItem.style.display = "none"; 
        checkbox[1].checked = false;
        
        let result = 0; 
        
        constructor.addEventListener('change', () => { 
        
        if(checkbox[0].checked) {
            secondItem.style.display = "none";
            result = 10000; 
            let options = document.querySelectorAll('.form-control-2 option');
            for (let i = 0, l = options.length; i < l; i++) {
            options[i].selected = options[i].defaultSelected;
            } 
        } else {
            secondItem.style.display = "block";
            result = 15000; 
        }
        
        formControl.forEach((elem) => {
            if(elem.value == 1) return; 

            else result = result + (result * (+elem.value));   
            });
        
        if(checkbox[0].checked){
            if(checkbox[1].checked) result += 1000;
            else result; 
        } else {
            if(checkbox[1].checked) result += 2000;
            else result; 
            }
        
        calcResult.value = result; 
        });


        body.addEventListener('change', () => {

            if(myOnOffSwitch.checked) {
                typeSeptic.setAttribute("value", "Однокамерный");

            } else {
                typeSeptic.setAttribute("value", "Двухкамерный");

                let selDiam2 =  selectCircleTwo.options[ selectCircleTwo.selectedIndex];
                secondWell.setAttribute("value", selDiam2.text) 
                let selWellCount2 = secondWellCountTwo.options[secondWellCountTwo.selectedIndex];
                secondWellTwo.setAttribute("value", selWellCount2.text) 
            }

            if(myOnOffSwitchTwo.checked){
                bottomSeptik.setAttribute("value", "Требуется днище колодца");
            } else {
                typeSeptik.setAttribute("value", "Днище колодца не требуется");
            } 

            let selDiam = selectCircle.options[selectCircle.selectedIndex];
            firstWell.setAttribute("value", selDiam.text); 

            let selWellCount = selectWellCount.options[selectWellCount.selectedIndex];
            firstWellTwo.setAttribute("value", selWellCount.text) 

            let resultSeptic = calcResult.value;
            priceSeptic.setAttribute("value", resultSeptic);

            let distance_to_home = distanceToHouse.value;
            distanceSeptik.setAttribute("value", distance_to_home); 
        });

        buttonCollapse.addEventListener("click", () => {
            let septicAmount = calcResult.value;
            priceSeptic.setAttribute("value", septicAmount);
        });
        
};
export default calculator;