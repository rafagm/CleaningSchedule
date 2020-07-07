function _classCallCheck(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(n,t){for(var e=0;e<t.length;e++){var o=t[e];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(n,o.key,o)}}function _createClass(n,t,e){return t&&_defineProperties(n.prototype,t),e&&_defineProperties(n,e),n}(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{"ct+p":function(n,t,e){"use strict";e.r(t),e.d(t,"HomePageModule",(function(){return P}));var o,a,i,r=e("ofXK"),c=e("TEn/"),s=e("3Pt+"),l=e("tyNb"),d=e("mrSG"),b=e("fXoL"),u=e("AytR"),p=e("tk/3"),g=((i=function(){function n(t,e){_classCallCheck(this,n),this.http=t,this.modalController=e}return _createClass(n,[{key:"getTasksFromDay",value:function(n){return this.http.get(u.a.firebaseDBURL+'tasks.json?orderBy="day"&equalTo="'.concat(n,'"'))}},{key:"createTask",value:function(n){return this.http.post(u.a.firebaseDBURL+"tasks.json",n)}},{key:"deleteTask",value:function(n){return this.http.delete(u.a.firebaseDBURL+"tasks/".concat(n,".json"))}}]),n}()).\u0275fac=function(n){return new(n||i)(b.Qb(p.a),b.Qb(c.r))},i.\u0275prov=b.Fb({token:i,factory:i.\u0275fac,providedIn:"root"}),i),f=((a=function(){function n(t){_classCallCheck(this,n),this.taskService=t}return _createClass(n,[{key:"ngOnInit",value:function(){this.form=new s.c({day:new s.a(null,{updateOn:"blur",validators:[s.k.required]}),nameTask:new s.a(null,{updateOn:"blur",validators:[s.k.required]}),owner:new s.a(null,{updateOn:"blur",validators:[s.k.required]})})}},{key:"onAddTask",value:function(){console.log(this.form);var n={day:this.form.get("day").value,owner:this.form.get("owner").value,type:this.form.get("nameTask").value};this.taskService.createTask(n).subscribe((function(n){window.location.reload()}))}}]),n}()).\u0275fac=function(n){return new(n||a)(b.Jb(g))},a.\u0275cmp=b.Db({type:a,selectors:[["app-task-dialog"]],decls:39,vars:2,consts:[[1,"dialog"],[1,"dialog__header"],[1,"dialog__content"],[1,"dialog__content__form",3,"formGroup","ngSubmit"],[1,"dialog__content__form__select"],["placeholder","Select One Day","formControlName","day"],["value","Monday"],["value","Tuesday"],["value","Wednesday"],["value","Thursday"],["value","Friday"],["value","Saturday"],["value","Sunday"],["position","floating"],["formControlName","nameTask"],["placeholder","Select One Person","formControlName","owner"],["value","Rafa"],["value","Angel"],["value","Papa"],["type","submit","color","primary",3,"disabled"]],template:function(n,t){1&n&&(b.Mb(0,"div",0),b.Mb(1,"div",1),b.hc(2," Add Task "),b.Lb(),b.Mb(3,"div",2),b.Mb(4,"form",3),b.Ub("ngSubmit",(function(){return t.onAddTask()})),b.Mb(5,"ion-item",4),b.Mb(6,"ion-label"),b.hc(7,"Day of the week"),b.Lb(),b.Mb(8,"ion-select",5),b.Mb(9,"ion-select-option",6),b.hc(10,"Monday"),b.Lb(),b.Mb(11,"ion-select-option",7),b.hc(12,"Tuesday"),b.Lb(),b.Mb(13,"ion-select-option",8),b.hc(14,"Wednesday"),b.Lb(),b.Mb(15,"ion-select-option",9),b.hc(16,"Thursday"),b.Lb(),b.Mb(17,"ion-select-option",10),b.hc(18,"Friday"),b.Lb(),b.Mb(19,"ion-select-option",11),b.hc(20,"Saturday"),b.Lb(),b.Mb(21,"ion-select-option",12),b.hc(22,"Sunday"),b.Lb(),b.Lb(),b.Lb(),b.Mb(23,"ion-item",4),b.Mb(24,"ion-label",13),b.hc(25,"Task Name"),b.Lb(),b.Kb(26,"ion-input",14),b.Lb(),b.Mb(27,"ion-item",4),b.Mb(28,"ion-label"),b.hc(29,"Task Owner"),b.Lb(),b.Mb(30,"ion-select",15),b.Mb(31,"ion-select-option",16),b.hc(32,"Rafa"),b.Lb(),b.Mb(33,"ion-select-option",17),b.hc(34,"Angel"),b.Lb(),b.Mb(35,"ion-select-option",18),b.hc(36,"Papa"),b.Lb(),b.Lb(),b.Lb(),b.Mb(37,"ion-button",19),b.hc(38," Add Task"),b.Lb(),b.Lb(),b.Lb(),b.Lb()),2&n&&(b.zb(4),b.Zb("formGroup",t.form),b.zb(33),b.Zb("disabled",!t.form.valid))},directives:[s.l,s.i,s.d,c.i,c.j,c.m,c.t,s.h,s.b,c.n,c.h,c.u,c.b],styles:[".dialog[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;padding:10%;overflow-y:auto}.dialog__header[_ngcontent-%COMP%]{font-size:24px;line-height:24px;color:var(--ion-color-primary);text-align:center;width:100%;border-bottom:1px solid grey;padding-bottom:1px;margin-bottom:5%}.dialog__content[_ngcontent-%COMP%]{width:100%}.dialog__content__form[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center}.dialog__content__form__select[_ngcontent-%COMP%]{width:100%}.dialog__content__form[_ngcontent-%COMP%] > [_ngcontent-%COMP%]:not(:first-child){margin-top:12px}.dialog__content__form[_ngcontent-%COMP%] > [_ngcontent-%COMP%]:last-child{margin-top:32px}.cdk-global-overlay-wrapper[_ngcontent-%COMP%], .cdk-overlay-container[_ngcontent-%COMP%]{z-index:99999!important}"]}),a),y=((o=function(){function n(){_classCallCheck(this,n)}return _createClass(n,[{key:"ngOnInit",value:function(){}}]),n}()).\u0275fac=function(n){return new(n||o)},o.\u0275cmp=b.Db({type:o,selectors:[["app-owners"]],decls:7,vars:0,consts:[[1,"owners"],[1,"owner","rafa"],[1,"owner","angel"],[1,"owner","papa"]],template:function(n,t){1&n&&(b.Mb(0,"div",0),b.Mb(1,"div",1),b.hc(2,"Rafa"),b.Lb(),b.Mb(3,"div",2),b.hc(4,"Angel"),b.Lb(),b.Mb(5,"div",3),b.hc(6,"Papa"),b.Lb(),b.Lb())},styles:[".owners[_ngcontent-%COMP%]{display:flex;align-items:center}.owners[_ngcontent-%COMP%]   .owner[_ngcontent-%COMP%]{padding:16px;border-radius:3px}.owners[_ngcontent-%COMP%]   .owner[_ngcontent-%COMP%]:not(:first-child){margin-left:16px}@media screen and (max-width:600px){.owners[_ngcontent-%COMP%]   .owner[_ngcontent-%COMP%]{font-size:10px;padding:10px}}.rafa[_ngcontent-%COMP%]{background-color:#cd5c5c;color:#f5f5f5}.angel[_ngcontent-%COMP%]{background-color:#deb521}.angel[_ngcontent-%COMP%], .papa[_ngcontent-%COMP%]{font-weight:600}.papa[_ngcontent-%COMP%]{background-color:#33b0de}"]}),o),_=function(n,t,e){return{rafa:n,angel:t,papa:e}};function h(n,t){if(1&n){var e=b.Nb();b.Mb(0,"div",1),b.Ub("click",(function(){b.dc(e);var n=t.$implicit;return b.Wb().onDelete(n)})),b.hc(1),b.Lb()}if(2&n){var o=t.$implicit;b.Zb("ngClass",b.bc(2,_,"Rafa"===o.owner,"Angel"===o.owner,"Papa"===o.owner)),b.zb(1),b.ic(" ",o.type,"\n")}}var M,m,k,C,w=((M=function(){function n(t){_classCallCheck(this,n),this.taskService=t,this.tasks=[],this.owners=["Rafa","Angel","Papa"]}return _createClass(n,[{key:"ngOnInit",value:function(){this.getTasksFromDay(this.day)}},{key:"getTasksFromDay",value:function(n){var t=this;this.taskService.getTasksFromDay(this.day).subscribe((function(n){for(var e in t.tasks=[],n)if(n.hasOwnProperty(e)){var o=n[e];o.id=e,t.tasks.push(o)}}))}},{key:"onDelete",value:function(n){var t=this;this.taskService.deleteTask(n.id).subscribe((function(e){t.getTasksFromDay(n.day)}))}}]),n}()).\u0275fac=function(n){return new(n||M)(b.Jb(g))},M.\u0275cmp=b.Db({type:M,selectors:[["app-task"]],inputs:{day:"day"},decls:1,vars:1,consts:[["class","task",3,"ngClass","click",4,"ngFor","ngForOf"],[1,"task",3,"ngClass","click"]],template:function(n,t){1&n&&b.gc(0,h,2,6,"div",0),2&n&&b.Zb("ngForOf",t.tasks)},directives:[r.i,r.h],styles:[".task[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;background-color:#adff2f;text-align:center;vertical-align:center;min-height:50px;letter-spacing:1px;border-radius:3px;padding:1px}@media screen and (max-width:500px){.task[_ngcontent-%COMP%]{font-size:8px;min-height:50px;font-weight:500}}.task[_ngcontent-%COMP%]:not(:first-child){margin-top:16px}.rafa[_ngcontent-%COMP%]{background-color:#cd5c5c;color:#f5f5f5}.angel[_ngcontent-%COMP%]{background-color:#deb521}.angel[_ngcontent-%COMP%], .papa[_ngcontent-%COMP%]{font-weight:600}.papa[_ngcontent-%COMP%]{background-color:#33b0de}"]}),M),v=function(n){return{today:n}},L=[{path:"",component:(m=function(){function n(t,e){_classCallCheck(this,n),this.taskService=t,this.modalController=e}return _createClass(n,[{key:"ngOnInit",value:function(){this.getDayNameOfToday()}},{key:"getDayNameOfToday",value:function(){var n=new Date;this.today=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"][n.getDay()]}},{key:"addTask",value:function(){this.presentAddTaskPrompt()}},{key:"presentAddTaskPrompt",value:function(){return Object(d.a)(this,void 0,void 0,regeneratorRuntime.mark((function n(){var t;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,this.modalController.create({component:f});case 2:return t=n.sent,n.next=5,t.present();case 5:return n.abrupt("return",n.sent);case 6:case"end":return n.stop()}}),n,this)})))}}]),n}(),m.\u0275fac=function(n){return new(n||m)(b.Jb(g),b.Jb(c.r))},m.\u0275cmp=b.Db({type:m,selectors:[["app-home"]],decls:52,vars:22,consts:[[1,"ion-no-border","ion-padding-bottom",3,"translucent"],[1,"owners"],[1,"owner"],[1,"add"],[3,"click"],["slot","icon-only","name","add"],[1,"content"],[1,"grid"],[1,"grid__row"],[1,"grid__row__col","grid__row__col--title"],[1,"day"],[1,"day--title",3,"ngClass"],["day","Monday"],["day","Tuesday"],["day","Wednesday"],["day","Thursday"],["day","Friday"],["day","Saturday"],["day","Sunday"]],template:function(n,t){1&n&&(b.Mb(0,"ion-header",0),b.Mb(1,"ion-toolbar"),b.Mb(2,"div",1),b.Kb(3,"app-owners",2),b.Mb(4,"div",3),b.Mb(5,"ion-button",4),b.Ub("click",(function(){return t.addTask()})),b.Kb(6,"ion-icon",5),b.Lb(),b.Lb(),b.Lb(),b.Lb(),b.Lb(),b.Mb(7,"ion-content",6),b.Mb(8,"ion-grid",7),b.Mb(9,"ion-row",8),b.Mb(10,"ion-col",9),b.Mb(11,"ion-row",10),b.Mb(12,"ion-col",11),b.hc(13," Monday "),b.Lb(),b.Mb(14,"ion-col"),b.Kb(15,"app-task",12),b.Lb(),b.Lb(),b.Lb(),b.Mb(16,"ion-col",9),b.Mb(17,"ion-row",10),b.Mb(18,"ion-col",11),b.hc(19," Tuesday "),b.Lb(),b.Mb(20,"ion-col"),b.Kb(21,"app-task",13),b.Lb(),b.Lb(),b.Lb(),b.Mb(22,"ion-col",9),b.Mb(23,"ion-row",10),b.Mb(24,"ion-col",11),b.hc(25," Wednesday "),b.Lb(),b.Mb(26,"ion-col"),b.Kb(27,"app-task",14),b.Lb(),b.Lb(),b.Lb(),b.Mb(28,"ion-col",9),b.Mb(29,"ion-row",10),b.Mb(30,"ion-col",11),b.hc(31," Thursday "),b.Lb(),b.Mb(32,"ion-col"),b.Kb(33,"app-task",15),b.Lb(),b.Lb(),b.Lb(),b.Mb(34,"ion-col",9),b.Mb(35,"ion-row",10),b.Mb(36,"ion-col",11),b.hc(37," Friday "),b.Lb(),b.Mb(38,"ion-col"),b.Kb(39,"app-task",16),b.Lb(),b.Lb(),b.Lb(),b.Mb(40,"ion-col",9),b.Mb(41,"ion-row",10),b.Mb(42,"ion-col",11),b.hc(43," Saturday "),b.Lb(),b.Mb(44,"ion-col"),b.Kb(45,"app-task",17),b.Lb(),b.Lb(),b.Lb(),b.Mb(46,"ion-col",9),b.Mb(47,"ion-row",10),b.Mb(48,"ion-col",11),b.hc(49," Sunday "),b.Lb(),b.Mb(50,"ion-col"),b.Kb(51,"app-task",18),b.Lb(),b.Lb(),b.Lb(),b.Lb(),b.Lb(),b.Lb()),2&n&&(b.Zb("translucent",!0),b.zb(12),b.Zb("ngClass",b.ac(8,v,"Monday"===t.today)),b.zb(6),b.Zb("ngClass",b.ac(10,v,"Tuesday"===t.today)),b.zb(6),b.Zb("ngClass",b.ac(12,v,"Wednesday"===t.today)),b.zb(6),b.Zb("ngClass",b.ac(14,v,"Thursday"===t.today)),b.zb(6),b.Zb("ngClass",b.ac(16,v,"Friday"===t.today)),b.zb(6),b.Zb("ngClass",b.ac(18,v,"Saturday"===t.today)),b.zb(6),b.Zb("ngClass",b.ac(20,v,"Sunday"===t.today)))},directives:[c.f,c.o,y,c.b,c.g,c.d,c.e,c.l,c.c,r.h,w],styles:["ion-title[_ngcontent-%COMP%]{text-align:center;font-weight:bolder}.content[_ngcontent-%COMP%]{height:-webkit-fit-content;height:-moz-fit-content;height:fit-content}.grid[_ngcontent-%COMP%]{width:100%;padding:16px}.grid__row[_ngcontent-%COMP%]{flex-wrap:nowrap;justify-content:center}.grid__row__col[_ngcontent-%COMP%]{height:100%}.grid__row__col--title[_ngcontent-%COMP%]{font-size:12px;text-align:center}@media screen and (max-width:600px){.grid__row__col--title[_ngcontent-%COMP%]{font-size:10px}}@media screen and (max-width:400px){.grid__row__col--title[_ngcontent-%COMP%]{font-size:8px}}@media screen and (min-width:800px){.grid__row__col--title[_ngcontent-%COMP%]{font-size:12px}}.grid[_ngcontent-%COMP%]   .day[_ngcontent-%COMP%]{display:flex;flex-direction:column}.grid[_ngcontent-%COMP%]   .day--title[_ngcontent-%COMP%]{flex:1 0;background-color:#db74d3;border-radius:2px;color:#fff;margin-bottom:24px}.owners[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;margin-top:16px}.owners[_ngcontent-%COMP%]   .add[_ngcontent-%COMP%]{position:relative;margin-left:32px}.today[_ngcontent-%COMP%]{background-color:#4b8f2f!important}"]}),m)}],O=((C=function n(){_classCallCheck(this,n)}).\u0275mod=b.Hb({type:C}),C.\u0275inj=b.Gb({factory:function(n){return new(n||C)},imports:[[l.i.forChild(L)],l.i]}),C),P=((k=function n(){_classCallCheck(this,n)}).\u0275mod=b.Hb({type:k}),k.\u0275inj=b.Gb({factory:function(n){return new(n||k)},imports:[[r.b,s.e,c.p,O,s.j]]}),k)}}]);