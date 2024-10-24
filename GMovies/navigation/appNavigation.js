import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomeSreen from '../screens/HomeSreen';
import MovieSreen from '../screens/MovieSreen';
import PersonSreen from '../screens/PersonSreen';
import SearchSreen from '../screens/SearchSreen';

const Stack = createNativeStackNavigator;

export default function AppNavigation() {
  return (
   <NavigationContainer>
     <Stack.Navigator>
        <StackSreen name='Home' options={{headerShown: false}} component={HomeSreen} />
        <StackSreen name='Movie' options={{headerShown: false}} component={MovieSreen} />
        <StackSreen name='Person' options={{headerShown: false}} component={PersonSreen} />
        <StackSreen name='Search' options={{headerShown: false}} component={SearchSreen} />
     </Stack.Navigator>
   </NavigationContainer>
  )
}