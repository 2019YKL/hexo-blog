var fdata={apiurl:"https://moments.zhheo.com/",defaultFish:500,hungryFish:500};if("undefined"!=typeof fdataUser)for(var key in fdataUser)fdataUser[key]&&(fdata[key]=fdataUser[key]);var randomPostTimes=0,randomPostWorking=!1,randomPostTips=["钓到了绝世好文！","在河边打了个喷嚏，吓跑了","你和小伙伴抢夺着","你击败了巨龙，在巢穴中发现了","挖掘秦始皇坟时找到了","在路边闲逛的时候随手买了一个","从学校班主任那拿来了孩子上课偷偷看的","你的同桌无情的从你的语文书中撕下了那篇你最喜欢的","考古学家近日发现了","外星人降临地球学习地球文化，落地时被你塞了","从图书馆顶层的隐秘角落里发现了闪着金光的","徒弟修炼走火入魔，为师立刻掏出了","在大山中唱山歌，隔壁的阿妹跑来了，带着","隔壁家的孩子数学考了满分，都是因为看了","隔壁家的孩子英语考了满分，都是因为看了","小米研发了全新一代MIX手机，据说灵感","修炼渡劫成功，还好提前看了","库克坐上了苹果CEO的宝座，因为他面试的时候看了","阿里巴巴大喊芝麻开门，映入眼帘的就是","师傅说练武要先炼心，然后让我好生研读","科考队在南极大陆发现了被冰封的","飞机窗户似乎被一张纸糊上了，仔细一看是","历史上满写的仁义道德四个字，透过字缝里却全是","十几年前的录音机似乎还能够使用，插上电发现正在播的是","新版语文书拟增加一篇熟读并背诵的","经调查，99%的受访者都没有背诵过","今年的高考满分作文是","唐僧揭开了佛祖压在五指山上的","科学家发现能够解决衰老的秘密，就是每日研读","英特尔发布了全新的至强处理器，其芯片的制造原理都是","新的iPhone产能很足，新的进货渠道是","今年亩产突破了八千万斤，多亏了","陆隐一统天上宗，在无数祖境高手的目光下宣读了","黑钻风跟白钻风说道，吃了唐僧肉能长生不老，他知道是因为看了","上卫生间没带纸，直接提裤跑路也不愿意玷污手中","种下一篇文章就会产生很多很多文章，我种下了","三十年河东，三十年河西，莫欺我没有看过","踏破铁血无觅处，得来全靠","今日双色球中了两千万，预测全靠","因为卷子上没写名字，老师罚抄","为了抗议世间的不公，割破手指写下了","在艺术大街上被贴满了相同的纸，走近一看是","这区区迷阵岂能难得住我？其实能走出来多亏了","今日被一篇文章顶上了微博热搜，它是","你送给乞丐一个暴富秘籍，它是","UZI一个走A拿下五杀，在事后采访时说他当时回想起了","科学家解刨了第一个感染丧尸病毒的人，发现丧尸抗体存在于"],randomPostClick=0;function fetchRandomPost(){if(console.log(fdata.apiurl),0==randomPostWorking){randomPostWorking=!0;var t=360*randomPostTimes;let a=randomPostTips[Math.floor(Math.random()*randomPostTips.length)],o="";o=1e4<randomPostTimes?"愿者上钩":1e3<randomPostTimes?"俯览天下":100<randomPostTimes?"绝世渔夫":75<randomPostTimes?"钓鱼王者":50<randomPostTimes?"钓鱼宗师":20<randomPostTimes?"钓鱼专家":5<randomPostTimes?"钓鱼高手":"钓鱼新手",document.getElementById("random-post").innerHTML=5<=randomPostTimes?"钓鱼中... （Lv."+randomPostTimes+" 当前称号："+o+"）":"钓鱼中...",$(".random-post-start").css("transform","rotate("+t+"deg)"),window.setTimeout(function(){var o;randomPostWorking=(randomPostClick*fdata.hungryFish+fdata.defaultFish<randomPostTimes&&0==Math.round(Math.random())?document.getElementById("random-post").innerHTML="因为只钓鱼不吃鱼，过分饥饿导致本次钓鱼失败...":(o=fdata.apiurl+"randompost",fetch(o).then(o=>o.json()).then(o=>{var t=o.title,n=o.link,o=o.author;document.querySelector("#random-post")&&(document.getElementById("random-post").innerHTML=a+"来自友链 <b>"+o+'</b> 的文章：<a class="random-friends-post" onclick="randomClickLink()" target="_blank" href="'+n+'" rel="external nofollow">'+t+"</a>")})),!1),randomPostTimes+=1},2e3)}}function randomClickLink(){randomPostClick+=1}fetchRandomPost();