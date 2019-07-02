# Snippet-ReduceOneOfEach
Reduce Function that takes an array and returns an array with one of each item.

## Un-nested Array
```js
    // Example:
    let myArray = ['a', 'b', 'b', 'c'];

    let newArry = myArray.reduce((accumulator, currentVal) => {
    // IF in the accumulator the item exists then return accumulator unchanged
    // IF item does not exist then push to accumulator then return
    if(accumulator.indexOf(currentVal) === -1){
      accumulator.push(currentVal); // NOTE: push returns the lenght of an array, so don't prefix return here.
    }
    return accumulator;
  }, []);

  console.log('newArry: ', newArry ); // ['a', 'b', 'c'];

```

## Nested Array

```js
    // Example:
    let myArray = [
        {
            item1: 'a',
            item2: 1
        },
        {
            item1: 'b',
            item2: 1
        },
        {
            item1: 'b',
            item2: 1
        },
        {
            item1: 'c',
            item2: 1
        },
        {
            item1: 'c',
            item2: 1
        }
    ];

    let newArry = myArray.reduce((accumulator, currentVal) => {
    // IF in the accumulator the item exists then return accumulator unchanged
    // IF item does not exist then push to accumulator then return
    if(accumulator.indexOf(currentVal.item1) === -1){
      accumulator.push(currentVal.item1); // NOTE: push returns the lenght of an array, so don't prefix return here.
    }
    return accumulator;
  }, []);

  console.log('newArry: ', newArry ); // ['a', 'b', 'c'];
```