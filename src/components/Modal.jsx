import React from 'react';
import dereImage from "../assets/image/dere.png";
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';


const Modal = (props) => {
	return(

	      <Dialog open={props.modalOpen} onClose={props.handleModalClose} >
	        <DialogTitle id="alert-dialog-title" className="dere">{"おめでとうございます。 牧瀬紅莉栖がデレました。!!!!"}</DialogTitle>
	        <DialogContent>
	            <img alt="dereImage"src={dereImage}/>
	        </DialogContent>
	        <DialogActions>
	          <Button onClick={props.handleModalClose} color="primary" autoFocus>
	            閉じる
	          </Button>
	        </DialogActions>
	      </Dialog>

		);
}


export default Modal;


