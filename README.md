Milestone-33
### Milestone 33: JWT Authentication Setup 🔑
✅ Install jsonwebtoken Package
- Installed jsonwebtoken package via NPM: npm install jsonwebtoken.
- Added it to the project to handle JWT generation.

✅ Generate and Set Expiry for JWT
- Used sign() method from jsonwebtoken to create a token with email and ID.
- Set maxAge to define the token's expiration time.

✅ Store Token in Response Cookie
- Added the generated JWT to the response cookie.
- Configured the cookie to be stored in the browser for subsequent requests.

### Milestone 32: Using Dispatch and useSelector for Storing Mail in Global State 📧
✅ Dispatch Method for Storing Mail in Global State
- Implemented Dispatch method on the Login page to store the user email in the global state.
- Ensured that the email is properly stored using Redux to manage the state across pages.

✅ Accessing Mail in Other Pages
- Utilized useSelector to access the stored email in the global state on all other pages.
- Ensured seamless usage of the email across various components without prop drilling.

