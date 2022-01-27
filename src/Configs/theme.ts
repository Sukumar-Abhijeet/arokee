export type App_Theme = {
    colors: {
        primary: string;
        secondary: string;
        dark: string;
        light: string;
        grey: string;
    };
    spacing: {
        s16:number;
        s12:number;
        s8:number;
        s4:number;
    };
    fontSize: {
        f20:number;
        f18:number;
        f16:number;
        f14:number;
        f12:number;
        f8:number;
    };
}


const App_Theme = {
    colors: {
        primary: '#7d05b0',
        secondary: '#00a680',
        dark : '#000000',
        light : '#ffffff',
        grey: '#949292'
    },
    spacing:{
        s16:16,
        s12:12,
        s8:8,
        s4:4,
    },
    fontSize:{
        f8:8,
        f12:12,
        f14:14,
        f16:16,
        f18:18,
        f20:20,
    }
}

export default App_Theme;