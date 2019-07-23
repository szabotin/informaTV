import { Subject } from 'rxjs/Subject';

export class WeatherService {

    private pageIndex: number ;
    
    weatherPagesSubject = new Subject<any[]>() ;
    
    private weathPages = [ // delete or comment one bracket to delete one person or not
        {
            linkText : "Now",
            page : [ // may put it in another service
                {
                    numberOfBoxes : 1,
                    date : "2.00 pm",
                    weathText : "Sunny",
                    weathIconPath : "assets/weather/sun.png",
                    windText : "No wind",
                    temp : "18°C"
                }
            ]
        },
        {
            linkText : "Next hour",
            page : [ // may put it in another service
                {
                    numberOfBoxes : 3,
                    date : "2.10 pm",
                    weathText : "Sunny",
                    weathIconPath : "assets/weather/sun.png",
                    windText : "No wind",
                    temp : "18°C"
                },
                {
                    numberOfBoxes : 3,
                    date : "2.20 pm",
                    weathText : "Sunny and cloudy",
                    weathIconPath : "assets/weather/sunCloud.png",
                    windText : "Windy",
                    temp : "16°C" 
                },
                {
                    numberOfBoxes : 3,
                    date : "2.30 pm",
                    weathText : "Cloudy",
                    weathIconPath : "assets/weather/cloud.png",
                    windText : "Very windy",
                    temp : "14°C"
                }/*,
                {
                    numberOfBoxes : 3,
                    date : "2.40 pm",
                    weathText : "Rainy",
                    weathIconPath : "assets/weather/sun.png",
                    windText : "No wind",
                    temp : "18°C"
                },
                {
                    numberOfBoxes : 3,
                    date : "2.50 pm",
                    weathText : "Rainy",
                    weathIconPath : "assets/weather/sun.png",
                    windText : "No wind",
                    temp : "18°C"
                },
                {
                    numberOfBoxes : 3,
                    date : "3.00 pm",
                    weathText : "Sunny",
                    weathIconPath : "assets/weather/sun.png",
                    windText : "No wind",
                    temp : "18°C"
                } */
            ]
        },
        {   
            linkText : "Next 6 hours",
            page : [ // may put it in another service
                {
                    numberOfBoxes : 3,
                    date : "3.00 pm",
                    weathText : "Sunny",
                    weathIconPath : "assets/weather/sun.png",
                    windText : "No wind",
                    temp : "18°C"
                },
                {
                    numberOfBoxes : 3,
                    date : "4.00 pm",
                    weathText : "Sunny and cloudy",
                    weathIconPath : "assets/weather/sunCloud.png",
                    windText : "Windy",
                    temp : "16°C" 
                },
                {
                    numberOfBoxes : 3,
                    date : "5.00 pm",
                    weathText : "Cloudy",
                    weathIconPath : "assets/weather/cloud.png",
                    windText : "Very windy",
                    temp : "14°C"
                }/* ,
                {
            
                    numberOfBoxes : 3,
                    date : "5.00 pm",
                    weathText : "Rainy",
                    weathIconPath : "assets/weather/sun.png",
                    windText : "No wind",
                    temp : "18°C"
                },
                {
                    numberOfBoxes : 3,
                    date : "6.00 pm",
                    weathText : "Rainy",
                    weathIconPath : "assets/weather/sun.png",
                    windText : "No wind",
                    temp : "18°C"
                } */
            ]
        }
    ] ;

    emitWeatherSubject() {
        this.weatherPagesSubject.next(this.weathPages.slice()) ;
    }

    getPageIndex() {
        return this.pageIndex ;
    }

    setPageIndex(index: number) {
        this.pageIndex = index ;
    }

    getLength() {
        return this.weathPages.length ;
    }
}