import FrameWindow from "@/app/components/FrameWindow"
import { getApps, getWithCategory } from "@/app/utils/AppListHelper"
import { Text } from "@fluentui/react"
import { useEffect } from "react";
import { toggleStoreApp, nameToID } from "./StoreApps";

export default function Games() {
    return (
            <div className="store-games-panel store-panel store-grid">
                {getWithCategory('Games').map((app, i) => (
                    <div key={i} className="store-grid-item" onClick={function(){toggleStoreApp(nameToID(app.name))}}>
                        <img src={app.image} alt={app.name} />
                        <div className="title">{app.name}</div>
                    </div>
                ))}
            </div>
    )
}