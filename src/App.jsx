import React, {useState, useEffect, useCallback} from 'react';
import './assets/styles/style.css'
import {OptionsList, Chats, Modal} from './components/index';
import {FormDialog} from './components/Forms/index';
import {db} from './firebase/index.js';


const App = () => {

  const [options, setOptions] = useState([]);
  const [chats, setChats] = useState([]);
  const [currentId, setCurrentId] = useState("first");
  const [dataset, setDataset] = useState({});
  const [modalOpen, setModalOpen] = useState(false);
  const [contact, setContact] = useState(false);
  const [count, setCount] = useState(0);
  const [message, setMessage] = useState(false);

  // 画像モーダルを開くCallback関数
  const handleModalOpen = useCallback((messageReceiver) => {
    setModalOpen(true)
  },[setModalOpen]);



  // 画像モーダルを閉じるCallback関数
  const handleModalClose = useCallback(() => {
    setModalOpen(false);
    defaultMessageset();
   

  },[setModalOpen]);



  // 問い合わせフォーム用モーダルを開くCallback関数
  const handleContactOpen = useCallback(() => {
    setContact(true);
  },[setContact]);

  // 問い合わせフォーム用モーダルを閉じるCallback関数
  const handleContactClose = useCallback(() => {
      setContact(false);
  },[setContact]);




  const anglyMessageset = () => {
      setMessage(true);
      setCount(0);
  }

  const defaultMessageset = () => {
    setMessage(false);
  };

  const countUp = () => {
    setCount(prev => prev + 1);
    console.log(count);
    if (count >= 5){
      handleModalOpen();
      anglyMessageset();
    }
  }



   //次の質問を取ってくる。 
  const displayNextQuestion = (nextDataset, nextId)=>{

    addChats({
      text: nextDataset.question, 
      type: "question"
    })

     //次の選択肢を取得
    setOptions(nextDataset.options);


    //Idの更新
    setCurrentId(nextId);
  }



  const selectOption = (selectedOption, nextId) => {
    switch(true){
      case /^https:*/.test(nextId):　//true or false
        const a = document.createElement('a')
        a.href = nextId;
        a.target = '_blank';
        a.click();
        break;
      
      case (nextId === 'Happy'):
        handleModalOpen();
        updateSomething(selectedOption, nextId);
        break;

      case (nextId === "contactToDeveloper"):
        handleContactOpen();
        break;

      default:
        updateSomething(selectedOption, nextId);
        break;
    }
  }



  const updateSomething = (selectedOption, nextId) => {
     // 選択されたoptionを追加
        addChats({
          text: selectedOption,
          type: "answer"
        })

        const nextDataset = dataset[nextId]

        //stateの更新はHooksを導入しているので条件分機内ですべきでない。　下記の関数内で更新
        setTimeout(()=> {displayNextQuestion(nextDataset, nextId)}, 500);

  }


  // chats追加を関数化
  const addChats = (chat) => {
    setChats( prevChat =>{
      return [...prevChat, chat]
    })
  }




  // componentDidMount
  useEffect(()=>{

    //データ取得を待ちたい。async付きの即時関数を使用
    (async()=>{

      const initDataset = {};


      //非同期処理
      await db.collection('questions').get().then(snapshot => {
              snapshot.forEach(doc => {
                // console.log(doc.id, '=>', doc.data());
                //initDatasetオブジェクトでkeyをdoc.idにして、valueをdoc.dataに指定する
                initDataset[doc.id] = doc.data();
              })
            });

      //console.log(initDataset)
      setDataset(initDataset);

      //引数nextDatasetにはstate更新にtimelogが出るためiniDatesetを使用。
      displayNextQuestion(initDataset[currentId], currentId); 
    })();
  },[]);


  //componentDidUpdata  自動スクロール
  useEffect(()=> {
    const scrollArea = document.getElementById('scroll-area');
    if (scrollArea) {
            scrollArea.scrollTop = scrollArea.scrollHeight;
     }
  });





  return (
    <section className="c-section">
      <div className="c-box">
        <Chats chats={chats} onClick={countUp}/>
        <OptionsList options={options} select={selectOption} />
        <Modal modalOpen={modalOpen} handleModalOpen={handleModalOpen} handleModalClose={handleModalClose} message={message}/>
        <FormDialog contact={contact} handleContactOpen={handleContactOpen} handleContactClose={handleContactClose}/>
      </div>
    </section>
  );
}

export default App;
