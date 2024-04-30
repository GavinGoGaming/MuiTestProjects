import { useEffect } from "react";
import Window from "../components/Window";
import { Button, Input } from "@fluentui/react-components";
import { SearchRegular } from "@fluentui/react-icons";
declare const search: any;
declare const __uv$config: any;
declare const registerSW: any;
export default function EdgeApp() {

    useEffect(() => {
        /**
         * @type {HTMLFormElement}
        */
        const form = document.getElementById("uv-form");
        /**
         * @type {HTMLInputElement}
         */
        const address = document.getElementById("uv-address");
        /**
         * @type {HTMLInputElement}
         */
        const searchEngine = document.getElementById("uv-search-engine");
        /**
         * @type {HTMLParagraphElement}
         */
        const error = document.getElementById("uv-error");
        /**
         * @type {HTMLPreElement}
         */
        const errorCode = document.getElementById("uv-error-code");
        /**
         * @type {HTMLIFrameElement}
         */
        const frame = document.getElementById("uv-iframe");

        if(form && error && errorCode && searchEngine && address) {
            form.addEventListener("submit", async (event) => {
                event.preventDefault();
        
                try {
                    await registerSW();
                } catch (err) {
                    var errmsg = (err as Error).message;
                    if(errmsg.includes("registerSW is not defined")) {
                        (frame as HTMLIFrameElement).src = (address as HTMLInputElement).value.startsWith('http') ? (address as HTMLInputElement).value : "https://www.google.com/search?q=" + (address as HTMLInputElement).value+"&igu=1";
                        (frame as HTMLIFrameElement).classList.remove("hidden");
                        return;
                    }
                    error.textContent = "Failed to register service worker.";
                    errorCode.textContent = errmsg.includes("registerSW is not defined")?"Running on client-side, server-side is needed":errmsg;
                    throw err;
                }
        
                const url = search((address as HTMLInputElement).value, (searchEngine as HTMLInputElement).value);
                    (frame as HTMLIFrameElement).src = __uv$config.prefix + __uv$config.encodeUrl(url);
                    (frame as HTMLIFrameElement).classList.remove("hidden");
                });
        }
    });

    return (
      <Window title="Microsoft Edge" id="edge" taskbarIconID="edge" color={'gray'} seperateBorder="1px solid #ffffff0a">
        {/* <div style={{textAlign:'left'}}> */}
            <form id="uv-form" className="flex-center" style={{margin:'8px'}}>
                <input
                    id="uv-search-engine"
                    value="https://www.google.com/search?q=%s"
                    type="hidden"
                />
                <Input id="uv-address" type="text" style={{width:'calc(80% - 5px)'}} placeholder="Search the top of the iceberg" autoComplete={"false"} />
                <Button type="submit" color={'primary'} style={{width:'20%',marginLeft:'5px',marginBottom:'3px'}} icon={<SearchRegular/>} iconPosition="after">Search</Button>
            </form>
            <iframe id="uv-iframe" src="" className='hidden' style={{width:'100%',height:'88%',position:'absolute',border:'none'}} frameBorder={0}/>
            <div className="desc">
                <p id="uv-error"></p>
                <pre id="uv-error-code"></pre>
            </div>
        {/* </div> */}
      </Window>
    );
}