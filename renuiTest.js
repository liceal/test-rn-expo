import { useState } from 'react';
import { StyleSheet, Text, View, KeyboardAvoidingView, Platform, ScrollView } from 'react-native';
import { Button, CheckBox, createTheme, ThemeProvider, Badge, Input, ListItem } from '@rneui/themed';

export default function RneuiTest() {

  const theme = createTheme({
    lightColors: {
      primary: 'red'
    },
    darkColors: {},
  });

  const [checked, setChecked] = useState(true);
  const toggleCheckbox = () => setChecked(!checked);

  const [selectedIndex, setSelectedIndex] = useState(0)
  return (
    <ThemeProvider theme={theme}>
      <View style={styles.rneuiContainer}>
        <Text>rneui</Text>

        <Input />

        <Button title="Solid" />
        <Button title="Outline" type="outline" />
        <Button title="Clear" type="clear" />

        <Badge></Badge>

        {/* <CheckBox checked={checked} checkedIcon="checkbox-marked"
          uncheckedIcon="checkbox-blank-outline" /> */}

        <CheckBox
          checked={checked}
          onPress={toggleCheckbox}
          // Use ThemeProvider to make change for all checkbox
          // iconType="material-community"
          // checkedIcon="checkbox-marked"
          // uncheckedIcon="checkbox-blank-outline"
          checkedColor="red"
        />

        <ListItem>
          <ListItem.CheckBox />
          <ListItem.Content>
            <Text>list item content</Text>
          </ListItem.Content>
          <ListItem.Chevron />
        </ListItem>
        <ListItem style={{ display: 'flex' }}>
          <ListItem.Input style={{ flex: 1 }} />
          <ListItem.Chevron />

          <ListItem.ButtonGroup onPressIn={() => { console.log('pressed') }}
            buttons={['aaa', 'bbb']}
            selectedIndex={selectedIndex}
            onPress={setSelectedIndex}>

          </ListItem.ButtonGroup>

        </ListItem>
      </View>
    </ThemeProvider>
  )
}

const styles = StyleSheet.create({
  rneuiContainer: {
    width: '100%',
    borderWidth: 3,
    borderColor: 'red'
  },
});