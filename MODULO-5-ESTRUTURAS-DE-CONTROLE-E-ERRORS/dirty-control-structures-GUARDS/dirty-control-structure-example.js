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
  ];

  processTransactions(transactions);
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
  // COM 2 GUARDS:
  if (transactionsAreEmpty(transactions)) {
    // TODO - 1º GUARD (INVERTER O IF STATEMENT, as condições, e aí COLOCAR 1 RETURN STATEMENT NESSE BLOCK... AO MESMO TEMPO QUE COLOCAMOS TODA A LÓGICA QUE ESTAVA NESSE IF BLOCK __ DIRETAMENTE NO ELSE STATEMENT)...
    outputError('No transactions provided!');
    return;
  } else {
    for (const transaction of transactions) {
      if (transaction.status !== 'OPEN') {
        // 'open' era repetido nos 2 cases, de PAYMENT E DE REFUND
        // TODO - 2º GUARD (INVERTER O IF STATEMENT, as condições, e aí COLOCAR 1 ___CONTINUE___ (pq estamos em 1 loop, dentro desse if statement) STATEMENT NESSE BLOCK... AO MESMO TEMPO QUE COLOCAMOS TODA A LÓGICA QUE ESTAVA NESSE IF BLOCK __ DIRETAMENTE NO ELSE STATEMENT)...
        outputError('Invalid transaction type!', transaction);
        continue;
      }

      if (transaction.type === 'PAYMENT') {
        if (transaction.method === 'CREDIT_CARD') {
          processCreditCardPayment(transaction);
        } else if (transaction.method === 'PAYPAL') {
          processPayPalPayment(transaction);
        } else if (transaction.method === 'PLAN') {
          processPlanPayment(transaction);
        }
      } else if (transaction.type === 'REFUND') {
        if (transaction.method === 'CREDIT_CARD') {
          processCreditCardRefund(transaction);
        } else if (transaction.method === 'PAYPAL') {
          processPayPalRefund(transaction);
        } else if (transaction.method === 'PLAN') {
          processPlanRefund(transaction);
        }
      } else {
        outputError('Invalid transaction type!', transaction);
      }
    }
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