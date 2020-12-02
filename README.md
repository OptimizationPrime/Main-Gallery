# Project Name

> SDC

## Related Projects

  - Create / POST
      1. Endpoint
        * /listings/:listing_id/create
      2. Path params
        * :listing_id
      3. Request body
        * {
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
        * {id: number} correlating to the new posting

  - Read / GET
      1. Endpoint
        * /listings/:listing_id
      2. Path params
        * :listing_id
      3. Request body
        * {id: number}
      4. Response object
        * {
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

  - Update / PUT
      Updating price
      1. Endpoint
        * /listings/:listing_id/update/price
      2. Path params
        * :listing_id
      3. Request body
        * {
            id: number,
            price: number,
          }
      4. Response object
        * {
            id: number,
            price: number,
          }

      Adding images
      1. Endpoint
        * /listings/:listing_id/update/images/add
      2. Path params
        * :listing_id
      3. Request body
        * {
            id: number,
            images: array,
          }
      4. Response object
        * 201 status code

      Removing images
      1. Endpoint
        * /listings/:listing_id/update/images/remove
      2. Path params
        * :listing_id
      3. Request body
        * {
            id: number,
            images: array,
          }
      4. Response object
        * 201 status code


  - Delete / DELETE
      1. Endpoint
        * /listings/:listing_id/delete
      2. Path params
        * :listing_id
      3. Request body
        * {
            id: number,
          }
      4. Response object
        * 201 status code

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

