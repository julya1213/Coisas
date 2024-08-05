import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native';
import {useEffect, useState} from 'react';

export default function App() {

  const [contador, setContador] = useState(0);
  const [nome,setNome] = useState ("Ale e Maria");
  const [segundos, setSegundos] = useState (0);

  useEffect(()=>{

    function addSegundos () {

      setInterval(()=>setSegundos(segundos=>segundos+1),1000)
      
    }

    addSegundos();
  },[])

  function atualizaContador() {

    setContador(contador+1)
    
  }

  function atualizarNome(texto) {

    setNome(texto)
    
  }


  return (

    <View style={styles.container}>
      <Text style={{fontSize:25,marginEnd:10}}>Você clicou {contador} vezes</Text>
      <TouchableOpacity 
      onPress={atualizaContador}
      style= {{width:'85%' , 
      backgroundColor:'purple',
      alignItems:'center',
      height:23}}
      >
        <Text>CLICAR</Text>

      </TouchableOpacity>
      <Text style={{fontSize:20,marginTop:10}}>{nome}</Text>

      <TextInput style={{width:'80%', 
      backgroundColor:'gray',
      }}
      onChangeText ={(texto)=> atualizarNome(texto)}>

      </TextInput>

      <Text style = {{
        fontSize:20,
        marginTop:10
      }}>
        ja se passaram {segundos} segundos
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
