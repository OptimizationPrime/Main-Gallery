import { sleep, check } from 'k6';
import http from 'k6/http';

export const options = {
  scenarios: {
    loadTesting: {
      executor: 'ramping-vus',
      startVUs: 0,
      stages: [
        { duration: '1m', target: 10 },
        { duration: '2m', target: 20 },
        { duration: '1m', target: 100 },
        { duration: '30s', target: 400 },
        { duration: '30s', target: 1000 },
        { duration: '30s', target: 700 },
        { duration: '1m', target: 400 },
        { duration: '1m', target: 200 },
      ],
      gracefulRampDown: '0s',
    },
  },
};

export default function main() {
  let res = http.get('http://localhost:8040/listings/43/api');
  check(res, { 'status was 200': (r) => r.status === 200 });

  // let response;

  // response = http.get('http://test.k6.io');

  // Automatically added sleep
  sleep(1);
}
