# Project Name

> SDC

## CRUD Operations

  ### For site visitors / home buyers

  ##### Read / GET : Upon page-load
  1. Endpoint
    - /listings/:listing_id
  2. Path params
    - listing_id
  3. Request body
    - {id: number}
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
  ##### Update / PUT: Adds the contact info of interested buyers to the listing
  1. Endpoint
    - /listings/:listing_id/update/contacts
  2. Path params
    - listing_id
  3. Request body
    - {
        name: string,
        email: string,
        phone: string,
      }
  4. Response object
    - 201 Status


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
    - {id: number} correlating to the new posting

  ##### Read / GET: Get current offers on user's home
  1. Endpoint
    - /user/:user_id/:listing_id
  2. Path params
    - user_id, listing_id
  3. Request body
    - {id: number}
  4. Response object
    - [{
        name: string,
        email: string,
        phone: string,
      },
      {
        name: string,
        email: string,
        phone: string,
      }]

  ##### Update / PUT: Update price on home
  1. Endpoint
    - /user/:user_id/:listing_id/update/price
  2. Path params
    - user_id, listing_id
  3. Request body
    - {
        id: number,
        price: number,
      }
  4. Response object
    - {
        id: number,
        price: number,
      }

  ##### Update / PUT: Adding images
  1. Endpoint
    - /user/:user_id/:listing_id/update/images/add
  2. Path params
    - user_id, listing_id
  3. Request body
    - {
        id: number,
        images: array,
      }
  4. Response object
    - 201 status code

  ##### Update / PUT: Removing images
  1. Endpoint
    - /user/:user_id/:listing_id/update/images/remove
  2. Path params
    - user_id, listing_id
  3. Request body
    - {
        id: number,
        images: array,
      }
  4. Response object
    - 201 status code


  ##### Delete / DELETE: Remove entire listing
  1. Endpoint
    - /user/:user_id/:listing_id/delete
  2. Path params
    - user_id, listing_id
  3. Request body
    - {
        id: number,
      }
  4. Response object
    - 201 status code



## Related Projects

  - https://github.com/OptimizationPrime/Affordability-Calc
  - https://github.com/OptimizationPrime/Image-Carousel
  - https://github.com/OptimizationPrime/reviews

## Table of Contents

1. [Usage](#Usage)
1. [Requirements](#requirements)
1. [Development](#development)

## Usage

> Some usage instructions

## Requirements

An `nvmrc` file is included if using [nvm](https://github.com/creationix/nvm).

- Node 6.13.0
- etc

## Development

### Installing Dependencies

From within the root directory:

```sh
npm install -g webpack
npm install
```

