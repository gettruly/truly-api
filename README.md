#Web Service API

Action                      HTTP method  Relative URI



##Donors

Description                     | Method | Endpoint | params | res.body
------------------------------- | ------ | ---------|-----|---
Get a list of all donors | GET    | `/api/donors`    |
Get a donor by ID        | GET    | `/api/donors/:id` | | email, name, phone 
Create a new donor       | POST   | `/api/donors`    | email, name, phone | id
Update a donor           | PUT    | `/api/donor/:id`  |
Delete a donor           | DELETE | `/api/donors/:id` |


##Shoes

Description                     | Method | Endpoint | params | res.body
------------------------------- | ------ | ---------|--------
Get a list of all shoes         | GET    | `/api/shoes`
Get a shoe by ID             | GET    | `/api/shoes/id` || organizationid, donorsid, img, size, type, gender 
Create a new shoe               | POST   | `/api/shoes` | organizationid, donorsid, img, size, type, gender | id
Update a shoe                   | PUT    | `/api/shoe/id`
Delete a shoe                   | DELETE | `/api/shoes/id`

##Organizations

Description                     | Method | Endpoint
------------------------------- | ------ | -----------------
Get a list of all organizations | GET    | `/api/shoes`
Get a organization by ID        | GET    | `/api/organizations/id`
Create a new organization       | POST   | `/api/organizations`
Update a organization           | PUT    | `/api/organization/id`
Delete a organization           | DELETE | `/api/organizations/id`


##CURL EXAMPLES
⁄/ CREATE DONOR
curl -X POST http://localhost:5000/api/donors -d '{"name":"JP", "email":"maria@gmail.com", "phone": "987654321"}' -H "content-type: application/json"

⁄/ CREATE SHOES
 curl -X POST http://localhost:5000/api/shoes -d '{"type":"sapatilha","gender":"m","size":45, "img":"HHHHHHH1X", "donorsid":"4"}' -H "content-type: application/json"
