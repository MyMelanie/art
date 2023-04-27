const calc = (size, material, options, promocode, result) => {
    const sizeBlock = document.querySelector(size),
          materialBlock = document.querySelector(material),
          optionsBlock = document.querySelector(options), 
          promocodeBlock = document.querySelector(promocode), 
          resultBlock = document.querySelector(result);

    let sum = 0;

    const calcFunc = () => {
        sum = Math.round((+sizeBlock.value) * (+materialBlock.value) + (+optionsBlock.value));    

        if (sizeBlock.value == '' || materialBlock.value == '') {
            resultBlock.textContext = 'Please, select size and material';
        } else if (promocodeBlock.value === 'IWANTPOPART') {
            resultBlock.textContext = Math.round(sum * 0.7);
        } else {
            resultBlock.textContext = sum;
        }

    };
    sizeBlock.addEventListener('change', calcFunc);
    materialBlock.addEventListener('change', calcFunc);
    optionsBlock.addEventListener('change', calcFunc);
    promocode.addEventListener('input', calcFunc);

};

export default calc;