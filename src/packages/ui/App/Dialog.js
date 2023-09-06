import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Paper from '@mui/material/Paper';
import Draggable from 'react-draggable';

function PaperComponent(props) {
  return (
    <Draggable
      handle="#draggable-dialog-title"
      cancel={'[class*="MuiDialogContent-root"]'}
    >
      <Paper {...props} />
    </Draggable>
  );
}

export default function DraggableDialog({open, onClose}) {

  return <Dialog
    open={open}
    onClose={onClose}
    PaperComponent={PaperComponent}
    aria-labelledby="draggable-dialog-title"
  >
    <DialogTitle style={{ cursor: 'move' }} id="draggable-dialog-title">
      Subscribe
    </DialogTitle>
    <DialogContent>
      <DialogContentText>
        To subscribe to this website, please enter your email address here. We
        will send updates occasionally.
      </DialogContentText>
    </DialogContent>
    <DialogActions>
      <Button autoFocus onClick={onClose}>
        Cancel
      </Button>
      <Button onClick={onClose}>Subscribe</Button>
    </DialogActions>
  </Dialog>;
}
