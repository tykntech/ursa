//var cl = require('./cl');

const f = function() {

    const ursa = require('ursa');
    // import * as ursa from '../../libursa/pkg/package.json'    

    const schema = ursa.CredentialSchema.new()
    schema.add_attr('Name');
    //schema.add_attr('DoB')

    const nonSchema = ursa.NonCredentialSchema.new()
    //nonSchema.add_attr('id');

    const cred_def = ursa.Issuer.newCredentialDef(schema, nonSchema);

    console.log('end')
}

module.exports = f

f();