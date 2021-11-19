export const calculateAmount = (transactions) => {
  var sum = 0;
  for (var transaction of transactions) {
    var { transactionType, amount } = transaction;
    amount = parseInt(amount);
    if (transactionType === "Income") {
      sum += amount;
      console.log("type of Sum and Amount /n");
      console.log(typeof sum);
      console.log(typeof amount);
    } else sum -= amount;
  }
  return sum;
};

export const updateTransactionData = (
  transactcions,
  transactionId,
  updatedData
) => {
  return transactcions.map((trans) => {
    if (trans.id === transactionId) {
      return { ...trans, ...updatedData };
    } else {
      return {
        ...trans,
      };
    }
  });
};
