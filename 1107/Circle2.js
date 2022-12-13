// Make Circle with JS

const {PI} = Math;

module.exports = () => {
    return {
        area(r) {return PI * r * r; },
        cf(r) {return 2 * PI * r; },
        PI : PI
    }
};