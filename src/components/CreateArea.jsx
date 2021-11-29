import React from "react";
import AddIcon from '@material-ui/icons/Add';
import Fab from "@material-ui/core/Fab";
import Zoom from '@material-ui/core/Zoom';

function CreateArea(props) {

    const [inputText, updatetext] = React.useState({
        title: "",
        content: ""
    });

    const [expandedstate, updatestate] = React.useState(false);
    
    function expandit()
    {
      updatestate(true);
    }


    function handlechange(event)
    {
        updatetext(function (prevValue)
        {
            var eventname = event.target.name;
            var newvalue = event.target.value;
            if(eventname === "title")
            {
                return {
                    title: newvalue,
                    content: prevValue.content
                }
            }
            else if(eventname === "content")
            {
                return {
                    title: prevValue.title,
                    content: newvalue
                }
            }
        });
        
    }

    function handleclick(event)
    {
      if(inputText.title === "" || inputText.content === "")
      {
        alert("Fields cannot be empty");
      }
      else 
      {
        props.addingitems(inputText);
        
      }
      event.preventDefault();
      
    }

    
  return (
    <div>
      <form className="create-note">
        {expandedstate?<input onChange={handlechange} name="title" placeholder="Title" /> : null}
        <textarea onClick={expandit} onChange={handlechange} name="content" placeholder="Take a note..." rows={expandedstate?"3":"1"} />
        <Zoom in={expandedstate?true:false}>
        <Fab onClick={handleclick}><AddIcon /></Fab>
        </Zoom>
      </form>
     
    </div>
  );
}

export default CreateArea;
