class ConvertBin2Dec {

    constructor(){
        this._inputBin = document.querySelector('#bin-input');
        this._inputDec = document.querySelector('#dec-input');
    }

    convertBin2Dec(){
        //101 = 5 
        if(/^[01]+$/.test(this._inputBin.value) && [...this._inputBin.value].length < 9){
            let value2convertArray = [...this._inputBin.value].reverse();
            let count = value2convertArray.length-1;
            let decimalValue = 0;
    
            for(let i = value2convertArray.length-1; i >= 0; i--){
                decimalValue += value2convertArray[i] * (Math.pow(2, count));
                count--;
            }
    
            this._inputDec.value = decimalValue;
        }else{
            alert('Valor digitado não é um binário ou ultrapassou 8 digitos')
        }
    }
}