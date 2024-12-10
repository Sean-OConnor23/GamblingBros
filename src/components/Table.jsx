import Table from 'react-bootstrap/Table';

function StripedRowExample(props) {
  return (
    <Table striped>
      <thead>
        <tr>
          <th>Home</th>
          <th>Away</th>
          <th>Bookmaker</th>
          <th>Odds</th>
        </tr>
      </thead>
      <tbody>
        {props.response.map((result, index) => {
          return(parseResponse(result));
        })}
      </tbody>
    </Table>
  );
}

function parseResponse(response){
  return(
  <tr key={response.id}>
    <td>{response.home_team}</td>
    <td>{response.away_team}</td>
    {response.bookmakers.map((result, index) => {
      return(parseOdds(result));
    })}
  </tr>);
}

function parseOdds(bookmaker){
  return(<tr>
    <td>{bookmaker.title}</td>
    </tr>);
}

export default StripedRowExample;