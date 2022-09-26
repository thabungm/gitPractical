- client -> node.js -> c++ program libuv 


client (mobile/webapp/wearable devices/desktop devices)
-> API ->
node.js 
-- create user info while registration




client -> http protocol -> API -> node.js program -> mongodb(data)
client <- http protocol <- API <- node.js program <- mongodb(data)

http protocol is stateless protocol


authorization & authentication
- facebook.com/login -> { token: 'sflsdflsfkjs'} 
- json web JWT token


protected APIs
- facebook.com/api/profile -> { name: 'Mike' }
- error codes: 
    -- success: 200, 201, 202 
    -- failure by end user: 401, 403, 404, 400
    -- failure by the server:
         502 500 internal server error

REST api
- GET
-- To get the data from API

- POST
-- To create data in the server

- PUT/PATCH
-- to update a record/s

- DELETE
-- Delete record/s