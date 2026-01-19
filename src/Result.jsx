import React from "react";
import { useSearchParams } from "react-router-dom";

const Result = () => {
  const [searchParams] = useSearchParams();

  const persons = searchParams.get("person")?.split(",") || [];
  const image = searchParams.get("image") || "";

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "linear-gradient(135deg, #f6d365 0%, #fda085 100%)",
      }}
    >
      <div
        style={{
          padding: "2rem",
          borderRadius: "15px",
          backgroundColor: "rgba(255, 255, 255, 0.95)",
          boxShadow: "0 10px 20px rgba(0,0,0,0.2)",
          textAlign: "center",
          maxWidth: "600px",
          width: "90%",
        }}
      >
        <h2 style={{ color: "#333" }}>QR Scan Result</h2>
        <p style={{ fontSize: "1.2rem", fontWeight: "bold", color: "#555" }}>
          Matched Person(s):{" "}
          <span style={{ color: "#e91e63" }}>
            {persons.length ? persons.join(", ") : "No match found"}
          </span>
        </p>
        {image && (
          <div style={{ marginTop: "1rem" }}>
            <img
              src={`https://photo-matching-task-puwan-gp.s3.eu-north-1.amazonaws.com/test_images/${image}`}
              alt={image}
              style={{
                maxWidth: "100%",
                borderRadius: "10px",
                boxShadow: "0 5px 15px rgba(0,0,0,0.1)",
              }}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Result;
