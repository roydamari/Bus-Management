import React from 'react';
import Row from './components/Row';
import { Container } from '@material-ui/core'
import FormDialog from './components/Dialog';

function App() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Container maxWidth="sm">
      {new Array(14).fill(0).map((v, i) => {
        return <Row key={i} transparent={i === 6} lastRow={i === 0} handleClickOpen={handleClickOpen} />
      })}
      <FormDialog open={open} handleClose={handleClose} />
    </Container>
  );
}

export default App;
