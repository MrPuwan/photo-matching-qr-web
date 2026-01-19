import { useSearchParams } from "react-router-dom";

export default function Result() {
  const [params] = useSearchParams();

  const person = params.get("person");
  const image = params.get("image");

  return (
    <div style={{ padding: "20px" }}>
      <h1>QR Scan Result</h1>

      {person ? (
        <>
          <p><b>Matched Person(s):</b> {person}</p>
          <p><b>Image:</b> {image}</p>
        </>
      ) : (
        <p>No match found</p>
      )}
    </div>
  );
}
