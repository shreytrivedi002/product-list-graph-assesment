export const getAuthToken = async () => {
  fetch("https://dummyjson.com/auth/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      username: "kminchelle",
      password: "0lelplR",
      // expiresInMins: 60, // optional
    }),
  })
    .then((res) => res.json())
    .then(console.log);
  // expected output format -
  // {
  //   "id": 15,
  //   "username": "kminchelle",
  //   "email": "kminchelle@qq.com",
  //   "firstName": "Jeanne",
  //   "lastName": "Halvorson",
  //   "gender": "female",
  //   "image": "https://robohash.org/Jeanne.png?set=set4",
  //   "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTUsInVzZXJuYW1lIjoia21pbmNoZWxsZSIsImVtYWlsIjoia21pbmNoZWxsZUBxcS5jb20iLCJmaXJzdE5hbWUiOiJKZWFubmUiLCJsYXN0TmFtZSI6IkhhbHZvcnNvbiIsImdlbmRlciI6ImZlbWFsZSIsImltYWdlIjoiaHR0cHM6Ly9yb2JvaGFzaC5vcmcvYXV0cXVpYXV0LnBuZz9zaXplPTUweDUwJnNldD1zZXQxIiwiaWF0IjoxNjM1NzczOTYyLCJleHAiOjE2MzU3Nzc1NjJ9.n9PQX8w8ocKo0dMCw3g8bKhjB8Wo7f7IONFBDqfxKhs"
  // }
};

export const getProductList = async (limit=50, skip= 0) => {
  return (await fetch("https://dummyjson.com/products?limit="+limit+"&skip="+skip+"&select=title,price,stock,category,rating")).json();
  // expected output format -
  // {
  //   "products": [
  //     {
  //       "id": 11, // first 10 items are skipped
  //       "title": "perfume Oil",
  //       "price": 13
  //     },
  //     {...},
  //     {...},
  //     {...}
  //     // 10 items
  //   ],
  //   "total": 100,
  //   "skip": 10,
  //   "limit": 10
  // }
};

// product schema
// {
//   "id": 1,
//   "title": "iPhone 9",
//   "description": "An apple mobile which is nothing like apple",
//   "price": 549,
//   "discountPercentage": 12.96,
//   "rating": 4.69,
//   "stock": 94,
//   "brand": "Apple",
//   "category": "smartphones",
//   "thumbnail": "...",
//   "images": ["...", "...", "..."]
// }