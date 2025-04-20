import { useEffect } from "react";
import "./App.css";

const tg = window.Telegram.WebApp;

const products = [
  {
    id: 1,
    name: "Dior Forever Skin Contour Stick — Цвет 1 Light",
    price: 4728.02,
    image: "https://www.sephora.com/productimages/sku/s2834646-main-zoom.jpg?imwidth=230"
  },
  {
    id: 2,
    name: "YSL Make Me Blush 24H Buildable Powder Blush — Цвет 44",
    price: 9000,
    image: "https://www.sephora.com/productimages/sku/s2834646-main-zoom.jpg?imwidth=230"
  },
  {
    id: 3,
    name: "YSL Make Me Blush 24H Buildable Powder Blush — Цвет 87",
    price: 9000,
    image: "https://www.sephora.com/productimages/sku/s2834646-main-zoom.jpg?imwidth=230"
  },
  {
    id: 4,
    name: "YSL Make Me Blush 24H Buildable Powder Blush — Цвет 93",
    price: 9000,
    image: "https://www.sephora.com/productimages/sku/s2834646-main-zoom.jpg?imwidth=230"
  },
  {
    id: 5,
    name: "Gisou Trio Set",
    price: 9750,
    image: "https://www.sephora.com/productimages/sku/s2834646-main-zoom.jpg?imwidth=230"
  },
  {
    id: 6,
    name: "Charlotte Tilbury Hollywood Contour Wand — Цвет Fair",
    price: 1500,
    image: "https://www.sephora.com/productimages/sku/s2834646-main-zoom.jpg?imwidth=230"
  },
  {
    id: 7,
    name: "Charlotte Tilbury Airbrush Flawless Finish Setting Powder — Цвет 1 Fair",
    price: 2000,
    image: "https://www.sephora.com/productimages/sku/s2834646-main-zoom.jpg?imwidth=230"
  },
  {
    id: 8,
    name: "Charlotte Tilbury Airbrush Flawless Finish Setting Powder — 100 ml",
    price: 3500,
    image: "https://www.sephora.com/productimages/sku/s2834646-main-zoom.jpg?imwidth=230"
  },
  {
    id: 9,
    name: "Sephora Favorites Clean Me Up Makeup and Skincare Value Set",
    price: 5000,
    image: "https://www.sephora.com/productimages/sku/s2834646-main-zoom.jpg?imwidth=230"
  },
  {
    id: 10,
    name: "Dior Forever Skin Stick — Цвет 1N Neutral",
    price: 6189.24,
    image: "https://www.sephora.com/productimages/sku/s2834646-main-zoom.jpg?imwidth=230"
  },
  {
    id: 11,
    name: "Sol de Janeiro Perfume Mist — Set Mist",
    price: 3815.73,
    image: "https://www.sephora.com/productimages/sku/s2834646-main-zoom.jpg?imwidth=230"
  },
  {
    id: 12,
    name: "Sol de Janeiro Bum Bum — Jet Set",
    price: 3591.27,
    image: "https://www.sephora.com/productimages/sku/s2834646-main-zoom.jpg?imwidth=230"
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
