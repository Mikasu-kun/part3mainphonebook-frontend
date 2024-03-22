const Person = ({ id, name, number, handleDelete }) => {
  return (
    <li>
      {name} {number} 
      <button onClick={() => handleDelete(id)}> X</button>
    </li>
  );
};

export default Person;
