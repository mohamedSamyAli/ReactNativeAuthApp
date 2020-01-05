import React, { useReducer, useEffect , useState } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Input as EleInput } from 'react-native-elements';

const Input = props => {
var checkValidation = true

const [inputValue , setInputValue ] = useState('');
const [isvalid , setIsvalid ] = useState(true);
const [errorMassge , setErrorMassge ] = useState('');

  const textChangeHandler = text => {
    setInputValue(text)
    const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    var flage = true
    var error=''
    if (props.email && !emailRegex.test(text.toLowerCase())) {
      flage = false;
      error = "email is not valid"
    }
    if (props.required && text.trim().length === 0) {
      flage = false;
      error = "Field is Requird"
    }
   props.onInputChange(flage?text:'')
   setIsvalid(flage)
   setErrorMassge(error)
  };

  const lostFocusHandler = () => {
    checkValidation=true;
    textChangeHandler(inputValue)
  };

  return (
    <View style={styles.formControl}>
      
      <EleInput
      placeholder={props.placeHolder}
      leftIcon={
        <Icon
        iconStyle={errorMassge&&checkValidation? styles.wrongInput:null}
          name={props.icon}
          size={24}
          color='black'
        />
      }
      errorMessage={errorMassge}
        {...props}
        inputStyle={errorMassge&&checkValidation? styles.wrongInput:null}
        value={inputValue}
        onChangeText={textChangeHandler}
        onBlur={lostFocusHandler}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  formControl: {
    width: '100%'
  },
  label: {
    fontFamily: 'open-sans-bold',
    marginVertical: 8
  },
  input: {
    paddingHorizontal: 2,
    paddingVertical: 5,
    borderBottomColor: '#ccc',
    borderBottomWidth: 1
  },
  wrongInput: {
    paddingHorizontal: 2,
    paddingVertical: 5,
    borderBottomColor: '#cc0033',
    borderBottomWidth: 1
  }
});

export default Input;
