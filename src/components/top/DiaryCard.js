import * as React from "react";
import { Link } from "gatsby";
import "../../css/index.css";

const DiaryCard = () => {
    return (
        <div className="p-10 rounded-2xl bg-white relative shadow-card">
            <p class="text-base leading-relaxed min-h-text">
                日記のサンプルが入ります。日記のサンプルが入ります。日記のサンプルが入ります。日記のサンプルが入ります。日記のサンプルが入ります。日記のサンプルが入ります。日日記のサンプルが入
            </p>
            <div className="absolute -right-5 -bottom-8">
                <img src="/profile.png" alt="profile" width="100" height="100" />
            </div>
        </div>
    )
}

export default DiaryCard