console.log(" Welcome To PinCode Validation ");

const pincodeRegex = RegExp("^[0-9]{3}\\s{0,1}[0-9]{3}$");

function validatePincode(pincode) {
    if (pincodeRegex.test(pincode))
        console.log(pincode + " :  Pin Code valid");
    else
        throw pincode + " : Pincode is Invalid !";
}

try {
    validatePincode("591317");
    validatePincode("591 317");
    validatePincode("1235a");
}
catch (e) {
    console.error(e);
} 