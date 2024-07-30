import React from 'react'
import AccordionCard from '../../../components/accordion/AccordionCard'

const Accordion = () => {
    return (
        <div className='w-full flex-1 flex items-center justify-center flex-col md:p-0 p-4'>
            <AccordionCard title={"What is Accordion?"}>
                <div className="flex items-center flex-col space-y-3">
                    <p className="text-base text-neutral-400 font-light">
                        An accordion is a user interface (UI) component commonly used in web and mobile design to toggle the visibility of content. It allows users to expand and collapse sections of content by clicking on headers or titles. This helps manage large amounts of content by displaying only what is relevant or of interest to the user at any given time. Here are some key features and uses of an accordion:
                    </p>
                    <p className="text-red-500">
                        You can insert anything here. like images, lists, contents, etc.
                    </p>
                </div>
            </AccordionCard>
            
            <AccordionCard title={"What is ChatGPT?"}>
                <div className="flex items-center flex-col space-y-3">
                    <p className="text-base text-neutral-400 font-light">
                        ChatGPT is an artificial intelligence language model developed by OpenAI. It is based on the GPT (Generative Pre-trained Transformer) architecture, specifically the GPT-4 version. ChatGPT is designed to understand and generate human-like text based on the input it receives. It can perform a variety of tasks, including answering questions, providing explanations, generating creative content, assisting with programming, and more.
                    </p>
                    <p className="text-blue-500">
                        You can customize the accordion card as well.
                    </p>
                </div>
            </AccordionCard>
        </div>
    )
}

export default Accordion