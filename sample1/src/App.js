import logo from './logo.svg';
import './App.css';
import Article from "./components/Article";
import TextInput from "./components/TextInput";
import Counter from "./components/Counter";
import ToggleButton from "./components/ToggleButton";
import {useEffect, useState} from "react";

function App() {

    const [id, setId] = useState('deatiger')
    const [name , setName] = useState('')
    const ids = ['deatiger','aws' ,'google' ,'facebook',' masakaya']
    const getRandamId = () => {
        const _id = ids[Math.floor(Math.random() * ids.length)]
        setId(_id)
    }
    useEffect(() =>{
        fetch(`https://api.github.com/users/${id}`)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setName(data.name)
            })
            .catch( error => {
                console.error(error)
            })
    },[id])

  return (
      <div>
          <p>{id}の、Githubのなまえは{name}です</p>
          <button onClick={getRandamId}>ID変更</button>
          {/*<Article title={'新タイトル'} content={'新コンテンツ'} />*/}
          {/*<TextInput />*/}
          {/*<Counter />*/}
          {/*<ToggleButton/>*/}
      </div>
  );
}

export default App;
