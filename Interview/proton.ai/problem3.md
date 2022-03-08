The first step to future proof the refactor is to eliminate dependency on country of origin. Therefore one needs a general purpose regex expression that ignores all non-digit characters except for anything before the last two characters, since according to [research](https://fastspring.com/blog/how-to-format-30-currencies-from-countries-all-over-the-world/) either ==,== or ==.== could be used to mark the start of decimals (as well as ==€== from this example.)

```js
function extractPrice(description) {
    var parts = [...description.matchAll(/\D*(\d+)/g)]
    const lastIndex = parts.length - 1
    let price = ''

    for (part of parts) {
        price += parts.indexOf(part) === lastIndex && part[0].length === 3
        ? `.${part[1]}`
        : part[1]
    }

    return parseFloat(price)
} 
```

As an aside, in the example text ==parseFloat== is misspelled as ==parsreFloat==.