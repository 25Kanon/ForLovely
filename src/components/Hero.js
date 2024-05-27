import '../App.css';
import Lottie from 'react-lottie';

function Hero() {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row ">


        <Lottie className="max-w-sm rounded-lg shadow-2xl" options={{ loop: true, autoplay: true, animationData: require('../media/hello.json') }} height={600} width={600} />
        <div>
          <h1 className="text-5xl font-bold"> Hello Love!</h1>
          <article className="prose lg:prose-xl text-wrap">
          <p className="py-6">I just want to let you know that you are very special to me;
            and you mean everything to me. I may not be the perfect boyfriend existing
            but I'm trying to be the one that will make you happy. </p>
          </article>
          <button className="btn btn-primary">
          <Lottie className="h-6 w-6" options={{ loop: true, autoplay: true, animationData: require('../media/heart.json') }} height={50} width={50} />
          Discover How much I love you
          </button>
          

        </div>
      </div>
    </div>
  );
}

export default Hero;
