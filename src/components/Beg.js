import '../App.css';
import Lottie from 'react-lottie';

function Beg() {
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content text-center">
                <div className="max-w-md">
                    <article className="prose lg:prose-lg text-wrap">
                    <Lottie className="max-w-sm rounded-lg shadow-2xl" options={{ loop: true, autoplay: true, animationData: require('../media/please.json') }} height={250} width={250} />
                        <h1 className="text-5xl font-bold">Please call me your boyfriend again</h1>
                        <p className="py-6">I know I didn't deserve this yet. But I cannot stand the pain
                        being called as best friend. I am your lover, and I won't let go of that title easily.
                        As long as we love each other I will hold to that status. No matter what fight we had 
                        as long as our fire is still alive, we will be lovers. </p>
                    </article>
                </div>
            </div>
        </div>
    );
}

export default Beg;
