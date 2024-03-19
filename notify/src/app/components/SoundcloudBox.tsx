export default function SoundcloudBox({width, height, id}: Readonly<{width: number|string, height: number|string, id: number}>) {
    return (
        <iframe width={width} height={height} scrolling="no" frameBorder="no" src={`https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/${id}&amp;color=ff0000&amp;inverse=true&amp;auto_play=false&amp;show_user=true`} style={{background:'transparent'}}></iframe>
    )
}