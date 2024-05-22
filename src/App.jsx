import Button from '@mui/material/Button';
import AccessAlarm from '@mui/icons-material/AccessAlarm';
import ThreeDRotation from '@mui/icons-material/ThreeDRotation';
import Typography from '@mui/material/Typography';

function App() {
  return (
    <>
      <div>Manh Tien Dev</div>

      <div>
        <Typography variant='body2' color='text.secondary'>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa nihil
          ad magnam dolore architecto, consequuntur dicta pariatur. Voluptate
          ipsam aliquam magni quam error quibusdam aperiam saepe nulla,
          consequatur doloremque quae.
        </Typography>
      </div>
      <Button variant='text'>Text</Button>
      <Button variant='contained'>Contained</Button>
      <Button variant='outlined'>Outlined</Button>
      <br />
      <AccessAlarm></AccessAlarm>
      <ThreeDRotation></ThreeDRotation>
    </>
  );
}

export default App;
