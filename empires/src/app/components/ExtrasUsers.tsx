export function ThreesideExtras(props: { border: boolean, left: { sections: { title: string, users: string[] }[] }, middle: { sections: { title: string, users: string[] }[] }, right: { sections: { title: string, users: string[] }[] } }) {
    return (
        <div className={`extras${props.border ? ' border' : ''}`}>
            <div className="tleft">
                {props.left.sections.map((section, i) => (
                    <>
                        <b>{section.title}</b>
                        <ul>
                            {section.users.map((user, j) => (
                                <li dangerouslySetInnerHTML={{__html:user}}></li>
                            ))}
                        </ul>
                    </>
                ))}
            </div>
            <div className="tmiddle">
                {props.middle.sections.map((section, i) => (
                    <>
                        <b>{section.title}</b>
                        <ul>
                            {section.users.map((user, j) => (
                                <li dangerouslySetInnerHTML={{__html:user}}></li>
                            ))}
                        </ul>
                    </>
                ))}
            </div>
            <div className="tright">
                {props.right.sections.map((section, i) => (
                    <>
                        <b>{section.title}</b>
                        <ul>
                            {section.users.map((user, j) => (
                                <li dangerouslySetInnerHTML={{__html:user}}></li>
                            ))}
                        </ul>
                    </>
                ))}
            </div>
        </div>
    )
}
export function ThreesideExtrasWithTitle(props: { border: boolean, title:string, left: { sections: { title: string, users: string[] }[] }, middle: { sections: { title: string, users: string[] }[] }, right: { sections: { title: string, users: string[] }[] } }) {
    return (
        <div className={`extras${props.border ? ' border' : ''}`}>
            <div style={{width:'100%'}}>
            <div className="full"><b>{props.title}</b></div>
            <div className="tleft">
                {props.left.sections.map((section, i) => (
                    <>
                        <b>{section.title}</b>
                        <ul>
                            {section.users.map((user, j) => (
                                <li dangerouslySetInnerHTML={{__html:user}}></li>
                            ))}
                        </ul>
                    </>
                ))}
            </div>
            <div className="tmiddle">
                {props.middle.sections.map((section, i) => (
                    <>
                        <b>{section.title}</b>
                        <ul>
                            {section.users.map((user, j) => (
                                <li dangerouslySetInnerHTML={{__html:user}}></li>
                            ))}
                        </ul>
                    </>
                ))}
            </div>
            <div className="tright">
                {props.right.sections.map((section, i) => (
                    <>
                        <b>{section.title}</b>
                        <ul>
                            {section.users.map((user, j) => (
                                <li dangerouslySetInnerHTML={{__html:user}}></li>
                            ))}
                        </ul>
                    </>
                ))}
            </div>
            </div>
        </div>
    )
}
export function OnesideExtras(props: { border: boolean, left: { sections: { title: string, users: string[] }[] } }) {
    return (
        <div className={`extras${props.border ? ' border' : ''}`}>
            <div className="full">
                {props.left.sections.map((section, i) => (
                    <>
                        <b>{section.title}</b>
                        <ul>
                            {section.users.map((user, j) => (
                                <li dangerouslySetInnerHTML={{__html:user}}></li>
                            ))}
                        </ul>
                    </>
                ))}
            </div>
        </div>
    )
}
export default function TwosideExtras(props: { border:boolean, left: { sections: { title: string, users: string[] }[] }, right: { sections: { title: string, users: string[] }[] } }) {
    return (
        <div className={`extras${props.border ? ' border' : ''}`}>
            <div className="left">
                {props.left.sections.map((section, i) => (
                    <>
                        <b>{section.title}</b>
                        <ul>
                            {section.users.map((user, j) => (
                                <li dangerouslySetInnerHTML={{__html:user}}></li>
                            ))}
                        </ul>
                    </>
                ))}
            </div>
            <div className="right">
                {props.right.sections.map((section, i) => (
                    <>
                        <b>{section.title}</b>
                        <ul>
                            {section.users.map((user, j) => (
                                <li dangerouslySetInnerHTML={{__html:user}}></li>
                            ))}
                        </ul>
                    </>
                ))}
            </div>
        </div>
    )
}