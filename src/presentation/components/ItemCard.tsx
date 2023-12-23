import { FaEdit } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { IProduct } from "../../hooks/useProducts";
import DeleteButton from "./DeleteButton";
import AddCartButton from "./AddCartButton";

type ItemCardProps = {
  item: IProduct;
};

const ItemCard = (props: ItemCardProps) => {
  const navigate = useNavigate();

  return (
    <div
      className="w-48 rounded-lg  text-white cursor-pointer"
      onClick={() => navigate(`/detail/${props.item.id}`)}
    >
      <div className="w-full h-48 rounded-t-lg bg-gray-300">
        <img
          src={props.item.image_url}
          onError={(e) => {
            e.currentTarget.src =
              "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full//96/MTA-11998113/no_brand_fanela_top_-_pakaian_wanita_-_atasan_wanita_-_baju_blouse_-_pakaian_terlaris_-_pakaian_termurah_full01_km633xuc.jpg";
          }}
          alt=""
          className="w-full h-full object-cover rounded-t-lg"
        />
      </div>
      <div className="p-2 bg-green-700 rounded-b-lg">
        <h1 className="font-semibold text-lg">{props.item.name}</h1>
        <p className="">Rp {props.item.price}</p>
        <p className="text-xs">Stock : {props.item.stock}</p>
        <div className="mt-2 flex gap-2">
          <button
            className="bg-yellow-400 text-white rounded-md p-2"
            onClick={(e) => {
              e.stopPropagation();
              navigate(`/edit/${props.item.id}`);
            }}
          >
            <FaEdit />
          </button>
          <DeleteButton id={props.item.id} />
          <div className="flex-grow"></div>
          <AddCartButton item={props.item} />
        </div>
      </div>
    </div>
  );
};

export default ItemCard;
