(this["webpackJsonpweather-react"]=this["webpackJsonpweather-react"]||[]).push([[0],[,,,,,function(e,t,a){e.exports={mainWeatherContainer:"MainWeather_mainWeatherContainer__2Oj0z",mainWeatherIcon:"MainWeather_mainWeatherIcon__3Ro0x",mainWeatherData:"MainWeather_mainWeatherData__2LIyK",dataTemperature:"MainWeather_dataTemperature__2elUD",dataWeather:"MainWeather_dataWeather__TLD2N"}},function(e,t,a){e.exports={detailsContainer:"DetailedWeather_detailsContainer__1_uuK",detailsContainerColumn:"DetailedWeather_detailsContainerColumn__1xYxL"}},function(e,t,a){e.exports={cityContainer:"City_cityContainer__1MNFP",cityName:"City_cityName__xS7TX",dateString:"City_dateString__20hZY"}},function(e,t,a){e.exports={cardContainer:"ForecastCard_cardContainer__10Zt6",day:"ForecastCard_day__146c2",temp:"ForecastCard_temp__2I0UF"}},function(e,t,a){e.exports={container:"Index_container__21PD4",loadingContainer:"Index_loadingContainer__1csxL"}},function(e,t,a){e.exports={detailsContainer:"Details_detailsContainer__39Yqr",value:"Details_value__vo1u9"}},function(e,t,a){e.exports={forecastContainer:"Forecast_forecastContainer__3FRG7",forecastLoadingContainer:"Forecast_forecastLoadingContainer__24-IR"}},,,function(e,t,a){e.exports={currentWeatherContainer:"CurrentWeather_currentWeatherContainer__3bz4D"}},function(e,t,a){e.exports=a(22)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),r=a(13),o=a.n(r),s=(a(20),a(21),a(1)),c=a(2),d=a(4),l=a(3),u=a(9),w=a.n(u),m=a(5),h=a.n(m),p=function(e){Object(d.a)(a,e);var t=Object(l.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).state={icon:n.props.icon,temperature:n.props.temperature,weather:n.props.weather},n}return Object(c.a)(a,[{key:"render",value:function(){var e=this.state,t=e.temperature,a=e.weather,n=e.icon;return i.a.createElement("div",{className:h.a.mainWeatherContainer},i.a.createElement("div",{className:h.a.mainWeatherIcon},i.a.createElement("i",{className:n})),i.a.createElement("div",{className:h.a.mainWeatherData},i.a.createElement("span",{className:h.a.dataTemperature},t,"\xb0"),i.a.createElement("span",{className:h.a.dataWeather},a)))}}]),a}(n.Component),y=a(10),f=a.n(y),g=function(e){Object(d.a)(a,e);var t=Object(l.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).state={value:n.props.value,units:n.props.units},n}return Object(c.a)(a,[{key:"render",value:function(){var e=this.state,t=e.value,a=e.units;return i.a.createElement("div",{className:f.a.detailsContainer},i.a.createElement("span",{className:f.a.value},t),i.a.createElement("span",null,a))}}]),a}(n.Component),v=a(6),_=a.n(v),C=function(e){Object(d.a)(a,e);var t=Object(l.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).state={appTemp:n.props.appTemp,clouds:n.props.clouds,windSpd:n.props.windSpd,pressure:n.props.pressure,sunrise:n.props.sunrise,sunset:n.props.sunset},n}return Object(c.a)(a,[{key:"render",value:function(){var e=this.state,t=e.appTemp,a=e.clouds,n=e.windSpd,r=e.pressure,o=e.sunrise,s=e.sunset;return i.a.createElement("div",{className:_.a.detailsContainer},i.a.createElement("div",{className:_.a.detailsContainerColumn},i.a.createElement(g,{value:t,units:"Feels Like"}),i.a.createElement(g,{value:a,units:"Clouds"})),i.a.createElement("div",{className:_.a.detailsContainerColumn},i.a.createElement(g,{value:n,units:"Wind"}),i.a.createElement(g,{value:r,units:"Pressure"})),i.a.createElement("div",{className:_.a.detailsContainerColumn},i.a.createElement(g,{value:o,units:"Sunrise"}),i.a.createElement(g,{value:s,units:"Sunset"})))}}]),a}(n.Component),E=a(14),b=a.n(E),W=function(e){Object(d.a)(a,e);var t=Object(l.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).state={mainWeather:n.props.mainWeather,detailedWeather:n.props.detailedWeather},n}return Object(c.a)(a,[{key:"render",value:function(){var e=this.state.mainWeather,t=e.icon,a=e.temp,n=e.weather,r=this.state.detailedWeather,o=r.appTemp,s=r.clouds,c=r.windSpd,d=r.pressure,l=r.sunrise,u=r.sunset;return i.a.createElement("div",{className:b.a.currentWeatherContainer},i.a.createElement(p,{icon:t,temperature:a,weather:n}),i.a.createElement(C,{appTemp:o+"\xb0",clouds:s+"%",windSpd:Math.floor(c)+" m/s",pressure:Math.floor(d)+" mb",sunrise:l,sunset:u}))}}]),a}(n.Component),j=a(7),O=a.n(j),N=function(e){Object(d.a)(a,e);var t=Object(l.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).state={city:n.props.city,region:n.props.region,date:new Date},n}return Object(c.a)(a,[{key:"render",value:function(){var e=this.state,t=e.city,a=e.region,n=e.date,r="".concat(["Sunday","Monday","Thuesday","Wednesday","Thursday","Friday","Saturday"][n.getDay()],", ").concat(n.getDate(),"'th of ").concat(["January","February","March","April","May","June","July","August","September","October","November","December"][n.getMonth()]);return i.a.createElement("div",{className:O.a.cityContainer},i.a.createElement("span",{className:O.a.cityName},t,", ",a),i.a.createElement("span",{className:O.a.dateString},r))}}]),a}(n.Component),S=a(8),k=a.n(S),D={t01d:"wi wi-day-thunderstorm",t01n:"wi wi-night-thunderstorm",t02d:"wi wi-day-thunderstorm",t02n:"wi wi-night-thunderstorm",t03d:"wi wi-day-thunderstorm",t03n:"wi wi-night-thunderstorm",t04d:"wi wi-day-lightning",t04n:"wi wi-night-lightning",t05d:"wi wi-day-lightning",t05n:"wi wi-night-lightning",d01d:"wi wi-day-snow",d01n:"wi wi-night-alt-hail",d02d:"wi wi-day-snow",d02n:"wi wi-night-alt-hail",d03d:"wi wi-day-snow",d03n:"wi wi-night-alt-hail",r01d:"wi wi-day-rain",r01n:"wi wi-night-alt-rain",r02d:"wi wi-day-rain",r02n:"wi wi-night-alt-rain",r03d:"wi wi-day-rain-wind",r03n:"wi wi-night-rain-wind",f01d:"wi wi-day-rain",f01n:"wi wi-night-alt-rain",r04d:"wi wi-day-showers",r04n:"wi wi-night-alt-showers",r05d:"wi wi-day-showers",r05n:"wi wi-night-alt-showers",r06d:"wi wi-showers",r06n:"wi wi-showers",s01d:"wi wi-day-snow",s01n:"wi wi-night-alt-snow",s02d:"wi wi-snow",s02n:"wi wi-snow",s03d:"wi wi-snow-wind",s03n:"wi wi-snow-wind",s04d:"wi wi-day-rain-mix",s04n:"wi wi-night-rain-mix",s05d:"wi wi-day-sleet",s05n:"wi wi-night-alt-sleet",s06d:"wi wi-snow-wind",s06n:"wi wi-snow-wind",a01d:"wi wi-day-fog",a01n:"wi wi-night-fog",a02d:"wi wi-smoke",a02n:"wi wi-smoke",a03d:"wi wi-day-fog",a03n:"wi wi-night-fog",a04d:"wi wi-sandstorm",a04n:"wi wi-sandstorm",a05d:"wi wi-day-fog",a05n:"wi wi-night-fog",a06d:"wi wi-day-fog",a06n:"wi wi-night-fog",c01d:"wi wi-day-sunny",c01n:"wi wi-night-clear",c02d:"wi wi-day-cloudy",c02n:"wi wi-night-alt-cloudy",c03d:"wi wi-day-cloudy",c03n:"wi wi-night-alt-cloudy",c04d:"wi wi-cloudy",c04n:"wi wi-cloudy",u00d:"wi wi-day-fog",u00n:"wi wi-night-fog"},x=function(e){Object(d.a)(a,e);var t=Object(l.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).state={day:new Date(Date.parse(n.props.day)),icon:n.props.icon,temp:n.props.temp},n}return Object(c.a)(a,[{key:"render",value:function(){var e=this.state,t=e.day,a=e.icon,n=e.temp;return i.a.createElement("div",{className:k.a.cardContainer},i.a.createElement("span",{className:k.a.day},["Sun","Mon","Tue","Wed","Thu","Fri","Sat"][t.getDay()]),i.a.createElement("i",{className:D[a]}),i.a.createElement("span",{className:k.a.temp},Number(n).toFixed(0),"\xb0"))}}]),a}(n.Component),L=a(11),M=a.n(L),T=function(e){Object(d.a)(a,e);var t=Object(l.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).state={items:[],isLoaded:!1,error:null},n}return Object(c.a)(a,[{key:"componentDidMount",value:function(){var e=this;navigator.geolocation.watchPosition((function(t){var a=t.coords.latitude,n=t.coords.longitude,i="https://api.weatherbit.io/v2.0/forecast/daily?&days=6&lat=".concat(a,"&lon=").concat(n,"&key=").concat("8cbbc52d9b3642c18b2347b5ddb7bd4f");fetch(i).then((function(e){return e.json()})).then((function(t){console.log(t.data),e.setState({isLoaded:!0,items:t.data})}),(function(t){e.setState({isLoaded:!0,error:t})}))}))}},{key:"render",value:function(){var e=this.state,t=e.isLoaded,a=e.error,n=e.items;return t?a?i.a.createElement("div",null,"Error"):i.a.createElement("div",{className:M.a.forecastContainer},n.map((function(e){return i.a.createElement(x,{key:e.datetime,day:e.datetime,temp:e.high_temp,icon:e.weather.icon})}))):i.a.createElement("div",{className:M.a.forecastLoadingContainer},"Loading")}}]),a}(n.Component),F=function(e){Object(d.a)(a,e);var t=Object(l.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).state={mainWeather:{icon:null,temp:null,weather:null},detailedWeather:{appTemp:null,clouds:null,wind:null,rain:null,sunrise:null,sunset:null},city:null,region:null,isLoaded:!1,error:null},n}return Object(c.a)(a,[{key:"componentDidMount",value:function(){var e=this;navigator.geolocation.watchPosition((function(t){var a=t.coords.latitude,n=t.coords.longitude,i="https://api.weatherbit.io/v2.0/current?lat=".concat(a,"&lon=").concat(n,"&key=").concat("8cbbc52d9b3642c18b2347b5ddb7bd4f");fetch(i).then((function(e){return e.json()})).then((function(t){var a=t.data[0];console.log(t.data[0]),e.setState({city:a.city_name,region:a.country_code,isLoaded:!0,mainWeather:{icon:D[a.weather.icon],temp:Math.floor(a.temp),weather:a.weather.description},detailedWeather:{sunrise:a.sunrise,sunset:a.sunset,appTemp:a.app_temp,clouds:a.clouds,windSpd:a.wind_spd,pressure:a.pres}})}))}))}},{key:"render",value:function(){var e=this.state,t=e.city,a=e.region,n=e.mainWeather,r=e.detailedWeather,o=e.isLoaded,s=e.error;return o?s?i.a.createElement("div",null,"Error"):i.a.createElement("div",{className:w.a.container},i.a.createElement(N,{city:t,region:a}),i.a.createElement(W,{mainWeather:n,detailedWeather:r}),i.a.createElement(T,null)):i.a.createElement("div",{className:w.a.loadingContainer},"Loading")}}]),a}(n.Component);var I=function(){return i.a.createElement(F,null)};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(I,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[15,1,2]]]);
//# sourceMappingURL=main.a42c4b7d.chunk.js.map