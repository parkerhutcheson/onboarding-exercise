const ENDPOINT = process.env.INGESTION_ENDPOINT ?? "https://dummy-s3-location.com/ingest";

export const forwardToIngestion = async (payload: object): Promise<void> => {
  console.info("Forwarding data to: ", ENDPOINT);

  const response = await fetch(ENDPOINT, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  console.log("Ingestion Service response status: ", response.status);
};