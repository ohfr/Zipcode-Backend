# Zipcode-backend
Back end for zip code app

### Server
https://saturday-delivery.herokuapp.com


 ## Summary of Endpoints 

```
    Method                Endpoint                      Summary
---------------------------------------------------------------------------------------------------
|                  |   /api               |   returns an array of all objects in database         |
|                  |----------------------|-------------------------------------------------------|
|       GET        |   /api/zips/:zip     |   returns an object that has a matching zipcode       |
|                  |----------------------|-------------------------------------------------------|
|                  |   /api/city/:city    |   returns an array of objects that include city       |
|------------------|----------------------|-------------------------------------------------------|
|       POST       |  /api                |   returns an array with new object added              |
|------------------|----------------------|-------------------------------------------------------|
|       DELETE     |  /api/:id            |   returns an array with object deleted                |
---------------------------------------------------------------------------------------------------
