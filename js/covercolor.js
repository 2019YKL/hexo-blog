function coverColor(){var e=document.getElementById("post-cover")?.src;void 0!==e?RGBaster.colors(e,{paletteSize:30,exclude:["rgb(255,255,255)","rgb(0,0,0)","rgb(254,254,254)"],success:function(e){"rgb(66,90,239)"!=e.dominant&&("light"==getContrastYIQ(colorHex(e=`rgb(${(e=e.dominant.match(/\d+/g))[0]},${e[1]},${e[2]})`))&&(e=LightenDarkenColor(colorHex(e),-40)),document.styleSheets[0].addRule(":root","--heo-main:"+e+"!important"),document.styleSheets[0].addRule(":root","--heo-main-op:"+e+"23!important"),document.styleSheets[0].addRule(":root","--heo-main-op-deep:"+e+"dd!important"),document.styleSheets[0].addRule(":root","--heo-main-none:"+e+"00!important"),document.getElementById("coverdiv").classList.add("loaded"))}}):(document.styleSheets[0].addRule(":root","--heo-main: var(--heo-theme)!important"),document.styleSheets[0].addRule(":root","--heo-main-op: var(--heo-theme-op)!important"),document.styleSheets[0].addRule(":root","--heo-main-op-deep:var(--heo-theme-op-deep)!important"),document.styleSheets[0].addRule(":root","--heo-main-none: var(--heo-theme-none)!important"))}function colorHex(e){if(/^(rgb|RGB)/.test(e)){for(var t=e.replace(/(?:\(|\)|rgb|RGB)*/g,"").split(","),o="#",r=0;r<t.length;r++){var n=Number(t[r]).toString(16);"0"===n&&(n+=n),o+=n}return o=7!==o.length?e:o}if(!/^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/.test(e))return e;var a=e.replace(/#/,"").split("");if(6===a.length)return e;if(3===a.length){for(var i="#",r=0;r<a.length;r+=1)i+=a[r]+a[r];return i}}function colorRgb(e){var t=e.toLowerCase();if(t&&/^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/.test(t)){if(4===t.length){for(var o="#",r=1;r<4;r+=1)o+=t.slice(r,r+1).concat(t.slice(r,r+1));t=o}for(var n=[],r=1;r<7;r+=2)n.push(parseInt("0x"+t.slice(r,r+2)));return"rgb("+n.join(",")+")"}return t}function LightenDarkenColor(e,t){var o=!1,e=("#"==e[0]&&(e=e.slice(1),o=!0),parseInt(e,16)),r=(e>>16)+t,n=(255<r?r=255:r<0&&(r=0),(e>>8&255)+t),e=(255<n?n=255:n<0&&(n=0),(255&e)+t);return 255<e?e=255:e<0&&(e=0),(o?"#":"")+String("000000"+(e|n<<8|r<<16).toString(16)).slice(-6)}function getContrastYIQ(e){e=colorRgb(e).match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/),e=299*e[1]+587*e[2]+114*e[3];return.5<=(e/=255e3)?"light":"dark"}coverColor();