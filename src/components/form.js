import React from 'react'
export default function Form({notes,setNotes,tnotes,setTnotes,title,setTitle}) {
   const handleChange=(e)=>{
       const target = e.target.name;
       const value = e.target.value;
       console.log(target);
       const set = target==='text' ? setTitle(value) : setNotes(value);
   }
   const handleSubmit=(e)=>{
    e.preventDefault();
    const rNum = Math.random()*1000;
       setTnotes([
           ...tnotes,
           {
               id: rNum,
               title : title,
               notes : notes
           }
       ]);
       console.log(tnotes);
   }
    return (
        <div className="container">
            <form onSubmit={handleSubmit}>
                <input type='text' onChange={handleChange} className="title" name="text"placeholder="Title..." /><br/>
                <textarea name="textarea" onChange={handleChange} row="50" placeholder="Enter Notes..."></textarea><br/>
                <input type="submit" value="save" className="save"/>
            </form>
        </div>
    )
}
