# Fox UI

[Vercel deploy link](https://fox-ui-ten.vercel.app/)

Fox UI is a React UI Component Library currently in its development stage. Its is being developed to ease react developers around the world with their development as they don't need to bother about building custom UI components during their app production.

This is a web application displaying all the UI components, so the developer should know how the component looks and feels.

## Components 

```jsx
function naturalCompare(a, b) {
   var ax = [], bx = [];

   a.replace(/(\d+)|(\D+)/g, function (_, $1, $2) { ax.push([$1 || Infinity, $2 || ""]) });
   b.replace(/(\d+)|(\D+)/g, function (_, $1, $2) { bx.push([$1 || Infinity, $2 || ""]) });

   while (ax.length && bx.length) {
     var an = ax.shift();
     var bn = bx.shift();
     var nn = (an[0] - bn[0]) || an[1].localeCompare(bn[1]);
     if (nn) return nn;
   }

   return ax.length - bx.length;
}

let builds = [ 
    { id: 1, name: 'Build 91'}, 
    { id: 2, name: 'Build 32' }, 
    { id: 3, name: 'Build 13' }, 
    { id: 4, name: 'Build 24' },
    { id: 5, name: 'Build 5' },
    { id: 6, name: 'Build 56' }
]

let sortedBuilds = builds.sort((n1, n2) => {
  return naturalCompare(n1.name, n2.name)
})

console.log('Sorted by name property')
console.log(sortedBuilds)
```
Upgrading from v5? See the migration guide.

Utilizing tagged template literals (a recent addition to JavaScript) and the power of CSS, styled-components allow you to write actual CSS code to style your components. It also removes the mapping between components and styles – using components as a low-level styling construct could not be easier!

```
const Button = styled.button`
  color: grey;
`;
```

Alternatively, you may use style objects. This allows for easy porting of CSS from inline styles, while still supporting the more advanced styled-components capabilities like component selectors and media queries.

```
const Button = styled.button({
  color: 'grey',
});
```

Equivalent to:
```
const Button = styled.button`
  color: grey;
`;
```

styled-components is compatible with both React (for web) and React Native – meaning it's the perfect choice even for truly universal apps! See the documentation about React Native for more information.

Supported by Front End Center. Thank you for making this possible!
