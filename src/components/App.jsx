import React from "react";
import Heading from "./Header";
import Footer  from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";




function App() {
  const [noteitems, updatenoteitems] = React.useState([]);


    function additems(inputText)
    {
      updatenoteitems(function (previtems)
      {
          return  [...previtems, inputText];
      });
      
     
    }
    
    function deletenotes(id)
    {
        updatenoteitems(noteitems.filter(function(item,index)
        {
          return index !== id;
        }));
    }

    return (
      <div>
        <Heading />
        <CreateArea addingitems ={additems}  />
          {noteitems.map(function (item,index)
          {
            return(<Note key={index} id={index} title={item.title} content={item.content} deleting ={deletenotes}/>)
          })}
        
        <Footer />
      </div>
    );
  }

export default App;