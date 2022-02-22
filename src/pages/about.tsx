import * as React from "react";
import Head from "../components/Head";
import Layout from "../components/Layout";

const AboutPage: React.FC = () => {
  return (
    <>
      <Head title="About" />
      <Layout>
        <div className="ly_cont">
          <h1 className="el_mainTtl">ABOUT</h1>
          <div className="ly_cont_inner">
            <section className="bl_profile">
              <p>
                <img src="/profile.png" alt="自画像" width="200" height="200" />
              </p>
              <dl>
                <dt>Maki Goto</dt>
                <dd>
                  フロントエンドを修行している元デザイナーです。
                  <br />
                  言葉を使わなくても分かりやすいUIを探究しています。
                </dd>
              </dl>
            </section>
            <section>
              <h2 className="el_subTtl">CAREER</h2>
              <ul className="ly_chronology">
                <li className="bl_chronology">
                  <p className="bl_chronology_year">1996</p>
                  <span className="bl_chronology_dot"></span>
                  <div className="bl_chronology_detail">
                    <h3>静岡県生まれ</h3>
                    <p>
                      中学生の時の部活は吹奏楽部で、バリトンサックスを担当していました。
                      <br />
                      毎日首に8kg近い楽器をぶら下げていたので、身長が伸びなくなりました。
                    </p>
                  </div>
                </li>
                <li className="bl_chronology">
                  <p className="bl_chronology_year">2011</p>
                  <span className="bl_chronology_dot"></span>
                  <div className="bl_chronology_detail">
                    <h3>入学 沼津高専 制御情報工学科</h3>
                    <p>
                      機械系の授業が好きでした（プログラミングやる学科なのに…）。
                      <br />
                      弓道やったりアカペラやったり、英語プレゼンテーションコンテストに出場したりしてました。
                    </p>
                  </div>
                </li>
                <li className="bl_chronology">
                  <p className="bl_chronology_year">2016</p>
                  <span className="bl_chronology_dot"></span>
                  <div className="bl_chronology_detail">
                    <h3>卒業 沼津高専 制御情報工学科</h3>
                    <h3>入学 名古屋大学 情報文化学部社会システム情報学科</h3>
                    <p>
                      ３年時編入制度を利用して入学しました。
                      <br />
                      思い切って心理学専攻に進路を変え、社会心理学の研究室に所属していました。
                    </p>
                  </div>
                </li>
                <li className="bl_chronology">
                  <p className="bl_chronology_year">2018</p>
                  <span className="bl_chronology_dot"></span>
                  <div className="bl_chronology_detail">
                    <h3>卒業 名古屋大学 情報文化学部社会システム情報学科</h3>
                    <h3>入社 モバイルサービス事業会社</h3>
                    <p>
                      デザイナーとして、バナー制作/サイトコーディングなどを担当しました。
                    </p>
                  </div>
                </li>
                <li className="bl_chronology">
                  <p className="bl_chronology_year">2022</p>
                  <span className="bl_chronology_dot"></span>
                  <div className="bl_chronology_detail">
                    <h3>退社 モバイルサービス事業会社</h3>
                  </div>
                </li>
              </ul>
            </section>
            <section>
              <h2 className="el_subTtl">SKILLS</h2>
              <ul className="ly_skill">
                <li className="bl_skill">
                  <p className="bl_skill_icon">
                    <img
                      src="/about/skill/photoshop.png"
                      alt="photoshop"
                      width="80"
                      height="80"
                    />
                  </p>
                  <div className="bl_skill_detail">
                    <h3 className="bl_skill_ttl">Photoshop</h3>
                    <p className="bl_skill_level" data-rate="4"></p>
                    <p className="bl_skill_txt">
                      バナー制作・Webデザインなど、一通りの操作ができます。
                    </p>
                  </div>
                </li>
                <li className="bl_skill">
                  <p className="bl_skill_icon">
                    <img
                      src="/about/skill/illustrator.png"
                      alt="illustrator"
                      width="80"
                      height="80"
                    />
                  </p>
                  <div className="bl_skill_detail">
                    <h3 className="bl_skill_ttl">Illustrator</h3>
                    <p className="bl_skill_level" data-rate="2"></p>
                    <p className="bl_skill_txt">
                      簡単なイラストの加工・ロゴ制作などの操作ができます。イラストは描けません…。
                    </p>
                  </div>
                </li>
                <li className="bl_skill">
                  <p className="bl_skill_icon">
                    <img
                      src="/about/skill/xd.png"
                      alt="xd"
                      width="80"
                      height="80"
                    />
                  </p>
                  <div className="bl_skill_detail">
                    <h3 className="bl_skill_ttl">XD</h3>
                    <p className="bl_skill_level" data-rate="3"></p>
                    <p className="bl_skill_txt">
                      ワイヤーフレームの作成、デザインの作成ができます。
                    </p>
                  </div>
                </li>
                <li className="bl_skill">
                  <p className="bl_skill_icon">
                    <img
                      src="/about/skill/figma.png"
                      alt="figma"
                      width="80"
                      height="80"
                    />
                  </p>
                  <div className="bl_skill_detail">
                    <h3 className="bl_skill_ttl">Figma</h3>
                    <p className="bl_skill_level" data-rate="5"></p>
                    <p className="bl_skill_txt">
                      ワイヤーフレームの作成・デザインの作成ができます。最近はFigmaがメインです。
                    </p>
                  </div>
                </li>
                <li className="bl_skill">
                  <p className="bl_skill_icon">
                    <img
                      src="/about/skill/html.png"
                      alt="html/css"
                      width="80"
                      height="80"
                    />
                  </p>
                  <div className="bl_skill_detail">
                    <h3 className="bl_skill_ttl">HTML/CSS</h3>
                    <p className="bl_skill_level" data-rate="5"></p>
                    <p className="bl_skill_txt">
                      サイトコーディング・レスポンシブ対応ができます。CSSアニメーションもよく使います。
                    </p>
                  </div>
                </li>
                <li className="bl_skill">
                  <p className="bl_skill_icon">
                    <img
                      src="/about/skill/js.png"
                      alt="js"
                      width="80"
                      height="80"
                    />
                  </p>
                  <div className="bl_skill_detail">
                    <h3 className="bl_skill_ttl">JavaScript</h3>
                    <p className="bl_skill_level" data-rate="4"></p>
                    <p className="bl_skill_txt">
                      サイトの動きづけや、APIなどのバックエンドとの連携もできます。
                    </p>
                  </div>
                </li>
              </ul>
            </section>
            <section>
              <h2 className="el_subTtl">MORE INFO</h2>
              <ul className="ly_moreInfo">
                <li className="bl_info">
                  <div className="bl_info_left">
                    <p>
                      <img src="/icon/icon_smile.svg" alt="" />
                    </p>
                    <h3>好きなもの</h3>
                  </div>
                  <ul className="bl_info_right">
                    <li>社会心理学</li>
                    <li>ボーッとする</li>
                    <li>本屋巡り</li>
                    <li>お寿司</li>
                    <li>ムーミン</li>
                    <li>TWICE</li>
                    <li>カラオケ</li>
                  </ul>
                </li>
                <li className="bl_info">
                  <div className="bl_info_left">
                    <p>
                      <img src="/icon/icon_sad.svg" alt="" />
                    </p>
                    <h3>苦手なもの</h3>
                  </div>
                  <ul className="bl_info_right">
                    <li>大きな音</li>
                    <li>うなぎ</li>
                    <li>パクチー</li>
                  </ul>
                </li>
                <li className="bl_info">
                  <div className="bl_info_left">
                    <p>
                      <img src="/icon/icon_niyari.svg" alt="" />
                    </p>
                    <h3>趣向</h3>
                  </div>
                  <ul className="bl_info_right">
                    <li>INFP-T 仲介者</li>
                    <li>たい焼きと大判焼きはカスタード派</li>
                    <li>目玉焼きは塩か醤油</li>
                    <li>コーヒーと紅茶なら紅茶</li>
                    <li>たけのこ派</li>
                  </ul>
                </li>
                <li className="bl_info">
                  <div className="bl_info_left">
                    <p>
                      <img src="/icon/icon_normal.svg" alt="" />
                    </p>
                    <h3>近状</h3>
                  </div>
                  <div className="bl_info_right">
                    <p>
                      高校ぶりに弓道を初めました。まずは射法八節から学び直してます。
                    </p>
                  </div>
                </li>
              </ul>
            </section>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default AboutPage;
