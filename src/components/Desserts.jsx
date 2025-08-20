import Cart from "./Cart";

function Desserts({ desserts }) {
    console.log(desserts);
  return (
    <div className="desserts">
      <h1 className="title">Desserts</h1>
      {desserts.map((dessert) => {
        return <Cart key={dessert.id} dessert={dessert} />;
      })}
    </div>
  );
}

export default Desserts;
