import {useEffect} from "react";

export default function Study({props}) {
    useEffect(() => {
        let script = document.createElement("script");
        script.type = "text/javascript";
        script.src = "https://bot.insertchatgpt.com/widgets/iframe.js?widget_id=203d9ef0-f369-44d4-9c63-8c38dfb9dbbe";
        document.getElementsByTagName("head")[0].appendChild(script);
    }, [])


    return (
        <div className={"grid place-items-center"}>
            <div id="my-ai-chatbot" style={{height: "700px"}}></div>
        </div>
    )
}