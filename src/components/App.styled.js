import { styled } from 'styled-components';

const Container = styled('div')(() => {
  return {
    padding: 20,
  };
});

const Input = styled('input')(() => {
  return {
    display: 'block',
    marginTop: 5,
    fontSize: 16,
  };
});

const Button = styled('button')(() => {
  return {
    width: 'fit-content',
    padding: '10px 12px',
    backgroundColor: 'grey',
    color: 'beige',
    fontSize: 20,
    borderRadius: 5,
    border: 'none',
    outline: 'none',
    transition: 'linear 50ms',
    cursor: 'pointer',
    '&:hover': {
      color: 'gainsboro',
    },
    '&:active': {
      scale: '0.95',
    },
  };
});

const Label = styled('label')(() => {
  return {
    fontSize: 20,
    fontWeight: 600,
  };
});

export { Container, Input, Button, Label };
