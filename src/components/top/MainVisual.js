import * as React from "react";
import { Link } from "gatsby";

const MainVisual = () => {
    return (
        <div className="bg-gray-800 py-10">
            <div className="container max-w-5xl flex justify-between items-center mx-auto my-3 mb-4">
                <h2 className="text-6xl text-white font-title">Hello!<br />I'm Maki Goto.</h2>
                <p className="w-80">
                    <img width={152} height={152} src="/profile.png" alt="profile" className="w-full y-auto"/>
                </p>
            </div>
            <ul className="flex justify-center">
                <li className="mr-2"><a href="https://twitter.com/mgmgshake" target="_blank" rel="noreferrer"><img width={50} height={50} src="/sns/twitter.png" alt="twitter" /></a></li>
                <li><a href="https://github.com/mgmgshake" target="_blank" rel="noreferrer"><img width={50} height={50} src="/sns/github.png" alt="twitter" /></a></li>
            </ul>
        </div>
    )
}

export default MainVisual