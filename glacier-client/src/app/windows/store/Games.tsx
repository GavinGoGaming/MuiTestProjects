import FrameWindow from "@/app/components/FrameWindow"
import { getApps, getWithCategory } from "@/app/utils/AppListHelper"
import { Text } from "@fluentui/react"
import { useEffect } from "react";
import { toggleStoreApp, nameToID } from "./StoreApps";
import { RatingDisplay } from "@fluentui/react-components";
import { PinFilled, PinOffFilled } from '@fluentui/react-icons';
import { useFavorites } from "@/app/utils/FavoriteAppHelper";

export default function Games() {
    // const [favorites, setFavorites] = useFavorites();

    // function addFavorite(app: any) {
    //     const updatedFavorites = [...favorites, app];
    //     setFavorites((updatedFavorites));
    // }
    // function removeFavorite(app: any) {
    //     const updatedFavorites = favorites.filter((fav: string) => fav !== app);
    //     setFavorites((updatedFavorites));
    // }
    // function isFavorite(app: any): boolean {
    //     return favorites.includes(app);
    // }
    return (
            <div className="store-games-panel store-panel store-grid">
                {getWithCategory('Games').map((app, i) => (
                    <div key={i} className="store-grid-item">
                        <img src={app.image} alt={app.name} onClick={function(){toggleStoreApp(nameToID(app.name), app)}} />
                        <div className="title" onClick={function(){toggleStoreApp(nameToID(app.name), app)}}>{app.name}</div>
                        {/* <div className="rating"><RatingDisplay color={'neutral'} value={5} size={'small'} /></div> */}
                        {/* <div className={`pin ${isFavorite(app.name) ? 'color-no' : 'color-yes'}`} onClick={ isFavorite(app.name) ? ()=>{removeFavorite(app.name);} : ()=>{addFavorite(app.name);}}>
                            { isFavorite(app.name) ? <PinOffFilled fontSize={'16px'}/> : <PinFilled fontSize={'16px'}/> }
                        </div> */}
                    </div>
                ))}
            </div>
    )
}