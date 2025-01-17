import http from "k6/http";
import { check, sleep } from "k6";

export default function() {
  console.log("Hello K6");
  sleep(1);
}
