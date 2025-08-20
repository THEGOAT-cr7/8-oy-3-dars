import Desserts from "./components/Desserts";
import YourCart from "./components/YourCart";
import { useFetch } from "./hooks/useFetch";

function App() {
  const { data, error, loading } = useFetch(
    "https://json-api.uz/api/project/dessertss/desserts"
  );
  // console.log(data);
  return (
    <div className="container">
      {loading && (
        <div style={{ width: "70%" }}>
          <h1 className="title">Loading ...</h1>
        </div>
      )}
      {data && <Desserts desserts={data.data} />}
      <YourCart />
    </div>
  );
}

export default App;
