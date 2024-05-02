export const parseToBrl = (amount = 0) => {
  // argument 'preco' will have the default value of '0'
  // this function need be outside of component for be exported
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(amount) // Intl is a object javascript
}

export const getTotalPrice = (items: Game[]) => {
  return items.reduce((accumulator, currentItem) => {
    if (currentItem.prices.current) {
      return (accumulator += currentItem.prices.current)
    } else {
      return 0
    }
  }, 0)
}
