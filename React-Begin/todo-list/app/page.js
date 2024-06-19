
import React, { useState } from 'react'

const page = () => {
  const [title, settitle] = useState("")
  const [desc, setdesc] = useState("")
  const [mainTask, setMaintask] = useState([])
  const submithandler = (e) => {
    e.preventDefault()
    setMaintask([...mainTask, { title, desc }]);
    settitle("");
    setdesc("");
    console.log(mainTask)
  }

  const deleteHandler = (i)=>{
      let copytask = [...mainTask]
      copytask.splice(i,1)
      setMaintask(copytask)
  }

  let renderTask = <h2>no task Available</h2>

  if (mainTask.length > 0) {
    renderTask = mainTask.map((t, i) => {
      return (
        <li key={i} className='flex items-center justify-between mb-3 '>
          <div className='flex justify-between  w-2/3'>
            <h5>{t.title}</h5>
            <h5>{t.desc}</h5>
          </div>
          <button onClick={()=>{
            deletehandler(i)
          }} className='bg-red-400 text-black px-4 py-2 m-4 text-lg font-bold rounded'>Delete</button>
        </li>)
    })
  }
  return (
    <>
      <h1 className='bg-black text-white text-3xl text-center p-4'>ToDO List</h1>
      <form onSubmit={submithandler}>
        <input type='text' className='m-5 p-3 rounded-lg border border-zinc-800 text-2xl'
          placeholder='Enter Task'
          value={title}
          onChange={(e) => {
            settitle(e.target.value)
          }} />
        <input type='text' className='m-5 p-3 rounded-lg border border-zinc-800 text-2xl'
          placeholder='Enter Discription'
          value={desc}
          onChange={(e) => {
            setdesc(e.target.value)
          }} />
        <button className='bg-black text-white px-4 py-2 m-4 text-lg font-bold rounded' >Submit Task</button>
      </form>
      <hr />
      <div className='bg-zinc-200 p-5 font-medium '>
        <ul>
          {renderTask}
        </ul>
      </div>
    </>
  )
}

export default page