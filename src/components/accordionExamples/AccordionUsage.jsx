import React from 'react';
import AccordionEx from './AccordionEx';

const faqItems = [
    {
        id:1,
        title: 'What is React?',
        content: 'React is a opensource Javascript library used for building user interfaces, particularly for single page applications.'
    },
    {
        id:2,
        title: 'Why use React?',
        content: 'React allows developers to create large web applications that can change data, without reloading the page. Its key features include component-based architecture, virtual DOM for performance optimization, and a unidirectional data flow.'
    },
    {
        id:3,
        title: 'What are React components?',
        content: 'Components are the building blocks of a React application. They are reusable pieces of UI that can manage their own state and lifecycle methods.'
    },
    {
        id:4,
        title: 'What is JSX?',
        content: 'JSX is a syntax extension for JavaScript that allows you to write HTML-like code within JavaScript. It makes it easier to create React elements and components.'
    }
]

function AccordionUsage() {
  return (
    <div>
        <h3>Accodion Usage</h3>
        <AccordionEx items = {faqItems}/>
    </div>
  )
}

export default AccordionUsage;