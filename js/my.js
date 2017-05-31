/**
 * Created by dima on 30.05.2017.
 */
var regDataForm = {
    city:["Dnepr","Kiev","Kharkiv","Odessa","Zaporozhye","Kamenskoe"],
    gender:["male","female"],
    bloodType:["first (O)","second (A)","third (B)","forth (AB)"],
    rhesus:["positive","negative"]

};

Vue.component("v-form", {
    template: "#reg-form",
    data: function(){
        return regDataForm;
    }
});

var app = new Vue(
    {
        el:"#registration",
        data:{
            ucity:"",
            ugender:""
        }

    }
);