import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import CurrencyInput from 'react-native-currency-input';
import {Picker} from '@react-native-picker/picker';

const HomeScreen = ({navigation}) => {
    const [valueCurrency, setValueCurrency] = React.useState(0)
    const [selectedTip, setSelectedTip] = React.useState();

    return (       
        <View style={styles.container}>        
            <Text style={styles.inputTitle}>
                Valor a ser pago
            </Text>      
            <CurrencyInput
                style={styles.input}
                value={valueCurrency}
                onChangeValue={setValueCurrency}
                prefix="R$"
                delimiter=","
                separator="."
                precision={2}
                onChangeText={(formattedValue) => {
                    console.log(formattedValue); // $2,310.46
                }}                
            /> 
            <TextInput 
                placeholder="Número de pessoas"
                style={styles.input}
                keyboardType = 'numeric'
                >
            </TextInput>
            <Text style={styles.inputTitle}>
                Quanto de gorjeta você deseja deixar?
            </Text>  
            <View>
                <Picker
                    selectedValue={selectedTip}
                    onValueChange={(itemValue, itemIndex) =>
                        setSelectedTip(itemValue)
                    }
                    >
                    <Picker.Item label="0%" value="0" />
                    <Picker.Item label="5%" value="5" />
                    <Picker.Item label="10%" value="10" />
                </Picker> 
            </View>
            <View >
                <Text style={styles.inputTitle}>
                    Total
                </Text>   
                
            </View>        
        </View>
    )
}



const styles = StyleSheet.create({
    container: {
        paddingLeft: 10,
        paddingRight: 10,         
    },
    inputTitle: { 
        fontSize: 14,
        padding: 10,        
        color: '#3d3d3b',
    },
    input: {
        paddingTop: 15,
        paddingBottom: 5,
        paddingLeft: 10,
        borderWidth: 1,
        borderColor: '#e8dac1',
        height: 50,
        fontSize: 18,
        color: '#8a8987',
        backgroundColor: '#FFFFFF'
    },  
   
})

export default HomeScreen