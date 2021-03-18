
function getFundsRaised(business) {

  const total = business.fund[0].pledges.reduce((acc, pledge) => {
    return acc + pledge.amount
  }, 0)

  return total
}

export {
  getFundsRaised
}

