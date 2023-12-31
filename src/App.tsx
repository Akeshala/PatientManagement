import "./App.css";

function App() {

  const images = [
    'https://patientmanagement89.s3.us-east-2.amazonaws.com/image1.jpeg',
    'https://patientmanagement89.s3.us-east-2.amazonaws.com/image2.jpeg',
    'https://patientmanagement89.s3.us-east-2.amazonaws.com/image3.jpeg',
    'https://patientmanagement89.s3.us-east-2.amazonaws.com/image4.webp',
  ];


  return (
    <div className="App">
      <h1>{"Wildlife Photography Album"}</h1>
      <div>
        {images.map((image, index) => (
            <img
                key={index}
                src={image}
                alt={`Image ${index}`}
                style={{ width: 'auto', height: '150px', margin: '10px' }}
            />
        ))}
      </div>
    </div>
  );
}

export default App;
