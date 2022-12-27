import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  weatherdata:any;
  constructor() { }

  ngOnInit(): void {
    this.getWeather();
    console.log(this.weatherdata);
  }

  getWeather(){
    let data=JSON.parse('{"coord":{"lon":10.99,"lat":44.34},"weather":[{"id":803,"main":"Clouds","description":"broken clouds","icon":"04d"}],"base":"stations","main":{"temp":279.93,"feels_like":279.93,"temp_min":278.52,"temp_max":280.9,"pressure":1012,"humidity":74,"sea_level":1012,"grnd_level":925},"visibility":10000,"wind":{"speed":0.65,"deg":109,"gust":1.67},"clouds":{"all":65},"dt":1668936738,"sys":{"type":2,"id":2044440,"country":"IT","sunrise":1668925099,"sunset":1668959115},"timezone":3600,"id":3163858,"name":"Zocca","cod":200}');
   // console.log(data);
    this.setWeather(data);
  }

  setWeather(data: any){
    this.weatherdata=data;
    let sunsetTime=new Date(this.weatherdata.sys.sunset*1000);
    this.weatherdata.sunsetTime=sunsetTime.toLocaleTimeString();
    let currentdate=new Date();
    this.weatherdata.isDay=(currentdate.getTime() <sunsetTime.getTime());

    this.weatherdata.temp_celcius=(this.weatherdata.main.temp-273.15).toFixed(0);
    this.weatherdata.temp_min=(this.weatherdata.main.temp_min-273.15).toFixed(0);
    this.weatherdata.temp_max=(this.weatherdata.main.temp_max-273.15).toFixed(0);
    this.weatherdata.feels_like=(this.weatherdata.main.feels_like-273.15).toFixed(0);

  }
}
