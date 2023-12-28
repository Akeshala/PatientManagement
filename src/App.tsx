import { useEffect, useState } from "react";
import {
  ListObjectsCommand,
  ListObjectsCommandOutput,
  S3Client,
} from "@aws-sdk/client-s3";
import { fromCognitoIdentityPool } from "@aws-sdk/credential-providers";
import "./App.css";

function App() {
  const [objects, setObjects] = useState<
    Required<ListObjectsCommandOutput>["Contents"]
  >([]);

  useEffect(() => {
    const client = new S3Client({
      region: "ap-south-1",
      credentials: fromCognitoIdentityPool({
        clientConfig: { region: "ap-south-1" },
        identityPoolId: "ap-south-1:45014573-1687-44d7-9881-f22fe555c01b",
      }),
    });
    const command = new ListObjectsCommand({ Bucket: "patientmanagement48" });
    client.send(command).then(({ Contents }) => setObjects(Contents || []));
  }, []);

  return (
    <div className="App">
      <h1>{"Patient Images"}</h1>
      <div>
        {objects.map((o, index) => (
            <img
                key={index}
                src={`https://d38szn9sft31h5.cloudfront.net/${o.Key}`}
                alt={`Image ${index}`}
                style={{ width: '200px', height: 'auto', margin: '5px' }}
            />
        ))}
      </div>
    </div>
  );
}

export default App;