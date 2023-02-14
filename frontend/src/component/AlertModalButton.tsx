import { useState } from 'react';

import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Stack from '@mui/material/Stack';

interface IProps {
  buttonVariant: 'text' | 'outlined' | 'contained';
  buttonText: string;
  buttonColor: 'primary' | 'secondary' | 'error';
  alertDescription: string;
  alertTitle: string;
  alertBody: string;
  alertConfirmAction: () => void;
}

const AlertModalButton = ({
  buttonVariant,
  buttonText,
  buttonColor,
  alertDescription,
  alertTitle,
  alertBody,
  alertConfirmAction,
}: IProps) => {
  const [open, setOpen] = useState<boolean>(false);

  const handleOpenModal = () => {
    setOpen(true);
  };

  const handleCloseModal = () => {
    setOpen(false);
  };

  const handleCancelClick = () => {
    handleCloseModal();
  };

  const handleConfirmClick = () => {
    alertConfirmAction();
    handleCloseModal();
  };

  return (
    <div>
      <Button
        variant={buttonVariant}
        color={buttonColor}
        onClick={handleOpenModal}
      >
        {buttonText}
      </Button>
      <Dialog
        open={open}
        onClose={handleCloseModal}
        aria-modal={true}
        aria-labelledby={alertTitle.replaceAll(' ', '-')}
        aria-describedby={alertDescription.replaceAll(' ', '-')}
      >
        <DialogTitle id='alert-title'>{alertTitle}</DialogTitle>
        <DialogContent>
          <DialogContentText id='alert-description'>
            {alertBody}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Stack direction='row' spacing={2} justifyContent='space-between'>
            <Button
              variant='contained'
              color='primary'
              onClick={handleCancelClick}
            >
              Cancel
            </Button>

            <Button variant='text' color='error' onClick={handleConfirmClick}>
              Confirm
            </Button>
          </Stack>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default AlertModalButton;
