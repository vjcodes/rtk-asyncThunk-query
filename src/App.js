import { useDispatch, useSelector } from "react-redux";
import { getAllData } from "./features/gitUserSlice";

function App() {
  const dispatch = useDispatch();
  const data = useSelector((store) => store.app);
  // console.log(data);

  if (data?.loading) {
    return <h1>Loading.....</h1>;
  }

  if (data?.error) {
    return <h3>{data?.error}</h3>;
  }

  return (
    <div className="App">
      Hello
      <button
        onClick={() => {
          dispatch(getAllData());
        }}
      >
        Get Git Users
      </button>
      {data?.users?.map((user) => (
        <div key={user?.id}>
          <div>{user?.login}</div>
          <img src={user?.avatar_url} alt="avatar" />
        </div>
      ))}
    </div>
  );
}

export default App;
