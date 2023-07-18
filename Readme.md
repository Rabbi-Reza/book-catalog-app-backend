# Digital Cow Hut Backend Assignment

## Live link
### Live deployed [Link](https://cow-hut-backend-admin-with-auth.vercel.app/) 
[cow-hut-backend-admin-with-auth-assignment-rabbi-reza](https://cow-hut-backend-admin-with-auth.vercel.app/) 

## Application Routes:

   #### Auth (User)
   - https://cow-hut-backend-admin-with-auth.vercel.app/api/v1/auth/signup (POST API)
   - https://cow-hut-backend-admin-with-auth.vercel.app/api/v1/auth/login (POST API)
   - https://cow-hut-backend-admin-with-auth.vercel.app/api/v1/auth/refresh-token (POST API)


   ### Auth (Admin)
   - https://cow-hut-backend-admin-with-auth.vercel.app/api/v1/admins/create-admin (POST API)
   - https://cow-hut-backend-admin-with-auth.vercel.app/api/v1/admins/login (POST API)


   #### User
   - https://cow-hut-backend-admin-with-auth.vercel.app/api/v1/users (GET API)
   - https://cow-hut-backend-admin-with-auth.vercel.app/api/v1/users/648c4c338e09488470bd419c (Single GET API) 
   - https://cow-hut-backend-admin-with-auth.vercel.app/api/v1/users/648c3fc0d8e6b6c006552cd5 (PATCH API)
   - https://cow-hut-backend-admin-with-auth.vercel.app/api/v1/users/648c4c338e09488470bd419c (DELETE API) 
   - https://cow-hut-backend-admin-with-auth.vercel.app/api/v1/users/my-profile (GET API)
   - https://cow-hut-backend-admin-with-auth.vercel.app/api/v1/users/my-profile (PATCH API)


   #### Cows
   - https://cow-hut-backend-admin-with-auth.vercel.app/api/v1/cows (POST API)
   - https://cow-hut-backend-admin-with-auth.vercel.app/api/v1/cows (GET API)
   - https://cow-hut-backend-admin-with-auth.vercel.app/api/v1/cows/648d44b2a8a9779b586190e6 (Single GET API) 
   - https://cow-hut-backend-admin-with-auth.vercel.app/api/v1/cows/648d483413dd77b7305d857a (PATCH API)
   - https://cow-hut-backend-admin-with-auth.vercel.app/api/v1/cows/648d44b2a8a9779b586190e6 (DELETE API)


   ### Pagination and Filtering routes of Cows
   - https://cow-hut-backend-admin-with-auth.vercel.app/api/v1/cows?page=1&limit=10 ( For Pagination )
   - https://cow-hut-backend-admin-with-auth.vercel.app/api/v1/cows?sortBy=price&sortOrder=desc ( For Sorting )
   - https://cow-hut-backend-admin-with-auth.vercel.app/api/v1/cows?minPrice=2000&maxPrice=40000 ( For filtering by price )
   - https://cow-hut-backend-admin-with-auth.vercel.app/api/v1/cows?location=Chattogram ( For filtering by Location )
   - https://cow-hut-backend-admin-with-auth.vercel.app/api/v1/cows?searchTerm=Cha ( For searching by location, breed, or category )
     
  
   #### Orders
   - https://cow-hut-backend-admin-with-auth.vercel.app/api/v1/orders (POST API)
   - https://cow-hut-backend-admin-with-auth.vercel.app/api/v1/orders (GET API)
   - https://cow-hut-backend-admin-with-auth.vercel.app/api/v1/orders/648dda7063eb1865906e264b (GET API)