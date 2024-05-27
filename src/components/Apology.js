import '../App.css';
import Lottie from 'react-lottie';

function Apology() {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row">
        <div>
          <h1 className="text-5xl font-bold"> Love I'm sorry</h1>
          <article className="prose lg:prose-lg text-wrap">
          <p className="py-6">I admit for the mistake I did, and I am very sorry Love. Please forgive me.
          I was following a lot of female icons in my social media, I am guilty of that.
          I thought that was fine, I thought of it as similar to following a celebrity where there's
          no any meaning on it. But I'm wrong, I went overboard I jumped over the bordeline and made you insecure.
          I am sorry for that. Even though I don't have any intention or thoughts of being with them, by liking their
          pictures depicts that I want to even though I don't want. I caused a misunderstading making you feel insecure.
          I am sorry for that. I am sorry for not considering your feelings. I am sorry for not being sensitive enough.
          I am sorry for not being the boyfriend that you deserve.

          <br></br>
          Right now I'm fixing my mistake, I am unfollowing them now. I am sorry for the pain that I caused you.
          I won't waste the chance you gave me, I will be the man that you deserve. Even though I did'nt cheat on you,
          I caused you pain and Insecurity. I am truly sorry for that.

          <br></br>
          <br></br>
          I will come and eliminate the pain and insecurity that I caused you.            
          </p>
          </article>

        </div>
        <Lottie className="max-w-sm rounded-lg shadow-2xl" options={{ loop: true, autoplay: true, animationData: require('../media/sorry.json') }} height={300} width={300} />
      </div>
    </div>
  );
}

export default Apology;
