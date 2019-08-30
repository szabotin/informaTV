import { Subject } from 'rxjs/internal/Subject';

export class WeatherService {
    
    timeLinksSubject = new Subject<any[]>();
    weatherInfosSubject = new Subject<any[]>();

    private timeLinks = [ // here are the time-link details. You can add or delete one section easily
        {
            time: "Now",
            routing: "one-box" // refer to app-routing.module.ts
        },
        {
            time: "Next Hour",
            routing: "three-boxes" // refer to app-routing.module.ts
        },
        {
            time: "Today",
            routing: "three-boxes" // refer to app-routing.module.ts
        },
        {
            time: "Tomorrow",
            routing: "three-boxes" // refer to app-routing.module.ts
        },
        {
            time: "7 days",
            routing: "week" // refer to app-routing.module.ts
        },
        {
            time: "15 days",
            routing: "week" // refer to app-routing.module.ts
        }
    ]

    private weekLinks = [
        {
            day: "Monday"
        },
        {
            day: "Tuesday"
        },
        {
            day: "Wednesday"
        },
        {
            day: "Thursday"
        },
        {
            day: "Friday"
        },
        {
            day: "Saturday"
        },
        {
            day: "Sunday"
        }
    ]

    private weatherInfos = [
        {
            timeSection: "Now",
            localisation: "Dublin",
            time:"Now",
            weatherText: "Sunny",
            weatherIcon: "",
            temperature: "18°C",
            wind: "Very Windy"
        },
        {
            timeSection: "Next hour",
            localisation: "Dublin",
            time:"2:10pm",
            weatherText: "Sunny",
            weatherIcon: "",
            temperature: "18°C",
            wind: "Very Windy"
        },
        {
            timeSection: "Next hour",
            localisation: "Dublin",
            time:"2:20pm",
            weatherText: "Sunny",
            weatherIcon: "",
            temperature: "18°C",
            wind: "Very Windy"
        },
        {
            timeSection: "Next hour",
            localisation: "Dublin",
            time:"2:30pm",
            weatherText: "Sunny",
            weatherIcon: "",
            temperature: "18°C",
            wind: "Very Windy"
        },
        {
            timeSection: "Next hour",
            localisation: "Dublin",
            time:"2:40pm",
            weatherText: "Sunny",
            weatherIcon: "",
            temperature: "18°C",
            wind: "Very Windy"
        },
        {
            timeSection: "Next hour",
            localisation: "Dublin",
            time:"2:50pm",
            weatherText: "Sunny",
            weatherIcon: "",
            temperature: "18°C",
            wind: "Very Windy"
        },
        {
            timeSection: "Next hour",
            localisation: "Dublin",
            time:"3:00pm",
            weatherText: "Sunny",
            weatherIcon: "",
            temperature: "18°C",
            wind: "Very Windy"
        },
        {
            timeSection: "Today",
            localisation: "Dublin",
            time:"Morning",
            weatherText: "Sunny",
            weatherIcon: "",
            temperature: "18°C",
            wind: "Very Windy"
        },
        {
            timeSection: "Today",
            localisation: "Dublin",
            time:"Afternoon",
            weatherText: "Sunny",
            weatherIcon: "",
            temperature: "18°C",
            wind: "Very Windy"
        },
        {
            timeSection: "Today",
            localisation: "Dublin",
            time:"Evening",
            weatherText: "Sunny",
            weatherIcon: "",
            temperature: "18°C",
            wind: "Very Windy"
        },
        {
            timeSection: "Today",
            localisation: "Dublin",
            time:"Night",
            weatherText: "Sunny",
            weatherIcon: "",
            temperature: "18°C",
            wind: "Very Windy"
        },
        {
            timeSection: "Tomorrow",
            localisation: "Dublin",
            time:"Morning",
            weatherText: "Sunny",
            weatherIcon: "",
            temperature: "18°C",
            wind: "Very Windy"
        },
        {
            timeSection: "Tomorrow",
            localisation: "Dublin",
            time:"Afternoon",
            weatherText: "Sunny",
            weatherIcon: "",
            temperature: "18°C",
            wind: "Very Windy"
        },
        {
            timeSection: "Tomorrow",
            localisation: "Dublin",
            time:"Evening",
            weatherText: "Sunny",
            weatherIcon: "",
            temperature: "18°C",
            wind: "Very Windy"
        },
        {
            timeSection: "Tomorrow",
            localisation: "Dublin",
            time:"Night",
            weatherText: "Sunny",
            weatherIcon: "",
            temperature: "18°C",
            wind: "Very Windy"
        },
        {
            timeSection: "7 days",
            localisation: "Dublin",
            time:"Monday",
            weatherText: "Sunny",
            weatherIcon: "",
            temperature: "18°C",
            wind: "Very Windy"
        },
        {
            timeSection: "7 days",
            localisation: "Dublin",
            time:"Tuesday",
            weatherText: "Sunny",
            weatherIcon: "",
            temperature: "18°C",
            wind: "Very Windy"
        },
        {
            timeSection: "15 days",
            localisation: "Dublin",
            time:"Thursday",
            weatherText: "Sunny",
            weatherIcon: "",
            temperature: "18°C",
            wind: "Very Windy"
        },
        {
            timeSection: "15 days",
            localisation: "Dublin",
            time:"Friday",
            weatherText: "Sunny",
            weatherIcon: "",
            temperature: "18°C",
            wind: "Very Windy"
        },
        {
            timeSection: "7 days",
            localisation: "Dublin",
            time:"Satday",
            weatherText: "Sunny",
            weatherIcon: "",
            temperature: "18°C",
            wind: "Very Windy"
        },
        {
            timeSection: "15 days",
            localisation: "Dublin",
            time:"Sunday",
            weatherText: "Sunny",
            weatherIcon: "",
            temperature: "18°C",
            wind: "Very Windy"
        },
        {
            timeSection: "15 days",
            localisation: "Dublin",
            time:"Monday",
            weatherText: "Sunny",
            weatherIcon: "",
            temperature: "18°C",
            wind: "Very Windy"
        },
        {
            timeSection: "15 days",
            localisation: "Dublin",
            time:"Tuesday",
            weatherText: "Sunny",
            weatherIcon: "",
            temperature: "18°C",
            wind: "Very Windy"
        },
        {
            timeSection: "7 days",
            localisation: "Dublin",
            time:"Wednesday",
            weatherText: "Sunny",
            weatherIcon: "",
            temperature: "18°C",
            wind: "Very Windy"
        },
        {
            timeSection: "7 days",
            localisation: "Dublin",
            time:"Thursday",
            weatherText: "Sunny",
            weatherIcon: "",
            temperature: "18°C",
            wind: "Very Windy"
        },
        {
            timeSection: "7 days",
            localisation: "Dublin",
            time:"Friday",
            weatherText: "Sunny",
            weatherIcon: "",
            temperature: "18°C",
            wind: "Very Windy"
        },
        {
            timeSection: "15 days",
            localisation: "Dublin",
            time:"Satday",
            weatherText: "Sunny",
            weatherIcon: "",
            temperature: "18°C",
            wind: "Very Windy"
        },
        {
            timeSection: "15 days",
            localisation: "Dublin",
            time:"Sunday",
            weatherText: "Sunny",
            weatherIcon: "",
            temperature: "18°C",
            wind: "Very Windy"
        },
    ]

    emitTimeLinksSubject() {
        this.timeLinksSubject.next(this.timeLinks.slice());
    }

    emitWeatherInfosSubject() {
        this.weatherInfosSubject.next(this.weatherInfos.slice());
    }
}