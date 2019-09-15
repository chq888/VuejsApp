// multiple times functions where sometimes one is dependent on the other
// There are various ways to implement this
// with the use of callbacks can easily fall into callback hell
// the reason new object named Promise to solve this issue
// With Promises, can wrap each step and create a chain of commands that will run one after another asynchronously
const appService = {
  getCategory(id) {
    return new Promise(function(resolve, reject) {
      setTimeout(() => {
        if (id) {
          resolve({});
        } else {
          reject(Error("Invalid"));
        }
      }, Math.random() * 1000);
    });
  },

  getProductsByCategoryId(categoryId) {
    return new Promise(function(resolve, reject) {
      setTimeout(() => {
        resolve({});
      }, 1000);
    });
  },

  getProductById(id) {
    //to mimic a request, wrap this in a setTimeout function and will run after a random amount of seconds between zero and two seconds
    //a Promise that accepts a function and passes in two parameters, the resolve and reject
    //In setTimeout, won't return the value since returned the Promise, but pass in the parameter in the resolve function
    //the first call, since returned a Promise, and once it is resolved, it will fall into the next then callback.
    return new Promise(resolve => {
      let product = {};
      resolve(product);
    });
  },

  loadProduct(categoryId, id) {
    this.getProductsByCategoryId(categoryId)
      .then(function(products) {
        return this.getProductById(products[id]);
      })
      .then(function(product) {
        return product;
      })
      .catch(function(error) {
        console.log(error);
      });
  }
};

export default appService;
