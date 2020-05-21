import React from 'react';
import dereImage from "../assets/image/dere.png";
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';


const Modal = (props) => {
	const defaultMessage = "おめでとうございます。 牧瀬紅莉栖がデレました。!!!!";
    const anglyMessage = "どこ触ってんのよ! バカなの？ 死ぬの!?";


	return(
	      <Dialog open={props.modalOpen} onClose={props.handleModalClose} >
	        <DialogTitle id="alert-dialog-title" className="dere">{props.message? (anglyMessage):(defaultMessage)}</DialogTitle>
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


