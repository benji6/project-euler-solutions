# project-euler-solutions

Playing with the problems from [https://projecteuler.net](https://projecteuler.net) in Clojure, Haskell, JavaScript and Rust.

## Running solutions with Docker

### Build images

```sh
docker build -t euler-hs haskell
docker build -t euler-js javascript
```

### Run containers

Run the container specifying the tag and solution number.

Haskell solution 1:

```sh
docker run euler-hs 1
```

JavaScript solution 2:

```sh
docker run euler-js 2
```
