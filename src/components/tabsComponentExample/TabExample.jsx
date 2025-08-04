import React, {useState} from 'react'

function TabExample() {
    const [activeTab, setActiveTab] = useState('home');

    const handleTabClick = (tab) => {
        setActiveTab(tab);
    }

    const renderTabContent = () => {
        switch(activeTab){
            case 'home':
                return <Home />;
            case 'about':
                return <About />;
            case 'career':
                return <Career />;
            case 'contact':
                return <Contact />
            default:
                return null;
        }
    }

  return (
    <div>
        <h3>Tabs Example</h3>
        <button style={{fontWeight: activeTab === 'home' ? 'bold' : 'normal'}} onClick={() => handleTabClick('home')}>Home</button>
        <button style={{fontWeight: activeTab === 'about' ? 'bold' : 'normal'}} onClick={() => handleTabClick('about')}>About</button>
        <button style={{fontWeight: activeTab === 'career' ? 'bold' : 'normal'}} onClick={() => handleTabClick('career')}>Career</button>
        <button style={{fontWeight: activeTab === 'contact' ? 'bold' : 'normal'}} onClick={() => handleTabClick('contact')}>Contact</button>
        <div>
        {renderTabContent()}
        </div>
    </div>
  )
}

function Home(){
    return(
        <div>
            <h2>Home</h2>
            <p>This is Home page</p>
        </div>
    )
}

function About(){
    return(
        <div>
            <h2>About</h2>
            <p>This is about page</p>
        </div>
    )
}

function Career(){
    return(
        <div>
            <h2>Career</h2>
            <p>This is career page</p>
        </div>
    )
}

function Contact(){
    return(
        <div>
            <h2>Contact</h2>
            <p>This is contact page</p>
        </div>
    )
}

export default TabExample;