"use strict";(self["webpackChunkgazel"]=self["webpackChunkgazel"]||[]).push([[531,194],{9531:function(t,e,a){a.r(e),a.d(e,{default:function(){return y}});var r=a(3396),c=a(7139);const l={key:0,class:"article"},s={class:"article__header bg-dark text-white pt-9 inline-block w-full"},n={class:"container max-w-screen-md mx-auto text-center px-4"},i={class:"text-4xl font-bold mе-9 mb-6","data-aos":"fade-up","data-aos-duration":"800","data-aos-delay":"300"},o={class:"text-xl text-blue-200 mb-9","data-aos":"fade-up","data-aos-duration":"800","data-aos-delay":"500"},d={class:"article__cover"},u={class:"container max-w-screen-md mx-auto text-center px-4"},m=["src","alt"],_={class:"container mx-auto max-w-screen-md my-8 px-4","data-aos":"fade-up","data-aos-duration":"800","data-aos-delay":"300"},x=["innerHTML"];function p(t,e,a,p,f,g){const h=(0,r.up)("HeaderBlock"),b=(0,r.up)("ArticlesBlock"),k=(0,r.up)("ErrorPage404");return g.currentArticle?((0,r.wg)(),(0,r.iD)("div",l,[(0,r.Wm)(h),(0,r._)("header",s,[(0,r._)("div",n,[(0,r._)("h1",i,(0,c.zw)(g.currentArticle.title),1),(0,r._)("p",o,(0,c.zw)(g.currentArticle.desc),1)])]),(0,r._)("section",d,[(0,r._)("div",u,[(0,r._)("img",{src:`/assets/img/articles/${g.currentArticle.img}`,alt:g.currentArticle.title,class:"article__main-img w-full rounded-xl mb-8","data-aos":"fade-up","data-aos-duration":"800","data-aos-delay":"600"},null,8,m)])]),(0,r._)("section",_,[(0,r._)("section",{innerHTML:f.articleHTML},null,8,x)]),(0,r.Wm)(b)])):((0,r.wg)(),(0,r.j4)(k,{key:1}))}var f=a(65),g=a(512),h=a(9194),b=a(4161),k=a(1352),w={props:{article:String},data(){return{articleHTML:"",err404:!1}},components:{HeaderBlock:g.Z,ErrorPage404:h["default"],ArticlesBlock:k.Z},computed:{...(0,f.Se)(["articles"]),currentArticle(){const t=this.articles.filter((t=>this.article===t.link));return!!t.length&&t[0]}},methods:{async loadArticleHTML(){await b.Z.get(`/articles/${this.currentArticle.html}`).then((t=>{this.articleHTML=t.data})).catch((t=>{console.log(t),this.articleHTML="Ошибка сервера"}))}},async mounted(){await this.$store.dispatch("loadArticles"),this.loadArticleHTML();const t="Вывоз мусора ГАЗелью";this.currentArticle&&(document.title=`${this.currentArticle.title} | ${t}`)}},v=a(89);const A=(0,v.Z)(w,[["render",p]]);var y=A},9194:function(t,e,a){a.r(e),a.d(e,{default:function(){return p}});var r=a(3396);const c=t=>((0,r.dD)("data-v-fd44c3ae"),t=t(),(0,r.Cn)(),t),l={class:"error-404 bg-dark text-white"},s={class:"container max-w-screen-lg mx-auto text-center py-9"},n=c((()=>(0,r._)("div",{class:"error-404__bg w-full bg-dark bg-contain",style:{"background-image":"url('/assets/img/auto/auto_sobol.webp')"}},null,-1))),i=c((()=>(0,r._)("h1",{class:"error-404__title font-extrabold text-sky-300 mb-5"},"404",-1))),o=c((()=>(0,r._)("h2",{class:"error-404__subtitle text-4xl mb-5 font-bold"},"Страница не найдена",-1)));function d(t,e,a,c,d,u){const m=(0,r.up)("HeaderBlock"),_=(0,r.up)("router-link");return(0,r.wg)(),(0,r.iD)("div",l,[(0,r.Wm)(m),(0,r._)("div",s,[n,i,o,(0,r._)("p",null,[(0,r.Wm)(_,{to:"/",class:"text-lg text-sky-300 font-bold"},{default:(0,r.w5)((()=>[(0,r.Uk)("На главную")])),_:1})])])])}var u=a(512),m={components:{HeaderBlock:u.Z}},_=a(89);const x=(0,_.Z)(m,[["render",d],["__scopeId","data-v-fd44c3ae"]]);var p=x}}]);
//# sourceMappingURL=531.30346771.js.map