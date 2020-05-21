import React, {useState, useCallback} from 'react';
import {TextInput} from './index';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import {WEBHOOK_URL} from '../../slack/webhookConfig';

console.log(WEBHOOK_URL)

const FormDialog = (props) => {
	const[name, setName] = useState("");
	const[email, setEmail] = useState("");
	const[description, setDescription] = useState("");



	const inputName = useCallback((event) => {
		setName(event.target.value);
		
	},[setName]);


	const inputEmail = useCallback((event) => {
		setEmail(event.target.value);
	},[setEmail]);

	const inputDescription = useCallback((event) => {
		setDescription(event.target.value);
	},[setDescription]);

		
	//バリデーションチェック 空白
	const blankCheck = (...args) => {
		let isBlank = false
		for(let i= 0; i < args.length; i++) {
			if (args[i] === ""){
				isBlank = true;
			}			
		}
		return isBlank
	}


	// メールアドレスのバリデーション
	const emailCheck = (email) => {
		const regexp = /^[A-Za-z0-9]{1}[A-Za-z0-9_.-]*@{1}[A-Za-z0-9_.-]{1,}\.[A-Za-z0-9]{1,}$/;
		return regexp.test(email)
	}



	//テキストをslackへ送信
	const inputSubmit=()=> {
		const isBlank = blankCheck(name, email, description)
		const correctEmail = emailCheck(email);
		if (isBlank) {
			window.alert("空白の箇所があります。")
			return false
		}else if(!correctEmail){
			window.alert("Emailアドレスに不備があります。")
			return false
		} else {
			const payload={
					"text": "amadeusアプリからお問い合わせがありました。\n" +
							"お名前:" + name + "\n" +
							"emailアドレス:" + email + "\n"+
							"お問合わせ内容:\n" + description 
					}
			fetch(WEBHOOK_URL, {
				method: "POST",
				body: JSON.stringify(payload)
			}).then(()=> {
				alert("開発者からメールを送ります。しばし、お待ちください。")
				setName("")
				setEmail("")
				setDescription("")
				return props.handleContactClose();
			})
		}
	};



	return(
	      <Dialog open={props.contact} onClose={props.handleContactClose}>
	        <DialogTitle id="alert-dialog-title">{"お問い合わせフォーム"}</DialogTitle>
	        <DialogContent>
	            <TextInput label={"名前"} multiline={false} rows={1} type={"text"} value={name} onChange={inputName} />
	            <TextInput label={"emailアドレス"} multiline={false} rows={1} type={"text"} value={email} onChange={inputEmail}/>
	            <TextInput label={"お問い合わせ内容"} multiline={true} rows={5} type={"text"} value={description} onChange={inputDescription }/>
	        </DialogContent>
	        <DialogActions>
	          <Button onClick={props.handleContactClose} color="primary">
	            キャンセル
	          </Button>
	          <Button onClick={inputSubmit} color="primary" autoFocus>
	            送信
	          </Button>
	        </DialogActions>
	      </Dialog>
		);
}

export default FormDialog;