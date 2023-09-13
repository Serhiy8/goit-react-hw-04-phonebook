import { styled } from 'styled-components';

const ListStyled = styled('ul')(() => {
  return {
    display: 'flex',
    flexDirection: 'column',
    width: 400,
    gap: 15,
    padding: 0,
    margin: 0,
  };
});

const ListItem = styled('li')(() => {
  return {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 20,
  };
});

const ListItemText = styled('p')(() => {
  return {
    margin: 0,
  };
});

export { ListItem, ListStyled, ListItemText };
