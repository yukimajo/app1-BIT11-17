
import { View, Text, StyleSheet, Image } from "react-native";
//ส่งออก เริ่มต้น   function  ชื่อ
export  default function App(){
 return(
  <View style={homeStyle.conteiner}>
    {/* ใส่ข้อความ */}
    <Text style={homeStyle.title}>Rattakrit-yuki</Text>
{/* ใส่ภาพ */}
<Image source={require('@/assets/rattakrit.jpg')}
style={{
  width:350, 
  height:350,
  borderRadius:200,
  borderWidth:10,
  borderColor:"lightblue",
  
  
}}/>

 <View style={{flexDirection: "row"}}>
  <Text>👀เกตัวพ่อ</Text>
  <Text>☠️ตายๆ</Text>
 </View>
 <View style={{flexDirection: "column",
  backgroundColor: "gainsboro",
  borderRadius:50,
  width:400,
  height:150,

 }}>
  <Text style={{
    marginTop:30,
    marginLeft:10
  }}> ห้อง BIT1/1 เลขที่17 </Text>
  <Text > Email: ratthakrit.kothom@e-tech.ac.th </Text>
  <Text > Phone: 0838193010 </Text>
 </View>
 <View>
 <Text style={homeStyle.title}>ภาพกิจกรรม</Text>
 </View>
 <View style={{flexDirection: "row"}}>
 
  <Image 
source={{uri:"https://images.steamusercontent.com/ugc/10221844231100222573/B99D09EDE4BF344FA7CD69B6B8EC105BCF227B2E/?imw=512&&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false"}}
style={{
  width:200,
  height:200,
  borderRadius:150,
  borderWidth:10,
  margin:10,
  borderColor:"white",
  flexDirection: "row"
}}
/>
<Image 
source={{uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvWBp6GtDtFoSZDP4d29EjXXNVYG4emVGN9TuMOUlpMMsE6_ixfOkHpra9&s=10"}}
style={{
   width:200,
  height:200,
  borderRadius:150,
  borderWidth:10,
  margin:10,
  borderColor:"white",
  flexDirection: "row"
}}
/>
<Image 
source={{uri:"https://upload.wikimedia.org/wikipedia/commons/c/c7/Cattedrale_di_Santa_Maria_del_Fiore_%E2%80%93_Il_Duomo_di_Firenze.jpg?utm_source=en.wikipedia.org&utm_campaign=index&utm_content=original"}}
style={{
   width:200,
  height:200,
  borderRadius:150,
  borderWidth:10,
  margin:10,
  borderColor:"white",
  flexDirection: "row"
}}
/>
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