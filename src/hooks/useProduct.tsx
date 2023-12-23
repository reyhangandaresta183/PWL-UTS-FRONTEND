import useSWR from "swr";
import useAxios from "./useAxios";
import { IProduct } from "./useProducts";
import { useParams } from "react-router-dom";

const useProduct = () => {
  const axiosBase = useAxios();
  const { id } = useParams<{ id: string }>();
  const { data, error, isLoading } = useSWR<IProduct>(
    `/products/${id}`,
    async (url: string) => {
      const response = await axiosBase.get(url);

      return response.data;
    }
  );

  return {
    product: data,
    isLoading,
    error,
  };
};

export default useProduct;
