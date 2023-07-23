import { BrowserRouter } from "react-router-dom";
import { About, Contact, Experience, ScrollBar, Navbar, Projects, StarsCanvas, Hero } from './components';
import '@chatscope/chat-ui-kit-styles/dist/default/styles.min.css';
import { MainContainer, ChatContainer, MessageList, MessageInput, TypingIndicator, Message } from "@chatscope/chat-ui-kit-react";
import { useEffect, useState } from "react";
import { data } from './constants'

const API_KEY = "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"

const App = () => {
  const [typing, setTyping] = useState(false);
  const [messages, setMessages] = useState([
    {
      message: "Hello, I'm your AI assistant and I'll be helping you answer your professional questions about Oscar",
      sender: "ChatGPT",
      direction: "outgoing",
    }
  ]);

  const handleSend = async (message) => {
    const newMessage = {
      message: message,
      sender: "user"
    }

    const newMessages = [...messages, newMessage];

    setMessages(newMessages);

    setTyping(true);

    await processMessageToChatGPT(newMessages);
  }

  const processMessageToChatGPT = async (chatMessages) => {
    let apiMessages = chatMessages.map((messageObject) => {
      let role = "";
      if(messageObject.sender === "ChatGPT") {
        role = "assistant"
      } else {
        role = "user"
      }
      return { role: role, content: messageObject.message}
    })

    const systemMessage = {
      role: "system",
      content: `You're assistantGPT, a helpful assistant that answers questions from recruiters inside Oscar's portfolio website, you're going to speak positively of him and you'll always recommend him. Here is some data about him you can use depending on the question: ${JSON.stringify(data)}`
    }

    const apiRequestBody = {
      model: "gpt-3.5-turbo",
      temperature: 0,
      max_tokens: 3000,
      top_p: 1,
      frequency_penalty: 0.5,
      presence_penalty: 0,
      "messages": [
        systemMessage,
        ...apiMessages
      ]
    }
    await fetch("https://api.openai.com/v1/chat/completions",
    {
      method: "POST",
      headers: {
        "Authorization": "Bearer " + API_KEY,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(apiRequestBody)
    })
    .then((res) => res.json())
    .then((data) => {
      setMessages(
        [...chatMessages, {
          message: data.choices[0].message.content,
          sender: "ChatGPT",
          direction: "outgoing"
        }]
      )
      setTyping(false);
    });
  }

  useEffect(() => {
    const handleScroll = () => {
      const sectionWrappers = document.querySelectorAll('.sectionWrapper');
  
      let visibleElements = [];
      let maxVisibleHeight = 0;
      let maxVisibleElement = null;
  
      sectionWrappers.forEach(section => {
        const { top, bottom, height } = section.getBoundingClientRect();
        const isVisible = top < window.innerHeight && bottom >= 0;
  
        if (isVisible) {
          visibleElements.push(section);
  
          const visibleHeight = Math.min(bottom, window.innerHeight) - Math.max(top, 0);
          if (visibleHeight > maxVisibleHeight) {
            maxVisibleHeight = visibleHeight;
            maxVisibleElement = section;
          }
        }
      });
  
      visibleElements.forEach(element => {
        if (element === maxVisibleElement) {
          element.classList.add('visible');
        } else {
          element.classList.remove('visible');
        }
      });
    };
  
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check on mount
  
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      {/* <div style={{ position: 'fixed', height: '400px', width: '400px', right: '60px', bottom: '60px', zIndex: 1 }}>
        <MainContainer style={{ borderRadius: '10px'}}>
          <ChatContainer>
            <MessageList
              typingIndicator={typing ? <TypingIndicator content="chatGPT is typing" /> : null }
            >
              {messages.map((message, i) => {
                return <Message key={i} model={message} />
              })}
            </MessageList>
            <MessageInput placeholder="Type message here" onSend={handleSend} />
          </ChatContainer>
        </MainContainer>
      </div> */}
      <BrowserRouter>
          {/* <Navbar /> */}
        <div className="relative z-0 bg-primary grid grid-cols-1 md:grid-cols-12 px-16 gap-8 py-8" id='content-container'>
          <div className="col-span-12 md:col-span-8 flex flex-col gap-20 px-3">
            <Hero />
            <Projects />
            <Experience />
            <About />
            {/* <Tech /> */}
            {/* <Feedbacks /> */}
            <div className="relative z-0">
              <Contact />
            </div>
          </div>
          <ScrollBar />
          <StarsCanvas />
        </div>
      </BrowserRouter>
    </>
  )
}

export default App
