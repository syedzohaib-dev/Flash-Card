import React, { act, useState } from 'react'
import "./App.css"

function App() {
  const questionsAndAnswers = [
    {
      question: "What is React?",
      answer: "React is a JavaScript library for building user interfaces, especially for single-page applications."
    },
    {
      question: "What are React components?",
      answer: "Components are independent and reusable bits of code that serve as the building blocks of a React application."
    },
    {
      question: "What is JSX?",
      answer: "JSX is a syntax extension for JavaScript that allows you to write HTML directly within React, making code more readable and expressive."
    },
    {
      question: "What is the difference between state and props?",
      answer: "Props are read-only data passed from parent to child components, while state is a local data storage specific to a component and can change over time."
    },
    {
      question: "What is the use of useState?",
      answer: "The useState hook allows you to add state to functional components in React, helping you store and update dynamic values within a component."
    },
    {
      question: "What is the purpose of useEffect?",
      answer: "The useEffect hook is used to perform side effects in React, such as data fetching, subscriptions, and DOM updates, usually after rendering."
    },
    {
      question: "What is the Virtual DOM?",
      answer: "The Virtual DOM is an in-memory representation of the real DOM elements, allowing React to update the UI efficiently by comparing changes and only updating what’s necessary."
    },
    {
      question: "What is a controlled component?",
      answer: "A controlled component is an input element whose value is controlled by React state, meaning that any change in the input updates the state and vice versa."
    }
  ];

  const [activeIndex, setActiveIndex] = useState(null)

  const handelClick = (index) => {
    setActiveIndex(activeIndex === index ? null : index)
  }


  return (
    <>

      <div className="container">
        {questionsAndAnswers.map((singleCard, index) =>
        (
          <div className={`card ${activeIndex === index ? 'active' : ''}`} key={index} onClick={() => handelClick(index)}>
            <p className='question'>{singleCard.question}</p>
            {
              activeIndex === index && <p className='answer'>{singleCard.answer}</p>
            }
          </div>
        )


        )}


      </div>

    </>
  )
}

export default App