export default {
    async getAllProducts(context) {
        const response = await fetch('https://fakestoreapi.com/products')
        const res = await response.json()
        context.commit('allProducts' , res)
    },
    async getCategories(context) {
        const response = await fetch('https://fakestoreapi.com/products/categories')
        const res = await response.json()
        context.commit('allCategories' , res)
    },
    async searchCategoryProduct(context, category) {
        if (category !== 'All') {
            const response = await fetch(`https://fakestoreapi.com/products/category/${category}`)
            const res = await response.json()
            context.commit('allProducts', res)
        }
        else {
            context.dispatch("getAllProducts");
        }
    },
}