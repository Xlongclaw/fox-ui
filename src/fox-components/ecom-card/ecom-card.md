# Ecommerce Card

It is custom components by fox UI that can be easily consumed by a developer developing any Ecommerce application in just few steps.
It can be easily customised as per your own Requirements.

## Installation
Just copy the following command on your terminal.
```
npm i @fox/ecom-card
```

## Usage

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

## Examples