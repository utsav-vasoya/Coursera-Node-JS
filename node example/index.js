let ract = require('./rectsngle');
function rect(l, b) {
    ract(l, b, (err, rectangle) => {


        if (err) {
            console.log('ERROR: ', err.message);

        } else {
            console.log('The area of rectangle is ', rectangle.area());
            console.log('The parameter of rectangle is ', rectangle.parameter());

        }
    })
}
rect(2, 5);
rect(0, 6);
rect(5, 10);
