import * as React from "react";
import { Link } from "gatsby";
import "../../css/index.css";
import WorksCord from "./WorksCard";

const About = () => {
    return (
        <section className="bg-yellow-300 py-40">
            <h2 className="text-6xl mb-2 text-center font-title">WORKS</h2>
            <p className="text-base mb-10 text-center">制作物</p>
            <WorksCord />
        </section>
    )
}

export default About