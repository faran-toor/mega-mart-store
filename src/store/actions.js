export default {
    async getAllProducts(context) {
        const response = await fetch('https://dummyjson.com/products?limit=100')
        const res = await response.json()
        context.commit('allProducts' , res)
    },
    async getCategories(context) {
        const response = await fetch('https://dummyjson.com/products/categories')
        const res = await response.json()
        context.commit('allCategories' , res)
    },
    async searchCategoryProduct(context, category) {
            const response = await fetch(`https://dummyjson.com/products/category/${category}?limit=10`)
            const res = await response.json()
            context.commit('categoryProducts', res)
    },
}