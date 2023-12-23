import useSWR from "swr";
import useAxios from "./useAxios";

export interface IProduct {
  id: number;
  name: string;
  price: number;
  description: string;
  image_url: string;
  stock: number;
}

const useProducts = () => {
  const axiosBase = useAxios();
  const { data, error, isLoading } = useSWR<IProduct[]>(
    "/products",
    async (url: string) => {
      const response = await axiosBase.get(url);

      return response.data;
    }
  );

  return {
    products: data,
    isLoading,
    error,
  };
};

export default useProducts;
