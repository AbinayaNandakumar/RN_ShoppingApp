import axios from 'axios';
const BACKEND_URL = 'https://react-native-trainingapp-default-rtdb.firebaseio.com';

export function storePlaceOrderData(orderData)
{
    axios.post(BACKEND_URL + '/orderPlaced.json',orderData);
}



export async function fetchCategoriesData() {
    try {
      const responseCategoriesData = await axios.get(BACKEND_URL + '/categories.json');
      console.log('Response Data(category):', responseCategoriesData.data);
  
      const categoriesdata = [];
      const categoryData = Object.values(responseCategoriesData.data);
      categoryData.forEach((category) => {
        categoriesdata.push(category);
      });
        return categoriesdata;
    } catch (error) {
      console.error('Error fetching categories data:', error);
      return [];
    }
  }
  
  export async function fetchSubCategoriesData() {
    try {
      const responseSubCategoriesData = await axios.get(BACKEND_URL + '/subcategories.json');
      console.log('Response Data(subCategory):', responseSubCategoriesData.data);
  
      const subcategoriesdata = [];
      const subcategoryData = Object.values(responseSubCategoriesData.data);
      subcategoryData.forEach((subcategory) => {
        subcategoriesdata.push(subcategory);
      });
        return subcategoriesdata;
    } catch (error) {
      console.error('Error fetching subcategories data:', error);
      return [];
    }
  }

  export async function fetchProductsData() {
    try {
      const responseProductsData = await axios.get(BACKEND_URL + '/productsdata.json');
      console.log('Response Data(products):', responseProductsData.data);
  
      const productsdata = [];
      const products = Object.values(responseProductsData.data);
      products.forEach((prod) => {
        productsdata.push(prod);
      });
        return productsdata;
    } catch (error) {
      console.error('Error fetching products data:', error);
      return [];
    }
  }


  