import '../App.css';
import Lottie from 'react-lottie';

function Timeline() {
    return (
        <div className='min-h-screen bg-base-200 px-5' id='tl'>
            <div className="hero-content flex-col lg:flex-row py-6">
                <h1 className="text-xl font-black text-base-content">The Perfect Recipe</h1>
            </div>
            <ul className="timeline text-accent timeline-snap-icon max-md:timeline-compact timeline-vertical">
                <li>
                    <div className="timeline-middle">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                    </div>
                    <div className=" artboard artboard-demo timeline-start bg-secondary md:text-end mb-10 px-3 ">
                        <div className="text-lg font-black text-secondary-content">You're Pretty</div>
                        <p className='text-md text-secondary-content py-6 '>
                            I couldn't help but tell you how beautiful I think you are.
                            Whether you wear makeup or not, you are who you are, 
                            the world's most beautiful girl. Every time I see you 
                            and your lovely face, I can't help but want to kiss you.
                            You know that you always have the ability to turn me on.<br></br><br></br>

                            You're not just pretty outisde, you're pretty inside too.
                            You never fail to deliver a warm and soothing love to me.

                        </p></div>
                    <hr />
                </li>
                <li>
                    <hr />
                    <div className="timeline-middle">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                    </div>
                    <div className=" artboard artboard-demo timeline-end bg-secondary md:text-end mb-10 px-3 ">
                        <div className="text-lg font-black text-secondary-content">You're Perfect</div>
                        <p className='text-md text-secondary-content py-6 '>
                            From head to toe, you are perfect. Inside and out you are perfect.
                            Lovely is not just a name for you, it's who you are. You have a lovely
                            heart, a lovely smile, a lovely face, a lovely body, and a lovely soul.
                            You are also smart and kind. You radiate the prefect balance of being smart
                            and humble. You're unyielding heart, shows how strong you are; you never waver
                            in any adversity. You have everything that I could ever ask for, you loved me
                            without any condition.
                        </p>
                    </div>
                    <hr />
                </li>
                <li>
                    <hr />
                    <div className="timeline-middle">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                    </div>
                    <div className=" artboard artboard-demo timeline-start bg-secondary md:text-end mb-10 px-3 ">
                        <div className="text-lg font-black text-secondary-content">You're the woman whom I want to spend my lifetime</div>
                        <p className='text-md text-secondary-content py-6 '>
                            I want to spend my lifetime with you. I want to be with you all through out the days of our lives.
                            Wether is it a bad day or a good day, I want to be with you. I want to start a family with you.
                            You show me the type of love, that I never thought I would ever experience. You are the woman
                            I can't live without; I can't imagine myself to be with another woman.
                        </p>
                    </div>
                    <hr />
                </li>

            </ul>
        </div>
    );
}

export default Timeline;
