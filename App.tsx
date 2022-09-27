import { ThemeProvider } from 'styled-components/native';
import { useFonts, Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto';
import theme from './src/theme';
import { StatusBar } from 'react-native';
import { Routes } from './src/routes'
import { AuthProvider, useAuth } from './src/hooks/auth';
import { Load } from './src/components/Load';

export default function App() {
 const [ fontsLoaded ] = useFonts({ Roboto_400Regular, Roboto_700Bold })

 const { userStorageLoading } = useAuth()
 
 
 if (!fontsLoaded ||userStorageLoading ) {
  return null;
}

 return (
   <ThemeProvider theme={theme}>
      <StatusBar 
        barStyle="dark-content"
        backgroundColor= "transparent"
        translucent
        />
      <AuthProvider>
      {fontsLoaded ? <Routes /> : <Load />}
      </AuthProvider>
    </ThemeProvider>
  )
}
