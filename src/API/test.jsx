// // Function to fetch product list
// export const fetchProductList = async (categoryId) => {
//     const url = `https://asos10.p.rapidapi.com/api/v1/getProductList?categoryId=${categoryId}&currency=USD&country=US&store=US&languageShort=en&sizeSchema=US&limit=50&offset=0&sort=recommended`;
//     const options = {
//         method: 'GET',
//         headers: {
//             'x-rapidapi-key': '938d9a2093msh6edd9ccf27904aep192706jsn0203b5a863a9',
//             'x-rapidapi-host': 'asos10.p.rapidapi.com'
//         }
//     };

//     try {
//         const response = await fetch(url, options);
//         const result = await response.json(); // Parse as JSON
//         console.log(result);
//         return result; // Return the result for further processing
//     } catch (error) {
//         console.error('Error fetching product list:', error);
//         throw error; // Re-throw the error for handling elsewhere
//     }
// };

// // Function to fetch categories
// export const fetchCategories = async () => {
//     const url = 'https://asos10.p.rapidapi.com/api/v1/getCategories';
//     const options = {
//         method: 'GET',
//         headers: {
//             'x-rapidapi-key': '938d9a2093msh6edd9ccf27904aep192706jsn0203b5a863a9',
//             'x-rapidapi-host': 'asos10.p.rapidapi.com'
//         }
//     };

//     try {
//         const response = await fetch(url, options);
//         const result = await response.json(); // Parse as JSON
//         console.log(result);
//         return result; // Return the result for further processing
//     } catch (error) {
//         console.error('Error fetching categories:', error);
//         throw error; // Re-throw the error for handling elsewhere
//     }
// };

