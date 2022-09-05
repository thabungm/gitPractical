import Item from './Item';

const ListOfItems = () => {
  const data = [
    {
      id: 1,
      name: 'Leanne Graham',
      username: 'Bret',
    },
    {
      id: 2,
      name: 'Ervin Howell',
      username: 'Antonette',
    },
  ];
  const items = data.map((item) => (
    <Item name={item.name} username={item.username} />
  ));
  return (
    <>
      <h3>List of items</h3>
      {items}
    </>
  );
};

export default ListOfItems;
