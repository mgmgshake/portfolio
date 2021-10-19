import * as React from "react";
import { Link } from "gatsby";
import "../../css/index.css";

const WorksCard = (props) => {
    const { title, description, thumbnail, slug } = props.work
    return (
        <div className="relative container max-w-5xl mx-auto">
            <div className="hidden lg:block rounded-2xl bg-white md:w-9/12">
                <img className="w-full h-auto" src={thumbnail?.url} alt={title} />
            </div>
            <div className="card md:w-6/12 lg:w-4/12 relative lg:absolute lg:right-0 lg:-bottom-10">
                <div className="block lg:hidden rounded-2xl bg-white mb-3">
                    <img className="w-full h-auto" src={thumbnail?.url} alt={title} />
                </div>
                <h3 className="text-2xl text-gray-800 font-bold mb-3">{title}</h3>
                <ul className="flex flex-wrap -mx-1 mb-3">
                    <li className="text-xs px-3 py-2 text-white bg-blue-500 rounded-2xl mx-1 mb-1">LP制作</li>
                    <li className="text-xs px-3 py-2 text-white bg-blue-500 rounded-2xl mx-1 mb-1">デザイン</li>
                    <li className="text-xs px-3 py-2 text-white bg-blue-500 rounded-2xl mx-1 mb-1">コーディング</li>
                </ul>
                <p className="text-gray-700 leading-relax mb-4">{description}</p>
                <Link to={`/works/${slug}`} className="text-blue-500 float-right">view more</Link>
            </div>
        </div>
    )
}

export default WorksCard