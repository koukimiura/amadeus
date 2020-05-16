import React, {useState, useEffect, useCallback} from 'react';
import './assets/styles/style.css'
import {OptionsList, Chats, Modal} from './components/index';
import defaultDataset from './dataset.js';
import {FormDialog} from './components/Forms/index';



const App = () => {
  const [options, setOptions] = useState([]);
  const [chats, setChats] = useState([]);
  const [currentId, setCurrentId] = useState("first");
  const [dataset, setDataset] = useState(defaultDataset);
  const [modalOpen, setModalOpen] = useState(false);
  const [contact, setContact] = useState(false);


  // 画像モーダルを開くCallback関数
  const handleModalOpen = useCallback(() => {
    setModalOpen(true)
  },[setModalOpen]);

  // 画像モーダルを閉じるCallback関数
  const handleModalClose = useCallback(() => {
    setModalOpen(false)
  },[setModalOpen]);




  // 問い合わせフォーム用モーダルを開くCallback関数
  const handleContactOpen =useCallback(() => {
    setContact(true);
  },[setContact]);

  // 問い合わせフォーム用モーダルを閉じるCallback関数
  const handleContactClose =useCallback(() => {
      setContact(false);
  },[setContact]);



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
    const initDataset = dataset[currentId]
    displayNextQuestion(initDataset, dataset[currentId]);

    // addChats({
    //   text: initDataset.question,
    //   type: "question"
    // })

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
        <Chats chats={chats}/>
        <OptionsList options={options} select={selectOption} />
        <Modal modalOpen={modalOpen} handleModalOpen={handleModalOpen} handleModalClose={handleModalClose}/>
        <FormDialog contact={contact} handleContactOpen={handleContactOpen} handleContactClose={handleContactClose}/>
      </div>
    </section>
  );
}

export default App;
