
import { View, Text, StyleSheet, Image } from "react-native";
//ส่งออก เริ่มต้น   function  ชื่อ
export  default function App(){
 return(
  <View style={homeStyle.conteiner}>
    {/* ใส่ข้อความ */}
    <Text style={homeStyle.title}>Rattakrit</Text>
{/* ใส่ภาพ */}
<Image source={require('@/assets/เด็กสาว.jpg')}
style={{
  width:400,
  height:400,
  borderRadius:200,
  borderWidth:10,
  borderColor:"lightblue",
  
}}/>
<Image
source={{uri:"https://images.steamusercontent.com/ugc/10221844231100222573/B99D09EDE4BF344FA7CD69B6B8EC105BCF227B2E/?imw=512&&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false"}}
style={{
  width:400,
  height:400,
  borderRadius:200,
  borderWidth:10,
  borderColor:"white",
}}
/>
 <View style={{flexDirection: "row"}}>
  <Text>👀เกตัวพ่อ</Text>
  <Text>☠️ตายๆ</Text>
 </View>

  </View>

 )
}

const homeStyle = StyleSheet.create({
  conteiner:{
    backgroundColor:"violet", 
    flex:1,
    justifyContent:"center",
    alignItems:"center",
  },
  title:{
    color: "white",
    fontSize: 32,
    fontWeight: 700,
    fontStyle:"italic",
    textAlign:"center",
  }
})