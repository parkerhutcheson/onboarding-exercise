import { Router, Request, Response } from "express";
import { forwardToIngestion } from "../services/ingestionService";

export const onboardingRouter = Router();

onboardingRouter.post("/", async (req: Request, res: Response) => {
  const { firstName, lastName, email } = req.body;

  if (!firstName || !lastName || !email) {
    res.status(400).json({ error: "firstName, lastName, and email are required." });
    return;
  }

  console.info("Onboarding request received: ", { firstName, lastName, email });

  try {
    await forwardToIngestion({ firstName, lastName, email });
    return res.status(200).json({ message: "Customer data forwarded successfully!!" });
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : "An unknown error occurred.";
    console.error("Failed to forward to ingestion:", message);
    return res.status(502).json({ error: "Failed to reach ingestion service." });
  }
});