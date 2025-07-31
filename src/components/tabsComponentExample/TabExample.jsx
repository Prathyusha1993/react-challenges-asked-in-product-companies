import React, {useState} from 'react'

function TabExample() {
    const[activeIndex, setActiveIndex] = useState(0);

    const handleClick = (index) => {
        setActiveIndex(index);
    }

    const rendeTabContent = () => {
        switch(activeIndex){
            case 'home': 
                return <Home />;
            case 'about':
                return <About />;
            case 'career':
                return  <Career />;
            case 'contact':
                return <Contact />;
            default:
                return null;
        }
    }
  return (
    <div>
        <h3>Tab Example</h3>
        <button style={{fontWeight: activeIndex === 'home' ? 'bold' : 'normal'}} onClick={() => handleClick('home')}>Home</button>
        <button style={{fontWeight: activeIndex === 'about' ? 'bold' : 'normal'}} onClick={() => handleClick('about')}>About</button>
        <button style={{fontWeight: activeIndex === 'career' ? 'bold' : 'normal'}} onClick={() => handleClick('career')}>Career</button>
        <button style={{fontWeight: activeIndex === 'contact' ? 'bold' : 'normal'}} onClick={() => handleClick('contact')}>Contact</button>
        <div>
        {rendeTabContent()}
        </div>
    </div>
  )
}

export default TabExample;

function Home(){
    return(
        <div>
            <h3>Home</h3>
            <p>This is Home Component.</p>
        </div>
    )
}

function About(){
    return(
        <div>
            <h3>About</h3>
            <p>This is About Component.</p>
        </div>
    )
}

function Contact(){
    return(
        <div>
            <h3>Contact</h3>
            <p>This is Contact Component.</p>
        </div>
    )
}

function Career(){
    return(
        <div>
            <h3>Career</h3>
            <p>This is Career Component.</p>
        </div>
    )
}