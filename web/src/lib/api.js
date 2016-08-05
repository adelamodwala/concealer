let apiAddress;
if (process.env.NODE_ENV === 'production') {
    // apiAddress = 'https://spenderservice.adelamodwala.com';
    apiAddress = 'http://localhost:9050';
}
else {
    // apiAddress = 'https://spenderservice.adelamodwala.com';
    // apiAddress = 'http://192.168.1.7:9000/spender';
    apiAddress = 'http://localhost:9050';
}


/**
 * Sanitize optional arguments for post requests
 * @param  {Object} opts Request specific options to be sanitized
 * @return {Object}      Sanitized options
 */
function sanitizePostOpts(opts) {
    let contentType = opts.contentType ? opts.contentType : 'application/json';
    let optHeaders = opts.headers ? opts.headers : {};
    let optBody = opts.body ? opts.body : '';

    return {
        contentType,
        optHeaders,
        optBody
    }
}

/**
 * Perform a POST request to the app server
 * @param  {Object} opts contains endpoint, body[, contentType]
 * @return {Promise}     To handle returned data or errors
 */
export function postFetch(opts) {
    let sanitizedOpts = sanitizePostOpts(opts);
    let postOpts = {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-type': sanitizedOpts.contentType,
            ...sanitizedOpts.optHeaders
        }
    };
    if (sanitizedOpts.optBody != '') {
        postOpts.body = sanitizedOpts.optBody;
    }

    return fetch(apiAddress + opts.endpoint, postOpts);
}
