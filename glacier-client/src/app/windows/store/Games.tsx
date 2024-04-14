import FrameWindow from "@/app/components/FrameWindow"
import { getApps, getWithCategory } from "@/app/utils/AppListHelper"
import { Text } from "@fluentui/react"
import { useEffect } from "react";
import { toggleStoreApp, nameToID } from "./StoreApps";
import { RatingDisplay } from "@fluentui/react-components";

export default function Games() {
    return (
            <div className="store-games-panel store-panel store-grid">
                {getWithCategory('Games').map((app, i) => (
                    <div key={i} className="store-grid-item">
                        <img src={app.image} alt={app.name} onClick={function(){toggleStoreApp(nameToID(app.name), app)}} />
                        <div className="title" onClick={function(){toggleStoreApp(nameToID(app.name), app)}}>{app.name}</div>
                        {/* <div className="rating"><RatingDisplay color={'neutral'} value={5} size={'small'} /></div> */}
                    </div>
                ))}
            </div>
    )
}