# Project Name
> Optimization Prime - Backend Architecture


## Overview ##
This project was an improvement to build out the backend to handle significantly increased traffic on existing frontend code for a real estate marketplace app. The database selected was ArangoDB, with 10 Million home listings and 10K users.

Final results were 2500 requests per second with a 67 ms average response time, and under a 1% error rate by horizontally scaling 3 Express servers on AWS.

## Process ##
- The ArangoDB database was deployed on an EC2 instance.
- Local tests (using K6 and New Relic) on the server for the existing codebase was only able to reach 4422 ms average response time with a 22% error rate, at 750 requests per second.
  - New Relic metrics identified the bottleneck as being the Express server.
- Two Express servers were deployed with AWS and horizontally scaled with the use of Nginx as a reverse proxy as the initial point of contact for all requests.
  - Testing on these deployed instances with Loader.io showed a 345 ms average response time with a 11.8% error rate at 1000 rps.
- Another Express server was deployed and added to the Nginx configuration. There were significant improvement with a third server with a 67 ms average response time with a 0% error rate at 2500 rps.
- A fourth server was deployed on AWS, but the tests showed diminishing returns with similar results as with 3 servers.

## CRUD Operations
  ### For site visitors / home buyers
  ##### Read / GET : Upon page-load
  1. Endpoint
    - /listings/:listing_id
  2. Path params
    - listing_id
  3. Request body
    - none
  4. Response object
    - {
        id: number,
        date: string,
        sale: boolean,
        pending: boolean,
        construction: boolean,
        address: string,
        price: number,
        beds: number,
        baths: number,
        images: array,
      }
      201 status

  ### For home sellers
  ##### Create / POST: Post a home to Trulia
  1. Endpoint
    - /user/:user_id/create
  2. Path params
    - user_id
  3. Request body
    - {
        date: string,
        sale: boolean,
        pending: boolean,
        construction: boolean,
        address: string,
        price: number,
        beds: number,
        baths: number,
        images: array,
      }
  4. Response object
    - {id: number}

__Built with__
- Express
- Node.js
- ArangoDB
- Nginx
- AWS (EC2)

__Other technologies used__
- K2
- New Relic
- Loader.io



