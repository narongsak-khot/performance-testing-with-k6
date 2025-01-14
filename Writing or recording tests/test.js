import http from "k6/http";
import { sleep } from "k6";

export default function() {
  // GET request to homepage
  http.get("https://test.k6.io");

  // Simulate user wait time
  sleep(1);

  // POST request to login
  const payload = JSON.stringify({
    username: "user",
    password: "pass",
  });

  const params = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  http.post("https://test.k6.io/login", payload, params);

  // Simulate another wait time
  sleep(1);

  // GET request to dashboard
  http.get("https://test.k6.io/dashboard");
}
