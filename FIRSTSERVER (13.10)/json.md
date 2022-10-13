# JSON (JavaScript Object Notation)

## Documentation

https://www.json.org

## File expension

.json

## Values

- string
- number
- array
- object
- true
- false
- null

### examples

### String

Must be doublequoted  
empty string: ""

```json
"this is a string"
"here is a \"quote\" in the 'middle'"
"heart symbol is \u2665"
```

### Number

- no leading +
- only one leading 0
- decimal delimiter is .

These are allowed:

```json
0,0.5, 123.456, 1200, 1.5E10, 2E-2, 2E+2, -1
```

Theses are not allowed:

```json
000.34, +20, 00030
```

### Array

Array begins with [ and ends with ]. Values in array are
seperated with commas.

#### examples

```json
[1, 2, 3, 4, 5]
["textA", "textB"]
[true, null, false]
[
    {"name": "Leila"},
    {"name": "Matt"}
]
// two dimensional array
[
    [1,2,3],
    [4,5,6]
]
```

### Object

An object begins with { and ends with }. The object consists of
comma sepeerated key-value pairs. The key and value are seperated by colon:

#### examples:

```json
{
  "firstname": "Leila",
  "lastname": "Hökki"
}
```

```json
// two-level object
{
    "firstname":"Leila",
    "children": [
        {"firstname":"Vera","age":5}
        {"firstname":"Jesse","age":7}
    ]
}
```

```json
{
  "key1": "value1",
  "key2": "value2",
  "key3": [1, 2, 3],
  "key4": {
    "a": 1,
    "b": "text",
    "c": [7, 8, 9],
    "d": {
      "x": true,
      "y": false,
      "z": null
    }
  }
}
```

JSON's object does not have method, unlike JavaScript's object.
