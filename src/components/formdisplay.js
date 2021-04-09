import React from 'react'
export default function FormDisplay({tnotes,tnote,setTnotes}) {
    const handleDelete=()=>{
          setTnotes(tnotes.filter(el=>el.id!==tnote.id));
    }
            return (
                <>
                <div className="finaldisplay">
                    <section className="shownotes">          
                            <h2>{tnote.title}</h2>
                            <p className="totalnotes">
                            {tnote.notes}
                            </p>
                            <button onClick={handleDelete} className='delete'>DELETE</button>         
                </section>
                </div>
                </>
                
            )
   
}
