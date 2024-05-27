import '../App.css';
import Lottie from 'react-lottie';

function Hero() {
  return (
    <div className="hero min-h-screen bg-base-200">
    <div className="hero-content flex-col lg:flex-row">
    <Lottie className="max-w-sm rounded-lg shadow-2xl" options={{ loop: true, autoplay: true, animationData: require('../media/hello2.json') }} height={300} width={300} />
   
      <div>
        <h1 className="text-5xl font-bold">Hello Love!</h1>
        <article className="prose lg:prose-lg text-wrap">
        <p className="py-5">I just want to let you know that you are 
        very special to me; and you mean everything to me. I may not be the perfect boyfriend existing but I'm trying to be the one that will make you happy.          
        </p>
        </article>

      </div>
       </div>
  </div>
  );
}

export default Hero;
