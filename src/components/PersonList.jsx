import Person from "./Person";

const PersonList = ({ persons, showAll, search, handleDelete }) => {
  return (
    <ul>
      {showAll
        ? persons.map((person) => <Person key={person.id} {...person} handleDelete={handleDelete} />)
        : persons
            .filter((p) => p.name.toLowerCase().includes(search))
            .map((person) => <Person key={person.id} {...person} handleDelete={handleDelete} />)}
    </ul>
  );
};

export default PersonList;
