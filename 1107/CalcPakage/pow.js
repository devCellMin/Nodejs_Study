module.exports =() => {
    return {
        power(num1, num2) {
            let result = num1;
            for(let i = 0; i< num2;i++)
            {
                result *= num1;
            }
            return result;
        }
    }
};