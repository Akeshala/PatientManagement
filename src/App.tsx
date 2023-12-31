import "./App.css";

function App() {

  const images = ['image1.jpeg', 'image2.jpeg', 'image3.jpeg', 'image4.webp'];
  return (
    <div className="App">
      <h1>{"Wildlife Photography"}</h1>
      <div>
        {images.map((image, index) => (
            <img
                key={index}
                src={`https://d1da5ij22hqcih.cloudfront.net/${image}`}
                alt={`Image ${index}`}
                style={{ width: 'auto', height: '150px', margin: '10px' }}
            />
        ))}
      </div>
    </div>
  );
}

export default App;
