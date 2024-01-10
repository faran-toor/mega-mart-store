export default {
    async productData(url, method = 'GET', data) {
        try {
            const response = await fetch(url ,{

                method, data
            });
        return await response.json();
        }
        catch (error){
            console.log(error);
       }
    }
}