import { MdDeleteForever } from "react-icons/md";
import useAxios from "../../hooks/useAxios";
import { useNavigate } from "react-router-dom";
import { mutate } from "swr";

type DeleteButtonProps = {
  id: number;
};

const DeleteButton = (props: DeleteButtonProps) => {
  const axios = useAxios();
  const navigate = useNavigate();

  const hancurkan = async () => {
    try {
      await axios.delete(`/products/${props.id}`);
      mutate("/products");
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <button
      className="bg-red-400 text-white rounded-md p-2"
      onClick={(e) => {
        e.stopPropagation();
        hancurkan();
      }}
    >
      <MdDeleteForever />
    </button>
  );
};

export default DeleteButton;
