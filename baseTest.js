import { NativeBaseProvider, Input, Button } from 'native-base';
import { StyleSheet, Text, View } from 'react-native';

export default function BaseUITest() {
  return (
    <NativeBaseProvider>
      <View style={styles.baseUIContainer}>
        <Text>react base ui</Text>
        <Input />
        <Button>按钮</Button>
      </View>
    </NativeBaseProvider>
  )
}

const styles = StyleSheet.create({
  baseUIContainer: {
    width: '100%',
    borderWidth: 3,
    borderColor: 'red'
  },
});