import { AutoForm } from 'uniforms-mui';
import useStore from '../store';
import { bridgeSchema } from '../schemas/simple-schema';
import CloseIcon from '@mui/icons-material/Close';
import { AppBar, Button, Dialog, IconButton, Toolbar } from '@mui/material';

const Preview = () => {
  const schema = useStore((state) => state.schema);
  const handleClose = useStore((state) => state.handleOpenModal);
  const open = useStore((state) => state.openModal);
  const validateSchema = bridgeSchema(schema);
  return (
    <>
      <Button variant="outlined" onClick={handleClose}>
        Preview
      </Button>
      <Dialog open={open} onClose={handleClose} fullScreen>
        <AppBar sx={{ position: 'relative' }}>
          <Toolbar>
            <IconButton edge="start" color="inherit" onClick={handleClose} aria-label="close">
              <CloseIcon />
            </IconButton>

            <Button autoFocus color="inherit" onClick={handleClose}>
              save
            </Button>
          </Toolbar>
        </AppBar>
        <h1 className="text-3xl font-bold underline text-red-600">Hello world!</h1>
        <AutoForm schema={validateSchema} onSubmit={console.log} />
      </Dialog>
    </>
  );
};

export default Preview;
