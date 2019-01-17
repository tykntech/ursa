var cl = require('./cl');
//var example = require('.examples');
console.log(cl.ursaClNewNonce()); // => some nonce..
console.log(cl.ursaClProverNewMasterSecret()); // => some secret..
console.log(cl.ursaClSchemaBuilder(["age","name"])); // => schemaPtr
//console.log(cl.ursaClNonSchemaBuilder(["age","name"])); // => NonschemaPtr
//console.log(cl.ursaClIssuerNewCredentialDef(["age","name"],false,["master_secret"])); // tests ursaClIssuerNewCredentialDef, ursaClSchemaBuilder and ursaClNonSchemaBuilder 
//console.log(cl.newRevocationRegistry({},100,true)); // Todo: get example cred_def
