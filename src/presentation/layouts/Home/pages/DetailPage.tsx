import { FaEdit } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import useProduct from "../../../../hooks/useProduct";
import DeleteButton from "../../../components/DeleteButton";
import AddCartButton from "../../../components/AddCartButton";

const DetailPage = () => {
  const navigate = useNavigate();
  const { product, error, isLoading } = useProduct();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: error</div>;
  }

  return (
    <div className="max-w-screen-lg mx-auto p-4">
      <h1 className="text-xl font-semibold">Detail</h1>
      <div className="flex gap-4 max-w-2xl">
        <div className="w-96  rounded-md bg-gray-200">
          <img
            src={product?.image_url}
            onError={(e) => {
              e.currentTarget.src =
                "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full//96/MTA-11998113/no_brand_fanela_top_-_pakaian_wanita_-_atasan_wanita_-_baju_blouse_-_pakaian_terlaris_-_pakaian_termurah_full01_km633xuc.jpg";
            }}
            alt=""
            className="w-full rounded-md"
          />
        </div>
        <div>
          <h1 className="font-semibold text-lg">{product?.name}</h1>
          <h2>{product?.description}</h2>
          <p className="">Rp {product?.price}</p>
          <p className="text-xs">Stock : {product?.stock}</p>
          <div className="mt-2 flex gap-2">
            <button
              className="bg-yellow-400 text-white rounded-md p-2"
              onClick={(e) => {
                e.stopPropagation();
                navigate(`/edit/${product?.id}`);
              }}
            >
              <FaEdit />
            </button>
            <DeleteButton id={product?.id ?? 0} />
            <div className="flex-grow"></div>
            <AddCartButton item={product!} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailPage;
