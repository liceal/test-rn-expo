import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, KeyboardAvoidingView, Platform, ScrollView } from 'react-native';
// import { Input } from '@rneui/base';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import BaseTest from './baseTest'
import RneuiTest from './renuiTest'
import NavigationBase from '@/navigationBase/index'


export default function App() {
  // return (
  //   // 安全距离注入
  //   <SafeAreaProvider>
  //     {/* 这里进行安全距离 */}
  //     <SafeAreaView style={{ flex: 1, backgroundColor: 'yellow' }}>
  //       {/* 键盘安全距离 */}
  //       <KeyboardAvoidingView
  //         behavior={Platform.OS == "ios" ? "padding" : 'height'}
  //         style={styles.container}
  //       >
  //         {/* 滚动条 */}
  //         <ScrollView style={{ width: '100%' }}>
  //           <View style={styles.container}>
  //             <Text>Open up App.js to start working on your app!</Text>
  //             <StatusBar style="auto" />

  //             <RneuiTest />

  //             {/* <BaseTest /> */}


  //           </View >
  //         </ScrollView>
  //       </KeyboardAvoidingView>
  //     </SafeAreaView>
  //   </SafeAreaProvider>
  // );
  return (
    <NavigationBase />
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    gap: 20,
  },
});
