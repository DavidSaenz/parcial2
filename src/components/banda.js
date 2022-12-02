import { Link } from "react-router-dom";
import Table from 'react-bootstrap/Table';


function Banda(props) {
 return (
    <Table striped bordered hover size="sm" variant="dark">
      <table>
      <tbody>
        <tr>
          <td>{props.banda.id}</td>
          <td><Link to={"/bandas/" + props.banda.id}>
           {props.banda.name}
         </Link></td>
          <td>{props.banda.country}</td>
          <td>{props.banda.genre}</td>
          <td>{props.banda.foundation_year}</td>
        </tr>
      </tbody>
      </table>
    </Table>
	

 );
}

export default Banda;