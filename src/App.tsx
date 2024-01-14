import "./App.css";

function App() {

  const images: string[] = ['image1.jpeg', 'image2.jpeg', 'image3.jpeg', 'image4.webp'];
  return (
    <div className="App">
      <h1>{"Wildlife Photography Album"}</h1>
        <div>
        <p>
            {"Wildlife photography is an awe-inspiring art form that captures the beauty, behavior, and essence\ " +
                "of animals in their natural habitats. It involves immense patience, skill, and a deep\ " +
                "understanding of wildlife behavior. Photographers often venture into remote and diverse\ " +
                "ecosystems, equipped with high-quality cameras and lenses, waiting for the perfect moment\ " +
                "to freeze-frame nature's wonders. The goal is to document the intricacies of animal life—whether\ " +
                "it's a majestic lion on the African savanna, a vibrant bird in the rainforest canopy, or a\ " +
                "fleeting glimpse of marine life beneath the ocean's surface. Wildlife photographers strive to\ " +
                "convey emotion, grace, and the untamed spirit of the natural world through their lens, allowing\ " +
                "viewers to appreciate and connect with the diverse and magnificent creatures that inhabit our\ " +
                "planet."}
        </p>
        </div>
      <div>
        {images.map((image: string, index : number) => (
            <img
                key={index}
                src={`/${image}`}
                alt={`Image ${index}`}
                style={{ width: 'auto', height: '150px', margin: '10px' }}
            />
        ))}
      </div>
    </div>
  );
}

export default App;
