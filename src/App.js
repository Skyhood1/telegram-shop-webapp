import { useEffect } from "react";
import "./App.css";

const tg = window.Telegram.WebApp;

const products = [
  {
    id: 1,
    name: "Крем для лица",
    price: 1200,
    image: "https://via.placeholder.com/150"
  },
  {
    id: 2,
    name: "Шампунь",
    price: 950,
    image: "https://via.placeholder.com/150"
  },
  {
    id: 3,
    name: "Маска для волос",
    price: 1100,
    image: "https://via.placeholder.com/150"
  }
];

function App() {
  useEffect(() => {
    tg.ready();
    tg.expand();
  }, []);

  const handleBuy = (product) => {
    tg.sendData(JSON.stringify(product));
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <h1 className="text-xl font-bold mb-4">Магазин косметики</h1>
      <div className="grid grid-cols-1 gap-4">
        {products.map((item) => (
          <div
            key={item.id}
            className="bg-white p-4 rounded-xl shadow-md flex items-center justify-between"
          >
            <div className="flex items-center gap-4">
              <img
                src={item.image}
                alt={item.name}
                className="w-16 h-16 object-cover rounded-lg"
              />
              <div>
                <h2 className="font-semibold">{item.name}</h2>
                <p className="text-sm text-gray-500">{item.price} ₽</p>
              </div>
            </div>
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
              onClick={() => handleBuy(item)}
            >
              Купить
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
