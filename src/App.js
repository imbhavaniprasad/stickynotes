import './App.css';
import React,{useState,useEffect} from 'react'
import Form from './components/form'
import FormBridge from './components/formbridge';
function App() {
  const[title,setTitle]= useState("");
  const[notes,setNotes]= useState("");
  const [tnotes,setTnotes] = useState([]);
  useEffect(()=>{
    getLocal();},
    []);
    useEffect(()=>{
      setLocal();
    },[tnotes]);
  const setLocal=()=>{
    localStorage.setItem("tnotes",JSON.stringify(tnotes));
  }
  const getLocal = ()=>{
    if(localStorage.getItem('tnotes')===null){
      localStorage.setItem('tnotes',JSON.stringify([]));
    }
    else{
      setTnotes(JSON.parse(localStorage.getItem('tnotes',JSON.stringify(tnotes))))
    }
  }
  return (
    <div className="App">
      <Form title={title} setTitle={setTitle} tnotes={tnotes} setTnotes={setTnotes} setNotes={setNotes} notes={notes}/>
    <FormBridge setTnotes={setTnotes} tnotes={tnotes}/>
    </div>
  );
}

export default App;
