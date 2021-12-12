import React from "react";

const TrendsKeyword = () => {
    const [state, setState] = React.useState([
        {
            id: 1,
            heading:"#World News",
            body: "100K",
            footer: "100k + people are tweeting",
        },
        {
            id: 2,
            heading: "#World Wide",
            body: "500K",
            footer: "500k + people are tweeting",
            
        },
        {
            id: 3,
            heading: "#Information",
            body: "200K",
            footer: "200k + people are tweeting",
        },
    ]);
    return (
        <div className="keywords">
            <div className="key">
                <div className="keyword__heading">
                    <h4>Trends for you</h4>
                </div>
                {state.map((keyword) => (
                    <div key={keyword.id}>
                        <div className="country">{keyword.body}</div>
                        <div className="keyword__name">
                            <strong>{keyword.heading}</strong>
                        </div>
                        <div className="keyword__tweets">{keyword.footer}</div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TrendsKeyword;