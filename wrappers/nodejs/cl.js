var ref = require('ref');
var ffi = require('ffi');

// typedef
//var credential_schema = 
var obj = ref.types.void;
var attribute_ptr = ref.refType(ref.types.CString);
var blinded_credential_secrets_correctness_proof_ptr = ref.refType(obj);
var blinded_credential_secrets_correctness_proof_json_ptr = ref.refType(ref.types.CString);
var credential_key_correctness_proof_json_ptr = ref.refType(ref.types.CString);
var credential_key_correctness_proof_ptr = ref.refType(obj);
var credential_pub_key_ptr = ref.refType(obj);
var credential_pub_key_json_ptr = ref.refType(ref.types.CString);
var credential_priv_key_ptr = ref.refType(obj);
var credential_priv_key_json_ptr = ref.refType(ref.types.CString);
var credential_schema_builder_ptr = ref.refType(obj);
var credential_schema_ptr = ref.refType(obj);
var non_credential_schema_builder_ptr = ref.refType(obj)
var non_credential_schema_ptr = ref.refType(obj);
var support_revocation_ptr = ref.refType(obj);
var intPtr = ref.refType('int');
//var errorCode = ref.refType('int');



// binding to "cl" functions...
var cl = new ffi.Library('libursa', {
    //'ursa_cl_blinded_credential_secrets_correctness_proof_free': ['int',[blinded_credential_secrets_correctness_proof_ptr]],
    'ursa_cl_blinded_credential_secrets_correctness_proof_from_json': ['int',[blinded_credential_secrets_correctness_proof_json_ptr,blinded_credential_secrets_correctness_proof_ptr]],
    'ursa_cl_blinded_credential_secrets_correctness_proof_to_json': ['int',[blinded_credential_secrets_correctness_proof_ptr,blinded_credential_secrets_correctness_proof_json_ptr]],
    //'ursa_cl_blinded_credential_secrets_free': ['int',[]],
    'ursa_cl_blinded_credential_secrets_from_json': ['int',[]],
    'ursa_cl_blinded_credential_secrets_to_json': ['int',[]],
    //'ursa_cl_credential_key_correctness_proof_free': ['int',[]],
    'ursa_cl_credential_key_correctness_proof_from_json': ['int',[credential_key_correctness_proof_json_ptr,credential_key_correctness_proof_ptr]],
    'ursa_cl_credential_key_correctness_proof_to_json': ['int',[credential_key_correctness_proof_ptr,credential_key_correctness_proof_json_ptr]],
    //'ursa_cl_credential_private_key_free': ['int',[]],
    'ursa_cl_credential_private_key_from_json': ['int',[credential_priv_key_json_ptr,credential_priv_key_ptr]],
    'ursa_cl_credential_private_key_to_json': ['int',[credential_priv_key_ptr,credential_priv_key_json_ptr]],
    //'ursa_cl_credential_public_key_free': ['int',[]],
    'ursa_cl_credential_public_key_from_json': ['int',[credential_pub_key_json_ptr,credential_pub_key_ptr]],
    'ursa_cl_credential_public_key_to_json': ['int',[credential_pub_key_ptr,credential_pub_key_json_ptr]],
    'ursa_cl_credential_schema_builder_add_attr': ['int',[credential_schema_builder_ptr,attribute_ptr]],
    'ursa_cl_credential_schema_builder_finalize': ['int',[credential_schema_builder_ptr,credential_schema_ptr]],
    'ursa_cl_credential_schema_builder_new': ['int',[credential_schema_builder_ptr]],
    //'ursa_cl_credential_schema_free': ['int',[]],
    //'ursa_cl_credential_secrets_blinding_factors_free': ['int',[]],
    'ursa_cl_credential_secrets_blinding_factors_from_json': ['int',[]],
    'ursa_cl_credential_secrets_blinding_factors_to_json': ['int',[]],
    //'ursa_cl_credential_signature_free': ['int',[]],
    'ursa_cl_credential_signature_from_json': ['int',[]],
    'ursa_cl_credential_signature_to_json': ['int',[]],
    'ursa_cl_credential_values_builder_add_dec_commitment': ['int',[]],
    'ursa_cl_credential_values_builder_add_dec_hidden': ['int',[]],
    'ursa_cl_credential_values_builder_add_dec_known': ['int',[]],
    'ursa_cl_credential_values_builder_finalize': ['int',[]],
    'ursa_cl_credential_values_builder_new': ['int',[]],
    //'ursa_cl_credential_values_free': ['int',[]],
    'ursa_cl_issuer_merge_revocation_registry_deltas': ['int',[]],
    'ursa_cl_issuer_new_credential_def': ['int',[credential_schema_ptr,non_credential_schema_ptr,support_revocation_ptr,credential_pub_key_ptr,credential_priv_key_ptr,credential_key_correctness_proof_ptr]],
    'ursa_cl_issuer_new_revocation_registry_def': ['int',[]],
    'ursa_cl_issuer_recovery_credential': ['int',[]],
    'ursa_cl_issuer_revoke_credential': ['int',[]],
    'ursa_cl_issuer_sign_credential': ['int',[]],
    'ursa_cl_issuer_sign_credential_with_revoc': ['int',[]],
    //'ursa_cl_master_secret_free': ['int',[]],
    'ursa_cl_master_secret_from_json': ['int',[]],
    'ursa_cl_master_secret_to_json': ['int',[]],
    'ursa_cl_new_nonce': [ 'int', [intPtr] ],
    //'ursa_cl_nonce_free': ['int',[]],
    'ursa_cl_nonce_from_json': ['int',[]],
    'ursa_cl_nonce_to_json': ['int',[]],
    'ursa_cl_non_credential_schema_builder_add_attr': ['int',[non_credential_schema_builder_ptr,attribute_ptr]],
    'ursa_cl_non_credential_schema_builder_finalize': ['int',[non_credential_schema_builder_ptr,non_credential_schema_ptr]],
    'ursa_cl_non_credential_schema_builder_new': ['int',[non_credential_schema_builder_ptr]],
    //'ursa_cl_non_credential_schema_free': ['int',[]],
    'ursa_cl_proof_builder_add_sub_proof_request': ['int',[]],
    'ursa_cl_proof_builder_finalize': ['int',[]],
    //'ursa_cl_proof_free': ['int',[]],
    'ursa_cl_proof_from_json': ['int',[]],
    'ursa_cl_proof_to_json': ['int',[]],
    'ursa_cl_proof_verifier_add_sub_proof_request': ['int',[]],
    'ursa_cl_proof_verifier_verify': ['int',[]],
    'ursa_cl_prover_blind_credential_secrets': ['int',[]],
    'ursa_cl_prover_get_credential_revocation_index': ['int',[]],
    'ursa_cl_prover_new_master_secret': ['int',[intPtr]],
    'ursa_cl_prover_new_proof_builder': ['int',[]],
    'ursa_cl_prover_process_credential_signature': ['int',[]],
    //'ursa_cl_revocation_key_private_free': ['int',[]],
    'ursa_cl_revocation_key_private_from_json': ['int',[]],
    'ursa_cl_revocation_key_private_to_json': ['int',[]],
    //'ursa_cl_revocation_key_public_free': ['int',[]],
    'ursa_cl_revocation_key_public_from_json': ['int',[]],
    'ursa_cl_revocation_key_public_to_json': ['int',[]],
    //'ursa_cl_revocation_registry_delta_free': ['int',[]],
    'ursa_cl_revocation_registry_delta_from_json': ['int',[]],
    'ursa_cl_revocation_registry_delta_to_json': ['int',[]],
    //'ursa_cl_revocation_registry_free': ['int',[]],
    'ursa_cl_revocation_registry_from_json': ['int',[]],
    'ursa_cl_revocation_registry_to_json': ['int',[]],
    //'ursa_cl_revocation_tails_generator_free': ['int',[]],
    'ursa_cl_revocation_tails_generator_from_json': ['int',[]],
    'ursa_cl_revocation_tails_generator_to_json': ['int',[]],
    //'ursa_cl_signature_correctness_proof_free': ['int',[]],
    'ursa_cl_signature_correctness_proof_from_json': ['int',[]],
    'ursa_cl_signature_correctness_proof_to_json': ['int',[]],
    'ursa_cl_sub_proof_request_builder_add_predicate': ['int',[]],
    'ursa_cl_sub_proof_request_builder_add_revealed_attr': ['int',[]],
    'ursa_cl_sub_proof_request_builder_finalize': ['int',[]],
    'ursa_cl_sub_proof_request_builder_new': ['int',[]],
    //'ursa_cl_sub_proof_request_free': ['int',[]],
    //'ursa_cl_tail_free': ['int',[]],
    'ursa_cl_tails_generator_count': ['int',[]],
    'ursa_cl_tails_generator_next': ['int',[]],
    'ursa_cl_verifier_new_proof_verifier': ['int',[]],
    //'ursa_cl_witness_free': ['int',[]],
    'ursa_cl_witness_new': ['int',[]],
    'ursa_cl_witness_update': ['int',[]],
    'ursa_revocation_registry_delta_from_parts': ['int',[]],
    'ursa_set_default_logger': ['int',[]],
    'ursa_set_logger': ['int',[]],
});


module.exports = {
    ursaClNewNonce: function(){
        var noncePtr = ref.alloc('int');
        err = cl.ursa_cl_new_nonce(noncePtr);
        if (err) throw new Error(err);
        return noncePtr.deref();
        },
    ursaClProverNewMasterSecret: function(){
        var linkSecretPtr = ref.alloc('int');
        err = cl.ursa_cl_prover_new_master_secret(linkSecretPtr)
        if (err) throw new Error(err);
        return linkSecretPtr.deref();
    },    
    ursaClIssuerNewCredentialDef: function(credentialSchema,//array???
                                           nonCredentialSchema,//???
                                           supportRevocation){// bool
        var credentialSchemaPtr = buffer.from(credentialSchema);
        var nonCredentialSchemaPtr = buffer.from(nonCredentialSchema);
        var supportRevocationPtr = ref.alloc('bool',supportRevocation);
        var credentialPubKeyPtr = ref.alloc('int');
        var credentialPrivKeyPtr = ref.alloc('int');
        var credentialKeyCorrectnessProofPtr = ref.alloc('int');
        err = cl.ursa_cl_issuer_new_credential_def(credentialSchemaPtr,
                                                   nonCredentialSchemaPtr,
                                                   supportRevocationPtr,
                                                   credentialPubKeyPtr,
                                                   credentialPrivKeyPtr,
                                                   credentialKeyCorrectnessProofPtr)
        if (err) throw new Error(err);
        return [credentialPubKeyPtr.deref(),
                credentialPrivKeyPtr.deref(),
                credentialKeyCorrectnessProofPtr.deref()];
    },

    // indy-request (https://github.com/Picolab/node-indy-request) helpers
        // Issuer
    newCredentialDefinition: function(attrNames,supportRevocation){
        // build schema
        var supportRevocationPtr = ref.alloc('bool',supportRevocation);
        var schemaBuilderPtr = ref.alloc('object');
        var schemaPtr = ref.alloc('object');
        err = cl.ursa_cl_credential_schema_builder_new(schemaBuilderPtr); if (err) throw new Error(err);
        var attrPtr;
        for (var i = 0, len = attrNames.length; i < len; i++) {
            attrPtr = buffer.from(attrNames[i]); // memory leak?????
            err = cl.ursa_cl_credential_schema_builder_add_attr(schemaBuilderPtr,attrPtr); if (err) throw new Error(err);
        }
        err = cl.ursa_cl_credential_schema_builder_finalize(schemaBuilderPtr,schemaPtr); if (err) throw new Error(err);
        // build non schema
        var nonSchemaPtr = ref.alloc('object');
        err = cl.ursa_cl_non_credential_schema_builder_new(nonSchemaBuilderPtr); if (err) throw new Error(err);
        attrPtr = buffer.from("master_secret"); // should be updated to linked secret
        err = cl.ursa_cl_non_credential_schema_builder_add_attr(nonSchemaBuilderPtr,attrPtr); if (err) throw new Error(err);
        err = cl.ursa_cl_non_credential_schema_builder_finalize(nonSchemaBuilderPtr,nonSchemaPtr); if (err) throw new Error(err);
        var pubKeyPtr = ref.alloc('int'), privKeyPtr = ref.alloc('int'), keyCorrectnessProofPtr = ref.alloc('int');
        err = cl.ursa_cl_issuer_new_credential_def(schemaPtr,nonSchemaPtr,supportRevocationPtr,
                                                   pubKeyPtr, privKeyPtr,keyCorrectnessProofPtr); if (err) throw new Error(err);
        var pubKeyJsonPtr = ref.alloc('String'), privKeyJsonPtr = ref.alloc('String'), keyCorrectnessProofJsonPtr = ref.alloc('String'); // is this the correct way to do this??
        err = cl.ursa_cl_credential_public_key_to_json(pubKeyPtr,pubKeyJsonPtr); if (err) throw new Error(err);
        var pubKey = JSON.parse(pubKeyJsonPtr.deref());
        err = cl.ursa_cl_credential_private_key_to_json(privKeyPtr,privKeyJsonPtr); if (err) throw new Error(err);
        var privKey = JSON.parse(privKeyJsonPtr.deref());
        err = cl.ursa_cl_credential_key_correctness_proof_to_json(keyCorrectnessProofPtr,keyCorrectnessProofJsonPtr); if (err) throw new Error(err);
        var keyCorrectnessProof = JSON.parse(keyCorrectnessProofJsonPtr.deref());
        return [{primary: pubKey.p_key,
                 //tag: "",
                 //value: "",
                 revocation: pubKey.r_key
                },privKey,keyCorrectnessProof];
    },
    //newRevocationRegistry: function(){}, 
    //newCredential: function(){}, 
    //revoke: function(){}, 
    //recovery: function(){}, 
};

