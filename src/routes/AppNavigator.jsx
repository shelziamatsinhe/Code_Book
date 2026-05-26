// ============================================================
// Routes: AppNavigator.jsx
// Descrição: Navegação principal com Tab Bar profissional
// ============================================================

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import WelcomeScreen from '../screens/WelcomeScreen';
import HomeScreen from '../screens/HomeScreen';
import SearchScreen from '../screens/SearchScreen';
import FavoritesScreen from '../screens/FavoritesScreen';
import ProfileScreen from '../screens/ProfileScreen';
import CourseDetailScreen from '../screens/CourseDetailScreen';
import RegisterScreen from '../screens/RegisterScreen';
import StudentListScreen from '../screens/StudentListScreen';
import LoginScreen from '../screens/LoginScreen';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

// ============================================================
// Ícones SVG simples desenhados com View e StyleSheet
// Sem dependências externas
// ============================================================

const HomeIcon = ({ focused }) => (
  <View style={styles.iconWrapper}>
    {/* Telhado */}
    <View style={[styles.roof, focused && styles.roofActive]} />
    {/* Corpo da casa */}
    <View style={[styles.houseBody, focused && styles.houseBodyActive]} />
  </View>
);

const SearchIcon = ({ focused }) => (
  <View style={styles.iconWrapper}>
    {/* Círculo da lupa */}
    <View style={[styles.searchCircle, focused && styles.searchCircleActive]} />
    {/* Cabo da lupa */}
    <View style={[styles.searchHandle, focused && styles.searchHandleActive]} />
  </View>
);

const StarIcon = ({ focused }) => (
  <View style={styles.iconWrapper}>
    <Text style={[styles.starIcon, focused && styles.starIconActive]}>
      ★
    </Text>
  </View>
);

const ProfileIcon = ({ focused }) => (
  <View style={styles.iconWrapper}>
    {/* Cabeça */}
    <View style={[styles.profileHead, focused && styles.profileHeadActive]} />
    {/* Corpo */}
    <View style={[styles.profileBody, focused && styles.profileBodyActive]} />
  </View>
);

// ============================================================
// Label da Tab
// ============================================================
const TabLabel = ({ label, focused }) => (
  <Text style={[styles.tabLabel, focused && styles.tabLabelActive]}>
    {label}
  </Text>
);

// ============================================================
// Tab Navigator
// ============================================================
const MainTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: styles.tabBar,
        tabBarShowLabel: false,
      }}>

      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={styles.tabItem}>
              <HomeIcon focused={focused} />
              <TabLabel label="Início" focused={focused} />
            </View>
          ),
        }}
      />

      <Tab.Screen
        name="Search"
        component={SearchScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={styles.tabItem}>
              <SearchIcon focused={focused} />
              <TabLabel label="Pesquisa" focused={focused} />
            </View>
          ),
        }}
      />

      <Tab.Screen
        name="Favorites"
        component={FavoritesScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={styles.tabItem}>
              <StarIcon focused={focused} />
              <TabLabel label="Favoritos" focused={focused} />
            </View>
          ),
        }}
      />

      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={styles.tabItem}>
              <ProfileIcon focused={focused} />
              <TabLabel label="Perfil" focused={focused} />
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

// ============================================================
// Stack Navigator principal
// ============================================================
const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Welcome"
        screenOptions={{
          headerShown: false,
          animation: 'slide_from_right',
        }}>
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen name="Main" component={MainTabs} />
        <Stack.Screen name="CourseDetail" component={CourseDetailScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen name="StudentList" component={StudentListScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const ICON_COLOR = '#7a5fa0';
const ICON_COLOR_ACTIVE = '#8b45c5';

const styles = StyleSheet.create({
  // Tab Bar
  tabBar: {
    backgroundColor: '#1a0f2e',
    borderTopColor: '#3d1f6e',
    borderTopWidth: 1,
    height: 68,
    elevation: 20,
    shadowColor: '#6b2fa0',
    shadowOffset: { width: 0, height: -4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
  },

  // Item da tab
  tabItem: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 6,
    gap: 4,
  },

  // Wrapper dos ícones
  iconWrapper: {
    width: 26,
    height: 22,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },

  // Labels
  tabLabel: {
    fontSize: 10,
    fontWeight: '600',
    color: ICON_COLOR,
    letterSpacing: 0.2,
  },
  tabLabelActive: {
    color: ICON_COLOR_ACTIVE,
    fontWeight: '700',
  },

  // Ícone Casa — telhado
  roof: {
    width: 0,
    height: 0,
    borderLeftWidth: 13,
    borderRightWidth: 13,
    borderBottomWidth: 10,
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderBottomColor: ICON_COLOR,
    position: 'absolute',
    top: 0,
  },
  roofActive: {
    borderBottomColor: ICON_COLOR_ACTIVE,
  },

  // Ícone Casa — corpo
  houseBody: {
    width: 16,
    height: 10,
    backgroundColor: ICON_COLOR,
    position: 'absolute',
    bottom: 0,
    borderRadius: 1,
  },
  houseBodyActive: {
    backgroundColor: ICON_COLOR_ACTIVE,
  },

  // Ícone Pesquisa — círculo
  searchCircle: {
    width: 14,
    height: 14,
    borderRadius: 7,
    borderWidth: 2.5,
    borderColor: ICON_COLOR,
    position: 'absolute',
    top: 0,
    left: 0,
  },
  searchCircleActive: {
    borderColor: ICON_COLOR_ACTIVE,
  },

  // Ícone Pesquisa — cabo
  searchHandle: {
    width: 2.5,
    height: 8,
    backgroundColor: ICON_COLOR,
    position: 'absolute',
    bottom: 0,
    right: 2,
    transform: [{ rotate: '-45deg' }],
    borderRadius: 2,
  },
  searchHandleActive: {
    backgroundColor: ICON_COLOR_ACTIVE,
  },

  // Ícone Estrela
  starIcon: {
    fontSize: 22,
    color: ICON_COLOR,
    lineHeight: 24,
  },
  starIconActive: {
    color: ICON_COLOR_ACTIVE,
  },

  // Ícone Perfil — cabeça
  profileHead: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: ICON_COLOR,
    position: 'absolute',
    top: 0,
  },
  profileHeadActive: {
    backgroundColor: ICON_COLOR_ACTIVE,
  },

  // Ícone Perfil — corpo
  profileBody: {
    width: 18,
    height: 9,
    borderTopLeftRadius: 9,
    borderTopRightRadius: 9,
    backgroundColor: ICON_COLOR,
    position: 'absolute',
    bottom: 0,
  },
  profileBodyActive: {
    backgroundColor: ICON_COLOR_ACTIVE,
  },
});

export default AppNavigator;