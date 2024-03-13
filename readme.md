# Fox UI

[Vercel deploy link](https://fox-ui-ten.vercel.app/)

Fox UI is a React UI Component Library currently in its development stage. Its is being developed to ease react developers around the world with their development as they don't need to bother about building custom UI components during their app production.

This is a web application displaying all the UI components, so the developer should know how the component looks and feels.

## Components 

```js
npm i fox-ui
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
