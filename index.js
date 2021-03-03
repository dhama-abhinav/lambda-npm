const { v4: uuidv4 } = require('uuid');
// ⇨ '1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed'

exports.handler = async (event)=> {
    const uuid = uuidv4(); 
    console.log(JSON.stringify(event))
    return 'uuid :::' + uuid ;
    //hello
}