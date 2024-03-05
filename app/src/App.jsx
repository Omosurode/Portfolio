import { Suspense } from "react";
import "./index"

const loading = () => <div className="">loading....</div>;

function App() {
  return (
    <Suspense fallback={loading}>
      <div className="App px-52">
        <h1 className="font-bold underline">Main app renderer</h1>
      </div>
    </Suspense>
  );
}

export default App;
