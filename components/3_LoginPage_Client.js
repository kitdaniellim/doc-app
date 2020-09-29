// import React from 'react';
// import { Button, Text, TextInput, View, TouchableOpacity, TouchableHighlight } from 'react-native';
// import Icon from 'react-native-vector-icons/FontAwesome';
// import { loginStyles, globalStyles } from '../styles/styles';
// import { LinearGradient } from  'expo-linear-gradient';
// import { bindActionCreators } from 'redux'
// import { connect } from 'react-redux'
// import { updateEmail, updatePassword, login, getUser  } from '../actions/user'
// import Firebase, { db } from '../config/Firebase'


// class LoginClient extends  React.Component  {
//   /* DEV: EJA - Login function */
//   // handleLogin = () => {
//   //   if(this.props.user.userType === "CLIENT"){
//   //     this.props.login()
//   //     this.props.navigation.navigate('HomeClient');
//   //   }
    
//   // }

//   componentDidMount = () => {
//     Firebase.auth().onAuthStateChanged(user => {
//         if (user) {
//             this.props.getUser(user.uid)
//             if (this.props.user != null) {
              
           
//               this.props.navigation.navigate('HomeClient');
              
//             }
//         }
//     })
// }

//   render(){
//     // const navigation = this.props.navigation;

//     // const Home = () => {
//     //   navigation.navigate('HomeClient');
//     // }
//     const ForgotPassword = () => {
//       navigation.navigate('ForgotPassword');
//     }    
//     const SignUp = () => {
      
//       navigation.navigate('SignupClient1');
//     }
//     return (

//       <View style={loginStyles.container}>
//         <LinearGradient 
//             colors={['rgba(243,243,243,0.4)', 'transparent']}
//             start={{x : 0, y : 1}}
//             end={{x : 0, y : 0}}
//             style={globalStyles.gradient}
//         >
        
//         <View style={loginStyles.forms_container}>
//                 <Icon style={globalStyles.icon_client} name="wheelchair-alt" size={42} />
//                 <Text style={loginStyles.forms_label}> CLIENT </Text>
    
//                 <View style={loginStyles.forms_textinput_container}>
//                   <Icon style={globalStyles.icon_global} name="user-circle" size={18} />
//                   <TextInput 
//                       placeholder="Email" 
//                       placeholderTextColor = "#8B8787"
//                       style={loginStyles.forms_textinput}
//                       value={this.props.user.email}
//                       onChangeText={email => this.props.updateEmail(email)}
//                   />
//                 </View>
//                 <View style={loginStyles.forms_textinput_container}>
//                   <Icon style={globalStyles.icon_global} name="key" size={18} />
//                   <TextInput 
//                        secureTextEntry={true}
//                       placeholder="Password" 
//                       placeholderTextColor = "#8B8787"
//                       style={loginStyles.forms_textinput}
//                       value={this.props.user.password}
//                       onChangeText={password => this.props.updatePassword(password)}
//                   />
//                 </View>
//                 <View style={loginStyles.forms_button_container}>
//                   <TouchableOpacity
//                       activeOpacity={0.6}
//                       onPress={ this.props.login() }
//                       style={loginStyles.forms_button}
//                   >
//                     <Text style={loginStyles.forms_button_label}>LOGINzzzz</Text>
//                   </TouchableOpacity>
    
//                   <Text style={loginStyles.forms_text}>Forgot Password?{" "} 
//                     <TouchableOpacity
//                       onPress={ForgotPassword}
//                     >
//                       <Text style={loginStyles.forms_text_underline}>Tap Here!</Text>
//                     </TouchableOpacity>
//                   </Text>
//                 </View>
//                 <Text style={loginStyles.forms_text_bold}>Or{"\n"}</Text>
//                 <View style={loginStyles.forms_button_container}>
//                   <Text style={loginStyles.forms_text}>No account yet? </Text>
//                   <TouchableOpacity
//                       activeOpacity={0.6}
//                       onPress={this.props.login()}
//                       style={loginStyles.forms_button}
//                   >
//                     <Text style={loginStyles.forms_button_label}>SIGN UP</Text>
//                   </TouchableOpacity>
//                 </View>
//         </View>
    
//         </LinearGradient>
//       </View> 
//       );
//   }
// }

// const mapDispatchToProps = dispatch => {
//   return bindActionCreators({ updateEmail, updatePassword, login, getUser }, dispatch)
// }

// const mapStateToProps = state => {
//   return {
//       user: state.user
//   }
// }

// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(LoginClient)