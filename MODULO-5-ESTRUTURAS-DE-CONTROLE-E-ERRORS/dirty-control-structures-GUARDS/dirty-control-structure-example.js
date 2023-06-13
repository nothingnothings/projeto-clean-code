main();

function main() {
  const transactions = [
    {
      id: 't1',
      type: 'PAYMENT',
      status: 'OPEN',
      method: 'CREDIT_CARD',
      amount: '23.99',
    },
    {
      id: 't2',
      type: 'PAYMENT',
      status: 'OPEN',
      method: 'PAYPAL',
      amount: '100.43',
    },
    {
      id: 't3',
      type: 'REFUND',
      status: 'OPEN',
      method: 'CREDIT_CARD',
      amount: '10.99',
    },
    {
      id: 't4',
      type: 'PAYMENT',
      status: 'CLOSED',
      method: 'PLAN',
      amount: '15.99',
    },
    {
      id: 't5',
      type: 'REFUND',
      status: 'OPEN',
      method: 'vasvas',
      amount: '10.99',
    },
  ];

  //error handling deve ser colocado AQUI, e não dentro de 'procesTransactions'..

  try {
    processTransactions(transactions);
  } catch (error) {
    console.log('proper error handling');
    outputError(error.message);
  }
}

// function processTransactions(transactions) { // sem GUARD
//   if (transactions && transactions.length > 0) {
//     for (const transaction of transactions) {
//       if (transaction.type === 'PAYMENT') {
//         if (transaction.status === 'OPEN') {
//           if (transaction.method === 'CREDIT_CARD') {
//             processCreditCardPayment(transaction);
//           } else if (transaction.method === 'PAYPAL') {
//             processPayPalPayment(transaction);
//           } else if (transaction.method === 'PLAN') {
//             processPlanPayment(transaction);
//           }
//         } else {
//           console.log('Invalid transaction type!');
//         }
//       } else if (transaction.type === 'REFUND') {
//         if (transaction.status === 'OPEN') {
//           if (transaction.method === 'CREDIT_CARD') {
//             processCreditCardRefund(transaction);
//           } else if (transaction.method === 'PAYPAL') {
//             processPayPalRefund(transaction);
//           } else if (transaction.method === 'PLAN') {
//             processPlanRefund(transaction);
//           }
//         } else {
//           console.log('Invalid transaction type!', transaction);
//         }
//       } else {
//         console.log('Invalid transaction type!', transaction);
//       }
//     }
//   } else {
//     console.log('No transactions provided!');
//   }
// }

function processTransactions(transactions) {
  // 1) validamos as transactions
  validateTransactions(transactions);

  for (const transaction of transactions) {
    try {
      // 2) processamos as transactions
      processTransaction(transaction);
    } catch (error) {
      outputError(error.message, transaction);
      continue;
    }

    // if (transaction.type === 'PAYMENT') {
    //   if (transaction.method === 'CREDIT_CARD') {
    //     processCreditCardPayment(transaction);
    //   } else if (transaction.method === 'PAYPAL') {
    //     processPayPalPayment(transaction);
    //   } else if (transaction.method === 'PLAN') {
    //     processPlanPayment(transaction);
    //   }
    // } else if (transaction.type === 'REFUND') {
    //   if (transaction.method === 'CREDIT_CARD') {
    //     processCreditCardRefund(transaction);
    //   } else if (transaction.method === 'PAYPAL') {
    //     processPayPalRefund(transaction);
    //   } else if (transaction.method === 'PLAN') {
    //     processPlanRefund(transaction);
    //   }
    // } else {
    //   outputError('Invalid transaction type!', transaction);
    // }
  }
}

function processTransaction(transaction) {
  try {
    // TODO - TENTE SEMPRE COLOCAR APENAS 1 TRY-CATCH BLOCK POR FUNCTION (e mais nada, não faça operações no lado de fora)...
    //1º) validamos a transaction
    validateTransaction(transaction);
    //2º) realizamos e terminamos a transaction
    finishTransaction(transaction);
  } catch (error) {
    //3º) outputtamos eventuais errors
    outputError(error.message, transaction);
  }
}

function finishTransaction(transaction) {
  const paymentProcessor = getTransactionProcessor(transaction.type);

  switch (transaction.method) {
    case 'CREDIT_CARD':
      paymentProcessor.processCreditCard(transaction);
      break;
    case 'PAYPAL':
      paymentProcessor.processPayPal(transaction);
      break;
    case 'PLAN':
      paymentProcessor.processPlan(transaction);
      break;
    default:
      return;
  }
}

function getTransactionProcessor(type) {
  let processCreditCard;
  let processPayPal;
  let processPlan;

  if (type === 'PAYMENT') {
    processCreditCard = function (transaction) {
      processCreditCardPayment(transaction);
    };

    processPayPal = function (transaction) {
      processPayPalPayment(transaction);
    };
    processPlan = function (transaction) {
      processPlanPayment(transaction);
    };
  }

  if (type === 'REFUND') {
    processCreditCard = function (transaction) {
      processCreditCardRefund(transaction);
    };

    processPayPal = function (transaction) {
      processPayPalRefund(transaction);
    };
    processPlan = function (transaction) {
      processPlanRefund(transaction);
    };
  }

  return {
    processCreditCard: processCreditCard,
    processPayPal: processPayPal,
    processPlan: processPlan,
  };
}

function validateTransactions(transactions) {
  if (transactionsAreEmpty(transactions)) {
    // TODO - 1º GUARD (INVERTER O IF STATEMENT, as condições, e aí COLOCAR 1 RETURN STATEMENT/throw NESSE BLOCK... AO MESMO TEMPO QUE COLOCAMOS TODA A LÓGICA QUE ESTAVA NESSE IF BLOCK __ DIRETAMENTE NO ELSE STATEMENT)...
    // outputError('No transactions provided!');
    const error = new Error('No transactions provided!');
    throw error;
  }
}

function validateTransaction(transaction) {
  if (transaction.status !== 'OPEN') {
    // 'open' era repetido nos 2 cases, de PAYMENT E DE REFUND
    // TODO - 2º GUARD (INVERTER O IF STATEMENT, as condições, e aí COLOCAR 1 ___CONTINUE___ (pq estamos em 1 loop, dentro desse if statement) STATEMENT NESSE BLOCK... AO MESMO TEMPO QUE COLOCAMOS TODA A LÓGICA QUE ESTAVA NESSE IF BLOCK __ DIRETAMENTE NO ELSE STATEMENT)...
    // outputError('Invalid transaction type!', transaction);
    const error = new Error('Invalid transaction type!');
    throw error;
  }

  if (transaction.type !== 'PAYMENT' && transaction.type !== 'REFUND') {
    const error = new Error('Invalid transaction type!');
    throw error;
  }

  if (
    transaction.method !== 'CREDIT_CARD' &&
    transaction.method !== 'PAYPAL' &&
    transaction.method !== 'PLAN'
  ) {
    const error = new Error('Invalid transaction method!');
    throw error;
  }
}

function transactionsAreEmpty(transactions) {
  return !transactions || transactions.length === 0;
}

function outputError(message, transaction) {
  if (transaction) {
    console.log(message, transaction);
  } else {
    console.log(message);
  }
}

// function processRefund(transaction) {
//   const refundProcessor = getTransactionProcessor(transaction.type);

//   switch (transaction.method) {
//     case 'CREDIT_CARD':
//       processCreditCardRefund(transaction);
//       break;
//     case 'PAYPAL':
//       processPayPalRefund(transaction);
//       break;
//     case 'PLAN':
//       processPlanRefund(transaction);
//       break;
//     default:
//       return;
//   }
// }

function processCreditCardPayment(transaction) {
  console.log(
    'Processing credit card payment for amount: ' + transaction.amount
  );
}

function processCreditCardRefund(transaction) {
  console.log(
    'Processing credit card refund for amount: ' + transaction.amount
  );
}

function processPayPalPayment(transaction) {
  console.log('Processing PayPal payment for amount: ' + transaction.amount);
}

function processPayPalRefund(transaction) {
  console.log('Processing PayPal refund for amount: ' + transaction.amount);
}

function processPlanPayment(transaction) {
  console.log('Processing plan payment for amount: ' + transaction.amount);
}

function processPlanRefund(transaction) {
  console.log('Processing plan refund for amount: ' + transaction.amount);
}
