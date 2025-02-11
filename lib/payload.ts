import payloadConfig from "@/payload.config";
import { getPayload } from "payload";

export const payload = await getPayload({ config: payloadConfig });
