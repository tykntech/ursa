var ref = require('ref');
var ffi = require('ffi');

// typedef
//var credential_schema = 
var obj = ref.types.void;
var attribute_ptr = ref.refType(ref.types.CString);
var dec_value_ptr = ref.refType(ref.types.CString);
var prover_id_ptr = ref.refType(ref.types.CString);
var dec_blinding_factor_ptr = ref.refType(ref.types.CString);
var blinded_credential_secrets_ptr = ref.refType(obj);
var blinded_credential_secrets_correctness_proof_ptr = ref.refType(obj);
var blinded_credential_secrets_correctness_proof_json_ptr = ref.refType(ref.types.CString);
var credential_values_builder_ptr = ref.refType(obj);
var credential_values_ptr = ref.refType(obj);
var credential_key_correctness_proof_json_ptr = ref.refType(ref.types.CString);
var credential_key_correctness_proof_ptr = ref.refType(obj);
var credential_pub_key_ptr = ref.refType(obj);
var credential_pub_key_json_ptr = ref.refType(ref.types.CString);
var credential_priv_key_ptr = ref.refType(obj);
var credential_priv_key_json_ptr = ref.refType(ref.types.CString);
var credential_schema_builder_ptr = ref.refType(obj);
var credential_schema_ptr = ref.refType(obj);
var credential_nonce_ptr = ref.refType(obj);
var credential_signature_ptr = ref.refType(obj);
var credential_issuance_nonce_ptr = ref.refType(obj);
var credential_signature_correctness_proof_ptr = ref.refType(obj);
var revocation_registry_delta_ptr = ref.refType(obj);
var ctx_tails_ptr = ref.refType(obj);
var credential_values_ptr = ref.refType(obj);
var rev_idx = 'int';
var max_cred_num = 'int';
var non_credential_schema_builder_ptr = ref.refType(obj)
var non_credential_schema_ptr = ref.refType(obj);
var support_revocation_ptr = ref.refType(obj);
var intPtr = ref.refType('int');
var issuance_by_default = 'bool';
var rev_key_pub_ptr = ref.refType(obj);
var rev_key_priv_ptr = ref.refType(obj);
var rev_reg_ptr = ref.refType(obj);
var rev_tails_generator_ptr = ref.refType(obj);


// binding to "cl" functions...
var cl = new ffi.Library('../../target/release/libursa', {
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
    'ursa_cl_credential_values_builder_add_dec_commitment': ['int',[credential_values_builder_ptr,attribute_ptr,dec_value_ptr,dec_blinding_factor_ptr]],
    'ursa_cl_credential_values_builder_add_dec_hidden': ['int',[credential_values_builder_ptr,attribute_ptr,dec_value_ptr]],
    'ursa_cl_credential_values_builder_add_dec_known': ['int',[credential_values_builder_ptr,attribute_ptr,dec_value_ptr]],
    'ursa_cl_credential_values_builder_finalize': ['int',[credential_values_builder_ptr,credential_values_ptr]],
    'ursa_cl_credential_values_builder_new': ['int',[credential_values_builder_ptr]],
    //'ursa_cl_credential_values_free': ['int',[]],
    'ursa_cl_issuer_merge_revocation_registry_deltas': ['int',[]],
    'ursa_cl_issuer_new_credential_def': ['int',[credential_schema_ptr,non_credential_schema_ptr,support_revocation_ptr,credential_pub_key_ptr,credential_priv_key_ptr,credential_key_correctness_proof_ptr]],
    'ursa_cl_issuer_new_revocation_registry_def': ['int',[credential_pub_key_ptr,max_cred_num,issuance_by_default,rev_key_pub_ptr,rev_key_priv_ptr,rev_reg_ptr,rev_tails_generator_ptr]],
    'ursa_cl_issuer_recovery_credential': ['int',[]],
    'ursa_cl_issuer_revoke_credential': ['int',[]],
    'ursa_cl_issuer_sign_credential': ['int',[]],
    'ursa_cl_issuer_sign_credential_with_revoc': ['int',[prover_id_ptr,blinded_credential_secrets_ptr,blinded_credential_secrets_correctness_proof_ptr,
                                                         credential_nonce_ptr,credential_issuance_nonce_ptr,credential_values_ptr,
                                                         credential_pub_key_ptr,credential_priv_key_ptr,rev_idx,
                                                         max_cred_num, issuance_by_default,rev_reg_ptr,
                                                         rev_key_priv_ptr,ctx_tails_ptr,credential_signature_ptr,
                                                         credential_signature_correctness_proof_ptr, revocation_registry_delta_ptr]],
    //'ursa_cl_master_secret_free': ['int',[]],
    //'ursa_cl_master_secret_from_json': ['int',[]],
    //'ursa_cl_master_secret_to_json': ['int',[]],
    'ursa_cl_new_nonce': [ 'int', [intPtr] ],
    //'ursa_cl_nonce_free': ['int',[intPtr]],
    //'ursa_cl_nonce_from_json': ['int',[]],
    //'ursa_cl_nonce_to_json': ['int',[]],
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

function buildPubKeyFromParts(primary, revocation, pubKeyPtr){
    pubKeyJson= { p_key: primary , r_key : revocation };
    pubKeyJsonPtr = ref.alloc('String',JSON.stringify(pubKeyJson));
    err = cl.ursa_cl_credential_public_key_from_json(pubKeyJsonPtr,pubKeyPtr); if (err) throw new Error(err);
}
function schemaBuilder(attrNames){
    var schemaBuilderPtr = ref.alloc(ref.types.void);
    var schemaPtr = ref.alloc(ref.types.void);
    err = cl.ursa_cl_credential_schema_builder_new(schemaBuilderPtr); if (err) throw new Error(err);
    var attrPtr;
    for (var i = 0, len = attrNames.length; i < len; i++) {
        attrPtr = ref.alloc(ref.types.CString,attrNames[i]); 
        console.log("before add attr")
        err = cl.ursa_cl_credential_schema_builder_add_attr(schemaBuilderPtr,attrPtr); if (err) throw new Error(err);
    }
    console.log("before finalizer")
    err = cl.ursa_cl_credential_schema_builder_finalize(schemaBuilderPtr,schemaPtr); if (err) throw new Error(err);
    return schemaPtr;
}
function nonSchemaBuilder(nonAttrNames){
    var nonSchemaBuilderPtr = ref.alloc(ref.types.void);
    var nonSchemaPtr = ref.alloc(ref.types.void);
    err = cl.ursa_cl_non_credential_schema_builder_new(nonSchemaBuilderPtr); if (err) throw new Error(err);
    for (var i = 0, len = nonAttrNames.length; i < len; i++) {
        attrPtr = ref.alloc("String",nonAttrNames[i]); 
        err = cl.ursa_cl_non_credential_schema_builder_add_attr(nonSchemaBuilderPtr,attrPtr); if (err) throw new Error(err);
    }
    err = cl.ursa_cl_non_credential_schema_builder_finalize(nonSchemaBuilderPtr,nonSchemaPtr); if (err) throw new Error(err);
    return nonSchemaPtr;
}
function newCredDef(schemaPtr,nonSchemaPtr,supportRevocationPtr){
    var pubKeyPtr = ref.alloc(ref.types.void), privKeyPtr = ref.alloc(ref.types.void), keyCorrectnessProofPtr = ref.alloc(ref.types.void);
    err = cl.ursa_cl_issuer_new_credential_def(schemaPtr,nonSchemaPtr,supportRevocationPtr,
                                               pubKeyPtr, privKeyPtr,keyCorrectnessProofPtr); if (err) throw new Error(err);
    var pubKeyJsonPtr = ref.alloc('String'), privKeyJsonPtr = ref.alloc('String'), keyCorrectnessProofJsonPtr = ref.alloc('String'); 
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
}

function valuesBuilder(credValues,hiddenAttrs){
    var valuesBuilderPtr = ref.alloc(ref.types.void);
    var credentialValuesPtr = ref.alloc(ref.types.void);
    err = cl.ursa_cl_credential_values_builder_new(valuesBuilderPtr);
    var attrPtr,decValPtr,decBlindingFactorPtr;
    for (key in credValues ) {
        attrPtr = ref.alloc("String",key); // should attribute have space removed and lower cased?
        decValPtr =  ref.alloc("String",credValues[key][encoded]);
        //if(??){
        //    decBlindingFactorPtr = ref.alloc("String",???);
        //    err = cl.ursa_cl_credential_values_builder_add_dec_commitment(valuesBuilderPtr,attrPtr,decValPtr,decBlindingFactorPtr); if (err) throw new Error(err); 
        //}
        if(hiddenAttrs.indexOf(key)){
            err = cl.ursa_cl_credential_values_builder_add_dec_hidden(valuesBuilderPtr,attrPtr,decValPtr); if (err) throw new Error(err);
        }
        else{
            err = cl.ursa_cl_credential_values_builder_add_dec_known(valuesBuilderPtr,attrPtr,decValPtr); if (err) throw new Error(err);
        }
    }
    err = cl.ursa_cl_credential_values_builder_finalize(valuesBuilderPtr,credentialValuesPtr); if (err) throw new Error(err);
    return credentialValuesPtr;
}

module.exports = {
    ursaClNewNonce: function(){
        var noncePtr = ref.alloc('int');
        err = cl.ursa_cl_new_nonce(noncePtr); if (err) throw new Error(err);
        var nonce = noncePtr.deref();
        return nonce;
        },
    ursaClProverNewMasterSecret: function(){
        var linkSecretPtr = ref.alloc('int');
        err = cl.ursa_cl_prover_new_master_secret(linkSecretPtr)
        if (err) throw new Error(err);
        return linkSecretPtr.deref();
    },   
    /* these methods should be updated to take in js types and return js types, 
    may require more FFI "to and from json" methods .  */
    ursaClSchemaBuilder: schemaBuilder , // returns pointer
    ursaClNonSchemaBuilder: nonSchemaBuilder , // returns pointer
    ursaClPublicKeyFromParts : buildPubKeyFromParts, // takes in and modifies pointer
    //-----------
    ursaClIssuerNewCredentialDef:  function(attrNames,supportRevocation,nonAttrNames){
        var supportRevocationPtr = ref.alloc('bool',supportRevocation);
        var schemaPtr = schemaBuilder(attrNames); 
        var nonSchemaPtr = nonSchemaBuilder(nonAttrNames);
        return newCredDef(schemaPtr,nonSchemaPtr,supportRevocationPtr);
    } ,
    newRevocationRegistry: function(credDef,maxCredNum,issuanceByDefault){
        pubKeyPtr = ref.alloc(ref.types.void);
        buildPubKeyFromParts(credDef.value.primary,credDef.value.revocation,pubKeyPtr);
        var revKeyPubPtr = ref.alloc(ref.types.void), revKeyPrivPtr = ref.alloc(ref.types.void), revRegPtr = ref.alloc(ref.types.void), revTailsGeneratorPtr = ref.alloc(ref.types.void);
        err = cl.ursa_cl_issuer_new_revocation_registry_def(pubKeyPtr,maxCredNum,issuanceByDefault,
                                                            revKeyPubPtr,revKeyPrivPtr,revRegPtr,revTailsGeneratorPtr); if (err) throw new Error(err);
        var revKeysPub = { accum_key : revKeyPubPtr.deref() };
        return [revKeysPub, revKeyPrivPtr.deref(), revRegPtr.deref(), revTailsGeneratorPtr.deref()];
    }, 
    newCredential: function(credDef, credPrivKey,credIssuanceBlindingNonce,  
                            credRequest, credValues, revIdx, revRegDef, 
                            revReg, revKeyPriv,revTailsAccessor){

        var credentialValuesPtr = valuesBuilder(credValues,);
        pubKeyPtr = ref.alloc(ref.types.void);
        buildPubKeyFromParts(credDef.value.primary,credDef.value.revocation,pubKeyPtr);
        /**
            if rev_idx.is_some() {

                CryptoIssuer::sign_credential_with_revoc(&cred_request.prover_did,
                                                         &cred_request.blinded_ms,
                                                         &cred_request.blinded_ms_correctness_proof,
                                                         cred_issuance_blinding_nonce,
                                                         &cred_request.nonce,
                                                         &credential_values,
                                                         &credential_pub_key,
                                                         &cred_priv_key,
                                                         rev_idx,
                                                         rev_reg_def.value.max_cred_num,
                                                         rev_reg_def.value.issuance_type.to_bool(),
                                                         rev_reg,
                                                         rev_key_priv,
                                                         rev_tails_accessor)?
            } else {
                let (signature, correctness_proof) =
                    CryptoIssuer::sign_credential(&cred_request.prover_did,
                                                  &cred_request.blinded_ms,
                                                  &cred_request.blinded_ms_correctness_proof,
                                                  cred_issuance_blinding_nonce,
                                                  &cred_request.nonce,
                                                  &credential_values,
                                                  &credential_pub_key,
                                                  &cred_priv_key)?;
                (signature, correctness_proof, None)
            };

         */
        if(!!revIdx){
            if(!revReg)throw new Error("RevocationRegistry not found");
            if(!revKeyPriv)throw new Error("RevocationKeyPrivate not found");
            if(!revRegDef)throw new Error("RevocationRegistryDefinitionValue not found");
            if(!revTailsAccessor)throw new Error("RevocationTailsAccessor not found");
            err = cl.ursa_cl_issuer_sign_credential_with_revoc();
        }else{
            err = cl.ursa_cl_issuer_sign_credential();
        }
        return [credentialSignature, signatureCorrectnessProof, revRegDelta];
    },
    revoke: function(revReg, maxCredNum, revIdx, revTailsAccessor){}, 
    recovery: function(revReg, maxCredNum, revIdx, revTailsAccessor){}, 
};

