import React from 'react'

const About = () => {
  return (
    <div className='container my-5'>
        <h1>About Us</h1>
        <p>My Todos List is a React app designed to streamline the way you manage your tasks and daily activities. While traditional methods like paper planners or basic note-taking apps can help, My Todos List offers a more interactive and efficient solution for staying organized.

My Todos List allows you to easily add, view, and remove tasks from your to-do list. You can quickly jot down your tasks with a title and description and keep track of what needs to be done. Once you’ve completed a task, deleting it from the list is as simple as a click, making task management more intuitive.

Unlike many other to-do apps, My Todos List stores your tasks locally, so you don’t lose track of them even after closing the app. It provides a sleek, user-friendly interface that works smoothly on all modern browsers, and being an open-source project, new features and updates are always on the horizon to enhance your productivity experience.
</p>
<p>The most eminent features of the website are as follows :</p>
<div className="accordion" id="accordionExample">
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
     <strong> Task Management Made Simple</strong>
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
      <div className="accordion-body">
      Add, view, and delete tasks with ease.
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
     <strong> Persistent Data</strong>
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body">
      Your to-do list is stored in the browser, so you won’t lose your tasks.
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
     <strong> Cross-Browser Compatibility</strong>
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body">
      Works seamlessly on any modern web browser.
      </div>
    </div>
  </div>
</div>
    </div>
  )
}

export default About
