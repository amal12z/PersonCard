import React, { Component } from 'react';
import './App.css';
import PersonCard from './components/PersonCard';
import Nav from './components/Nav'

function App(){
  const [Users , setUser] = React.useState(
    [ {id : 1, firstName : "Doe", lastName :"Jane", age :45, hairColor :"Black"},
    {id : 2, firstName : "Smith", lastName :"John", age :88, hairColor :"Brown"},
    {id : 3, firstName : "Fillmore", lastName :"Millard", age :50, hairColor :"Brown"},
    {id : 4, firstName : "Smith", lastName :"Maria", age :62, hairColor :"Brown"}]
  )


  function buttonLogic(id){
    setUser(Users.map( person => person.id == id ? {...person, age: person.age+=1}  :  person ))
    }


    return (
      <div className="App">
        <Nav link="components/nav.js"> <p className='nav-item'>child 1</p> <p className='nav-item'>child 2</p> 
        </Nav> {/* S : 2 */}

        {/* S:1 */}
        {Users.map(user => <PersonCard key={user.id} firstName={user.firstName} lastName={user.lastName} age={user.age} hairColor={user.hairColor} id={user.id} buttonLogic={buttonLogic}  />
        )}
        
      </div>
    );
}


export default App;

