import React from "react"
import ContentLoader from "react-content-loader";

function LoadingBlock() {
    return (
        <ContentLoader
            speed={2}
            width={435}
            height={526}
            viewBox="0 0 435 526"
            backgroundColor="#f3f3f3"
            foregroundColor="#ecebeb">
            <rect x="786" y="107" rx="3" ry="3" width="88" height="6" />
            <rect x="786" y="125" rx="3" ry="3" width="52" height="6" />
            <rect x="738" y="155" rx="3" ry="3" width="410" height="6" />
            <rect x="738" y="171" rx="3" ry="3" width="380" height="6" />
            <rect x="738" y="187" rx="3" ry="3" width="178" height="6" />
            <circle cx="710" cy="128" r="20" />
            <rect x="1" y="2" rx="30" ry="30" width="330" height="456" />
        </ContentLoader>
    )
}

export default LoadingBlock;
