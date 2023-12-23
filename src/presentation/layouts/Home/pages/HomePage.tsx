import useProducts from "../../../../hooks/useProducts";
import Banner from "../../../components/Banner";
import ItemCard from "../../../components/ItemCard";

const HomePage = () => {
  const { products, error, isLoading } = useProducts();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: error</div>;
  }

  return (
    <>
      <Banner />
      <main className="max-w-screen-lg mx-auto p-4">
        <h1 className="font-semibold text-2xl">Products</h1>
        <div className="flex flex-wrap justify-center gap-2 mt-4">
          {products?.map((item, index) => (
            <ItemCard key={index} item={item} />
          ))}
        </div>
      </main>
    </>
  );
};

export default HomePage;
