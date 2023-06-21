import { useState } from 'react';
import Logo from './Logo';
import Form from './Form';
import PackingList from './PackingList';
import Footer from './Footer';

function App() {
  const [items, setItems] = useState([]);

  const addItem = (newItem) => {
    setItems((items) => [...items, newItem]);
  };

  const deleteItem = (id) => {
    setItems((items) => items.filter((item) => item.id !== id));
  };

  const toggleItem = (id) => {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  };

  const clearItems = () => {
    if (!items) return;

    const confirmed = window.confirm(
      'Are you sure, you want to delete all items?'
    );
    if (confirmed) setItems([]);
  };

  return (
    <div className="app">
      <Logo />
      <Form onAddItems={addItem} />
      <PackingList
        items={items}
        onDeleteItem={deleteItem}
        onUpdateItem={toggleItem}
        onClearItems={clearItems}
      />
      <Footer items={items} />
    </div>
  );
}
export default App;
