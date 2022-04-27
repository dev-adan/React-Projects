
const reducer = (state, action) => {


  if (action.TYPE === "remove") {
    return {
      ...state,
      products: state.products.filter(
        (product) => product.id !== action.payload
      ),
    };
  }

  if (action.TYPE === "increase") {
    let tempCart = state.products.map((product) => {
      if (product.id === action.payload) {
        return { ...product, amount: product.amount + 1 };
      }
      return product;
    });

    return { ...state, products: tempCart };
  }

  if (action.TYPE === "decrease") {
    let tempCart = state.products.map((product) => {
      if (product.id === action.payload) {
        return { ...product, amount: product.amount - 1 };
      }
      return product;
    }).filter(item => item.amount >= 1)
    // tempCart = tempCart.filter((cart) => cart.amount >= 1);
    return { ...state, products: tempCart };
  }


  if(action.TYPE === 'amount'){
  
    let data1 = [];

    state.products.forEach((product) => {
        data1.push(product.amount * product.price)
    })

    let totalAmount = data1.reduce(function(acc,val){
        return acc + val
    },0)

  

      return {...state,amount : Math.round(totalAmount)}
  }

  if(action.TYPE ==='total') {
     
    let f = [];

    state.products.forEach(product => {
        f.push(product.amount)
    })

    let totalCart = f.reduce(function(acc,val){
        return acc + val
    }, 0)
    
    return {...state, total : totalCart}


      
  }


};

export default reducer;
