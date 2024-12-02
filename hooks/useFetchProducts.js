import { useState, useEffect } from 'react';
import { fetchProductsData } from '../Util/http';

const useFetchProducts = () => {
  const [fetchedProductsData, setFetchedProductsData] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchProducts = async () => {
      setIsLoading(true);
      try {
        const productData = await fetchProductsData();
        setFetchedProductsData(productData.filter((item) => item !== null));
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchProducts();
  }, []);

  return { fetchedProductsData, error, isLoading };
};

export default useFetchProducts;