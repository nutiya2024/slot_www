window.__require=function t(e,o,n){function i(r,a){if(!o[r]){if(!e[r]){var s=r.split("/");if(s=s[s.length-1],!e[s]){var l="function"==typeof __require&&__require;if(!a&&l)return l(s,!0);if(c)return c(s,!0);throw new Error("Cannot find module '"+r+"'")}r=s}var p=o[r]={exports:{}};e[r][0].call(p.exports,function(t){return i(e[r][1][t]||t)},p,p.exports,t,e,o,n)}return o[r].exports}for(var c="function"==typeof __require&&__require,r=0;r<n.length;r++)i(n[r]);return i}({ALLParticleEffect:[function(t,e,o){"use strict";cc._RF.push(e,"2fe73vs5XdB/oPegR7KrdYs","ALLParticleEffect");var n,i=this&&this.__extends||(n=function(t,e){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o])})(t,e)},function(t,e){function o(){this.constructor=t}n(t,e),t.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)}),c=this&&this.__decorate||function(t,e,o,n){var i,c=arguments.length,r=c<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,o,n);else for(var a=t.length-1;a>=0;a--)(i=t[a])&&(r=(c<3?i(r):c>3?i(e,o,r):i(e,o))||r);return c>3&&r&&Object.defineProperty(e,o,r),r};Object.defineProperty(o,"__esModule",{value:!0});var r=cc._decorator,a=r.ccclass,s=r.property,l=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.par_run1=null,e.par_run2=null,e.par_run3=null,e.par_boom1=null,e.par_boom2=null,e.par_boom3=null,e}return i(e,t),e.prototype.start=function(){},e.prototype.onEnable=function(){this.resetParRun();var t=this.par_run1.getPosition(),e=cc.v2(220,0),o=this.par_run2.getPosition(),n=cc.v2(-220,0),i=this.par_run3.getPosition(),c=cc.v2(-660,0),r=cc.v2(100,1e3),a=cc.v2(250,1e3),s=cc.v2(400,1e3);this.runEffect(this.par_run1,t,r,e,1),this.runEffect(this.par_run2,o,a,n,2),this.runEffect(this.par_run3,i,s,c,3)},e.prototype.resetParRun=function(){this.par_run1.setPosition(586.047,62),this.par_run2.setPosition(652.528,62),this.par_run3.setPosition(727.757,62),this.par_run1.active=!0,this.par_run2.active=!0,this.par_run3.active=!0},e.prototype.runEffect=function(t,e,o,n,i){var c=this,r=cc.v2(n.x+130,0);cc.tween(t).then(cc.bezierTo(2,[e,o,r,n]).easing(cc.easeIn(1.4))).call(function(){t.getComponent(cc.ParticleSystem).resetSystem(),t.setPosition(n),t.active=!1,c.showBoomParit(i)}).start()},e.prototype.showBoomParit=function(t){var e=null;switch(t){case 1:e=this.par_boom1;break;case 2:e=this.par_boom2;break;case 3:e=this.par_boom3}var o=e.getComponent(cc.ParticleSystem);e.active=!0,this.scheduleOnce(function(){o.resetSystem(),e.active=!1},.2)},c([s(cc.Node)],e.prototype,"par_run1",void 0),c([s(cc.Node)],e.prototype,"par_run2",void 0),c([s(cc.Node)],e.prototype,"par_run3",void 0),c([s(cc.Node)],e.prototype,"par_boom1",void 0),c([s(cc.Node)],e.prototype,"par_boom2",void 0),c([s(cc.Node)],e.prototype,"par_boom3",void 0),c([a],e)}(cc.Component);o.default=l,cc._RF.pop()},{}],Bezier:[function(t,e,o){"use strict";cc._RF.push(e,"392e1oMix9F74vILRKcHWXO","Bezier");var n,i=this&&this.__extends||(n=function(t,e){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o])})(t,e)},function(t,e){function o(){this.constructor=t}n(t,e),t.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)}),c=this&&this.__decorate||function(t,e,o,n){var i,c=arguments.length,r=c<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,o,n);else for(var a=t.length-1;a>=0;a--)(i=t[a])&&(r=(c<3?i(r):c>3?i(e,o,r):i(e,o))||r);return c>3&&r&&Object.defineProperty(e,o,r),r};Object.defineProperty(o,"__esModule",{value:!0});var r=cc._decorator,a=r.ccclass,s=r.executeInEditMode,l=r.property,p=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.p1Tracker=null,e.p2Tracker=null,e.random=!1,e.debug=!1,e.p1=null,e.c1=null,e.c2=null,e.p2=null,e.g=null,e}return i(e,t),e.prototype.onLoad=function(){this.g=this.getComponent(cc.Graphics),this.p1=this.node.getChildByName("p1"),this.c1=this.node.getChildByName("c1"),this.c2=this.node.getChildByName("c2"),this.p2=this.node.getChildByName("p2"),this.p1.active=!1,this.c1.active=!1,this.c2.active=!1,this.p2.active=!1},e.prototype.startMove=function(t,e,o,n){if(void 0===o&&(o=null),void 0===n&&(n=null),t){var i=this.getBezierPoints(t);t.setPosition(i[0]),cc.tween(t).bezierTo(e,i[1],i[2],i[3]).call(function(){o&&o.call(n,t)}).start()}},e.prototype.getBezierPoints=function(t){var e=this.convertToNodeSpace(t,this.p1),o=this.convertToNodeSpace(t,this.c1),n=this.convertToNodeSpace(t,this.c2),i=this.convertToNodeSpace(t,this.p2);if(this.random){var c=this.calcMirrorD(e,i,o);o=this.getRandomP(o,c);var r=this.calcMirrorD(e,i,n);n=this.getRandomP(n,r)}return[cc.v2(e.x,e.y),cc.v2(o.x,o.y),cc.v2(n.x,n.y),cc.v2(i.x,i.y)]},e.prototype.updateTracker=function(){if(this.p1Tracker){var t=this.convertToNodeSpace(this.p1,this.p1Tracker);this.p1.setPosition(t)}this.p2Tracker&&(t=this.convertToNodeSpace(this.p2,this.p2Tracker),this.p2.setPosition(t))},e.prototype.update=function(){this.debug&&this.draw()},e.prototype.draw=function(){if(this.debug)if(this.p1&&this.c1&&this.c2&&this.p2){var t=this.p1.position,e=this.c1.position,o=this.c2.position,n=this.p2.position;this.g.clear(),this.g.moveTo(t.x,t.y),this.g.bezierCurveTo(e.x,e.y,o.x,o.y,n.x,n.y),this.g.stroke()}else this.g.clear()},e.prototype.convertToNodeSpace=function(t,e){return t.parent.convertToNodeSpaceAR(e.parent.convertToWorldSpaceAR(e.position))},e.prototype.calcMirrorD=function(t,e,o){var n=e.sub(t),i=o.sub(t),c=n.normalize(),r=i.normalize(),a=c.dot(r),s=i.len()*a,l=n.normalize().mul(s),p=t.add(l).sub(o).mul(2);return o.add(p)},e.prototype.getRandomP=function(t,e){var o=e.sub(t).mul(Math.random());return t.add(o)},c([l({type:cc.Node,tooltip:"\u8d77\u59cb\u70b9\u8ffd\u8e2a\u5668"})],e.prototype,"p1Tracker",void 0),c([l({type:cc.Node,tooltip:"\u7ec8\u6b62\u70b9\u8ffd\u8e2a\u5668"})],e.prototype,"p2Tracker",void 0),c([l({tooltip:"\u662f\u5426\u968f\u673a"})],e.prototype,"random",void 0),c([l({tooltip:"\u8fd0\u884c\u65f6\u663e\u793aBezier\u66f2\u7ebf"})],e.prototype,"debug",void 0),c([a,s],e)}(cc.Component);o.default=p,cc._RF.pop()},{}],MoneyComingConsts:[function(t,e,o){"use strict";cc._RF.push(e,"c2dd5y7DARDKpoEQw6hQrhX","MoneyComingConsts");var n=this&&this.__decorate||function(t,e,o,n){var i,c=arguments.length,r=c<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,o,n);else for(var a=t.length-1;a>=0;a--)(i=t[a])&&(r=(c<3?i(r):c>3?i(e,o,r):i(e,o))||r);return c>3&&r&&Object.defineProperty(e,o,r),r};Object.defineProperty(o,"__esModule",{value:!0}),o.E_AudioMap=void 0;var i=cc._decorator,c=i.ccclass;i.property,o.E_AudioMap={BIG_WIN:"Big_win",BIG_WIN_END:"Big_win_end",MEGA_WIN:"Mega_win",MEGA_WIN_END:"Mega_win_end",EPIC_WIN:"Epic_win",EPIC_WIN_END:"Epic_win_end"};var r=function(){function t(){this.GameNet=null,this.JPES=0,this.BET=[1,5,10,50,100],this.lunWinTimes1=[1e3,250,50,150,75,500,25,100],this.lunWinTimes2=[2e3,500,100,300,150,1e3,50,200],this.lunWinTimes3=[5e4,1e4,1e3,5e3,1500,25e3,500,2500],this.lunWinTimes4=[1e5,2e4,2e3,1e4,3e3,5e4,1e3,5e3],this.BETTIMESNUM=100,this.PlayerInfo=null,this.BETNUM=1,this.Entries=0,this.InitScrollIndex=0,this.winScore=0,this.allWinScore=0,this.freeWinScore=0,this.whellWinScore=0,this.startGameWinScore=0,this.resuleFreeHeadCard=[],this.resultHeadCard=[],this.resultFinalHeadCard=null}var e;return e=t,Object.defineProperty(t,"once",{get:function(){return e._instance||(e._instance=new e),e._instance},enumerable:!1,configurable:!0}),t.destroyInstance=function(){e._instance&&(e._instance=null)},t.prototype.getRandomNumberSeed=function(t){var o=[],n=e.once.BET[e.once.JPES]*e.once.BETNUM;if(1==n||5==n||10==n)switch(t){case 1:o=[0,1,2,0,1,2];break;case 2:case 3:o=[0,1,3,0,1,3]}if(50==n||100==n)switch(t){case 1:o=[0,1,2,0,1,2];break;case 2:case 3:o=[0,1,2,3,4,0]}return o},t.prototype.getRandomSpecialseed=function(){var t=[],o=e.once.BET[e.once.JPES]*e.once.BETNUM;return 1==o&&(t=[5,6,8,5,6,8]),5==o&&(t=[5,6,8,9,5,6]),10==o&&(t=[5,6,8,5,6,8]),50!=o&&100!=o||(t=[5,6,7,8,10,10]),t},e=n([c],t)}();o.default=r,cc._RF.pop()},{}],MoneyComingNetwork:[function(t,e,o){"use strict";cc._RF.push(e,"0411dpwTP5K/47KmwSTU9f4","MoneyComingNetwork");var n,i=this&&this.__extends||(n=function(t,e){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o])})(t,e)},function(t,e){function o(){this.constructor=t}n(t,e),t.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)}),c=this&&this.__decorate||function(t,e,o,n){var i,c=arguments.length,r=c<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,o,n);else for(var a=t.length-1;a>=0;a--)(i=t[a])&&(r=(c<3?i(r):c>3?i(e,o,r):i(e,o))||r);return c>3&&r&&Object.defineProperty(e,o,r),r};Object.defineProperty(o,"__esModule",{value:!0});var r=t("./MoneyComingConsts"),a=t("./MoneyComingUI"),s=cc._decorator,l=s.ccclass,p=s.property,u=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.view=null,e}return i(e,t),e.prototype.onLoad=function(){r.default.once.GameNet=this,GameConfig.SubGameMgr.subGameNet=this,this.send("loginGame",{})},e.prototype.addNetEvent=function(t,e){var o=null;if(cc.log("00----------------------\u670d\u52a1\u5668\u8fd4\u56de----cmd",t),"lotteryResult"==t&&(o=window.changeResultJSON_Function(e),this.endNet(),o.ResultCode&&1==o.ResultCode)){cc.log("**-----\u5b50\u6e38\u620f\u56de\u8c03data=",o);var n=o.ResultData.viewarray.nHandCards;cc.log("**-----\u5b50\u6e38\u620f\u56de\u8c03data2=",n),r.default.once.resultHeadCard=o.ResultData.viewarray.nHandCards,r.default.once.resuleFreeHeadCard=o.ResultData.viewarray.freeHands,r.default.once.startGameWinScore=o.ResultData.viewarray.winOdds,r.default.once.whellWinScore=o.ResultData.viewarray.totalWhellWin,r.default.once.freeWinScore=o.ResultData.viewarray.freeWin,r.default.once.winScore=o.ResultData.viewarray.win,r.default.once.allWinScore=o.ResultData.winscore,r.default.once.Entries=o.ResultData.userscore,this.view.lotteryResult(),this.view.updateUserScore(r.default.once.Entries)}if("loginGameResult"==t){if(o=window.changeResultJSON_Function(e),cc.log("LoginGameResult:",o),"1"!=o.resultid)return void this.outGame();if(o.Obj&&o.Obj.betList&&(r.default.once.BET=o.Obj.betList),r.default.once.JPES=0,o.Obj&&o.Obj.betDefault)for(var i=0;i<o.Obj.betList.length;i++)if(o.Obj.betList[i]==o.Obj.betDefault){r.default.once.JPES=i;break}this.view.refreshJPES()}},e.prototype.sendLotty=function(t,e){this.send("lottery",{bet:t,nBetList:e})},e.prototype.send=function(t,e){void 0===e&&(e={}),cc.log("send cmd:"+t+",data:"+JSON.stringify(e)),window.sendNetWorkData(t,JSON.stringify(e))},e.prototype.outGame=function(){Common.backHall("Are you sure you want to leave the game?",function(){})},e.prototype.endNet=function(){this.node.stopActionByTag(4040404)},c([p(a.default)],e.prototype,"view",void 0),c([l],e)}(cc.Component);o.default=u,cc._RF.pop()},{"./MoneyComingConsts":"MoneyComingConsts","./MoneyComingUI":"MoneyComingUI"}],MoneyComingUI:[function(t,e,o){"use strict";cc._RF.push(e,"87e80wfRZJK6KX0OsQ2/KN8","MoneyComingUI");var n,i=this&&this.__extends||(n=function(t,e){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o])})(t,e)},function(t,e){function o(){this.constructor=t}n(t,e),t.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)}),c=this&&this.__decorate||function(t,e,o,n){var i,c=arguments.length,r=c<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,o,n);else for(var a=t.length-1;a>=0;a--)(i=t[a])&&(r=(c<3?i(r):c>3?i(e,o,r):i(e,o))||r);return c>3&&r&&Object.defineProperty(e,o,r),r};Object.defineProperty(o,"__esModule",{value:!0});var r=t("./MoneyComingConsts"),a=t("./UI/SlotScroll"),s=cc._decorator,l=s.ccclass,p=s.property,u=function(e){function o(){var t=null!==e&&e.apply(this,arguments)||this;return t.node_lunpan=null,t.img_zhizhenlunpan_1=null,t.img_zhizhenlunpan_2=null,t.number_lunpan_1=null,t.number_lunpan_2=null,t.number_lunpan_3=null,t.number_lunpan_4=null,t.node_luopan_1=null,t.node_luopan_2=null,t.node_lock=null,t.node_scrollLock=null,t.node_LvLLockTips1=null,t.node_LvLLockTips2=null,t.node_topNarmal=null,t.node_topSpecial=null,t.node_topSpecial_1=null,t.node_topSpecial_2=null,t.node_topSpecial_3=null,t.node_endWin=null,t.btn_fastStart=null,t.node_help=null,t.node_intoLunpanPar=null,t.point_par_1=null,t.point_par_2=null,t.par_intoLunpanPar_1=null,t.par_intoLunpanPar_2=null,t.par_allEffect=null,t.par_EffectSroll=null,t.node_endParticalCold=null,t.text_endWinScore=null,t.text_userScore=null,t.vScrolls=[],t.text_userBetScore=null,t.text_lineScore=null,t.text_userWinScore=null,t.text_topWinScore_1=null,t.text_topWinScore_2=null,t.btn_start=null,t.btn_addBet=null,t.btn_reduceBet=null,t.bgm=null,t.btn_click=null,t.Wheel_Rotate=null,t.effect_special=null,t.bigWinAudio=[],t.slotRunTime=25,t.slotRunTime2=5,t.winScoreAnimTotal=4,t.winScoreAnimCount=0,t.intoFreeGameFlag=!1,t.MusicDic={},t.fuck=0,t}return i(o,e),o.prototype.playBGM=function(t,e){void 0===e&&(e=!0),t=t||this.MusicDic[404],e&&(this.MusicDic[404]=t),this.play(t,!0,!0)},o.prototype.stopBGM=function(){cc.audioEngine.stopAll()},o.prototype.playEffect=function(t){this.play(t,!1,!1)},o.prototype.stopEffect=function(t){this.MusicDic[t]&&cc.audioEngine.stop(this.MusicDic[t])},o.prototype.play=function(t,e,o){void 0===o&&(o=!1),e&&cc.audioEngine.stopAll();var n=this[t];n&&(this.MusicDic[t]=cc.audioEngine.play(n,e,1))},o.prototype.start=function(){},o.prototype.onLoad=function(){var e=t("PlayerInfo").getInstant;r.default.once.PlayerInfo=e;var o=e.playerCoin;o&&this.updateUserScore(o),this.initGameLunpan(),this.refreshJPES(),this.refreshTopLVLUI(),this.setWinScore(0),this.initVScrolls(),this.showLuoPan(),this.playBGM("bgm",!0)},o.prototype.initVScrolls=function(){for(var t=this,e=0;e<this.vScrolls.length;e++){for(var o=this.vScrolls[e],n=[],i=0;i<5;i++)3==e?n.push(Math.floor(6*Math.random())+6):n.push(Math.floor(5*Math.random())+1);o.initData(e,n),o.setScrollCompleteCallback(function(e){0==e&&t.onScrollCompleted()}),o.resetAllAnimation()}},o.prototype.onScrollCompleted=function(){var t=this,e=r.default.once.resultHeadCard,o=(r.default.once.freeWinScore,r.default.once.startGameWinScore),n=r.default.once.allWinScore;if(10==e[e.length-1])this.text_topWinScore_1.string=""+o/r.default.once.BETTIMESNUM,this.resetWinScore(o),this.playSlotAnimal(e),this.node.runAction(cc.sequence(cc.delayTime(2),cc.callFunc(function(){t.showTopSpecial(2),t.showIntoLunpanPar()})));else if(11==e[e.length-1])this.text_topWinScore_1.string=""+o/r.default.once.BETTIMESNUM,this.resetWinScore(o),this.playSlotAnimal(e),this.node.runAction(cc.sequence(cc.delayTime(2),cc.callFunc(function(){t.showTopSpecial(3),t.showIntoLunpanPar()})));else if(9==e[e.length-1])this.text_topWinScore_1.string=""+o/r.default.once.BETTIMESNUM,this.resetWinScore(o),this.showAllEffect(!0),this.playSlotAnimal(e),this.intoFreeGameFlag?n>0?(this.showEndWinNode(n),this.playSlotAnimal(e),this.playWinScoreAnim()):cc.tween(this.node).delay(1).call(function(){t.showTopSpecial(0),t.resrtGameUI()}).start():this.node.runAction(cc.sequence(cc.delayTime(2),cc.callFunc(function(){t.showTopSpecial(1),t.intoGameFreeRound()})));else if(n>0){this.resetWinScore(n);var i=r.default.once.Entries+n;this.updateUserScore(i),this.playSlotAnimal(e),this.playWinScoreAnim(),cc.tween(this.node).delay(.5).call(function(){t.showTopSpecial(0),t.resrtGameUI()}).start()}else this.showTopSpecial(0),this.setWinScore(0),this.resrtGameUI()},o.prototype.playSlotAnimal=function(t){this.showWinAnim(t[0],this.vScrolls[0]),this.showWinAnim(t[1],this.vScrolls[1]),this.showWinAnim(t[2],this.vScrolls[2]),this.showWinAnim(t[3],this.vScrolls[3])},o.prototype.showWinAnim=function(t,e){for(var o=0,n=e._mElSpData;o<n.length;o++){var i=n[o];if(i.type==t){var c=this.getAnimNameStuff(t);t>5&&t<=11&&(c="scatter"),""!=c&&i.playWinAniam("numberLight_"+c)}}},o.prototype.getAnimNameStuff=function(t){var e=new Map;e.set(1,"1"),e.set(2,"5"),e.set(3,"10"),e.set(4,"0"),e.set(5,"00");var o=e.get(t);return o&&""!=o?o:""},o.prototype.showTopSpecial=function(t){this.node_topSpecial_1.active=!1,this.node_topSpecial_2.active=!1,this.node_topSpecial_3.active=!1,this.node_topSpecial.active=!0,this.node_topNarmal.active=!1,3==t?this.node_topSpecial_3.active=!0:2==t?this.node_topSpecial_2.active=!0:1==t?this.node_topSpecial_1.active=!0:(this.node_topSpecial.active=!1,this.node_topNarmal.active=!0)},o.prototype.showIntoLunpanPar=function(){var t=this;this.node_intoLunpanPar.active=!0,this.par_intoLunpanPar_1.active=!0,this.par_intoLunpanPar_2.getComponent(cc.ParticleSystem).resetSystem(),this.par_intoLunpanPar_2.active=!1;var e=this.point_par_1.getPosition(),o=cc.v2(150,-1e3),n=this.point_par_2.getPosition();cc.tween(this.par_intoLunpanPar_1).then(cc.bezierTo(1,[e,o,n]).easing(cc.easeIn(.3))).call(function(){t.par_intoLunpanPar_2.active=!0,t.par_intoLunpanPar_1.getComponent(cc.ParticleSystem).resetSystem(),t.par_intoLunpanPar_1.setPosition(e),t.par_intoLunpanPar_1.active=!1,t.scheduleOnce(function(){t.node_intoLunpanPar.active=!1,t.showFreeLunpan()},.5)}).start()},o.prototype.showFreeLunpan=function(){var t=this,e=r.default.once.whellWinScore;this.node_lunpan.stopAllActions(),this.playEffect("Wheel_Rotate");var o=r.default.once.lunWinTimes1;o=2==r.default.once.JPES?r.default.once.lunWinTimes2:3==r.default.once.JPES?r.default.once.lunWinTimes3:4==r.default.once.JPES?r.default.once.lunWinTimes4:r.default.once.lunWinTimes1,this.node.active=!0;for(var n=0,i=0;i<o.length;i++)if(o[i]==Math.floor(e/100)){n=i;break}var c=45*n;this.node_lunpan.angle=0,cc.log("num",n,e,o),cc.scaleTo(.5,1).easing(cc.easeIn(3));var a=cc.rotateBy(3,1800).easing(cc.easeIn(3)),s=cc.rotateBy(2,360-c).easing(cc.easeOut(2));this.node_lunpan.runAction(cc.sequence(a,s,cc.delayTime(.2),cc.callFunc(function(){t.stopEffect("Wheel_Rotate"),t.showEndWinNode(e)})))},o.prototype.showAllEffect=function(t){void 0===t&&(t=!0),this.par_allEffect.active=t},o.prototype.showFreeScrollEffect=function(t){var e=this.par_EffectSroll,o=e.getComponent("ScrollParticleEffect");e.active=!(t<=0),o.starEffectNum(t)},o.prototype.bigWinShowTime=function(t){var e=2;switch(t){case 10:e=4;break;case 50:e=10;break;case 100:e=11}return e},o.prototype.showWinEndNodeTitle=function(t){var e=[null,null,null];switch(e[0]=this.node_endWin.children[2],e[1]=this.node_endWin.children[3],e[2]=this.node_endWin.children[4],e[0].active=!1,e[1].active=!1,e[2].active=!1,t){case 10:case 5:e[0].active=!0;break;case 50:e[1].active=!0;break;case 100:e[2].active=!0}},o.prototype.showEndWinNode=function(t){var e=this,o=r.default.once.allWinScore;if(cc.log("**---------showWinScore=",o),o>0){var n=r.default.once.BET[r.default.once.JPES],i=o/(n*r.default.once.BETTIMESNUM),c=!1;if(cc.log("**---------winScoreTimes=",i),i>=5&&i<=100&&(c=!0),this.text_topWinScore_2.string=""+t/r.default.once.BETTIMESNUM,c){this.node_endWin.active=!0;var a=this.bigWinShowTime(n);this.playBigWinAudio(n),this.showWinEndNodeTitle(n),cc.tween({scale:0}).to(1,{scale:1},{progress:function(t,n,i,c){var a=((0+c*o)/r.default.once.BETTIMESNUM).toFixed(2);return e.text_endWinScore.string=""+a,1}}).delay(1).call(function(){e.resetWinScore(o)}).delay(a).call(function(){e.node_endWin.active=!1,e.setWinScore(0),e.resrtGameUI()}).start()}else this.resetWinScore(o),cc.tween(this.node).delay(1).call(function(){e.setWinScore(0),e.resrtGameUI()}).start();var s=r.default.once.Entries+o;this.updateUserScore(s)}else this.setWinScore(0),this.resrtGameUI()},o.prototype.intoGameFreeRound=function(){var t=this;this.resetfreeGameData(),this.resetAllVScrollAnim();var e=1==this.node_scrollLock.active?2:3;this.showFreeScrollEffect(e),this.node.runAction(cc.sequence(cc.delayTime(1),cc.callFunc(function(){t.startGame(r.default.once.resultHeadCard)})))},o.prototype.resetfreeGameData=function(){this.intoFreeGameFlag=!0,r.default.once.resultHeadCard=r.default.once.resuleFreeHeadCard},o.prototype.onFastStartBetClick=function(){this.playEffect("btn_click"),this.resetFastStartBtn()},o.prototype.resetFastStartBtn=function(){var t=this.btn_fastStart.getChildByName("fastTag");t.active?(t.active=!1,this.slotRunTime=25,this.slotRunTime2=5):(t.active=!0,this.slotRunTime=5,this.slotRunTime2=1)},o.prototype.onStartBetClick=function(){this.resetWinScore(0),this.resetAllVScrollAnim(),this.playEffect("btn_click"),this.btn_start.interactable=!1,this.btn_addBet.interactable=!1,this.btn_reduceBet.interactable=!1;var t=r.default.once.BET[r.default.once.JPES];r.default.once.GameNet.sendLotty(t*r.default.once.BETTIMESNUM,[t*r.default.once.BETTIMESNUM])},o.prototype.startGame=function(t,e){void 0===e&&(e=!1),cc.log("**---------\u7ed3\u679c\u724c=",t);var o,n=[0,0,0,0],i=[],c=Math.floor(5*Math.random());o=c+1>5?0:c+1;for(var a=this.vScrolls[0].getSlotItemIdx(),s=this.vScrolls[1].getSlotItemIdx(),l=this.vScrolls[2].getSlotItemIdx(),p=r.default.once.getRandomSpecialseed(),u=0;u<4;u++){var d=-1,h=-1;switch(u+1){case 1:d=a[c],h=a[o];break;case 2:d=s[c],h=s[o];break;case 3:d=l[c],h=l[o];break;case 4:d=p[c]+1,h=p[o]+1}i.push(d),n[u]=h}for(u=0;u<t.length;u++){var f=!1;1==(1==this.node_scrollLock.active)&&2==u||(t[u]>0&&(n[u]=t[u],f=!0),this.intoFreeGameFlag?u<3&&this.vScrolls[u].startSlot(n,0,4,this.slotRunTime-u*this.slotRunTime2,f,i):this.vScrolls[u].startSlot(n,0,4,this.slotRunTime-u*this.slotRunTime2,f,i))}},o.prototype.resrtGameUI=function(){var t=this;this.btn_start.interactable=!0,this.btn_addBet.interactable=!0,this.btn_reduceBet.interactable=!0,this.node_topNarmal.active=!0,this.text_topWinScore_1.string="",this.text_topWinScore_2.string="",this.showTopSpecial(0),this.intoFreeGameFlag=!1,this.initGameLunpan(),this.showAllEffect(!1),this.scheduleOnce(function(){t.showFreeScrollEffect(0)},.8)},o.prototype.resetGameData=function(){this.resetWinScore(0)},o.prototype.initGameLunpan=function(){this.node_lunpan.stopAllActions(),this.node_lunpan.angle=0,cc.tween(this.node_lunpan).to(50,{angle:-360}).repeatForever().start()},o.prototype.lotteryResult=function(){for(var t=-1,e=1==this.node_scrollLock.active,o=0,n=this.vScrolls;o<n.length;o++){var i=n[o];t+=1,1==e&&2==t||i.initElements(!0)}this.startGame(r.default.once.resultHeadCard)},o.prototype.onAddBetNumClick=function(){this.playEffect("btn_click"),r.default.once.JPES=++r.default.once.JPES>=r.default.once.BET.length?r.default.once.BET.length-1:r.default.once.JPES,this.refreshJPES(),this.refreshTopLVLUI(),this.showLuoPan()},o.prototype.refreshTopLVLUI=function(){this.node_LvLLockTips1.getChildByName("img_light").active=r.default.once.JPES>2,this.node_LvLLockTips2.getChildByName("img_light").active=r.default.once.JPES<=2;for(var t=0;t<4;t++)this.node_LvLLockTips1.getChildByName("node_betTips_"+(t+1)).active=!1,this.node_LvLLockTips2.getChildByName("node_betTips_"+(t+1)).active=!1;0==r.default.once.JPES?(this.node_LvLLockTips1.getChildByName("node_betTips_2").active=!0,this.node_LvLLockTips2.getChildByName("node_betTips_1").active=!0):1==r.default.once.JPES?(this.node_LvLLockTips1.getChildByName("node_betTips_3").active=!0,this.node_LvLLockTips2.getChildByName("node_betTips_2").active=!0):(this.node_LvLLockTips1.getChildByName("node_betTips_4").active=!0,this.node_LvLLockTips2.getChildByName("node_betTips_3").active=!0)},o.prototype.showLuoPan=function(){this.number_lunpan_1.active=!1,this.number_lunpan_2.active=!1,this.number_lunpan_3.active=!1,this.number_lunpan_4.active=!1,this.node_luopan_1.active=!1,this.node_luopan_2.active=!1,this.img_zhizhenlunpan_1.active=!1,this.img_zhizhenlunpan_2.active=!1,this.node_lock.active=!1,this.node_scrollLock.active=!1,3==r.default.once.JPES?(this.number_lunpan_3.active=!0,this.node_luopan_2.active=!0,this.img_zhizhenlunpan_2.active=!0):4==r.default.once.JPES?(this.number_lunpan_4.active=!0,this.node_luopan_2.active=!0,this.img_zhizhenlunpan_2.active=!0):2==r.default.once.JPES?(this.node_luopan_1.active=!0,this.number_lunpan_2.active=!0,this.img_zhizhenlunpan_1.active=!0):1==r.default.once.JPES?(this.node_luopan_1.active=!0,this.number_lunpan_1.active=!0,this.img_zhizhenlunpan_1.active=!0):(this.node_luopan_1.active=!0,this.number_lunpan_1.active=!0,this.img_zhizhenlunpan_1.active=!0,this.node_lock.active=!0,this.node_scrollLock.active=!0)},o.prototype.refreshJPES=function(){var t=r.default.once.BET[r.default.once.JPES];this.text_userBetScore.string=""+t*r.default.once.BETNUM,this.text_lineScore.string=""+t*r.default.once.BETNUM},o.prototype.onReducebtnClick=function(){this.playEffect("btn_click"),r.default.once.JPES=--r.default.once.JPES<0?0:r.default.once.JPES,this.refreshJPES(),this.refreshTopLVLUI(),this.showLuoPan()},o.prototype.updateUserScore=function(t){t=(t/r.default.once.BETTIMESNUM).toFixed(2),this.text_userScore.string=""+t},o.prototype.resetWinScore=function(t,e){void 0===e&&(e=2);var o=t/r.default.once.BETTIMESNUM;this.text_userWinScore.string=o.toFixed(e)},o.prototype.setWinScore=function(t,e){void 0===e&&(e=2),this.text_userWinScore.string=t.toFixed(e)},o.prototype.onBtnHelpClick=function(){this.playEffect("btn_click"),this.node_help.active?this.node_help.active=!1:this.node_help.active=!0},o.prototype.onClickExit=function(){this.playEffect("btn_click"),Common.backHall("Are you sure you want to leave the game?",function(){cc.audioEngine.stopAll()})},o.prototype.resetAllVScrollAnim=function(){for(var t=0,e=this.vScrolls;t<e.length;t++)e[t].resetAllAnimation()},o.prototype.playWinScoreAnim=function(){var t=this,e=this.text_userWinScore.node.parent.getComponent(cc.Animation);e.hasEventListener(cc.Animation.EventType.FINISHED)||e.on(cc.Animation.EventType.FINISHED,function(){t.winScoreAnimCount+=1;var e=t.text_userWinScore.node.parent.getComponent(cc.Animation);t.winScoreAnimCount>=t.winScoreAnimTotal?(e.stop(),e.setCurrentTime(0),t.winScoreAnimCount=0):e.play("winScoreScale",0)},this),e.play("winScoreScale")},o.prototype.playBigWinAudio=function(t){var e=-1,o="";switch(t){case 5:case 10:e=0,o=r.E_AudioMap.BIG_WIN;break;case 50:e=1,o=r.E_AudioMap.MEGA_WIN;break;case 100:e=2,o=r.E_AudioMap.EPIC_WIN}return""!=o&&(this.MusicDic[o]||(this.MusicDic[o]=-1),cc.audioEngine.stopAll(),this.MusicDic[o]=cc.audioEngine.play(this.bigWinAudio[e],!1,.5),cc.audioEngine.setFinishCallback(this.MusicDic[o],this.musicScriptFinishCall.bind(this))),-1},o.prototype.musicScriptFinishCall=function(){cc.audioEngine.resumeAll(),this.MusicDic[404],this.MusicDic[404]=cc.audioEngine.play(this.bgm,!0,.5)},c([p(cc.Node)],o.prototype,"node_lunpan",void 0),c([p(cc.Node)],o.prototype,"img_zhizhenlunpan_1",void 0),c([p(cc.Node)],o.prototype,"img_zhizhenlunpan_2",void 0),c([p(cc.Node)],o.prototype,"number_lunpan_1",void 0),c([p(cc.Node)],o.prototype,"number_lunpan_2",void 0),c([p(cc.Node)],o.prototype,"number_lunpan_3",void 0),c([p(cc.Node)],o.prototype,"number_lunpan_4",void 0),c([p(cc.Node)],o.prototype,"node_luopan_1",void 0),c([p(cc.Node)],o.prototype,"node_luopan_2",void 0),c([p(cc.Node)],o.prototype,"node_lock",void 0),c([p(cc.Node)],o.prototype,"node_scrollLock",void 0),c([p(cc.Node)],o.prototype,"node_LvLLockTips1",void 0),c([p(cc.Node)],o.prototype,"node_LvLLockTips2",void 0),c([p(cc.Node)],o.prototype,"node_topNarmal",void 0),c([p(cc.Node)],o.prototype,"node_topSpecial",void 0),c([p(cc.Node)],o.prototype,"node_topSpecial_1",void 0),c([p(cc.Node)],o.prototype,"node_topSpecial_2",void 0),c([p(cc.Node)],o.prototype,"node_topSpecial_3",void 0),c([p(cc.Node)],o.prototype,"node_endWin",void 0),c([p(cc.Node)],o.prototype,"btn_fastStart",void 0),c([p(cc.Node)],o.prototype,"node_help",void 0),c([p(cc.Node)],o.prototype,"node_intoLunpanPar",void 0),c([p(cc.Node)],o.prototype,"point_par_1",void 0),c([p(cc.Node)],o.prototype,"point_par_2",void 0),c([p(cc.Node)],o.prototype,"par_intoLunpanPar_1",void 0),c([p(cc.Node)],o.prototype,"par_intoLunpanPar_2",void 0),c([p(cc.Node)],o.prototype,"par_allEffect",void 0),c([p(cc.Node)],o.prototype,"par_EffectSroll",void 0),c([p(cc.Node)],o.prototype,"node_endParticalCold",void 0),c([p(cc.Label)],o.prototype,"text_endWinScore",void 0),c([p(cc.Label)],o.prototype,"text_userScore",void 0),c([p([a.default])],o.prototype,"vScrolls",void 0),c([p(cc.Label)],o.prototype,"text_userBetScore",void 0),c([p(cc.Label)],o.prototype,"text_lineScore",void 0),c([p(cc.Label)],o.prototype,"text_userWinScore",void 0),c([p(cc.Label)],o.prototype,"text_topWinScore_1",void 0),c([p(cc.Label)],o.prototype,"text_topWinScore_2",void 0),c([p(cc.Button)],o.prototype,"btn_start",void 0),c([p(cc.Button)],o.prototype,"btn_addBet",void 0),c([p(cc.Button)],o.prototype,"btn_reduceBet",void 0),c([p(cc.AudioClip)],o.prototype,"bgm",void 0),c([p(cc.AudioClip)],o.prototype,"btn_click",void 0),c([p(cc.AudioClip)],o.prototype,"Wheel_Rotate",void 0),c([p(cc.AudioClip)],o.prototype,"effect_special",void 0),c([p(cc.AudioClip)],o.prototype,"bigWinAudio",void 0),c([l],o)}(cc.Component);o.default=u,cc._RF.pop()},{"./MoneyComingConsts":"MoneyComingConsts","./UI/SlotScroll":"SlotScroll",PlayerInfo:void 0}],ScrollParticleEffect:[function(t,e,o){"use strict";cc._RF.push(e,"09715rWDyVOi5sExbIfbwTf","ScrollParticleEffect");var n,i=this&&this.__extends||(n=function(t,e){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o])})(t,e)},function(t,e){function o(){this.constructor=t}n(t,e),t.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)}),c=this&&this.__decorate||function(t,e,o,n){var i,c=arguments.length,r=c<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,o,n);else for(var a=t.length-1;a>=0;a--)(i=t[a])&&(r=(c<3?i(r):c>3?i(e,o,r):i(e,o))||r);return c>3&&r&&Object.defineProperty(e,o,r),r};Object.defineProperty(o,"__esModule",{value:!0});var r=cc._decorator,a=r.ccclass,s=r.property,l=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.par_run1=null,e.par_run2=null,e.par_run3=null,e}return i(e,t),e.prototype.start=function(){},e.prototype.starEffectNum=function(t){this.resetParRun(),this.par_run1.active=t>=1,this.par_run2.active=t>=2,this.par_run3.active=t>=3;var e=this.par_run1.getComponent(cc.Animation),o=this.par_run2.getComponent(cc.Animation),n=this.par_run3.getComponent(cc.Animation);t>=1&&e.play(),t>=2&&o.play(),t>=3&&n.play()},e.prototype.onEnable=function(){},e.prototype.resetParRun=function(){this.par_run1.active=!1,this.par_run2.active=!1,this.par_run3.active=!1;var t=this.par_run1.getComponent(cc.Animation),e=this.par_run2.getComponent(cc.Animation),o=this.par_run3.getComponent(cc.Animation);this.par_run1.children[0].getComponent(cc.ParticleSystem).resetSystem(),this.par_run2.children[0].getComponent(cc.ParticleSystem).resetSystem(),this.par_run3.children[0].getComponent(cc.ParticleSystem).resetSystem(),t.stop(),e.stop(),o.stop()},c([s(cc.Node)],e.prototype,"par_run1",void 0),c([s(cc.Node)],e.prototype,"par_run2",void 0),c([s(cc.Node)],e.prototype,"par_run3",void 0),c([a],e)}(cc.Component);o.default=l,cc._RF.pop()},{}],SlotScroll:[function(t,e,o){"use strict";cc._RF.push(e,"a1650p4Vy5LnJPtNobM2FO5","SlotScroll");var n,i=this&&this.__extends||(n=function(t,e){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o])})(t,e)},function(t,e){function o(){this.constructor=t}n(t,e),t.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)}),c=this&&this.__decorate||function(t,e,o,n){var i,c=arguments.length,r=c<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,o,n);else for(var a=t.length-1;a>=0;a--)(i=t[a])&&(r=(c<3?i(r):c>3?i(e,o,r):i(e,o))||r);return c>3&&r&&Object.defineProperty(e,o,r),r};Object.defineProperty(o,"__esModule",{value:!0});var r=t("../MoneyComingConsts"),a=t("./SlotsItem"),s=cc._decorator,l=s.ccclass,p=s.property,u=cc.Enum({VS_NUMBER:0,VS_SPECIAL:1}),d=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.slotsElement=null,e.ScrollType=u.VS_NUMBER,e.ScrollIndex=-1,e._idx=-1,e._data=[],e.mTempData=[],e.mNodeEls=null,e.mSpPoints=[],e.mElSpData=[],e.initIdx=-1,e.onScrollComplete=null,e}return i(e,t),e.prototype.setScrollCompleteCallback=function(t){this.onScrollComplete=t},Object.defineProperty(e.prototype,"_mElSpData",{get:function(){return this.mElSpData},enumerable:!1,configurable:!0}),e.prototype.onLoad=function(){this.mNodeEls=new cc.Node("elsContainer"),this.mNodeEls.parent=this.node,this.initElements(),r.default.once.InitScrollIndex=r.default.once.InitScrollIndex+1},e.prototype.initElements=function(t){void 0===t&&(t=!1),this.mNodeEls.setPosition(cc.Vec2.ZERO);for(var e=r.default.once.getRandomNumberSeed(this.ScrollIndex),o=r.default.once.getRandomSpecialseed(),n=0;n<6;n++){var i=0;if(this.ScrollType==u.VS_NUMBER&&(i=e[Math.floor(Math.random()*e.length)],e.splice(e.indexOf(i),1)),this.ScrollType==u.VS_SPECIAL&&(i=o[Math.floor(Math.random()*o.length)],o.splice(o.indexOf(i),1)),t)(c=this.mElSpData[n]).setType(i+1);else{var c,s=cc.instantiate(this.slotsElement);s.parent=this.mNodeEls,(c=s.getComponent(a.default)).setType(i+1);var l=cc.v2(0,430*n-430);s.setPosition(l),this.mSpPoints.push(l),this.mElSpData.push(c)}}},e.prototype.startSlot=function(t,e,o,n,i,c){var r=this;e+=1;for(var a=3;a<this.mElSpData.length;a++)this.mElSpData[a].show();var s,l=null;if(s=i?0:200,e==n){var p=cc.moveBy(.3,cc.v2(0,-430*o)),u=cc.moveBy(.08,cc.v2(0,-30)).easing(cc.easeOut(3)),d=cc.moveBy(.1,cc.v2(0,30)).easing(cc.easeIn(3));l=cc.sequence(p,u,d),this.node.runAction(cc.sequence(cc.delayTime(.2),cc.callFunc(function(){for(var t=0;t<r.mElSpData.length;t++)t<1&&r.mElSpData[t]})))}else l=cc.moveBy(.07,cc.v2(0,-430*o));this.mNodeEls.runAction(cc.sequence(l,cc.callFunc(function(){for(var a=0;a<o;a++)r.mTempData[a]=r.mElSpData[a];for(a=o;a<6;a++)r.mElSpData[a-o]=r.mElSpData[a];var l=r.mNodeEls.getPosition(),p=o-1;for(a=5;a>=6-o;a--)r.mElSpData[a]=r.mTempData[p],p--,r.mElSpData[a].node.setPosition(cc.v2(0,-l.y+r.mSpPoints[a].y-s));if(e<n)e==n-1&&r.resetVEles(t,c),r.startSlot(t,e,o,n,i,c);else{for(r.mNodeEls.stopAllActions(),a=3;a<r.mElSpData.length;a++)r.mElSpData[a];r.onScrollComplete&&r.onScrollComplete(r._idx)}})))},e.prototype.resetVEles=function(t,e){this.mElSpData[0].setType(e[this._idx]),this.mElSpData[5].setType(t[this._idx])},e.prototype.getSlotItemIdx=function(){for(var t=[],e=0,o=this.mElSpData;e<o.length;e++){var n=o[e];t.push(n.type)}return t},e.prototype.initData=function(t,e){this._idx=t,this._data=e},e.prototype.resetAllAnimation=function(){for(var t=0,e=this._mElSpData;t<e.length;t++)e[t].resetAnimation()},c([p(cc.Prefab)],e.prototype,"slotsElement",void 0),c([p({type:u,tooltip:"\u8f6c\u8f74\u7c7b\u578b, VS_NUMBER\u53ea\u663e\u793a\u6570\u5b57, VS_SPECIAL\u663e\u793a\u5956\u52b1"})],e.prototype,"ScrollType",void 0),c([p({tooltip:"\u8f6c\u8f74\u5e8f\u53f7"})],e.prototype,"ScrollIndex",void 0),c([l],e)}(cc.Component);o.default=d,cc._RF.pop()},{"../MoneyComingConsts":"MoneyComingConsts","./SlotsItem":"SlotsItem"}],SlotsItem:[function(t,e,o){"use strict";cc._RF.push(e,"c173byGtQ9Hy7HA19H6HaaX","SlotsItem");var n,i=this&&this.__extends||(n=function(t,e){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o])})(t,e)},function(t,e){function o(){this.constructor=t}n(t,e),t.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)}),c=this&&this.__decorate||function(t,e,o,n){var i,c=arguments.length,r=c<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,o,n);else for(var a=t.length-1;a>=0;a--)(i=t[a])&&(r=(c<3?i(r):c>3?i(e,o,r):i(e,o))||r);return c>3&&r&&Object.defineProperty(e,o,r),r};Object.defineProperty(o,"__esModule",{value:!0});var r=cc._decorator,a=r.ccclass,s=r.property,l=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.slotsElementFrames=[],e.slotsElementFrames2=[],e.icon=null,e.sprite=null,e.allBoom=null,e._type=5,e.playIndex=0,e.totalIndex=0,e}return i(e,t),e.prototype.start=function(){},Object.defineProperty(e.prototype,"type",{get:function(){return this._type},enumerable:!1,configurable:!0}),e.prototype.setType=function(t){this._type=t,this.icon.node.active=!0,this.icon.spriteFrame=this.slotsElementFrames[this._type-1]},e.prototype.getType=function(){return this._type},e.prototype.show=function(){this.node.active=!0},e.prototype.hide=function(){this.node.active=!1},e.prototype.playWinAniam=function(t,e,o){var n=this;void 0===e&&(e=.2),void 0===o&&(o=null);var i=this,c=i.node.getComponent(cc.Animation),r=c?c.getClips():[],a=i.checkIsAnimClip(r,t);this.resetAnimNodePos(),a&&(c.currentClip=a,this.totalIndex=Math.ceil(e/a.duration),0!=(a.wrapMode==cc.WrapMode.Loop||e<=0)||c.hasEventListener(cc.Animation.EventType.LASTFRAME)||c.on(cc.Animation.EventType.LASTFRAME,function(){if(n.playIndex+=1,n.playIndex>=n.totalIndex){if(i.resetAnimation(),!o)return;o.apply(i)}else c.play(t)},i),c.play(t))},e.prototype.resetAnimation=function(){this.playIndex=0,this.totalIndex=0;var t=this.node.getComponent(cc.Animation);t.stop(),t.setCurrentTime(0,t.currentClip?t.currentClip.name:null)},e.prototype.resetAnimNodePos=function(){this.sprite.setPosition(0,1),this.sprite.children[0].setPosition(28,0),this.icon.node.setPosition(0,0);var t=this.icon.node.children[0];t.setPosition(0,0),t.children[0].setPosition(41.6,0)},e.prototype.checkIsAnimClip=function(t,e){for(var o=0;o<t.length;o++)if(t[o].name===e)return t[o];return null},c([s([cc.SpriteFrame])],e.prototype,"slotsElementFrames",void 0),c([s([cc.SpriteFrame])],e.prototype,"slotsElementFrames2",void 0),c([s(cc.Sprite)],e.prototype,"icon",void 0),c([s(cc.Node)],e.prototype,"sprite",void 0),c([s(cc.Node)],e.prototype,"allBoom",void 0),c([a],e)}(cc.Component);o.default=l,cc._RF.pop()},{}]},{},["Bezier","MoneyComingConsts","MoneyComingNetwork","MoneyComingUI","ALLParticleEffect","ScrollParticleEffect","SlotScroll","SlotsItem"]);