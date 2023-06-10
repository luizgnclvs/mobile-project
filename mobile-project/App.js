import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Provider as PaperProvider } from 'react-native-paper';
import { FontAwesome } from '@expo/vector-icons';

import HomeScreen from './screens/HomeScreen';
import AboutScreen from './screens/AboutScreen';
import AlbumDetailsScreen from './screens/AlbumDetailsScreen';
import AlbumReviewScreen from './screens/AlbumReviewScreen';
import AlbumCreateScreen from './screens/AlbumCreateScreen';

const Client = new QueryClient();
const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const HomeStack = () => {
	return (
		<Stack.Navigator>
			<Stack.Screen name='HomeScreen' component={HomeScreen} />
			<Stack.Screen name='AlbumDetailsScreen' component={AlbumDetailsScreen} />
			<Stack.Screen name='AlbumReviewScreen' component={AlbumReviewScreen} />
		</Stack.Navigator>
	);
}


export default function App() {
	return (
		<QueryClientProvider client={Client}>
			<PaperProvider>
				<NavigationContainer>
					<Tab.Navigator>
						<Tab.Screen 
							name='Home'
							component={HomeStack}
							options={{
								tabBarIcon: ({ color, size }) => (
									<FontAwesome name="home" color={color} size={size} />
								),
							}}
						/>
						<Tab.Screen 
							name='About' 
							component={AboutScreen} 
							options={{
								tabBarIcon: ({ color, size }) => (
									<FontAwesome name="info-circle" color={color} size={size} />
								),
							}}
						/>
						<Tab.Screen
							name='NewAlbum'
							component={AlbumCreateScreen}
							options={{
								tabBarIcon: ({ color, size }) => (
									<FontAwesome name="plus" color={color} size={size} />
								),
							}}
						/>
					</Tab.Navigator>
				</NavigationContainer>
			</PaperProvider>
		</QueryClientProvider>
	);
}
