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
