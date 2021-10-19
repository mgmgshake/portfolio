import * as React from "react";
import { useStaticQuery, graphql, Link } from "gatsby";
import "../../css/index.css";

const DiaryCard = () => {
    const data = useStaticQuery(
        graphql`
            query {
                allMicrocmsDiary(limit: 1) {
                    nodes {
                        content
                    }
                }
            }  
        `
    )
    return (
        <Link to='/diary'>
            <div className="card relative">
                <div className="text-base leading-relaxed min-h-text max-h-diary ellipsis" dangerouslySetInnerHTML={{ __html: data.allMicrocmsDiary.nodes[0].content }}></div>
                <div className="myIllust absolute right-0 -bottom-6 md:-right-5 md:-bottom-12">
                    <img src="/profile.png" alt="profile" width="100" height="100" />
                </div>
            </div>
        </Link>
    )
}

export default DiaryCard