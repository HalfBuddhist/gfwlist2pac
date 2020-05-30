function isMatchProxy(url, pattern) {
    try {
        return new RegExp(pattern.replace('.', '\\.')).test(url);
    } catch (e) {
        return false;
    }
}


function FindProxyForURL(url, host) {

   if(!dnsResolve("chuangxin.office.") ) {
       return "DIRECT";
   }

   var Proxy = 'PROXY proxy.chuangxin.com:8123; SOCKS5 proxy.chuangxin.com:1080; SOCKS proxy.chuangxin.com:1080; DIRECT;'
   var list = [

	'shutterstock.com',  // gaolinyan
	'netflix.com',  // wanghua
	'nflxext.com',  // wanghua
	'strikingly.com',  // anita	

	'mail.chuangxin.com',  // email
	'office.com',  // email
	'office365.com',  // email
	'sharepoint.com',  // email

	'telegram.org',  // telegram
	't.me',  // telegram
	'tdesktop.com',  // telegram

	'ls.apple.com',  // apple
	'amazon.com',  // amazon

	'towardsdatascience.com',  // ai-wujiahong

	'walgreens.com',  // sherry
	'wag-static.com',  // sherry
	'adobedtm.com',  // sherry
	'drugstore.com',  // sherry

	'stackoverflow.com',  //stackoverflow.com
	'w3schools.com',  //w3schools.com
	'tensorflow.org',  //tensorflow.org
	'kaggle.com',  //liangrui
	'arxiv.org', //liangrui
	'ros.org', //linguosen
    'pinterest.com', //pinterest
    'pinimg.com', //pinterest
	'gcr.io', //ai liuguiyang
	'grc.io', //ai liuguiyang
	'sketch.cloud',  //liangrui
	'tensorflow.org',  //AI
	'onedrive.live.com',  //onedirver

    'mscoco.org', //liangrui
    'image-net.org', //liangrui
    'places2.csail.mit.edu', //liangrui

    'sourceforge.net',
	'adia.ae',  // taowen+

	'office.com',  // office365
	'office365.com',  // office365
	'microsoftonline.com',  // office365


	'hangseng.com.cn', 
	'hangseng.com',  
	'instagram.com',  // instagram
	'github.com',  // github
	'githubapp.com',
	'googleblog.com',  // google blog
	'blogger.com',  // google blog
	'medium.com',  
	'reuters.com',  
	'logmein.com',  // logmein
	'box.com',  // lipuyu
	'wsj.com',  // lipuyu

	'astrill.com',  // vpn service 

	'thenewslens.com',  // zhengxiangwen
	'expedia.com',  // tina 20160114
	'expedia.com.hk',  // tina 20160114
	'rd2.zhaopin.com',  // zhilian

	'streak.com',  // CRM
	'bittitan.com',//bittitanmigror
	'dropbox.com',  // CRM
	'chandon.com',  // chandon
	'bloomberg.com',  //bloomberg.com

	//twitter
    't.co',
    'twitter.com',
    'twimg.com',
    'posterous.com',
    'tinypic.com',
    'twitpic.com',
    'bitly.com',
    'yfrog.com',


	//facebook
    'facebook.com',
    'fbcdn.net', 
    'flickr.com',
    'tfbnw.net',
    'facebook.net',


	'seloger.com',  //france website 


	//youtube
    'youtube.com',
    'ytimg.com',
    'youtube-nocookie.com',
    'googlevideo.com',
    '.youtube',
    '.youtu.be',
    '.google.cn',
	'google.co.jp',

	//Feedly START
	'feedly.com',
	'appspot.com',

    'ggpht.com',
    'hzmangel.info',
    'slideshare.net',
    'golang.org',
    'vimeo.com',


    // google site.
    'google.com.sg',
    'google.com',
    'google.co.in',
    'gmail.com',
	'imap.gmail.com',
    '.gmail.com',
	'googlemail.com',
    'gstatic.com',
    'ggpht.com',
    'appspot.com',
    'googleapis.com',
    'content.googleapis.com',
    'googlecode.com',
    'blogger.com',
    'googleapis.com',
    'android.com',
    'googlesource.com',
    'googleusercontent.com',
    'googlelabs.com',
    'googleadservices.com',
    'blogspot.com',
    'googlesyndication.com',
    'feedburner.com',
    'google-analytics.com',
    'panoramio.com',
    'linkedin.com',
    'crunchbase.com',
    'bizjournals.com',
    'bitcointalk.org',
    'wordpress.com',  //wprdpress
    '.wordpress.com',
 	'wp.com',  //wordpress
    'pixiv.net',

	//tech-website
    'angularjs.org',
    'techcrunch.com',


    'wikipedia.org',
    'nytimes.com',

    'udn.com', 

    'svb.com',     //SVB bank
	'citibank.com',  //citi bank

    'chalky.co', 
    'railsinstaller.org', 
    'railsinstaller.com', 


    'freeweibo.com',  //freeweibo
    'freedomhouse.org',

    'eslite.com',
    '.tw',
    'gvm.com.tw',
    'bit.ly',
    'chinatimes.com',
    'scmpchinese.com',
    'adobe.com',

    'nytimes.com',
    'peacehall.com',
    'boxun.com',
    'aimatch.com',
    'wikipedia.org',
    'pixiv.net',
    'pixnet.net',

    'acrocomcontent.com',  // acrobat.com

    'netmarble.com',  // korea game
    'inven.co.kr',  // korea game
    'cocoapods.org',  // ios develop
    'trello.com',  // ios develop
    'tmagazine.com', //xiangwen zheng

    'dailymotion.com',  // video
    'wenxuecity.com',  // wenxuecheng

	'youtu.be',//youtube


     //outlook
     'outlook.com',
     
	 // bet
	 'pinnacle.com',

	 //lqw 
	 'blogspot.com',
	 'blogspot.sg',
	 'redis.io',
	 'draw.io',
	 '5dimes.eu',
	 'digitalocean.com',
	 'quora.com',
	 'reddit.com',
	 'gitbooks.io',
	 'elastic.co',
	 'docker.com',
	 'epochtimes.com',
	 'yasiv.com',
	 'rawgit.com',
	 'golang.org',
	 'gitlab.com',
	 'sexvon.com',
	 'lpl.qq.com',
	 'zerotier.com',
	 'medium.com',
	 'pinb888.com',
	 'pinbet88.com',
	 'freshchat.com',
	 'apache.org',
	 'jetbrains.com',
	 'manjaro.org',
	 'bt.byr.cn',
	 'privoxy.org',
	 'sexvon.com',
	 'av6k.com',
	 'sourceforge.net',
	 'kcjisu.fun',

	 //lqw ss list
    '1001yx.com',
	'1024mx.bid',
	'1684.cc',
	'17kanb.com',
	'188bet.com',
	'2341.tv',
	'5dimes.eu',
	'6-seconds.com',
	'608088.com',
	'654k.net',
	'917rbb.org',
	'917rbb.pw',
	'925fxw.com',
	'about.com',
	'apple.com',
	'appwen.com',
	'asiancapper.com',
	'bbc.com',
	'betandskill.com',
	'bitsnoop.com',
	'bo1.me',
	'btku.org',
	'businessweekly.com.tw',
	'cc5.cc',
	'checkio.org',
	'chinadmd.com',
	'chinanetwifi.com',
	'cjzxedu.com',
	'cloudfront.net',
	'cn163.net',
	'cnproxy.com',
	'crazyfeng.com',
	'cyrusin.github.io',
	'd309xhyv4asw4n.cloudfront.net',
	'dianliwenmi.com',
	'digitalocean.com',
	'duanzhihu.com',
	'e7wan.com',
	'ebookabc.net',
	'fenxs.com',
	'free-lunwen.com',
	'freebets.com',
	'goldencui.org',
	'google.com',
	'greplin.com',
	'hackerrank.com',
	'hd62.com',
	'hdwan.net',
	'linuxsir.org',
	'livefootballol.com',
	'livefootballol.me',
	'loeyun.com',
	'loldytt.com',
	'loopc.com',
	'lynu.edu.cn',
	'memect.com',
	'mergely.com',
	'no-ip.com',
	'noalgo.info',
	'owenyang0.github.io',
	'pcmag.com',
	'pocoo.org',
	'researchgate.net',
	'rus.ec',
	'sbobet.com',
	'scgsj.gov.cn',
	'sci-hub.org',
	'sshgfw.com',
	'tensorflow.org',
	'tokyocold.cn',
	'tom365.co',
	'topcoder.com',
	'ubuntips.com.ar',
	'v2ex.com',
	'valleytalk.org',
	'voicetube.com',
	'vziyuan.com',
	'wikia.com',
	'wikipedia.org',
	'wordpress.com',
	'wuji8.com',
	'zhuatieba.com',
	'chromium.org',
	'mozilla.org',
    ];


    for(var i=0, l=list.length; i<l; i++) {
        if (isMatchProxy(url, list[i])) {
            return Proxy;
        }
    }

    return 'DIRECT';
}
