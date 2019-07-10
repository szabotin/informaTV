import { Subject } from 'rxjs/Subject';

export class WeatherService {
    
    boxContentSubject = new Subject<any[]>() ;
    
    weathBoxContent = [   
        {
            date : "2.00 pm",
            weathText : "Sunny",
            weathIconPath : "assets/weather/sun.png",
            windText : "No wind",
            temp : "18°C"
        },
        {
            date : "3.00 pm",
            weathText : "Sunny and cloudy",
            weathIconPath : "assets/weather/sunCloud.png",
            windText : "Windy",
            temp : "16°C"             
        }, 
        {
            date : "4.00 pm",
            weathText : "Cloudy",
            weathIconPath : "assets/weather/cloud.png",
            windText : "Very windy",
            temp : "14°C"
        }, 
        {
            date : "5.00 pm",
            weathText : "Rainy",
            weathIconPath : "assets/weather/sun.png",
            windText : "No wind",
            temp : "18°C"
        }
    ] ;

    emitBoxContentSubject() {
        this.boxContentSubject.next(this.weathBoxContent.slice()) ;
    }
}