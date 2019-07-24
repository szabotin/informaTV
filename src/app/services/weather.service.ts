import { Subject } from 'rxjs/Subject';

export class WeatherService {

    private serieIndex: number ;
    private pageIndex: number ;
    
    weatherPagesSubject = new Subject<any[]>() ;
    
    private weathPages = [ // delete or comment one bracket to delete one person or not
        [
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
        ],
        [
            {
                linkText : "Next 12 hours",
                page : [ // may put it in another service
                    {
                        numberOfBoxes : 3, // modify + arrows in the weather pages
                        date : "2.00 pm",
                        weathText : "Sunny",
                        weathIconPath : "assets/weather/sun.png",
                        windText : "No wind",
                        temp : "18°C"
                    },
                    {
                        numberOfBoxes : 3,
                        date : "4.00 pm",
                        weathText : "Cloudy",
                        weathIconPath : "assets/weather/cloud.png",
                        windText : "No wind",
                        temp : "17°C"
                    },
                    {
                        numberOfBoxes : 3,
                        date : "6.00 pm",
                        weathText : "Sunny and cloudy",
                        weathIconPath : "assets/weather/sunCloud.png",
                        windText : "Windy",
                        temp : "17°C"
                    }
                ]
            },
            {
                linkText : "Tomorrow", // text to advert it is tommorow and not put it in the date
                page : [ // may put it in another service
                    {
                        numberOfBoxes : 3,
                        date : "7.00 am",
                        weathText : "Sunny",
                        weathIconPath : "assets/weather/sun.png",
                        windText : "No wind",
                        temp : "18°C"
                    },
                    {
                        numberOfBoxes : 3,
                        date : "10.00 am",
                        weathText : "Sunny and cloudy",
                        weathIconPath : "assets/weather/sunCloud.png",
                        windText : "Windy",
                        temp : "16°C" 
                    },
                    {
                        numberOfBoxes : 3,
                        date : "1.00 pm",
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
                linkText : "After tomorrow",
                page : [ // may put it in another service
                    {
                        numberOfBoxes : 3,
                        date : "7.00 am",
                        weathText : "Sunny",
                        weathIconPath : "assets/weather/sun.png",
                        windText : "No wind",
                        temp : "18°C"
                    },
                    {
                        numberOfBoxes : 3,
                        date : "10.00 am",
                        weathText : "Sunny and cloudy",
                        weathIconPath : "assets/weather/sunCloud.png",
                        windText : "Windy",
                        temp : "16°C" 
                    },
                    {
                        numberOfBoxes : 3,
                        date : "1.00 pm",
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
        ]
    ] ;

    emitWeatherSubject() {
        this.weatherPagesSubject.next(this.weathPages.slice()) ;
    }

    getSerieIndex() {
        return this.serieIndex ;
    }

    getPageIndex() {
        return this.pageIndex ;
    }
	
    setSerieIndex(index: number) {
        this.serieIndex = index ;
    }

    setPageIndex(index: number) {
        this.pageIndex = index ;
    }

    getLength() {
        return this.weathPages.length ;
    }
}