import Banda from "./banda";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { injectIntl, FormattedMessage } from 'react-intl';

const { useEffect, useState } = require("react");

function Bandas() {
 const [bandas, setBandas] = useState([]);
 useEffect(() => {
   const URL =
     "https://gist.githubusercontent.com/josejbocanegra/806a4dcd1af61b4cc498d24c52e84320/raw/8711b7af9091d2831ed043563cad2a61311b0a5f/music-bands.json";
   fetch(URL)
     .then((data) => data.json())
     .then((data) => {
       setBandas(data);
     });
 }, []);

 return (
   <div className="container">
     <h2 className="mt-2">Listado de bandas</h2>
     <hr></hr>
     <Row>
        <table>
     <thead className="thead-dark">
          <tr>
            <th scope="col">#   </th>
            <th scope="col"><FormattedMessage id="name"/>  </th>
            <th scope="col"><FormattedMessage id="country"/>    </th>
            <th scope="col"><FormattedMessage id="genre"/> </th>
            <th scope="col"><FormattedMessage id="foundation_year"/> </th>
          </tr>
        </thead>
        </table>
       {bandas.map((banda) => (
         <Col key={banda.id}>
           <Banda banda={banda} />
         </Col>
       ))}
            <text>la banda mas antigua es PLACEHOLDER y fue fundada hace n anos</text>
 
     </Row>
  </div>
 );
}

export default Bandas;