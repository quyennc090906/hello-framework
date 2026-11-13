
import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="container">
      <h1>HELLO FRAMEWORK</h1>

      <p>Chào mừng bạn đến với website React!</p>

      <div className="card">
        <h2>BỘ ĐẾM SỐ LẦN NHẤN</h2>

        <h1>{count}</h1>

        <button onClick={() => setCount(count + 1)}>
          Tăng số
        </button>

        <button onClick={() => setCount(0)}>
          Đặt lại
        </button>
      </div>

      <p>Website được xây dựng bằng React + Vite</p>
    </div>
  );
}

export default App;
