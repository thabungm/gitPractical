//type INFO, ERROR, WARNING

function curriedLogInfo(type) {
  return function (time) {
    return function (message) {
      console.log(`${type} ${time} ${message}`);
    };
  };
}

const logWarning = curriedLogInfo('WARNING')(new Date());

logWarning('Hello');
logWarning('World');
/* 
function logNow(type, time, message) {
  console.log(`${type} ${time} ${message}`);
}
/* // view.js
logNow('INFO', new Date(), 'Data saved');
logNow('INFO', new Date(), 'User clicked');
logNow('INFO', new Date(), 'User displayed');
logNow('INFO', new Date(), 'Data saved');

// controller.js
logNow('ERROR', new Date(), 'Received bad data');

// model.js
logNow('WARNING', new Date(), 'Mandatory field missing');
 */
