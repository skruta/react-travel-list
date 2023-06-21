export default function Footer({ items }) {
  if (!items.length) {
    return <p className="stats">Start adding some items to your list! ⚠️</p>;
  }

  const numItems = items.length;
  const packedItems = items.filter((item) => item.packed).length;
  const percentageOfPackedItems = Math.round((packedItems / numItems) * 100);

  return (
    <footer className="stats">
      <p>
        {percentageOfPackedItems === 100
          ? 'You got everthing! You can GO! ⭐️'
          : `You have ${numItems} items on your list, and you already packed${' '}
        ${packedItems} (${percentageOfPackedItems}%)`}
      </p>
    </footer>
  );
}
