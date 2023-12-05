// In App.js in a new project

import * as React from 'react';
import { View, Text, Button, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
// import { createDrawerNavigator } from '@react-navigation/drawer';
import Icons from 'react-native-vector-icons/AntDesign'

const Tab = createBottomTabNavigator()
// const Drawer = createDrawerNavigator()

function Drawers() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Feed" component={Feed} />
      <Drawer.Screen name="HomeScreen" component={HomeScreen} />
    </Drawer.Navigator>
  )
}

function Feed({ navigation }) {
  return (
    <View>
      <Text>Feed</Text>
      <Button title='check props' onPress={() => {
        console.log(arguments);
      }} />
      <Button title='open drawer' onPress={() => {
        navigation.toggleDrawer() //如果不是drawer路由 这个方法不存在
      }} />
      <Button title='open modal' onPress={() => {
        navigation.navigate('Modal')
      }} />
    </View>
  )
}
function CenterButton(props) {
  return (

    <TouchableOpacity activeOpacity={1} onPress={() => {
      props.navigation.jumpTo('HomeScreen')
    }}>
      <Icons name="github" size={50} color="red"
        style={{
          transform: [{
            translateY: -20
          }],
          // backgroundColor: 'white',
          borderRadius: 100
        }}
      />
    </TouchableOpacity>
  )
}
function Tabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Feed" component={Feed} />
      <Tab.Screen name="Feed1" component={Feed}
        options={(props) => {
          return {
            tabBarIcon: () => <Icons name="github" size={50} color='pink' />,
            tabBarIconStyle: {
              transform: [{
                translateY: -20
              }],
            }
          }
        }} />
      <Tab.Screen name="Feed2" component={Feed}
        options={(props) => {
          return {
            tabBarButton: (tabProps) => <CenterButton {...props} {...tabProps} />
          }
        }}
      />
      <Tab.Screen name="Feed3" component={Feed} />
      <Tab.Screen name="HomeScreen" component={HomeScreen} />
    </Tab.Navigator>
  )
}

function HomeScreen({ navigation, route }) {
  console.log(route);
  let { itemId } = route?.params || {}
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'flex-start' }}>
      <Text>Home Screen</Text>
      <Text>init ItemId: {itemId}</Text>
      <Button title='set itemId+1' onPress={() => {
        navigation.setParams({
          itemId: itemId + 1
        })
      }} />
      <Button title='set options title' onPress={() => {
        navigation.setOptions({
          title: "set home title" + itemId
        })
      }} />
      <Button
        title="Go to Details"
        onPress={() => {
          navigation.navigate('Details', {
            itemId: 86,
            otherParam: 'anything you want here',
          });
        }}
      />
      <Button title='go to tabs' onPress={() => {
        navigation.navigate('Tabs')
      }} />
    </View>
  );
}

function DetailsScreen({ route, navigation }) {
  /* 2. Get the param */
  const { itemId, otherParam } = route.params;
  console.log(route);
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details Screen</Text>
      <Text>itemId: {JSON.stringify(itemId)}</Text>
      <Text>otherParam: {JSON.stringify(otherParam)}</Text>
      <Button
        title="Go to Details... again"
        onPress={() =>
          navigation.push('Details', {
            itemId: Math.floor(Math.random() * 100),
          })
        }
      />
      <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
}

function ModalScreen() {
  return (
    <View>
      <Text>this is modal</Text>
    </View>
  )
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer >
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: '#f4511e',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      >
        {/* <Stack.Screen name="Drawers" component={Drawers}
          options={{
            headerShown: false
          }}
        /> */}
        <Stack.Screen name="Tabs" component={Tabs}
          options={{
            headerShown: false
          }} />
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          initialParams={{ itemId: 123 }}
          options={{
            headerShown: true,
            // title: "Home custom",
            headerTitle: (props) => (
              <View style={{
                display: 'flex',
              }}>
                <Text>{props.children}</Text>
                <Button title='check props' onPress={() => {
                  console.log(props)
                }} />
              </View>
            ),
            headerRight: (props) => (
              <Button
                onPress={() => {
                  alert('This is a button!')
                  console.log(props);
                }}
                title="Info"
              />
            ),
          }}
        />
        <Stack.Screen name="Details" component={DetailsScreen}
          options={({ route }) => {
            console.log('stack screen options', route);
            return {
              title: route.name + route.params.itemId
            }
          }}
        />
        <Stack.Group screenOptions={{ presentation: 'modal' }}>
          <Stack.Screen name="Modal" component={ModalScreen} />
        </Stack.Group>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;