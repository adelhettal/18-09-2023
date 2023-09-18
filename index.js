// Exo 1 
const address = {
    street: 'cooperative',
    city: 'Boumerdes',
    zipCode: 35000
};

function showAddress(address) {
    for (let key in address) {
        console.log(key + ':', address[key]);
    }
}

showAddress(address);

//exo 2 
//Factory Function
function createAddress (street, city, zipCode) {
    return {
    street,
    city,
    zipCode
    };
    }
    let address = createAddress ('a', 'b', 'c');
    console. log (address) ;
     
    // Constructor Function
    function Address(street, city, zipCode) {
    this.street = street;
    this.city = city;
    this.zipCode = zipCode;
    let address = new Address('a', 'b', 'c');
    console. log (address) ;