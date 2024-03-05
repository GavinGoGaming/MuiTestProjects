import React from "react";

declare const window: any;
declare const fnames: any;
declare const ftypes: any;

export default function MailChimp() {
    React.useEffect(()=>{
        (function($) {window.fnames = new Array(); window.ftypes = new Array();fnames[0]='EMAIL';ftypes[0]='email';fnames[1]='FNAME';ftypes[1]='text';fnames[2]='LNAME';ftypes[2]='text';fnames[3]='ADDRESS';ftypes[3]='address';fnames[4]='PHONE';ftypes[4]='phone';}(null));
    });
    return (
        <div id="mc_embed_shell">
                                <div id="mc_embed_signup">
                                    <form action="https://designingempires.us14.list-manage.com/subscribe/post?u=2b517453c18f2b9116743dc12&amp;id=f7483c0cad&amp;f_id=00d1a4e0f0" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="validate" target="_blank">
                                        <div id="mc_embed_signup_scroll">
                                            <div className="indicates-required"><span className="asterisk">*</span> indicates required</div>
                                            <div className="mc-field-group"><label htmlFor="mce-EMAIL">Email Address <span className="asterisk">*</span></label><input type="email" name="EMAIL" className="required email" id="mce-EMAIL" required={true} defaultValue=""/><span id="mce-EMAIL-HELPERTEXT" className="helper_text"></span></div><div className="mc-field-group"><label htmlFor="mce-FNAME">First Name <span className="asterisk">*</span></label><input type="text" name="FNAME" className="required text" id="mce-FNAME" required={true} defaultValue=""/></div><div className="mc-field-group"><label htmlFor="mce-LNAME">Last Name <span className="asterisk">*</span></label><input type="text" name="LNAME" className="required text" required={true} id="mce-LNAME" defaultValue=""/></div>
                                        <div id="mce-responses" className="clear foot">
                                            <div className="response" id="mce-error-response" style={{display: "none"}}></div>
                                            <div className="response" id="mce-success-response" style={{display: "none"}}></div>
                                        </div>
                                    <div aria-hidden="true" style={{position: "absolute", left: "-5000px"}}>
                                        /* real people should not fill this in and expect good things - do not remove this or risk form bot signups */
                                        <input type="text" name="b_2b517453c18f2b9116743dc12_f7483c0cad" tabIndex={-1} defaultValue=""/>
                                    </div>
                                        <div className="optionalParent">
                                            <div className="clear foot">
                                                <input type="submit" name="subscribe" id="mc-embedded-subscribe" className="button" value="Subscribe"/>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                                </div>
                                <script type="text/javascript" src="//s3.amazonaws.com/downloads.mailchimp.com/js/mc-validate.js"></script></div>
    )
}