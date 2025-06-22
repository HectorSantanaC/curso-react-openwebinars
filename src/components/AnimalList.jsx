function AnimalList() {
  const animals = [
    {
      id: 1,
      name: "dog",
      img: "https://cdn.wamiz.fr/article/images/wysiwyg/2016/07/Las_10_razas_de_perros-04-1.jpg",
    },
    {
      id: 2,
      name: "cat",
      img: "https://static.vecteezy.com/system/resources/thumbnails/053/874/736/small/funny-white-cat-in-a-gray-bow-tie-and-glasses-on-gray-background-photo.jpg",
    },
    {
      id: 3,
      name: "bird",
      img: "https://cdn.pixabay.com/photo/2022/06/08/17/45/bird-7250976_640.jpg",
    },
  ];

  const HTMLAnimals = animals.map((animal) => {
    return (
      <li key={animal.id}>
        <h3>{animal.name}</h3>
        <img src={animal.img} alt="animal picture" width={200} />
      </li>
    );
  });

  return (
    <section>
      <h2>Animals:</h2>
      <ul>{HTMLAnimals}</ul>
    </section>
  );
}

export default AnimalList;
