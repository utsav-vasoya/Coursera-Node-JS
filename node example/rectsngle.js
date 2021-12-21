module.exports = (x, y, callback) => {
    if (x <= 0 || y <= 0) {
        setTimeout(() => callback(new Error('value is not less than 0 Your value is l=' + x + " " + 'b=' + y), null)
            , 2000);

    } else {
        setTimeout(() => callback(null, {
            parameter: () => (2 * (x + y)),
            area: () => (x * y)
        })
            , 2000);
    }
}



