module.exports = () => {
    return {
        add : (num1, num2) => {
            return num1 + num2;
        },
        minus : (num1, num2) => {
            return num1 - num2;
        },
        pow : (num1, num2) => {
            let num = num1;
            for(let i = 0; i< num2; i++)
            {
                num *= num1;
            }
            return num;
        }
    }
};