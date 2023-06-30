import './App.css';
import Render from './Components/Render';

function App() {

  const array = [
    {
      name: "Roza",
      age: 15,
      date: new Date(),
      web: "telegramm",
      href: "https://web.telegram.org/k/",
      image: "https://images.unsplash.com/photo-1687294920924-b82d79864991?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHx8&auto=format&fit=crop&w=400&q=60",
      id: Math.random().toString(),


    },  
    {
      name: "Nurles",
      age: 17,
      date: new Date(),
      web: "instagram",
      href: "https://www.instagram.com/",
      image: "https://images.unsplash.com/photo-1682687220199-d0124f48f95b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw2fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=400&q=60",
      id: Math.random().toString()
    },
    {
      name: "Maria",
      age: 18,
      date: new Date(),
      web: "youtube",
      href: "https://www.youtube.com/",
      image: "https://plus.unsplash.com/premium_photo-1673278171570-18af2a6ece31?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw3fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=400&q=60",
      id: Math.random().toString()
    }
  ]

  return (
    <div className="App">
     {array.map((el) => {
      return (
        <Render nav={el.href} site={el.web} userName={el.name} dateToday={el.date} userAge={el.age} userImage={el.image} key={el.id}/>
        
      )
     })}
    </div>
  );
}

export default App;
