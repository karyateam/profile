import{_ as y}from"./nuxt-link.670ccae9.js";import{_ as p,k,o as a,c as r,a as e,b as t,w as n,h as g,l as f,d as l,p as $,e as S,m as h,f as m,T as b,F as H}from"./entry.7b0d929d.js";import{_ as K,a as R,b as Z}from"./Contact.72fb0ef0.js";const j=""+new URL("brand-logo.b9ca29d8.svg",import.meta.url).href;const P={},L=i=>($("data-v-a2a4c16b"),i=i(),S(),i),U={class:"fixed z-40 w-full h-14 lg:h-16 bg-white bg-opacity-70 flex items-center justify-center transition-all duration-300 ease-in-out"},E={class:"container mx-auto px-4 flex items-center"},q=L(()=>e("img",{src:j,alt:"Brand Logo",class:"h-8"},null,-1)),N={class:"lg:ml-auto hidden lg:flex lg:items-center"},z=L(()=>e("div",{class:"hidden sm:flex sm:items-center sm:justify-end ml-auto lg:ml-0"},[e("a",{href:"https://api.whatsapp.com/send?phone=6285754715891&text=Hello,%20Karya!",target:"_blank",class:"ml-5 px-6 py-3 rounded-full bg-gradient-to-br from-primary to-primary-darken text-white font-semibold text-sm flex items-center justify-center hover:shadow-soft-md focus:shadow-soft-md transition-all ease-in-out duration-300"},[e("span",null,"Hire us"),e("svg",{class:"h-3 ml-2 fill-current",viewBox:"0 0 12.113 11.806"},[e("path",{d:"M5.15,3.438l.6-.6a.646.646,0,0,1,.916,0l5.255,5.253a.646.646,0,0,1,0,.916L6.667,14.262a.646.646,0,0,1-.916,0l-.6-.6a.65.65,0,0,1,.011-.927l3.258-3.1H.649A.647.647,0,0,1,0,8.983V8.118a.647.647,0,0,1,.649-.649h7.77l-3.258-3.1A.645.645,0,0,1,5.15,3.438Z",transform:"translate(0 -2.647)"})])])],-1));function F(i,c,_,u,s,v){const o=y,d=k("scroll-to");return a(),r("header",U,[e("div",E,[t(o,{to:"/",class:"brand-logo left-1/2 lg:static lg:left-auto lg:translate-x-0 lg:flex lg:items-center justify-self-start"},{default:n(()=>[q]),_:1}),e("nav",N,[g((a(),f(o,{to:"/",class:"nav-link"},{default:n(()=>[l("Home")]),_:1})),[[d,"#hero"]]),g((a(),f(o,{to:"/#services",class:"nav-link"},{default:n(()=>[l("Solutions")]),_:1})),[[d,"#services"]]),t(o,{to:"/employees",class:"nav-link"},{default:n(()=>[l("Employees")]),_:1}),t(o,{to:"/blog",class:"nav-link"},{default:n(()=>[l("Blog")]),_:1}),g((a(),f(o,{to:"/#contact",class:"nav-link"},{default:n(()=>[l("Contact")]),_:1})),[[d,"#contact"]])]),z])])}const O=p(P,[["render",F],["__scopeId","data-v-a2a4c16b"]]),D=""+new URL("hero-img.9a933f0c.webp",import.meta.url).href,W={mounted(){this.$gsap.timeline({scrollTrigger:{trigger:"#hero",toggleActions:"restart pause resume reset"}}).from("#hero-label",{y:-200,opacity:0,duration:.6}).from("#hero-title",{x:-200,opacity:0,duration:.6},"-=.3").from("#hero-paragraph",{x:-200,opacity:0,duration:.6},"-=.3").from("#hero-buttons",{x:-200,opacity:0,duration:.3},"-=.3").from("#hero-img-container",{y:-200,opacity:0,duration:1.5,ease:"power4.inOut"},"-=1")}},J={id:"hero",class:"min-h-screen flex items-center py-32 bg-white"},Q={class:"container mx-auto px-4 grid grid-cols-1 xl:grid-cols-2 gap-x-8 gap-y-16 items-center"},G={class:"flex flex-col items-center xl:items-start lg:w-3/4 lg:mx-auto xl:w-full"},X=h('<div id="hero-label" class="flex flex-col xl:flex-row items-center justify-center xl:items-baseline text-center xl:text-left uppercase text-xs sm:text-sm font-semibold tracking-wider text-primary space-y-4 xl:space-y-0 xl:space-x-4"><div><div class="animate-ping-slow absolute"><span class="block w-3 h-3 bg-primary bg-opacity-60 rounded-sm transform rotate-45 flex-shrink-0"></span></div><span class="relative block w-3 h-3 bg-primary bg-opacity-80 rounded-sm transform rotate-45 flex-shrink-0"></span></div><span>MARKETPLACE FOR SHORT-TERM BLUE-COLLAR WORKER</span></div><h1 id="hero-title" class="text-center xl:text-left mt-4 text-3xl lg:text-5xl font-bold leading-tight lg:leading-tight text-cool-gray-800"> Temukan Pekerja Harian yang sesuai dengan Kebutuhan Anda </h1><p id="hero-paragraph" class="text-center xl:text-left mt-4 leading-normal xl:w-4/5"> Karya membantu Anda menemukan pekerja harian dalam berbagai industri, terutama pekerja kerah biru <span class="italic">(blue-collar)</span> yang sesuai dengan kebutuhan Anda. </p>',3),Y={id:"hero-buttons",class:"mt-12 flex flex-col xl:flex-row xl:items-center"},ee=e("a",{id:"hero-button-primary",href:"https://api.whatsapp.com/send?phone=6285754715891&text=Hello,%20Karya!",target:"_blank",class:"flex justify-center items-center text-center px-10 py-4 rounded-full bg-gradient-to-br from-primary to-primary-darken text-white font-semibold shadow-soft-lg transform hover:-translate-y-1 focus:hover:-translate-y-1 transition-all ease-in-out duration-300"},"Hire us",-1),te=e("div",{id:"hero-img-container",class:"w-full flex items-center justify-center"},[e("img",{src:D,alt:"Blue-collar Workers",class:"pointer-events-none"})],-1);function se(i,c,_,u,s,v){const o=y;return a(),r("div",J,[e("div",Q,[e("div",G,[X,e("div",Y,[ee,t(o,{id:"hero-button-secondary",to:"/#services",class:"flex justify-center items-center text-center px-10 py-4 mt-4 xl:mt-0 xl:ml-4 font-semibold rounded-full bg-primary bg-opacity-10 text-primary-darken hover:bg-opacity-20 focus:bg-opacity-20 transition-all ease-in-out duration-300"},{default:n(()=>[l("Lihat semua layanan Karya")]),_:1})])]),te])])}const ae=p(W,[["render",se]]),oe=""+new URL("about-img.fad325b8.webp",import.meta.url).href,ne={mounted(){this.$gsap.timeline({scrollTrigger:{trigger:"#about",toggleActions:"restart pause resume reset",start:"top 80%"}}).from("#about-img",{x:-200,opacity:0,duration:.8}).from("#about-title",{y:-200,opacity:0,duration:.4},"-=.6").from("#about-description",{x:-200,opacity:0,duration:.4},"-=.6")}},ie={id:"about",class:"py-16 xl:py-24"},re=h('<div class="container mx-auto px-4"><div class="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12 items-center"><div id="about-img-container" class="flex justify-end items-center order-last md:order-first"><img id="about-img" src="'+oe+'" alt="About Karya" class="w-full xl:w-3/4 pointer-events-none rounded-3xl"></div><div class="flex flex-col md:py-16"><div><h3 id="about-title" class="font-bold text-3xl md:text-4xl text-cool-gray-800"> About Karya </h3></div><div id="about-description" class="text-sm leading-normal mt-8 xl:w-3/4"><p> Kami adalah perusahaan yang menghubungkan pencari kerja dan pekerja di Indonesia. </p><p class="mt-2"> Kami percaya bahwa pekerja kerah-biru (blue-collar) di Indonesia masih sulit mencari pekerjaan sendiri, sehingga banyak dari mereka yang harus membayar panti atau penyalur untuk mendapat pekerjaan. Dengan menggunakan Karya, pencari kerja dapat mencari pekerjaan dengan mudah. Selain itu, kami juga mempertemukan perusahaan - perusahaan atau rumah tangga dengan para kandidat yang tersebar di seluruh Indonesia. </p></div></div></div></div>',1),le=[re];function ce(i,c,_,u,s,v){return a(),r("div",ie,le)}const de=p(ne,[["render",ce]]),me=""+new URL("001.93f76681.webp",import.meta.url).href,pe=""+new URL("002.07d0ac8a.webp",import.meta.url).href,_e=""+new URL("003.6feca0e1.webp",import.meta.url).href;const ue={data(){return{cardService1:!1,cardService2:!1,cardService3:!1}},mounted(){this.$gsap.timeline({scrollTrigger:{trigger:"#service-card-container",toggleActions:"restart pause resume reset",start:"top 80%"}}).from(".service-card",{x:-200,opacity:0,duration:.6,stagger:.3})}},ve={id:"services",class:"py-16 xl:py-24"},he={class:"container mx-auto px-4"},ge=h('<div class="flex flex-col justify-center items-center text-center"><div><div class="animate-ping-slow absolute"><span class="block w-3 h-3 bg-indigo-400 bg-opacity-60 rounded-sm transform rotate-45 flex-shrink-0"></span></div><span class="relative block w-3 h-3 bg-indigo-400 bg-opacity-80 rounded-sm transform rotate-45 flex-shrink-0"></span></div><h2 class="font-bold text-3xl md:text-4xl mt-4 text-cool-gray-800"> Layanan Karya </h2><p class="text-xs sm:text-sm mt-3"> Karya menyediakan berbagai jenis solusi jasa yang memenuhi kebutuhan Anda </p></div>',1),fe={id:"service-card-container",class:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-16 mt-24"},xe={class:"service-card"},ye=e("img",{src:me,alt:"Rumah Tangga"},null,-1),be={class:"absolute w-full bottom-6 xl:bottom-8"},we={class:"service-card-content"},ke=e("span",{class:"service-title"},"Rumah Tangga",-1),$e={class:"service-toggle-btn"},Se={key:0,class:"service-toggle-icon",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24"},je=e("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M5 15l7-7 7 7"},null,-1),Le=[je],Ae={key:1,class:"service-toggle-icon",fill:"currentColor",viewBox:"0 0 20 20"},Ie=e("path",{"fill-rule":"evenodd",d:"M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z","clip-rule":"evenodd"},null,-1),Be=[Ie],Me={key:0},Te=e("ul",{class:"service-list"},[e("li",null,"Pembantu Rumah Tangga"),e("li",null,"Babysitter"),e("li",null,"Elder Care"),e("li",null,"Tukang Pijat"),e("li",null,"Tukang Kebun")],-1),Ce=e("span",null,"Selengkapnya",-1),Ve=e("svg",{class:"w-5 h-5",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"},[e("path",{"fill-rule":"evenodd",d:"M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z","clip-rule":"evenodd"})],-1),He={class:"service-card"},Ke=e("img",{src:pe,alt:"Tukang"},null,-1),Re={class:"absolute w-full bottom-6 xl:bottom-8"},Ze={class:"service-card-content"},Pe=e("span",{class:"service-title"},"Tukang",-1),Ue={class:"service-toggle-btn"},Ee={key:0,class:"service-toggle-icon",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24"},qe=e("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M5 15l7-7 7 7"},null,-1),Ne=[qe],ze={key:1,class:"service-toggle-icon",fill:"currentColor",viewBox:"0 0 20 20"},Fe=e("path",{"fill-rule":"evenodd",d:"M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z","clip-rule":"evenodd"},null,-1),Oe=[Fe],De={key:0},We=e("ul",{class:"service-list"},[e("li",null,"Tukang AC"),e("li",null,"Tukang Kayu"),e("li",null,"Tukang Karpet"),e("li",null,"Tukang Marbel"),e("li",null,"Tukang Cat"),e("li",null,"Tukang Renovasi")],-1),Je=e("span",null,"Selengkapnya",-1),Qe=e("svg",{class:"w-5 h-5",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"},[e("path",{"fill-rule":"evenodd",d:"M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z","clip-rule":"evenodd"})],-1),Ge={class:"service-card"},Xe=e("img",{src:_e,alt:"Servis Lainnya"},null,-1),Ye={class:"absolute w-full bottom-6 xl:bottom-8"},et={class:"service-card-content"},tt=e("span",{class:"service-title"},"Servis Lainnya",-1),st={class:"service-toggle-btn"},at={key:0,class:"service-toggle-icon",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24"},ot=e("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M5 15l7-7 7 7"},null,-1),nt=[ot],it={key:1,class:"service-toggle-icon",fill:"currentColor",viewBox:"0 0 20 20"},rt=e("path",{"fill-rule":"evenodd",d:"M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z","clip-rule":"evenodd"},null,-1),lt=[rt],ct={key:0},dt=e("ul",{class:"service-list"},[e("li",null,"Supir"),e("li",null,"Satpam"),e("li",null,"Admin"),e("li",null,"Pekerja Pabrik"),e("li",null,"Pekerja Ritel"),e("li",null,"Pekerja Restoran")],-1),mt=e("span",null,"Selengkapnya",-1),pt=e("svg",{class:"w-5 h-5",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"},[e("path",{"fill-rule":"evenodd",d:"M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z","clip-rule":"evenodd"})],-1);function _t(i,c,_,u,s,v){const o=y;return a(),r("section",ve,[e("div",he,[ge,e("div",fe,[e("div",xe,[ye,e("div",be,[e("div",we,[e("div",{onClick:c[0]||(c[0]=d=>s.cardService1=!s.cardService1),class:"flex items-center justify-between cursor-pointer"},[ke,e("button",$e,[s.cardService1?m("",!0):(a(),r("svg",Se,Le)),s.cardService1?(a(),r("svg",Ae,Be)):m("",!0)])]),t(b,{name:"slide-fade"},{default:n(()=>[s.cardService1?(a(),r("div",Me,[Te,t(o,{to:"/employees",class:"service-more-btn"},{default:n(()=>[Ce,Ve]),_:1})])):m("",!0)]),_:1})])])]),e("div",He,[Ke,e("div",Re,[e("div",Ze,[e("div",{onClick:c[1]||(c[1]=d=>s.cardService2=!s.cardService2),class:"flex items-center justify-between"},[Pe,e("button",Ue,[s.cardService2?m("",!0):(a(),r("svg",Ee,Ne)),s.cardService2?(a(),r("svg",ze,Oe)):m("",!0)])]),t(b,{name:"slide-fade"},{default:n(()=>[s.cardService2?(a(),r("div",De,[We,t(o,{to:"/employees",class:"service-more-btn"},{default:n(()=>[Je,Qe]),_:1})])):m("",!0)]),_:1})])])]),e("div",Ge,[Xe,e("div",Ye,[e("div",et,[e("div",{onClick:c[2]||(c[2]=d=>s.cardService3=!s.cardService3),class:"flex items-center justify-between"},[tt,e("button",st,[s.cardService3?m("",!0):(a(),r("svg",at,nt)),s.cardService3?(a(),r("svg",it,lt)):m("",!0)])]),t(b,{name:"slide-fade"},{default:n(()=>[s.cardService3?(a(),r("div",ct,[dt,t(o,{to:"/employees",class:"service-more-btn"},{default:n(()=>[mt,pt]),_:1})])):m("",!0)]),_:1})])])])])])])}const ut=p(ue,[["render",_t]]),vt=""+new URL("why-01.82dd5dee.svg",import.meta.url).href,ht=""+new URL("why-02.8e7fc627.svg",import.meta.url).href,gt=""+new URL("why-03.4a7bfb46.svg",import.meta.url).href,ft=""+new URL("why-04.963377fc.svg",import.meta.url).href;const xt={},yt={id:"why",class:"py-16 xl:py-24"},bt=h('<div class="container mx-auto px-4"><div class="flex flex-col justify-center items-center text-center"><div><div class="animate-ping-slow absolute"><span class="block w-3 h-3 bg-primary bg-opacity-60 rounded-sm transform rotate-45 flex-shrink-0"></span></div><span class="relative block w-3 h-3 bg-primary bg-opacity-80 rounded-sm transform rotate-45 flex-shrink-0"></span></div><h2 class="font-bold text-3xl md:text-4xl mt-4 text-cool-gray-800"> Mengapa Karya? </h2></div><div id="why-card-container" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-10 mt-12"><div class="why-card"><img src="'+vt+'"><p> Beragam Macam Jasa dalam Satu Plaform </p></div><div class="why-card"><img src="'+ht+'"><p> Tenaga Ahli yang Berpengalaman dan Tepercaya </p></div><div class="why-card"><img src="'+gt+'"><p> Tarif Terjangkau dan Fleksibel </p></div><div class="why-card"><img src="'+ft+'"><p> Praktis dan Cepat untuk Menemukan Pekerja </p></div></div></div>',1),wt=[bt];function kt(i,c,_,u,s,v){return a(),r("section",yt,wt)}const $t=p(xt,[["render",kt]]);const St={},jt={id:"testimonial",class:"py-16 xl:py-24 bg-cool-gray-50"},Lt=h('<div class="container mx-auto px-4"><div class="flex flex-col justify-center items-center text-center"><div><div class="animate-ping-slow absolute"><span class="block w-3 h-3 bg-pink-400 bg-opacity-60 rounded-sm transform rotate-45 flex-shrink-0"></span></div><span class="relative block w-3 h-3 bg-pink-400 bg-opacity-80 rounded-sm transform rotate-45 flex-shrink-0"></span></div><h2 class="font-bold text-3xl md:text-4xl mt-4 text-cool-gray-800"> Apa Kata Mereka? </h2></div><div id="testimonial-card-container" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-12 mt-16"><div class="testimonial-card"><div class="testimonial-body"><svg class="h-6 fill-current text-indigo-500 opacity-40" viewBox="0 0 32.488 25.991"><path id="Icon_metro-quote" data-name="Icon metro-quote" d="M8.355,22.636v13h13v-13h-6.5s0-6.5,6.5-6.5V9.64s-13,0-13,13Zm32.488-6.5V9.64s-13,0-13,13v13h13v-13h-6.5S34.346,16.138,40.843,16.138Z" transform="translate(-8.355 -9.64)"></path></svg><p class="testimonial-text"> Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore </p></div><div class="testimonial-footer bg-gradient-to-br from-indigo-500 to-indigo-600 text-white"><div class="testimonial-footer-content"><img src="https://randomuser.me/api/portraits/men/32.jpg" class="testimonial-avatar"><div class="flex flex-col"><span class="testimonial-name">John Doe</span><span class="testimonial-company">Laravel Inc.</span></div></div></div></div><div class="testimonial-card"><div class="testimonial-body"><svg class="h-6 fill-current text-green-500 opacity-40" viewBox="0 0 32.488 25.991"><path id="Icon_metro-quote" data-name="Icon metro-quote" d="M8.355,22.636v13h13v-13h-6.5s0-6.5,6.5-6.5V9.64s-13,0-13,13Zm32.488-6.5V9.64s-13,0-13,13v13h13v-13h-6.5S34.346,16.138,40.843,16.138Z" transform="translate(-8.355 -9.64)"></path></svg><p class="testimonial-text"> Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore </p></div><div class="testimonial-footer bg-gradient-to-br from-green-500 to-green-600 text-white"><div class="testimonial-footer-content"><img src="https://randomuser.me/api/portraits/women/44.jpg" class="testimonial-avatar"><div class="flex flex-col"><span class="testimonial-name">Jane Doe</span><span class="testimonial-company">Vue Inc.</span></div></div></div></div><div class="testimonial-card"><div class="testimonial-body"><svg class="h-6 fill-current text-blue-500 opacity-40" viewBox="0 0 32.488 25.991"><path id="Icon_metro-quote" data-name="Icon metro-quote" d="M8.355,22.636v13h13v-13h-6.5s0-6.5,6.5-6.5V9.64s-13,0-13,13Zm32.488-6.5V9.64s-13,0-13,13v13h13v-13h-6.5S34.346,16.138,40.843,16.138Z" transform="translate(-8.355 -9.64)"></path></svg><p class="testimonial-text"> Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore </p></div><div class="testimonial-footer bg-gradient-to-br from-blue-500 to-blue-600 text-white"><div class="testimonial-footer-content"><img src="https://randomuser.me/api/portraits/men/46.jpg" class="testimonial-avatar"><div class="flex flex-col"><span class="testimonial-name">Michael E. Hart</span><span class="testimonial-company">Tailwind Inc.</span></div></div></div></div><div class="testimonial-card"><div class="testimonial-body"><svg class="h-6 fill-current text-pink-500 opacity-40" viewBox="0 0 32.488 25.991"><path id="Icon_metro-quote" data-name="Icon metro-quote" d="M8.355,22.636v13h13v-13h-6.5s0-6.5,6.5-6.5V9.64s-13,0-13,13Zm32.488-6.5V9.64s-13,0-13,13v13h13v-13h-6.5S34.346,16.138,40.843,16.138Z" transform="translate(-8.355 -9.64)"></path></svg><p class="testimonial-text"> Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore </p></div><div class="testimonial-footer bg-gradient-to-br from-pink-500 to-pink-600 text-white"><div class="testimonial-footer-content"><img src="https://images.pexels.com/photos/61100/pexels-photo-61100.jpeg?crop=faces&amp;fit=crop&amp;h=200&amp;w=200&amp;auto=compress&amp;cs=tinysrgb" class="testimonial-avatar"><div class="flex flex-col"><span class="testimonial-name">Whitney K. Harris</span><span class="testimonial-company">Adobe Inc.</span></div></div></div></div></div></div>',1),At=[Lt];function It(i,c,_,u,s,v){return a(),r("section",jt,At)}const Bt=p(St,[["render",It]]);const Mt={},Tt={class:"flex justify-center items-center md:justify-start mt-4 space-x-6"},Ct=h('<a href="https://www.instagram.com/" target="_blank" id="instagram" data-v-3e8827dc><svg class="h-6 fill-current" viewBox="0 0 40.009 40" data-v-3e8827dc><path id="instagram" d="M19.934,41.57A10.255,10.255,0,1,0,30.189,51.825,10.239,10.239,0,0,0,19.934,41.57Zm0,16.923A6.667,6.667,0,1,1,26.6,51.825a6.68,6.68,0,0,1-6.667,6.667ZM33,41.15a2.392,2.392,0,1,1-2.392-2.392A2.387,2.387,0,0,1,33,41.15Zm6.792,2.428c-.152-3.2-.884-6.043-3.231-8.381s-5.177-3.07-8.381-3.231c-3.3-.187-13.2-.187-16.5,0-3.2.152-6.034.884-8.381,3.222S.226,40.365.066,43.569c-.187,3.3-.187,13.2,0,16.5.152,3.2.884,6.043,3.231,8.381s5.177,3.07,8.381,3.231c3.3.187,13.2.187,16.5,0,3.2-.152,6.043-.884,8.381-3.231s3.07-5.177,3.231-8.381c.187-3.3.187-13.192,0-16.494ZM35.527,63.616a6.75,6.75,0,0,1-3.8,3.8c-2.633,1.044-8.881.8-11.791.8s-9.167.232-11.791-.8a6.75,6.75,0,0,1-3.8-3.8c-1.044-2.633-.8-8.881-.8-11.791s-.232-9.167.8-11.791a6.75,6.75,0,0,1,3.8-3.8c2.633-1.044,8.881-.8,11.791-.8s9.167-.232,11.791.8a6.75,6.75,0,0,1,3.8,3.8c1.044,2.633.8,8.881.8,11.791S36.571,60.992,35.527,63.616Z" transform="translate(0.075 -31.825)" data-v-3e8827dc></path></svg></a><a href="https://www.facebook.com/" target="_blank" id="facebook" data-v-3e8827dc><svg class="h-6 fill-current" viewBox="0 0 21.423 40" data-v-3e8827dc><path id="Icon_awesome-facebook-f" data-name="Icon awesome-facebook-f" d="M21.629,22.5l1.111-7.239H15.794v-4.7c0-1.98.97-3.911,4.081-3.911h3.158V.489A38.509,38.509,0,0,0,17.427,0c-5.72,0-9.459,3.467-9.459,9.744v5.517H1.609V22.5H7.968V40h7.826V22.5Z" transform="translate(-1.609)" data-v-3e8827dc></path></svg></a><a href="https://twitter.com/" target="_blank" id="twitter" data-v-3e8827dc><svg class="h-6 fill-current" viewBox="0 0 49.25 40" data-v-3e8827dc><path id="Icon_awesome-twitter" data-name="Icon awesome-twitter" d="M44.188,13.35c.031.437.031.875.031,1.313,0,13.344-10.156,28.719-28.719,28.719A28.524,28.524,0,0,1,0,38.85a20.881,20.881,0,0,0,2.438.125,20.215,20.215,0,0,0,12.531-4.312,10.112,10.112,0,0,1-9.438-7,12.729,12.729,0,0,0,1.906.156,10.676,10.676,0,0,0,2.656-.344A10.1,10.1,0,0,1,2,17.568v-.125a10.165,10.165,0,0,0,4.562,1.281,10.109,10.109,0,0,1-3.125-13.5A28.691,28.691,0,0,0,24.25,15.787,11.4,11.4,0,0,1,24,13.475,10.1,10.1,0,0,1,41.469,6.568a19.873,19.873,0,0,0,6.406-2.438,10.067,10.067,0,0,1-4.438,5.562A20.235,20.235,0,0,0,49.25,8.131a21.7,21.7,0,0,1-5.062,5.219Z" transform="translate(0 -3.381)" data-v-3e8827dc></path></svg></a><a href="https://www.linkedin.com/in/" target="_blank" id="linkedin" data-v-3e8827dc><svg class="h-6 fill-current" viewBox="0 0 40 40" data-v-3e8827dc><path id="Icon_awesome-linkedin" data-name="Icon awesome-linkedin" d="M37.143,2.25H2.848A2.869,2.869,0,0,0,0,5.134V39.366A2.869,2.869,0,0,0,2.848,42.25H37.143A2.877,2.877,0,0,0,40,39.366V5.134A2.877,2.877,0,0,0,37.143,2.25ZM12.089,36.536H6.161V17.446H12.1V36.536Zm-2.964-21.7A3.438,3.438,0,1,1,12.563,11.4a3.439,3.439,0,0,1-3.438,3.438Zm25.188,21.7H28.384V27.25c0-2.214-.045-5.062-3.08-5.062-3.089,0-3.563,2.411-3.563,4.9v9.446H15.813V17.446H21.5v2.607h.08a6.244,6.244,0,0,1,5.616-3.08c6,0,7.116,3.955,7.116,9.1Z" transform="translate(0 -2.25)" data-v-3e8827dc></path></svg></a>',4),Vt=[Ct];function Ht(i,c,_,u,s,v){return a(),r("div",Tt,Vt)}const Kt=p(Mt,[["render",Ht],["__scopeId","data-v-3e8827dc"]]);const Rt={},w=i=>($("data-v-d9f8600f"),i=i(),S(),i),Zt={id:"footer",class:"bg-white"},Pt={class:"container mx-auto px-4"},Ut={class:"grid grid-cols-1 md:grid-cols-3 gap-12 pt-32 pb-16"},Et=w(()=>e("div",{class:"flex flex-col items-center md:items-start"},[e("img",{src:j,alt:"Brand Logo",class:"h-12"})],-1)),qt={class:"flex flex-col items-center md:items-start text-center md:text-left mt-10 md:mt-0"},Nt=w(()=>e("span",{class:"uppercase font-semibold text-base tracking-widest"},"QUICK LINKS",-1)),zt={class:"quick-links flex flex-col text-sm mt-4 space-y-3"},Ft={class:"flex flex-col items-center md:items-start text-center md:text-left mt-10 md:mt-0"},Ot=w(()=>e("span",{class:"uppercase font-semibold text-base tracking-widest"},"FOLLOW US",-1)),Dt={class:"copyright flex flex-col items-center justify-center text-center py-4 border-t border-black border-opacity-5"},Wt={class:"text-xs opacity-80"};function Jt(i,c,_,u,s,v){const o=y,d=Kt,x=k("scroll-to");return a(),r("div",Zt,[e("div",Pt,[e("div",Ut,[Et,e("div",qt,[Nt,e("div",zt,[g((a(),f(o,{to:"/#services"},{default:n(()=>[l("Solutions")]),_:1})),[[x,"#services"]]),t(o,{to:"/employees"},{default:n(()=>[l("Employees")]),_:1}),t(o,{to:"/blog"},{default:n(()=>[l("Blog")]),_:1}),g((a(),f(o,{to:"/#contact"},{default:n(()=>[l("Contact")]),_:1})),[[x,"#contact"]]),t(o,{to:"/terms"},{default:n(()=>[l("Terms of Service")]),_:1}),t(o,{to:"/privacy"},{default:n(()=>[l("Privacy Policy")]),_:1})])]),e("div",Ft,[Ot,t(d)])]),e("div",Dt,[e("span",Wt,[l("Copyright © 2021 "),t(o,{to:"/dashboard"},{default:n(()=>[l("Karya Careers Indonesia")]),_:1}),l(" | All rights reserved.")])])])])}const Qt=p(Rt,[["render",Jt],["__scopeId","data-v-d9f8600f"]]),Gt={},Xt=e("title",null,"Karya",-1);function Yt(i,c,_,u,s,v){const o=O,d=ae,x=de,A=ut,I=$t,B=Bt,M=K,T=R,C=Z,V=Qt;return a(),r(H,null,[Xt,e("div",null,[t(o),t(d),t(x),t(A),t(I),t(B),t(M),t(T),t(C),t(V)])],64)}const as=p(Gt,[["render",Yt]]);export{as as default};
