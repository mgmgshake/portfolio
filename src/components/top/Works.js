import * as React from "react";
import { useStaticQuery, graphql, Link } from "gatsby";
import "../../css/index.css";
import WorksCord from "./WorksCard";

const Works = () => {
    const data = useStaticQuery(
        graphql`
            query {
                allMicrocmsWorks {
                    nodes {
                        description
                        slug
                        title
                        thumbnail {
                            url
                        }
                    }
                }
            }  
        `
    )
    return (
        <section className="bg-yellow-300 py-40">
            <h2 className="text-6xl mb-2 text-center font-title">WORKS</h2>
            <p className="text-base mb-10 text-center">制作物</p>
            <ul>
                { data.allMicrocmsWorks.nodes.map(work => {
                    return <li><WorksCord work={work} /></li>
                })}
            </ul>
        </section>
    )
}


export default Works