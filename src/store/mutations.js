export default {
    allProducts(state, payload) { 
        state.allProducts=payload
    },
    allCategories(state, payload) {
        state.productCategories=(payload)
    },
    setCounter(state, payload) { 
        state.counter = payload
    },
    categoryProducts(state, payload) { 
        state.products = payload
    },
} 