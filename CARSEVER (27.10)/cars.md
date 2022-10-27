# Car storage API

## **getAllModels()**

Return the names of all models in storage as an array of strings.
The name is added to the array only once.
Returns an empty array if nothing found.

## **getCar(key,value)**

get all cars that matches the given key-value pair.

- returns car objects in an array
- if there is no match, an empty array is returned

## **getAllCars()**

returns all car objects in an array or an empty array.

### Example

```js
getCar("model", "Fast GT");
getCar("licence", "ABC-1");
```
