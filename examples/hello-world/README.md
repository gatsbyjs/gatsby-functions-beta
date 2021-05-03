# Hello World function example

This example shows off the simplest possible Function.

`src/api/hello-world.js`

```js
const sample = (req, res) => {
  res.status(200).json({"message": "Hello, World!"})
};

export default sample;
```

Run `gatsby develop` and then run `curl http://localhost:8000/api/hello-world` to invoke the Function. Try saving the text to e.g. `Hello Gatsby Functions` and then re-running `curl`.
