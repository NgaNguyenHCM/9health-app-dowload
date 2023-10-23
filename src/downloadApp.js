import React, {useEffect, useState} from 'react';
import QRCode from "react-qr-code";

import appDemoScreen from '../src/9health-app-screen.png';
import playStoreIcon from '../src/play-store.png';
import appStoreIcon from '../src/app-store.png';

const DownloadApp = () => {
    const [isMobile, setIsMobile] = useState(false);
    useEffect(() => {
       if((window?.location?.href ?? '').includes('#download-app')){
           checkDeviceBeforeNavigate();
       }
    }, [window?.location?.href])

    const checkDeviceBeforeNavigate = () => {
        const userAgent = navigator?.userAgent;
        let matchMedia = window.matchMedia || window.msMatchMedia;
        let isMobile = matchMedia("(pointer:coarse)").matches;
        let os = 'unknown';
        const clientStrings = [
            {s:'Windows 3.11', r:/Win16/},
            {s:'Windows 95', r:/(Windows 95|Win95|Windows_95)/},
            {s:'Windows ME', r:/(Win 9x 4.90|Windows ME)/},
            {s:'Windows 98', r:/(Windows 98|Win98)/},
            {s:'Windows CE', r:/Windows CE/},
            {s:'Windows 2000', r:/(Windows NT 5.0|Windows 2000)/},
            {s:'Windows XP', r:/(Windows NT 5.1|Windows XP)/},
            {s:'Windows Server 2003', r:/Windows NT 5.2/},
            {s:'Windows Vista', r:/Windows NT 6.0/},
            {s:'Windows 7', r:/(Windows 7|Windows NT 6.1)/},
            {s:'Windows 8.1', r:/(Windows 8.1|Windows NT 6.3)/},
            {s:'Windows 8', r:/(Windows 8|Windows NT 6.2)/},
            {s:'Windows NT 4.0', r:/(Windows NT 4.0|WinNT4.0|WinNT|Windows NT)/},
            {s:'Windows ME', r:/Windows ME/},
            {s:'Android', r:/Android/},
            {s:'Open BSD', r:/OpenBSD/},
            {s:'Sun OS', r:/SunOS/},
            {s:'Linux', r:/(Linux|X11)/},
            {s:'iOS', r:/(iPhone|iPad|iPod)/},
            {s:'Mac OS X', r:/Mac OS X/},
            {s:'Mac OS', r:/(MacPPC|MacIntel|Mac_PowerPC|Macintosh)/},
            {s:'QNX', r:/QNX/},
            {s:'UNIX', r:/UNIX/},
            {s:'BeOS', r:/BeOS/},
            {s:'OS/2', r:/OS\/2/},
            {s:'Search Bot', r:/(nuhk|Googlebot|Yammybot|Openbot|Slurp|MSNBot|Ask Jeeves\/Teoma|ia_archiver)/}
        ];
        for (let id in clientStrings) {
            let cs = clientStrings[id];
            if (cs.r.test(userAgent)) {
                os = cs.s;
                break;
            }
        };

        setIsMobile(isMobile)
        if(isMobile && os !== 'unknown'){
            if(os.toLowerCase() === 'ios'){
                document.getElementById('ios-link').click();
            }else if(os.toLowerCase() === 'android'){
                document.getElementById('android-link').click();
            }
        }
    };

    const reLoadPageUrl = () => {
        window.location = "https://health-landing-page-c634f.web.app/";
    };

    return (
        <div className="App">
            <section style={{ backgroundColor: '#F0F0F0', display: "flex", flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around' }} id="download-app">
                <div className={'app-screen-wrap'}>
                    <img src={appDemoScreen} className={'app-screen'}/>
                </div>
                <div style={{ backgroundColor: '#F0F0F0', display: "flex", flexDirection: 'column', alignItems: 'center', justifyContent:'center' }}>
                    <div className={'header-title'}>Scan to download the app</div>
                    <div className={'qr-wrap'}>
                        <QRCode
                            size={256}
                            style={{ height: "auto", maxWidth: "100%", width: "100%" }}
                            value={'https://health-landing-page-c634f.web.app/home#download-app'}
                            viewBox={`0 0 256 256`}
                        />
                    </div>
                    <div className={'divider-wrap'}>
                        <div style={{display: "flex", flex: 1, height: 2, backgroundColor: "#ccc"}}/>
                        <h3 style={{margin: '0 12px'}}>OR</h3>
                        <div style={{display: "flex", flex: 1, height: 2, backgroundColor: "#ccc"}}/>
                    </div>
                    <div style={{ display: "flex", flexDirection: 'row', alignItems: 'center', justifyContent:'space-around', width: "100%" }}>
                            <a style={{marginRight: 24}} id={'android-link'} href="https://play.google.com/store/apps/details?id=com.ninelife.ninehealthplus" target={'_blank'} onClick={reLoadPageUrl}>
                                <img src={playStoreIcon} style={{objectFit: "scale-down", height: 40, width: '100%' }}/>
                            </a>
                            <a id={'ios-link'} href="https://apps.apple.com/br/app/9health/id6451398757" target={'_top'} onClick={reLoadPageUrl}>
                                <img src={appStoreIcon} style={{objectFit: "scale-down", height: 40, width: "100%" }}/>
                            </a>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default DownloadApp;
