export default function ImageCardPanel(props: {title: string, description: string, image: string, imageAlt: string, imageOnRight: boolean, border: [string, string, string]}) {
    return (
        <div className="mobile-prop" style={{marginLeft:'17.5%',width:'65%',paddingTop:'60px',paddingBottom:'60px',borderTop:'1px solid #333'}}>
            <div className="mobile-prop-inner" style={{display:'flex',flexDirection:'row',justifyContent:'space-between'}}>
                <div className={props.imageOnRight ? '' : 'dontDisplayOnMobile'} style={{width:props.imageOnRight?'60%':'40%'}}>
                    {props.imageOnRight ? <div className={`icp_content_box ${props.imageOnRight?'icpright':'icpleft'}`}><h1>{props.title}</h1><p>{props.description}</p></div> :
                    <div className="icp_image"><div className="icp_border" style={{background:`${props.border[0]}-gradient(${props.border[1]}, ${props.border[2]})`}}></div><img src={props.image} alt={props.imageAlt} style={{width:'100%',height:'100%'}}></img></div>}
                </div>
                <div className={props.imageOnRight ? 'dontDisplayOnMobile' : ''} style={{width:props.imageOnRight?'40%':'60%'}}>
                    {props.imageOnRight ? <div className="icp_image"><div className="icp_border" style={{background:`${props.border[0]}-gradient(${props.border[1]}, ${props.border[2]})`}}></div><img src={props.image} alt={props.imageAlt} style={{width:'100%',height:'100%'}}></img></div> :
                    <div className={`icp_content_box ${props.imageOnRight?'icpright':'icpleft'}`}><h1>{props.title}</h1><p>{props.description}</p></div>}
                </div>
            </div>
        </div>
    );
}