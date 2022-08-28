import * as React from 'react';
import {
  View,
  Text,
  StyleSheet,
  useWindowDimensions,
  Button,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
// import { Feather } from '@expo/vector-icons';
import { createStackNavigator } from '@react-navigation/stack';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function TabNav() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="TabOne"
        component={() => (
          <View style={styles.container}>
            <Text>TabOne</Text>
          </View>
        )}
      />
      <Tab.Screen
        name="TabTwo"
        component={() => (
          <View style={styles.container}>
            <Text>TabTwo</Text>
          </View>
        )}
      />
    </Tab.Navigator>
  );
}

const StackNav = ({ route, navigation }) => {
  return (
    <>
      <Button title={'Open Drawer'} onPress={() => navigation.toggleDrawer()} />
      <Stack.Navigator>
        <Stack.Screen name="Feed" component={Feed} />
        <Stack.Screen name="Article" component={Article} />
      </Stack.Navigator>
    </>
  );
};

function CustomDrawerContent(props) {
  const width = useWindowDimensions().width * 0.3;

  return (
    <DrawerContentScrollView {...props}>
      <View style={styles.menuContainer}>
        <View
          style={[
            styles.menuItemsCard,
            { backgroundColor: '#fff2df', width: width, height: width },
          ]}>
          <>
            <View
              style={[styles.circleContainer, { backgroundColor: '#FFC56F' }]}>
              {/* <Feather travel name="briefcase" size={25} color="#fbae41" /> */}
              <DrawerItem
                label="Screen1"
                labelStyle={{ color: '#fbae41', fontSize: 10 }}
                onPress={() => {
                  props.navigation.navigate('Screen1', { body: 'hi' });
                }}
              />
            </View>
          </>
          <DrawerItem
            style={{
              position: 'absolute',
              left: 0,
              width: width,
              height: width,
            }}
            label="Article"
            labelStyle={{ color: '#609806' }}
            onPress={() => {
              props.navigation.navigate('Article', { body: 'article' });
            }}
          />
        </View>
        <View
          style={[
            styles.menuItemsCard,
            { backgroundColor: '#EFFFD5', width: width, height: width },
          ]}>
          <View
            style={[styles.circleContainer, { backgroundColor: '#b5ff39' }]}>
            {/* <Feather Medical name="briefcase" size={25} color="#609806" /> */}
          </View>

          <DrawerItem
            style={{
              position: 'absolute',
              left: 0,
              width: width,
              height: width,
            }}
            label="Feed"
            labelStyle={{ color: '#609806' }}
            onPress={() => {
              props.navigation.navigate('Feed', { body: 'hello' });
            }}
          />
        </View>
      </View>
    </DrawerContentScrollView>
  );
}

function MyDrawer({ navigation }) {
  return (
    <>
      <Drawer.Navigator
        drawerContent={(props) => <CustomDrawerContent {...props} />}>
        <Drawer.Screen name="Screen1" component={StackNav} />
        <Drawer.Screen name="StackNav" component={TabNav} />
      </Drawer.Navigator>
    </>
  );
}

export default function DemoDrawer() {
  return (
    <NavigationContainer>
      <MyDrawer />
    </NavigationContainer>
  );
}

function Feed({ navigation, route }) {
  console.log(route.params);
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Feed Screen {route.params?.body}</Text>
      <Button
        title={'Article'}
        onPress={() => navigation.navigate('Article')}
      />
    </View>
  );
}

function Article({ navigation, route }) {
  console.log(route.params);
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Article Screen {route.params?.body}</Text>
      <Button title={'Feed'} onPress={() => navigation.navigate('Feed')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  menuContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  menuItemsCard: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  circleContainer: {
    width: 50,
    height: 50,
    borderRadius: 25,
    padding: 10,
  },
});
