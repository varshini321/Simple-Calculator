
        function appendToDisplay(value){
            document.getElementById('display').value += value; // corrected typo 'diplay' to 'display'
        }

        function cleanDisplay(){
            document.getElementById('display').value = "";
        }

        function calculateResult(){
            var expression = document.getElementById('display').value;
            var result;
            try {
                result = eval(expression);
                document.getElementById('display').value = result; // corrected typo 'diplay' to 'display'
            } catch(error) {
                document.getElementById('display').value = error;
            }
        }

