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

  ##### Create / POST: Add images
  1. Endpoint
    - /user/:user_id/:listing_id/images/add
  2. Path params
    - user_id, listing_id
  3. Request body
    - {
        images: array,
      }
  4. Response object
    - 201 status code

  ##### Read / GET: View one image *optional*
  1. Endpoint
    - /user/:user_id/:listing_id/images/:image_id
  2. Path params
    - user_id, listing_id, image_id
  3. Request body
    - none
  4. Response object
    - {
        image: url
      }
      201 Status code

  ##### Update / PUT: Update listing
  1. Endpoint
    - /user/:user_id/:listing_id/images/:image_id/update
  2. Path params
    - user_id, listing_id, image_id
  3. Request body
    - {
        id: number
        price: number, / image: string
      }
  4. Response object
    - 201 Status code

  ##### Delete / Delete: Removing listing
  1. Endpoint
    - /user/:user_id/:listing_id/images/:image_id/update
  2. Path params
    - user_id, listing_id, image_id
  3. Request body
    - none
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

