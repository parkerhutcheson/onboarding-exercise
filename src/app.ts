import express from "express";
import "dotenv/config";
import { onboardingRouter } from "./routes/onboarding";

const PORT = process.env.PORT || "3000";
const app = express();
app.use(express.json());
app.use("/onboarding", onboardingRouter);

app.listen(PORT, () => {
  console.info(`Server initialized on port ${PORT}...`);
});

export default app;