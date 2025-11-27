// Example: analyze sequence button handler
const analyzeSequence = async () => {
  const body = {
    model: selectedModel,        // e.g. "protbert", "prott5", "esm2", "ankh3"
    sequence: proteinSequence,   // e.g. "MKTI...DDD"
  };

  const res = await fetch("/api/models/fill-missing", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });

  const data = await res.json();
  console.log(data);
};
