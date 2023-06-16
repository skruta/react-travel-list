import { useState } from 'react';

const initialItems = [
  { id: 1, description: 'socks', quantity: 5, packed: false },
  { id: 2, description: 't-shirts', quantity: 2, packed: false },
  { id: 3, description: 'passport', quantity: 1, packed: true },
];

function App() {
  return (
    <div className="app">
      <Logo />
      <Form />
      <List />
      <Footer />
    </div>
  );
}

function Logo() {
  return <h1>☀️ Packing list ☀️</h1>;
}

function Form() {
  const [description, setDescription] = useState('');
  const [quantity, setQuantity] = useState(1);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!description) return;

    const newItem = {
      id: Date.now,
      description,
      quantity,
      packed: false,
    };

    setDescription('');
    setQuantity(1);
  };
  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <p>What do you need for your trip? 🌴</p>
      <select onChange={(e) => setQuantity(Number(e.target.value))}>
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num, i) => (
          <option key={i} value={num}>
            {num}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="Item..."
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button>Add</button>
    </form>
  );
}

function List() {
  return (
    <div className="list">
      <ul>
        {initialItems.map((item) => (
          <li key={item.id}>
            <span style={item.packed ? { textDecoration: 'line-through' } : {}}>
              {item.quantity} {item.description}
            </span>
            <button>❌</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

function Footer() {
  return (
    <footer className="stats">
      <p>You have X items on your list, and you already packed X (X%)</p>
    </footer>
  );
}

export default App;
