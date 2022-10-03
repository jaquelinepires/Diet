import { ThemeProvider } from 'styled-components/native';
import { useFonts, Jost_400Regular, Jost_600SemiBold} from '@expo-google-fonts/jost';
import theme from './src/theme';
import { StatusBar } from 'react-native';
import { Routes } from './src/routes'
import { Load } from './src/components/Load';
import * as SplashScreen from 'expo-splash-screen';
import { MealsContextProvider } from './src/Contexts/MealsContext';


export default function App() {
 const [ fontsLoaded ] = useFonts({
   Jost_400Regular,
   Jost_600SemiBold
   })

 if (!fontsLoaded) {
  return null;
}

SplashScreen.preventAutoHideAsync();
 return (
   <ThemeProvider theme={theme}>
      <MealsContextProvider>
      <StatusBar 
        barStyle="dark-content"
        backgroundColor= "transparent"
        translucent
        />
       {fontsLoaded ? <Routes /> : <Load />}
       </MealsContextProvider>
    </ThemeProvider>
  )
}
