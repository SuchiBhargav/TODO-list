import React,{useState} from 'react';
import '../index.css';
import 'font-awesome/css/font-awesome.min.css';

const Todo=()=>{

    const [inputdata,setinput]=useState("");
    const [items,setitems]=useState([]);
    const [togglesubmit,settogglesubmit]=useState(true);
    const[isedit,setisedit]=useState(null);
    
    //function to add items
    const additems=()=>{
        if(!inputdata)
        {
          // if no data enter do nothing
          alert("plzz fill data")
        }
        else if(inputdata&&!togglesubmit)
        {
            setitems(items.map((e)=>{
                if(e.id===isedit)
                return{
                    ...e,name:inputdata
                }
                //we hv to return something atleast from map
                return e;

                
            })

            )
            settogglesubmit(true);
            setinput('');
            setisedit(null);
        }
        //...items(..spread operator) add previous item and append with new inserted items
        else {
            //to add id to each entries
            const allinputdata={id:new Date().getTime().toString(),name:inputdata}
            setitems([...items,allinputdata]);
            setinput('');  //after adding empty space again //setinput will set data to inputdata not us``
        }
        
    }


     //delete items function
    const deleteitems=(index)=>{
     //to filter particular id to delete
     const updateddata=items.filter((e)=>
     {  //return idx which is not equal to id
         return index!==e.id;
     });
     setitems(updateddata);
    }


    //to edit items
    // when user click on edit button 
    //1.get id and name of data which user clicked to edit
    //2.set the toggle mode to change the submit button into edit button
    //3.now update the value of the set input with the new updated value to edit
    //4.to pass the current element id to new state
    const edititems=(index)=>{
        let newedititem=items.find((e)=>{
            return e.id===index;
        })
        settogglesubmit(false);
        setinput(newedititem.name);
        setisedit(index);
    }
   
    //to remove all itms and clear all
    const removeall=()=>{
        //empty all items from array 
        setitems([]);
    }
   
    return(
        <>
           <div className="main-div">
               <div className="child-div">

                 <figure>
                   <img src="data:image/jpeg;base64,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" alt="todologo"/>
                     <figcaption>Add your list here</figcaption>
                 </figure>

                 <div className="addItems">
                   <input type="text" placeholder="✍️Add items..." 
                    value={inputdata} onChange={(e)=>setinput(e.target.value)}/>
                 
              {
              togglesubmit? <i className="fa fa-plus-square fa-2x" title="Add items" aria-hidden="true" onClick={additems}></i>:
             <i className="fa fa-pencil fa-3x" title="edit items" onClick={additems} aria-hidden="true"></i>
              }
              </div>


              <div className="showItems">
              {
                  //loop over entered data array
                  items.map((e)=>{
                      return(
                          
                        <div className="eachItem" key={e.id}>
                            <h3>{e.name}</h3>
                            <div className="todo-btn">
                                 <i className="fa fa-pencil fa-2x" title="Edit items" onClick={()=>edititems(e.id)} aria-hidden="true"></i>
                                 <i className="fa fa-trash fa-2x" title="Delete items" onClick={()=>deleteitems(e.id)} aria-hidden="true"></i>
                            </div>
                        </div>    //we cants pass argument of index using delteitem bcoz it give no to each letter typed use =>function to tackle with problm
                        
                            )

                  })
              }
              
              </div>

              {/*clear all button*/}
              <div className="showItems">
              <button className="btn effect04" data-sm-link-text="Remove All" onClick={removeall}><span>checklist</span></button>
              </div>

            </div>

           </div>
          
        </>
    );
}

export default Todo;