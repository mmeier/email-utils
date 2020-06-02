# Email Utils

This utility is implemented as an AWS Lambda, using API Gateway as a public facing API.

## Running the code

* Install dependencies: `npm install`
* Start the dev server: `npm start`

This will launch a local webserver on port 3000.

Request can then be sent as POST requests to `localhost:3000/dev/check-emails`.

The body of the request is expected to be a JSON array of strings.

Sample Request:

```
curl --location --request POST 'localhost:3000/dev/check-emails' \
   --header 'Content-Type: application/json' \
   --data-raw '["one@example.com", "", "", "TWO+two@EXAMPLE.com", "Three@gmail.com"]'
```
