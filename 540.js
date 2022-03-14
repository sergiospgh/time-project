"use strict";(self.webpackChunktime_project=self.webpackChunktime_project||[]).push([[540],{1540:(O,p,l)=>{l.r(p),l.d(p,{TimezoneModule:()=>w});var a=l(9808),c=l(9438),e=l(7587),u=l(520);let d=(()=>{class n{constructor(t){this.http=t}getTime(t,o){return this.http.get("http://worldtimeapi.org/api/timezone/"+(t?t+"/":"")+(o||""))}}return n.\u0275fac=function(t){return new(t||n)(e.LFG(u.eN))},n.\u0275prov=e.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();var f=l(4160),m=l(2382),T=l(845);function g(n,i){if(1&n){const t=e.EpF();e.TgZ(0,"div",4),e.TgZ(1,"p-dropdown",12),e.NdJ("onClear",function(){return e.CHM(t),e.oxw().foundTime=null})("onChange",function(){return e.CHM(t),e.oxw().foundTime=null})("ngModelChange",function(s){return e.CHM(t),e.oxw().selectedLocation=s}),e.qZA(),e.qZA()}if(2&n){const t=e.oxw();e.xp6(1),e.Q6J("options",t.locationsOptions)("ngModel",t.selectedLocation)}}const h=function(){return{width:"75%"}};function v(n,i){if(1&n){const t=e.EpF();e.TgZ(0,"button",13),e.NdJ("click",function(){return e.CHM(t),e.oxw().getTime()}),e.qZA()}2&n&&e.Akn(e.DdM(2,h))}function A(n,i){if(1&n&&(e.TgZ(0,"span",14),e.TgZ(1,"span",15),e._uU(2),e.ALo(3,"date"),e.qZA(),e.TgZ(4,"span",16),e._uU(5),e.qZA(),e.qZA()),2&n){const t=e.oxw();e.xp6(2),e.hij(" Time: ",e.Dn7(3,2,t.foundTime.datetime,"HH:mm:ss",t.foundTime.utc_offset)," "),e.xp6(3),e.hij(" Offset: ",t.foundTime.utc_offset," ")}}function _(n,i){1&n&&(e.TgZ(0,"span"),e.TgZ(1,"h3"),e._uU(2," Time not found "),e.qZA(),e.qZA())}const C=function(){return{"margin-top":"5%","font-size":"35px"}},z=function(){return{"margin-top":"4%"}},Z=function(){return{"font-size":"25px"}},x=[{path:"",component:(()=>{class n{constructor(t){this.timezoneService=t,this.time=new Date,this.timeOffset="",this.selectedArea=null,this.selectedLocation=null,this.foundTime=null}ngOnInit(){this.intervalId=setInterval(()=>{this.time=new Date},1e3);const t=this.time.getTimezoneOffset()/-60;this.timeOffset=(t>0?"+":"")+t.toString().padStart(2,"0")+":00",this.areasOptions=[{label:"Africa",value:"Africa"},{label:"America",value:"America"},{label:"Antarctica",value:"Antarctica"},{label:"Asia",value:"Asia"},{label:"Atlantic",value:"Atlantic"},{label:"Australia",value:"Australia"},{label:"Europe",value:"Europe"},{label:"Indian",value:"Indian"},{label:"Pacific",value:"Pacific"}]}ngOnDestroy(){clearInterval(this.intervalId)}getLocations(){this.locationsOptions=[],this.foundTime=null,this.timezoneService.getTime(this.selectedArea,null).subscribe(t=>{this.locationsOptions=t.map(o=>o.split("/").pop()),this.locationsOptions=this.locationsOptions.map(o=>({label:o,value:o}))})}getTime(){this.timezoneService.getTime(this.selectedArea,this.selectedLocation).subscribe(t=>{this.foundTime=t},t=>{this.foundTime="error"})}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(d))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-timezone"]],decls:15,vars:20,consts:[[1,"p-grid","p-fluid","p-d-flex"],[1,"p-col-4","p-offset-2","p-text-bold"],[1,"p-col-5","p-offset-1","p-text-bold"],[1,"p-grid","p-fluid","p-d-flex","p-ml-5","row"],[1,"p-col-2","p-offset-1"],["showClear","true","placeholder","Select an area","filter","true","filterBy","label",3,"options","ngModel","ngModelChange","onChange"],["class","p-col-2 p-offset-1",4,"ngIf"],[1,"p-col-1","p-text-center"],["pButton","","type","button","class","p-button-raised p-button-md","icon","pi pi-search",3,"style","click",4,"ngIf"],[1,"p-col-5"],["class","p-col-12",4,"ngIf"],[4,"ngIf"],["showClear","true","placeholder","Select a location","filter","true","filterBy","label",3,"options","ngModel","onClear","onChange","ngModelChange"],["pButton","","type","button","icon","pi pi-search",1,"p-button-raised","p-button-md",3,"click"],[1,"p-col-12"],[1,"p-col-6","p-text-bold"],[1,"p-col-4","p-offset-1","p-text-bold"]],template:function(t,o){1&t&&(e.TgZ(0,"div",0),e.TgZ(1,"span",1),e._uU(2),e.ALo(3,"date"),e.qZA(),e.TgZ(4,"span",2),e._uU(5),e.qZA(),e.qZA(),e.TgZ(6,"div",3),e.TgZ(7,"div",4),e.TgZ(8,"p-dropdown",5),e.NdJ("ngModelChange",function(r){return o.selectedArea=r})("onChange",function(){return o.getLocations()}),e.qZA(),e.qZA(),e.YNc(9,g,2,2,"div",6),e.TgZ(10,"div",7),e.YNc(11,v,1,3,"button",8),e.qZA(),e.TgZ(12,"div",9),e.YNc(13,A,6,6,"span",10),e.YNc(14,_,3,0,"span",11),e.qZA(),e.qZA()),2&t&&(e.Akn(e.DdM(17,C)),e.xp6(2),e.hij(" Local time: ",e.xi3(3,14,o.time,"HH:mm:ss")," "),e.xp6(3),e.hij(" Offset: ",o.timeOffset," "),e.xp6(1),e.Akn(e.DdM(18,z)),e.xp6(2),e.Q6J("options",o.areasOptions)("ngModel",o.selectedArea),e.xp6(1),e.Q6J("ngIf",o.selectedArea),e.xp6(2),e.Q6J("ngIf",o.selectedArea&&o.selectedLocation),e.xp6(1),e.Akn(e.DdM(19,Z)),e.xp6(1),e.Q6J("ngIf",o.foundTime&&"error"!==o.foundTime),e.xp6(1),e.Q6J("ngIf","error"===o.foundTime))},directives:[f.Lt,m.JJ,m.On,a.O5,T.Hq],pipes:[a.uU],styles:[""]}),n})()}];let b=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[[c.Bz.forChild(x)],c.Bz]}),n})();var M=l(1075);let w=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[[a.ez,M.m,b]]}),n})()}}]);