import { sleep, check } from 'k6';
import http from 'k6/http';

export const options = {
  scenarios: {
    loadTesting: {
      executor: 'ramping-vus',
      startVUs: 0,
      stages: [
        { duration: '1m', target: 10 },
        { duration: '1m', target: 100 },
        { duration: '30s', target: 400 },
        { duration: '30s', target: 1000 },
        { duration: '1m', target: 400 },
        { duration: '1m', target: 100 },
      ],
      gracefulRampDown: '0s',
    },
  },
};

export default function main() {
  const num = Math.floor(Math.random() * 10000000).toString();
  const res = http.get(`http://localhost:8040/listings/${num}/homesData`);
  check(res, { 'status was 200': (r) => r.status === 200 });
  sleep(1);
}
