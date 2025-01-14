import http from "k6/http";
import { sleep } from "k6";

export const options = {
  scenarios: {
    // Scenario 1: Constant VUs
    constant_load: {
      executor: "constant-vus",
      vus: 20,
      duration: "1m",
    },
    // Scenario 2: Ramping VUs
    ramping_load: {
      executor: "ramping-vus",
      startVUs: 0,
      stages: [
        { duration: "30s", target: 50 },
        { duration: "1m", target: 50 },
        { duration: "30s", target: 0 },
      ],
      startTime: "1m",
    },
    // Scenario 3: Shared Iterations
    shared_iterations: {
      executor: "shared-iterations",
      vus: 10,
      iterations: 100,
      startTime: "2m",
      maxDuration: "1m",
    },
  },
};

export default function() {
  const res = http.get("https://test-api.k6.io");
  console.log(`Response time: ${res.timings.duration} ms`);
  sleep(1);
}
