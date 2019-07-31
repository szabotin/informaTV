import { Subject } from 'rxjs/Subject';

export class WeatherService {

    private weatherLinksSerieIndex: number ;
    private weatherLinkIndex: number ;
    private weatherPageIndex: number ;
    
    weatherPagesSubject = new Subject<any[]>() ;
    
    private weathPages = [ // delete or comment one bracket to delete one links or not
        [ // serie of 3 weather links
            {
                linkText : "Now",
                page : [ 
                    [
                        {
                            numberOfBoxes : 1,
                            date : "2.00 pm",
                            weathText : "Sunny",
                            weathIconPath : "assets/weather/sun.png",
                            windText : "No wind",
                            temp : "18°C"
                        }
                    ]
                ]
            },
            {
                linkText : "Next hour",
                page : [ 
                    [ // serie of 3 weather boxes
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
                        }
                    ],
                    [ // serie of 3 weather boxes
                        {
                            numberOfBoxes : 3,
                            date : "2.40 pm",
                            weathText : "Rainy",
                            weathIconPath : "assets/weather/rain.png",
                            windText : "No wind",
                            temp : "18°C"
                        },
                        {
                            numberOfBoxes : 3,
                            date : "2.50 pm",
                            weathText : "Rainy",
                            weathIconPath : "assets/weather/rain.png",
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
                        }
                    ]
                ]
            },
            {   
                linkText : "Next 6 hours",
                page : [ 
                    [ // serie of 3 weather boxes
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
                        }
                    ],
                    [ // serie of 3 weather boxes
                        {
                    
                            numberOfBoxes : 3,
                            date : "6.00 pm",
                            weathText : "Rainy",
                            weathIconPath : "assets/weather/sun.png",
                            windText : "No wind",
                            temp : "18°C"
                        },
                        {
                            numberOfBoxes : 3,
                            date : "7.00 pm",
                            weathText : "Rainy",
                            weathIconPath : "assets/weather/rain.png",
                            windText : "No wind",
                            temp : "18°C"
                        },
                        {
                            numberOfBoxes : 3,
                            date : "8.00 pm",
                            weathText : "Rainy",
                            weathIconPath : "assets/weather/rain.png",
                            windText : "No wind",
                            temp : "18°C"
                        }
                    ]
                ]
            }
        ],
        [ // serie of 3 weather links
            {
                linkText : "Next 12 hours",
                page : [
                    [ // serie of 3 weather boxes
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
                    ],
                    [ // serie of 3 weather boxes
                        {
                            numberOfBoxes : 3, // modify + arrows in the weather pages
                            date : "8.00 pm",
                            weathText : "Cloudy",
                            weathIconPath : "assets/weather/cloud.png",
                            windText : "No wind",
                            temp : "16°C"
                        },
                        {
                            numberOfBoxes : 3,
                            date : "10.00 pm",
                            weathText : "Cloudy",
                            weathIconPath : "assets/weather/cloud.png",
                            windText : "No wind",
                            temp : "12°C"
                        },
                        {
                            numberOfBoxes : 3,
                            date : "12.00 pm",
                            weathText : "Sunny and cloudy",
                            weathIconPath : "assets/weather/sunCloud.png",
                            windText : "Windy",
                            temp : "11°C"
                        }
                    ]
                ]
            },
            {
                linkText : "Tomorrow", // text to advert it is tommorow and not put it in the date
                page : [
                    [ // serie of 3 weather boxes
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
                        }
                    ],
                    [ // serie of 3 weather boxes
                        {
                            numberOfBoxes : 3,
                            date : "2.40 pm",
                            weathText : "Rainy",
                            weathIconPath : "assets/weather/rain.png",
                            windText : "No wind",
                            temp : "18°C"
                        },
                        {
                            numberOfBoxes : 3,
                            date : "2.50 pm",
                            weathText : "Rainy",
                            weathIconPath : "assets/weather/rain.png",
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
                        }
                    ]
                ]
            },
            {   
                linkText : "After tomorrow",
                page : [
                    [ // serie of 3 weather boxes
                        {
                            numberOfBoxes : 3,
                            date : "7.00 am",
                            weathText : "Sunny",
                            weathIconPath : "assets/weather/sun.png",
                            windText : "No wind",
                            temp : "12°C"
                        },
                        {
                            numberOfBoxes : 3,
                            date : "10.00 am",
                            weathText : "Sunny and cloudy",
                            weathIconPath : "assets/weather/sunCloud.png",
                            windText : "Windy",
                            temp : "14°C" 
                        },
                        {
                            numberOfBoxes : 3,
                            date : "1.00 pm",
                            weathText : "Cloudy",
                            weathIconPath : "assets/weather/cloud.png",
                            windText : "Very windy",
                            temp : "14°C"
                        }
                    ],
                    [ // serie of 3 weather boxes
                        {
                    
                            numberOfBoxes : 3,
                            date : "4.00 pm",
                            weathText : "Rainy",
                            weathIconPath : "assets/weather/rain.png",
                            windText : "No wind",
                            temp : "15°C"
                        },
                        {
                            numberOfBoxes : 3,
                            date : "7.00 pm",
                            weathText : "Rainy",
                            weathIconPath : "assets/weather/rain.png",
                            windText : "No wind",
                            temp : "13°C"
                        },
                        {
                            numberOfBoxes : 3,
                            date : "10.00 pm",
                            weathText : "Cloudy",
                            weathIconPath : "assets/weather/cloud.png",
                            windText : "No wind",
                            temp : "11°C"
                        } 
                    ]
                ]
            }
        ],
        [ // new serie of just one weather link
            {
                linkText : "Next 6 days",
                page : [
                    [ // serie of 3 weather boxes
                        {
                            numberOfBoxes : 3,
                            date : "Monday",
                            weathText : "Sunny",
                            weathIconPath : "assets/weather/sun.png",
                            windText : "No wind",
                            temp : "18°C"
                        },
                        {
                            numberOfBoxes : 3,
                            date : "Tuesday",
                            weathText : "Sunny and cloudy",
                            weathIconPath : "assets/weather/sunCloud.png",
                            windText : "Windy",
                            temp : "16°C" 
                        },
                        {
                            numberOfBoxes : 3,
                            date : "Wednesday",
                            weathText : "Cloudy",
                            weathIconPath : "assets/weather/cloud.png",
                            windText : "Very windy",
                            temp : "14°C"
                        }
                    ],
                    [ // serie of 3 weather boxes
                        {
                    
                            numberOfBoxes : 3,
                            date : "Thursday",
                            weathText : "Rainy",
                            weathIconPath : "assets/weather/rain.png",
                            windText : "No wind",
                            temp : "15°C"
                        },
                        {
                            numberOfBoxes : 3,
                            date : "Friday",
                            weathText : "Rainy",
                            weathIconPath : "assets/weather/rain.png",
                            windText : "No wind",
                            temp : "15°C"
                        },
                        {
                            numberOfBoxes : 3,
                            date : "Saturday",
                            weathText : "Cloudy",
                            weathIconPath : "assets/weather/cloud.png",
                            windText : "No wind",
                            temp : "18°C"
                        } 
                    ]
                ]
            }
        ]
    ] ;

    emitWeatherSubject() {
        this.weatherPagesSubject.next(this.weathPages.slice()) ;
    }

    getWeatherLinkSerieIndex() {
        return this.weatherLinksSerieIndex ;
    }
	getWeatherLinkIndex() {
        return this.weatherLinkIndex ;
    }
    getWeatherPageIndex() {
        return this.weatherPageIndex ;
    }

    getNbPagesToDisplay() {
        var nbPages = 0 ;

        for (var i = 0 ; i < this.weathPages.length ; i++) {
            for (var j = 0 ; j < this.weathPages[i].length ; j++)
                nbPages += this.weathPages[i][j].page.length ;
        }

        return nbPages ;
    }
    
    setWeatherLinkSerieIndex(index: number) {
        this.weatherLinksSerieIndex = index ;
    }
    setWeatherLinkIndex(index: number) {
        this.weatherLinkIndex = index ;
    }
    setWeatherPageIndex(index: number) {
        this.weatherPageIndex = index ;
    }

    setIndexs(index: number) { // this function is similar to the way we count numbers. (units, dozens, hundreds...), ut applied with our structure (weatherBoxIndex, weatherPageIndex, ...)
        var weatherLinkSerieIndex = 0 ;
        var weatherLinkIndex = 0 ;
        var weatherPageIndex = 0 ;
        
        for (var i = 0 ; i < index ; i++) { // change : we can avoid this loop for every indexes
            weatherPageIndex++ ;
            if (weatherPageIndex >= this.weathPages[weatherLinkSerieIndex][weatherLinkIndex].page.length) {
                weatherPageIndex = 0 ;
                weatherLinkIndex++ ;
                if (weatherLinkIndex >= this.weathPages[weatherLinkSerieIndex].length) {
                    weatherLinkIndex = 0 ;
                    weatherLinkSerieIndex++ ;
                }
            }
        }
        
        this.weatherLinksSerieIndex = weatherLinkSerieIndex ; 
        this.weatherLinkIndex = weatherLinkIndex ;
        this.weatherPageIndex = weatherPageIndex ;
    }

    getLength() {
        return this.weathPages.length ;
    }
}