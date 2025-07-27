import Todo from "./MyComponent/Todo";
import './App.css';
import { useState } from "react";

function App() {
  const jobs = [
    {Sno:1,
      Title: "go to the Market",
      desc: "go to the market to buy vegis",
     },
      {Sno:2,
      Title: "go to school",
       desc: "go to get good grades",
     },
     
     {Sno:3,
      Title: "go to Study",
       desc: "go study to get good grades",
      },
     {Sno:4,
      Title: "go to the post office",
       desc: "go to post office to delieverr letters",
     },
     
  ]
  const [Joblist,setJobList]=useState(jobs);

  const[title,setTitle]=useState("");
   const[desc,setDesc]=useState("");
  const onDelete=(sno)=>{
    const update = Joblist.filter((jobs)=>jobs.Sno!==sno);
  setJobList(update)
  }
  const Add=()=>{
    if(title.trim()=== ""||desc.trim()===""){
alert("enter both task and description");
return;
    }
    const newTodo={
      Sno:Date.now(),
      Title:title,
      desc:desc,
    }
    setJobList([...Joblist,newTodo]);
    setTitle("")
    setDesc("")


  }

  
const job = jobs;
return (
  
    <div className="container mt-4 bg-body-secondary" >
      <h1 className="title text-center fw-bold bg-info p-3 rounded">
        Todo App
      </h1>
    <div className="card p-3 shadow-sm">
      <h2 className="text-center mb-2 text-primary">Add a New Task</h2>
      <div className="input-container">
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Enter your task"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Enter your description"
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
          />
        </div>

        <button className="btn btn-success w-100 mb-3" onClick={Add}>
          Add Task
        </button>
      </div>
    </div>

    {/* Jobs List */}
    <div className="mt-4">
      <Todo jobs={Joblist} onDelete={onDelete} />
    </div>
  </div>
);

}
export default App;