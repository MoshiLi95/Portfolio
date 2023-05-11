import React, { useRef, useEffect } from "react";
import "./index.scss";

const About: React.FC = () => {
  return (
    <section className="about" id="about">
      <div className="about__content">
        <span>About</span>
        <p>
          イラストレーター Mika Pikazo
          2019年に初の展示会を開催して以来、約3年ぶりの個展をやります。
          イラスト、そしてアニメーションを用いた展示をします。誰かに楽しい、面白いと思ってもらえるものを描けたら、それこそが自分の生活を彩って、元気をもらえる。
          でも生きていると悲しいことや憤りを感じることが沢山あって、どうにかできない自分に絶望する。自分がなんで絵を描いているか、描いていく意味はあるのか問い続けた数年でした。
          自分は『POP』という言葉や、それが持つ意味が大好きで、それを信じています。
          それをいつか体現するためには、自分のなかで持っている黒く煮えたぎった部分や後悔している過去も含めて振り返り、作品に落とし込むべきだと思いました。
          その気持ちにリベンジを挑みたい。自分の感情や過去に向き合った先に、何があるのかを見てみたい。
          それが今回展示会をやりたいと思った経緯です。よろしくお願いします。
        </p>
      </div>
      <div className="about__img">
        <div className="selfie">
          <img src={"/public/selfie.jpeg"} alt="blank"></img>
        </div>
      </div>
    </section>
  );
};

export default About;
