import express from "express";
import "dotenv/config";
import { onboardingRouter } from "./routes/onboarding";

const app = express();
app.use(express.json());
app.use("/onboarding", onboardingRouter);

app.listen(process.env.PORT, () => {
  console.info(`Server initialized on port ${process.env.PORT}...`);
});

export default app;