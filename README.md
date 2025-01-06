- Sign up
  POST /api/v1/signup
  ```json
  {
    "username": "harkirat",
    "password": "123123"
  }
  ```
  Constraints -
  1. username should be 3-10 letters
  2. Password should be 8 to 20 letters, should have atleast one uppercase, one lowercase, one special character, one number
  **Response**
  1. Status 200 - Signed up
  2. Status 411 - Error in inputs
  3. Status 403 - User already exists with this username
  4. Status 500 - Server error
- Sign in
  POST /api/v1/signin
  ```json
  {
    "username": "harkirat",
    "password": "123123"
  }
  ```
  **Returns**
  - 200
  ```json
  {
    "token": "jwt_token"
  }
  ```
  - 403 - Wrong email password
  - 500 - Internal server error
- Add new content
  /api/v1/content
  ```json
  {
  	"type": "document" | "tweet" | "youtube" | "link",
  	"link": "url",
  	"title": "Title of doc/video",
  	"tags": ["productivity", "politics", ...]
  }
  ```
- Fetching all existing documents (no pagination)
  GET /api/v1/content
  **Returns**
  ```json
  {
  	"content": [
  		{
  			"id": 1,
  			"type": "document" | "tweet" | "youtube" | "link",
  			"link": "url",
  			"title": "Title of doc/video",
  			"tags": ["productivity", "politics", ...]
  		}

  	]
  }
  ```
- Delete a document
  DELETE /api/v1/content
  ```json
  {
    "contentId": "1"
  }
  ```
  **Returns**
  1. 200 - Delete succeeded
  2. 403 - Trying to delete a doc you don’t own
