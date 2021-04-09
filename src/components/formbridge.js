import React from 'react'
import FormDisplay from './formdisplay'

export default function FormBridge({tnotes,setTnotes}) {
    return (
        <div>
            {tnotes.map(tnote=>{
                return(
<FormDisplay tnotes={tnotes} tnote={tnote} setTnotes={setTnotes}/>
                )
              
            })}
        </div>
    )
}
