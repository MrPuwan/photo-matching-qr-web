import { useSearchParams } from "react-router-dom";

function Result() {
  const [params] = useSearchParams();
  const persons = params.get("persons");

  return (
    <div style={{ padding: "20px" }}>
      <h2>Matched Person(s)</h2>
      {persons ? (
        <p>{persons}</p>
      ) : (
        <p>No matches found</p>
      )}
    </div>
  );
}

export default Result;
