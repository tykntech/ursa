var ref = require('ref');
var ffi = require('ffi');

// typedef
//var credential_schema = 
var intPtr = ref.refType('int');
//var errorCode = ref.refType('int');

// binding to "cl" functions...
var cl = new ffi.Library('libursa', {
    'ursa_bls_generator_as_bytes': ['int',[]],
    'ursa_bls_generator_free': ['int',[]],
    'ursa_bls_generator_from_bytes': ['int',[]],
    'ursa_bls_generator_new': ['int',[]],
    'ursa_bls_multi_signature_as_bytes': ['int',[]],
    'ursa_bls_multi_signature_free': ['int',[]],
    'ursa_bls_multi_signature_from_bytes': ['int',[]],
    'ursa_bls_multi_signature_new': ['int',[]],
    'ursa_bls_pop_as_bytes': ['int',[]],
    'ursa_bls_pop_free': ['int',[]],
    'ursa_bls_pop_from_bytes': ['int',[]],
    'ursa_bls_pop_new': ['int',[]],
    'ursa_bls_sign': ['int',[]],
    'ursa_bls_signature_as_bytes': ['int',[]],
    'ursa_bls_signature_free': ['int',[]],
    'ursa_bls_signature_from_bytes': ['int',[]],
    'ursa_bls_sign_key_as_bytes': ['int',[]],
    'ursa_bls_sign_key_free': ['int',[]],
    'ursa_bls_sign_key_from_bytes': ['int',[]],
    'ursa_bls_sign_key_new': ['int',[]],
    'ursa_bls_verify': ['int',[]],
    'ursa_bls_verify_multi_sig': ['int',[]],
    'ursa_bls_verify_pop': ['int',[]],
    'ursa_bls_ver_key_as_bytes': ['int',[]],
    'ursa_bls_ver_key_free': ['int',[]],
    'ursa_bls_ver_key_from_bytes': ['int',[]],
    'ursa_bls_ver_key_new': ['int',[]]
});

module.exports = {
    ursaClNewNonce: function(){
                var outNumber = ref.alloc('int'); // allocate a 4-byte (32-bit) chunk for the output data
                cl.ursa_cl_new_nonce(outNumber);
                var actualNumber = outNumber.deref();
                return actualNumber;
                        }
};

