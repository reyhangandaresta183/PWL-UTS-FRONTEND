import { useForm } from "react-hook-form";
import useAxios from "../../../../hooks/useAxios";
import { useNavigate } from "react-router-dom";

export interface IFormInput {
  name: string;
  price: number;
  stock: number;
  description: string;
  image_url: string;
}

const AddPage = () => {
  const { register, handleSubmit } = useForm<IFormInput>();

  const axios = useAxios();

  const navigate = useNavigate();

  const onSubmit = async (data: IFormInput) => {
    try {
      console.log(data);
      await axios.post(`/products`, {
        ...data,
        stock: Number(data.stock),
        price: Number(data.price),
      });
      navigate(-1);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="max-w-screen-lg mx-auto p-4">
      <h1 className="text-xl font-semibold">Add Product</h1>
      <form className="mt-4" onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            className="bg-gray-200 p-2 rounded-md"
            {...register("name", {
              required: true,
            })}
          />
        </div>
        <div className="flex flex-col mt-2">
          <label htmlFor="price">Price</label>
          <input
            type="number"
            id="price"
            className="bg-gray-200 p-2 rounded-md"
            {...register("price", {
              required: true,
            })}
          />
        </div>
        <div className="flex flex-col mt-2">
          <label htmlFor="stock">Stock</label>
          <input
            type="number"
            id="stock"
            className="bg-gray-200 p-2 rounded-md"
            {...register("stock", {
              required: true,
            })}
          />
        </div>
        <div className="flex flex-col mt-2">
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            className="bg-gray-200 p-2 rounded-md"
            {...register("description", {
              required: true,
            })}
          ></textarea>
        </div>
        <div className="flex flex-col mt-2">
          <label htmlFor="image">Image</label>
          <input
            type="text"
            id="image"
            className="bg-gray-200 p-2 rounded-md"
            {...register("image_url", {
              required: true,
            })}
          />
        </div>
        <button className="bg-green-700 text-white mt-4 p-2 rounded-md">
          Add Product
        </button>
      </form>
    </div>
  );
};

export default AddPage;
