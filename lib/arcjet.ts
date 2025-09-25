import arcjet, {
  detectBot,
  fixedWindow,
  shield,
  request,
  validateEmail,
  slidingWindow,
  ArcjetDecision,
  createMiddleware,
} from "@arcjet/next";
import { getEnv } from "./utils";
export {
  detectBot,
  fixedWindow,
  shield,
  request,
  slidingWindow,
  validateEmail,
  createMiddleware,
  ArcjetDecision,
};

const aj = process.env.ARCJET_API_KEY
  ? arcjet({
      key: process.env.ARCJET_API_KEY,
      rules: [],
    })
  : null;

export default aj;