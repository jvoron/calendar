import {InjectionToken} from '@angular/core';


export interface AppConfig {
    apiUrl:string;
    taskCacheSize:number;
}


export const APP_CONFIG:AppConfig = {
    apiUrl: 'http://localhost:9000',
    taskCacheSize: 10
}


export const CONFIG_TOKEN =
    new InjectionToken<AppConfig>('CONFIG_TOKEN',
        {
            providedIn: 'root',
            factory: () => APP_CONFIG
        });