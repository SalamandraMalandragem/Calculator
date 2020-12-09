addEventListener('load', function OnWindowLoade() {
    const signs = [
        '1', '2', '3' ,'+',
        '4', '5', '6', '-',
        '7', '8', '9', '/',
        '0', '.', 'c', '*',
        '=',
    ];

    function log(arg){
        console.log(arg)
    }




    const calc = document.getElementById('calc');

    const textArea = document.getElementById('inputVal');


    signs.forEach((sign) => {
        if(sign === '='){
            const signElement = document.createElement('div');
            signElement.className = 'btnResult btn';
            signElement.innerHTML = sign;
            calc.appendChild(signElement);
        }else{
            const signElement = document.createElement('div');
            signElement.className = 'btn';
            signElement.innerHTML = sign;
            calc.appendChild(signElement);
        }

    });


    document.querySelectorAll('#cacl-wrap .btn').forEach((button) => {
        button.addEventListener('click', onButtonClick)
    })


    function onButtonClick(e) {

        if(e.target.innerHTML === 'c') {
            textArea.innerHTML = '0'

        } else if(e.target.innerHTML === '=') {
            if(textArea.value.slice(-1) !== '+' && textArea.value.slice(-1) !== '-' && textArea.value.slice(-1) !== '/' && textArea.value.slice(-1) !== '.' && textArea.value.slice(-1) !== '*') {
                            textArea.innerHTML = eval(textArea.innerHTML)
            } else {
                alert('Математический оператор находиться без второго аргумента')
                textArea.innerHTML = 'ERROR'
                document.getElementsByClassName('btn').disabled = true
            }
            
        } else if(textArea.innerHTML === 'ERROR') {
            if(e.target.innerHTML !== '+' && e.target.innerHTML !== '-' && e.target.innerHTML !== '/' && e.target.innerHTML !== '.' && e.target.innerHTML !== '=' && e.target.innerHTML !== '*') {
            textArea.innerHTML = e.target.innerHTML

            }

        }else if(textArea.innerHTML === 'Infinity') {
            if(e.target.innerHTML !== '+' && e.target.innerHTML !== '-' && e.target.innerHTML !== '/' && e.target.innerHTML !== '.' && e.target.innerHTML !== '=' && e.target.innerHTML !== '*') {
            textArea.innerHTML = e.target.innerHTML

            }

        }else if(textArea.innerHTML === '-Infinity') {
            if(e.target.innerHTML !== '+' && e.target.innerHTML !== '-' && e.target.innerHTML !== '/' && e.target.innerHTML !== '.' && e.target.innerHTML !== '=' && e.target.innerHTML !== '*') {
            textArea.innerHTML = e.target.innerHTML

            }

        }else if(textArea.innerHTML === '0') {
            if(e.target.innerHTML !== '+' && e.target.innerHTML !== '-' && e.target.innerHTML !== '/' && e.target.innerHTML !== '*'){
                if(e.target.innerHTML === '.'){
                    textArea.innerHTML += e.target.innerHTML
                } else {
                    textArea.innerHTML = e.target.innerHTML
                }
            }

        } else if(e.target.innerHTML === '+') {
            if(textArea.value.slice(-1) !== '+' && textArea.value.slice(-1) !== '-' && textArea.value.slice(-1) !== '/' && textArea.value.slice(-1) !== '.' && textArea.value.slice(-1) !== '*'){
                textArea.innerHTML += e.target.innerHTML
            }

        } else if(e.target.innerHTML === '*') {
            if(textArea.value.slice(-1) !== '*' && textArea.value.slice(-1) !== '-' && textArea.value.slice(-1) !== '/' && textArea.value.slice(-1) !== '.' && textArea.value.slice(-1) !== '+'){
                textArea.innerHTML += e.target.innerHTML
            }

        } else if(e.target.innerHTML === '-') {
            if(textArea.value.slice(-1) !== '-' && textArea.value.slice(-1) !== '+' && textArea.value.slice(-1) !== '/' && textArea.value.slice(-1) !== '.' && textArea.value.slice(-1) !== '*'){
                textArea.innerHTML += e.target.innerHTML
            }

        } else if(e.target.innerHTML === '/') {
            if(textArea.value.slice(-1) !== '/' && textArea.value.slice(-1) !== '+' && textArea.value.slice(-1) !== '-' && textArea.value.slice(-1) !== '.' && textArea.value.slice(-1) !== '*'){
                textArea.innerHTML += e.target.innerHTML
            }
            } else if(e.target.innerHTML === '.') {
                if(textArea.value.slice(-1) !== '.' && textArea.value.slice(-1) !== '-' && textArea.value.slice(-1) !== '/' && textArea.value.slice(-1) !== '+' && textArea.value.slice(-1) !== '*'){
                    textArea.innerHTML += e.target.innerHTML
                } else if (textArea.value === '0'){
                    textArea.innerHTML += e.target.innerHTML
                }
        }  else {
                 textArea.innerHTML += e.target.innerHTML
                log(textArea.value)
            
        }
    }



})













