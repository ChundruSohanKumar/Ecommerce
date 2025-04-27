const paypal = require("paypal-rest-sdk");

paypal.configure({
  mode: "sandbox",
  client_id: "ASWRMNrryAikSnxnBcFse0fS9l9cOnzShPjpUbGZPyY8wKd9MZXS5Kq-Ugc67TnGfzHKekrQQaUlB9u8",
  client_secret: "EAT-S_j3hc3HtX6Pqu8YWWYEa967Vl3vchAhJe8IzollcG_uA1BBwAfNeyBFhTYU0ZtGQIgsnqB_MvwB",
});

module.exports = paypal;
