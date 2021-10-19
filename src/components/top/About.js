import * as React from "react";
import { Link } from "gatsby";
import "../../css/index.css";
import DiaryCard from "./DiaryCard";

const About = () => {
    return (
        <section className="bg-yellow-300 py-20 md:py-40">
            <h2 className="midashi mb-2">ABOUT</h2>
            <p className="text-base mb-10 text-center">私について</p>
            <div className="container max-w-5xl mx-auto md:flex md:justify-between">
                <div className="md:w-card-1/2 md:flex flex-col justify-between mb-8 md:mb-0">
                    <DiaryCard />
                    <div className="card mt-8 md:mt-0">
                        <dl>
                            <dt>
                                <h3 className="text-2xl">😍</h3>
                            </dt>
                            <dd className="mb-4">
                                <p>
                                    フロントエンドの勉強 / 心理学 / 哲学 / 本屋をめぐること / お寿司 / ムーミン / TWICE
                                </p>
                            </dd>
                            <dt>
                                <h3 className="text-2xl">😢</h3>
                            </dt>
                            <dd>
                                <p>
                                    大きな音 / パクチー / うなぎ
                                </p>
                            </dd>
                        </dl>
                    </div>
                </div>
                <div className="md:w-card-1/2 card">
                    <h3 className="text-3xl mb-5">Career</h3>
                    <dl>
                        <dt className="text-2xl mb-4">1996</dt>
                        <dd className="mb-5">静岡県生まれ</dd>
                        <dt className="text-2xl mb-4">2011</dt>
                        <dd className="mb-5">入学 沼津高専 制御情報工学科</dd>
                        <dt className="text-2xl mb-4">2016</dt>
                        <dd className="mb-5">
                            <ul>
                                <li>卒業 沼津高専 制御情報工学科</li>                          
                                <li>入学 名古屋大学 情報文化学部社会システム情報学科（３年時編入）</li>                          
                            </ul>
                        </dd>
                        <dt className="text-2xl mb-4">2018</dt>
                        <dd>
                            <ul>
                                <li>卒業 名古屋大学 情報文化学部社会システム情報学科</li>                          
                                <li>入社 モバイルサービス事業会社</li>                          
                            </ul>
                        </dd>
                    </dl>
                </div>
            </div>
        </section>
    )
}

export default About