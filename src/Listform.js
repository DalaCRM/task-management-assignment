import { useState } from "react";

export default function Listform()  {
const [Taskname, setTaskname] = useState ();
  
    return(
        <form>
        <button>Add</button>
        <input type='text' value={Taskname}
         onChange={ev => setTaskname(ev.target.value)}
         placeholder="Write task"/>
      </form>
    );
}

 