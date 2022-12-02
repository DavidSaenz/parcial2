import { useParams } from "react-router-dom";
import Card from "react-bootstrap/Card";

const { useEffect, useState } = require("react");
export default function Detail() {
  const params = useParams();
  const id = Number(params.bandaId)
  const [band, setbandaEncontrada] = useState([]);
  useEffect(() => {
    const URL =
      "https://gist.githubusercontent.com/josejbocanegra/806a4dcd1af61b4cc498d24c52e84320/raw/8711b7af9091d2831ed043563cad2a61311b0a5f/music-bands.json";
    fetch(URL)
      .then((data) => data.json())
      .then((data) => {
        const band = data.find(element => element.id === id);
        setbandaEncontrada(band);
      });
  }, [id]);

  return (
    <Card style={{ width: "18rem", height: "24rem" }} className="mb-3">
    <Card.Body>
       <Card.Title>
           {band.name}
       </Card.Title>
     </Card.Body>
     <Card.Img
       style={{ height: "14rem" }}
       variant="top"
       src={band.image}
       alt={band.name}
     />
     <Card.Body>
       <Card.Text>{band.description}</Card.Text>
     </Card.Body>
   </Card>
  );
}