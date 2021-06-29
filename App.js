import * as React from 'react';
import { Button, KeyboardAvoidingView, FlatList, Text, View, StyleSheet , TextInput, TouchableOpacity, Animated, Image} from 'react-native';
import { createDrawerNavigator,DrawerContentScrollView,DrawerItem,} from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import Dashboard from 'react-native-dashboard';
import { FontAwesome } from 'react-native-vector-icons';

//Tradução

const i18n = (key, lang) => {
  switch(lang) {
    case 'en':
      return en[key]
    case 'es':
      return es[key]
    case 'jp':
      return jp[key]
    default:
      return br[key]
  }
}

const en = {
  'br': 'Português',
  'es': 'Español',
  'en': 'English',
  'jp': '日本語',
  'entrar': 'Login',
  'continuar': 'Continue',
  'voltar': 'Back',
  'nome': 'name',
  'email': 'email',
  'senha': 'password',
  'confirmar_senha': 'confirm password',
  'home': 'Início',
  'criar_conta': 'Create an account',
  'languages': 'Languages',
  'sim': 'Yes',
  'não': 'No',
  'textosair': 'Are you sure you want to leave?',
  'enviar': 'Submit',
  'dashboard': 'Welcome to your dashboard!',
  'sobrenós': 'About Us',
  'ajuda': 'Help',
  'sair': 'Exit',
  'sobretexto': 'CineFlash is designed for all users, those who want to understand every detail of the film and see it shine on the Oscars rug or those who just want to have fun in a movie theater. Each of us left our mark and our passion for movies and always wanting to help and share the emotion that cinema brings us, Brendon and Juliano are great developers of our system and Eduardo and Matheus are the guides to keep every detail in perfect condition. updating and keeping our users tuned, enjoy and have this amazing experience!!',
  'problema': 'Need help? Write your problem:',
  'cinemas': 'Movie theaters',
  'filmes': 'Movies',
  'obrigado': 'Thank you for using our app ♥',
  'final': 'Back to Home Screen',
  'nossosfilmes': 'Have you seen any of our movies?',
  'nossoscinemas': 'Do you know our cinemas?',
  'cinevix': 'Cinevix',
  'cinerlon': 'Cinerlon',
  'cinemavv': 'Cinema Vila Velha',
  'cinemax': 'Cinemax',
  'cinesercula': 'Cinesercula',
  'cineplex': 'Cineplex',
  'cinefun': 'Cinefun',
  'erlon': 'Looking for Erlon',
  'saulo': 'The Mighty Saul',
  'ricardo': 'The Rescue of Private Ricardo',
  'brendon': 'Brendon: Ultimatum',
  'juliano': 'Julian, the Gladiator',
  'matheus': 'Matheus Potter, and the Philosophers Stone',
  'eduardo': 'Eduardo Jones, and the Last Crusade',
}

const br = {
  'br': 'Português',
  'es': 'Español',
  'en': 'English',
  'jp': '日本語',
  'entrar': 'Entrar',
  'continuar': 'Continuar',
  'voltar': 'Voltar',
  'nome': 'nome',
  'email': 'email',
  'senha': 'senha',
  'confirmar_senha': 'confirmar senha',
  'criar_conta': 'Criar uma conta',
  'home': 'Início',
  'languages': 'Línguas',
  'sim': 'Sim',
  'não': 'Não',
  'textosair': 'Você tem certeza que quer sair?',
  'enviar': 'Enviar',
  'dashboard': 'Bem-vindo, ao seu dashboard!',
  'sobrenós': 'Sobre nós',
  'ajuda': 'Ajuda',
  'sair': 'Sair',
  'sobretexto': 'CineFlash foi pensado para todos os usuários, aqueles que querem entender cada detalhe do filme e vê-lo brilhar no tapete do Oscar ou aqueles que apenas querem se divertir em uma sala de cinema. Cada um de nós deixou sua marca e sua paixão pelos filmes e querendo sempre ajudar e compartilhar a emoção que o cinema nos trás, Brendon e Juliano são grandes desenvolvedores do nosso sistema e Eduardo e Matheus são os guias para deixar cada detalhe em perfeito estado sempre atualizando e deixando nossos usuários antenados, aproveite e tenha essa incrivel experiência!!',
  'problema': 'Precisa de ajuda? Escreva seu problema:',
  'cinemas': 'Nossos Cinemas',
  'filmes': 'Nossos Filmes',
  'obrigado': 'Obrigado por usar nosso aplicativo ♥',
  'final': 'Voltar a tela inicial',
  'nossosfilmes': 'Você viu algum de nossos filmes?',
  'nossoscinemas': 'Conhece nossos cinemas?',
  'cinevix': 'Cinevix',
  'cinerlon': 'Cinerlon',
  'cinemavv': 'Cinema Vila Velha',
  'cinemax': 'Cinemax',
  'cinesercula': 'Cinesercula',
  'cineplex': 'Cineplex',
  'cinefun': 'Cinefun',
  'erlon': 'Procurando Erlon',
  'saulo': 'O poderoso Saulo',
  'ricardo': 'O Resgate do Soldado Ricardo',
  'brendon': 'Brendon: Ultimato',
  'juliano': 'Juliano, o Gladiador',
  'matheus': 'Matheus Potter, e a Pedra Filosofal',
  'eduardo': 'Eduardo Jones, e a última cruzada',
}

const es = {
  'br': 'Português',
  'es': 'Español',
  'en': 'English',
  'jp': '日本語',
  'entrar': 'Iniciar sesión',
  'continuar': 'Seguir',
  'voltar': 'Vuelve',
  'nome': 'nombre',
  'email': 'email',
  'senha': 'contraseña',
  'confirmar_senha': 'confirmar contraseña',
  'criar_conta': 'Crea una cuenta',
  'home': 'Inicio',
  'languages': 'Idiomas',
  'sim': 'Sí',
  'não': 'No',
  'textosair': 'Estás seguro que quieres irte?',
  'enviar': 'Enviar',
  'dashboard': '¡Bienvenido a tu panel de control!',
  'sobrenós': 'Sobre nosotros',
  'ajuda': 'Ayudar',
  'sair': 'Saído',
  'sobretexto': 'CineFlash fue diseñado para todos los usuarios, aquellos que quieren entender cada detalle de la película y verla brillar en la alfombra de los Oscar o aquellos que solo quieren divertirse en una sala de cine. Cada uno de nosotros dejamos nuestra huella y nuestra pasión por el cine y siempre con ganas de ayudar y compartir la emoción que nos trae el cine, Brendon y Juliano son grandes desarrolladores de nuestro sistema y Eduardo y Matheus son los guías para mantener en perfecto estado cada detalle. y manteniendo a nuestros usuarios atentos, disfruten y tengan esta increíble experiencia!!',
  'problema': '¿Necesita ayuda? Escribe tu problema:',
  'cinemas': 'Nuestros cines',
  'filmes': 'Nuestras peliculas',
  'obrigado': 'Gracias por usar nuestra aplicación ♥',
  'final': 'Volver a la pantalla de inicio',
  'nossosfilmes': 'Has visto alguna de nuestras peliculas?',
  'nossoscinemas': '¿Conoces nuestros cines?',
  'cinevix': 'Cinevix',
  'cinerlon': 'Cinerlon',
  'cinemavv': 'Cinema Vila Velha',
  'cinemax': 'Cinemax',
  'cinesercula': 'Cinesercula',
  'cineplex': 'Cineplex',
  'cinefun': 'Cinefun',
  'erlon': 'Buscando a Erlon',
  'saulo': 'el poderoso Saúl',
  'ricardo': 'El rescate del soldado Ricardo',
  'brendon': 'Brendon: ultimátum',
  'juliano': 'Julián el Gladiador',
  'matheus': 'Matheus Potter y la piedra filosofal',
  'eduardo': 'Eduardo Jones y la última cruzada',
}

const jp = {
  'br': 'Português',
  'es': 'Español',
  'en': 'English',
  'jp': '日本語',
  'entrar': '入る',
  'continuar': '継続する',
  'voltar': '戻ってくる',
  'nome': '名前',
  'email': '電子メイル',
  'senha': 'パスワード',
  'confirmar_senha': 'パスワードを認証する',
  'criar_conta': 'アカウントを作成する',
  'home': '家',
  'languages': '言語',
  'sim': 'ええ',
  'não': '番号',
  'textosair': '本当に去りますか？',
  'enviar': '参加する',
  'dashboard': 'ダッシュボードへようこそ！',
  'sobrenós': '私たちに関しては',
  'ajuda': '助けて',
  'sair': '出て行け',
  'sobretexto': 'CineFlashは、映画の細部をすべて理解してオスカーの敷物に映えるのを見たいユーザーや、映画館で楽しみたいだけのユーザーを対象に設計されています。 私たち一人一人が映画への情熱と情熱を残し、映画がもたらす感情を常に助け、共有したいと思っています。ブレンドンとジュリアーノは私たちのシステムの優れた開発者であり、エドゥアルドとマテウスは細部を完璧な状態に保つためのガイドです。そして、ユーザーを調整し、楽しんで、この素晴らしい体験をしてください！',
  'problema': '助けが必要？ あなたの問題を書いてください：',
  'cinemas': '映画館',
  'filmes': '映画',
  'obrigado': '私たちのアプリをご利用いただきありがとうございます♥',
  'final': 'スタート画面に戻る',
  'nossosfilmes': '私たちの映画を見たことがありますか？',
  'nossoscinemas': 'あなたは私たちの映画館を知っていますか？',
  'cinevix': 'Cinevix',
  'cinerlon': 'Cinerlon',
  'cinemavv': 'Cinema Vila Velha',
  'cinemax': 'Cinemax',
  'cinesercula': 'Cinesercula',
  'cineplex': 'Cineplex',
  'cinefun': 'Cinefun',
  'erlon': 'アーロンを探しています',
  'saulo': '強大なソール',
  'ricardo': 'プライベートリカルドの救助',
  'brendon': 'ブレンドン：最後通牒',
  'juliano': 'グラディエーターのジュリアン',
  'matheus': 'マテウスポッターと賢者の石',
  'eduardo': 'エドゥアルド・ジョーンズ、そして最後の十字軍',
}

//Estilos

const styles = StyleSheet.create({
background:{
 flex: 1,
 alignItems: 'center',
 justifyContent:'center',
 backgroundColor: '#191919',
},

flatList:{
 justifyContent:'center',
},

btnSubmit:{
  backgroundColor:'#f05253',
  width: 300,
  height: 45,
  alignItems: 'center',
  justifyContent:'center',
  borderRadius: 20,
  marginTop: 10,
},

btnSubmit2:{
  backgroundColor:'#f05253',
  width: 300,
  height: 45,
  alignItems: 'center',
  justifyContent:'center',
  borderRadius: 20,
  marginTop: 5,
},

textSubmit:{
  fontSize: 18,
  color: '#fff',
  fontWeight: "bold",
  justifyContent:'center',
},

textSubmit2:{
  fontSize: 18,
  color: '#fff',
  fontWeight: "bold",
  justifyContent:'center',
  textAlign: 'center',
},

textSubmit3:{
  fontSize: 20,
  color: '#fff',
  justifyContent:'center',
  padding: 15,
},

textSubmit4:{
  fontSize: 15,
  color: '#fff',
  fontWeight: "bold",
  justifyContent:'center',
  marginBottom: 30,
  marginTop: 30,
},

viewLogo:{
   justifyContent: 'center',
   resizeMode:'stretch',
},

viewlogin:{
   alignItems: 'center',
   justifyContent: 'center',
   width: '90%',
   paddingBottom: 120,
},

input:{
  backgroundColor: '#fff',
  width: '90%',
  marginBottom: 10,
  color: '#222',
  fontSize: 15,
  borderRadius: 20,
  padding: 10,
},

input2: {
  backgroundColor: '#fff',
  width: '90%',
  height: '50%',
  marginBottom: 10,
  color: '#222',
  fontSize: 20,
  borderRadius: 20,
  padding: 10,
  marginTop: 10,
  textAlignVertical: 'top'
},

textAutorais:{
  marginBottom: 0,
  color:'#FFF'
},

appButtonContainer: {
    elevation: 8,
    backgroundColor: "#f05253",
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 20
  },

appButtonContainer2: {
    elevation: 8,
    backgroundColor: "#191919",
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 12
},

appButtonContainer3: {
    elevation: 8,
    backgroundColor: "#f05253",
    paddingVertical: 35,
    paddingHorizontal: 12,
    marginTop: 5 ,
    alignItems: 'center'
},

fixToText: {
    marginTop: 40,
    flexDirection: 'row',
    justifyContent: 'space-between',
},

btnRegistet:{
  marginTop: 10, 
},

textRegistet:{
  color: '#FFF'
},

textRegistet2:{
  color: '#FFF',
  textAlign: 'left',
  marginTop: 5,
  marginBottom: 30
},

textRegistet3:{
  color: '#FFF',
  textAlign: 'left',
  marginTop: 5,
},

})

function Linguagem({ navigation: { navigate } }) {
  const [lang, setLang] = React.useContext(AppContext);
  const langList = [
    {
      name: 'es',
      value: i18n('es', lang)
    },
    {
      name: 'en',
      value: i18n('en', lang)
    },
    {
      name: 'br',
      value: i18n('br', lang)
    },
    {
      name: 'jp',
      value: i18n('jp', lang)
    }
  ]

  return ( 
 <View style={styles.background}>
  <KeyboardAvoidingView>
      <FlatList style={styles.flatList} 
        data={langList}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.btnSubmit}
            onPress={() => setLang(item.name) & navigate('Login')}>
            <Text style={styles.textSubmit}>{item.value}</Text>
          </TouchableOpacity>            
        )}
      
        keyExtractor={item => item.name} 
      />
    </KeyboardAvoidingView>
  </View>
  )
}

function Login({ navigation: { navigate, goBack }}) {
  const [lang] = React.useContext(AppContext);

  return(
    <KeyboardAvoidingView style={styles.background}>
      <View >
      <Image style={styles.viewLogo}
      source={require ('./assets/logo1.png')}
      />

     </View>
     <Animated.View style={[styles.viewlogin, {
        transform: []}]}>

      <TextInput
       style={styles.input}
       placeholder={i18n('email', lang)}
       autoCorrect={false}
       onChangeText={()=> {}}
      />

      <TextInput
       style={styles.input}
       secureTextEntry={true}
       placeholder={i18n('senha', lang)}
       autoCorrect={false}
       onChangeText={()=> {}}
      />

      <TouchableOpacity onPress={() => navigate('Perfil')} style={styles.btnSubmit}>
       <Text style={styles.textSubmit}>{i18n('entrar', lang)}</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => goBack()} style={styles.btnSubmit2}>
       <Text style={styles.textSubmit}>{i18n('voltar', lang)}</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigate('Cadastro')} style={styles.btnRegistet}>
       <Text style={styles.textRegistet}>{i18n('criar_conta', lang)}</Text>
      </TouchableOpacity>
      </Animated.View>

    <Text style={styles.textAutorais}> ©CineFlash </Text>
    </KeyboardAvoidingView>
  )
}

function Cadastro({ navigation: { navigate, goBack } }) {
  const [lang, setLang] = React.useContext(AppContext);
  return (
       <KeyboardAvoidingView style={styles.background}>
      <View style={styles.viewLogo}>
      <Image
      source={require ('./assets/logo1.png')}
      />
     </View>
     <Animated.View style={[styles.viewlogin, {
        transform: [    
        ]
     }
     ]}
     >
      <TextInput
       style={styles.input}
       placeholder={i18n('nome', lang)}
       autoCorrect={false}
       onChangeText={()=> {}}
      />

      <TextInput
       style={styles.input}
       placeholder={i18n('email', lang)}
       autoCorrect={false}
       onChangeText={()=> {}}
      />

      <TextInput
       style={styles.input}
       secureTextEntry={true}
       placeholder={i18n('senha', lang)}
       autoCorrect={false}
       onChangeText={()=> {}}
      />
      
      <TextInput
       style={styles.input}
       secureTextEntry={true}
       placeholder={i18n('confirmar_senha', lang)}
       autoCorrect={false}
       onChangeText={()=> {}}
      />

    <TouchableOpacity onPress={() => navigate('Perfil')}  style={styles.btnSubmit} >
      <Text style={styles.textSubmit} >{i18n('continuar', lang)}</Text>
    </TouchableOpacity>
    <TouchableOpacity onPress={() => goBack()} style={styles.btnSubmit2}>
       <Text style={styles.textSubmit}>{i18n('voltar', lang)}</Text>
    </TouchableOpacity>
    
    </Animated.View>    
    <Text style={styles.textAutorais}> ©CineFlash </Text>
    </KeyboardAvoidingView>
  );
}

function Filmes({ navigation: { navigate, goBack }}) {
  const [lang] = React.useContext(AppContext);

  return(
    <KeyboardAvoidingView style={styles.background}>
      <View style={styles.viewLogo}>
      <Image
      source={require ('./assets/logo1.png')}
      />
     </View>
     <Animated.View style={[styles.viewlogin, {
        transform: []}]}>

      <Text style={styles.textSubmit4}>{i18n('nossosfilmes', lang)}</Text>
      <View style={styles.textRegistet2}>
      <Text style={styles.textRegistet3}>{i18n('erlon', lang)}</Text>
      <Text style={styles.textRegistet3}>{i18n('saulo', lang)}</Text>
      <Text style={styles.textRegistet3}>{i18n('ricardo', lang)}</Text>
      <Text style={styles.textRegistet3}>{i18n('brendon', lang)}</Text> 
      <Text style={styles.textRegistet3}>{i18n('juliano', lang)}</Text>
      <Text style={styles.textRegistet3}>{i18n('matheus', lang)}</Text>
      <Text style={styles.textRegistet3}>{i18n('eduardo', lang)}</Text>
      </View>
      <TouchableOpacity onPress={() => goBack()} style={styles.btnSubmit2}>
       <Text style={styles.textSubmit}>{i18n('voltar', lang)}</Text>
      </TouchableOpacity>
      </Animated.View>
       
      <Text style={styles.textAutorais}>©CineFlash</Text>
    </KeyboardAvoidingView>
  )
}

function Cinemas({ navigation: { navigate, goBack }}) {
  const [lang] = React.useContext(AppContext);
  return(
    <KeyboardAvoidingView style={styles.background}>
      <View style={styles.viewLogo}>
      <Image
      source={require ('./assets/logo1.png')}/>
     </View>
     <Animated.View style={[styles.viewlogin, {
        transform: []}]}>
     
      <Text style={styles.textSubmit4}>{i18n('nossoscinemas', lang)}</Text>
      <View style={styles.textRegistet2}>
      <Text style={styles.textRegistet3}>{i18n('cinevix', lang)}</Text>
      <Text style={styles.textRegistet3}>{i18n('cinerlon', lang)}</Text>
      <Text style={styles.textRegistet3}>{i18n('cinemavv', lang)}</Text>
      <Text style={styles.textRegistet3}>{i18n('cinemax', lang)}</Text>
      <Text style={styles.textRegistet3}>{i18n('cinesercula', lang)}</Text>
      <Text style={styles.textRegistet3}>{i18n('cineplex', lang)}</Text>
      <Text style={styles.textRegistet3}>{i18n('cinefun', lang)}</Text>
      </View>
      <TouchableOpacity onPress={() => goBack()} style={styles.btnSubmit2}>
       <Text style={styles.textSubmit}>{i18n('voltar', lang)}</Text>
      </TouchableOpacity>

    </Animated.View>
       <Text style={styles.textAutorais} >©CineFlash</Text>  
    </KeyboardAvoidingView>
  )
}

function Perfil({ navigation: { navigate, goBack }}) {
  const [lang] = React.useContext(AppContext);
  const card = ({ name }) => console.log('Card: ' + name);
  return(
    <KeyboardAvoidingView style={styles.background}>
    <View>
      <Image source={require ('./assets/logo1.png')}/>
      <Text style={styles.textSubmit2}>{i18n('dashboard', lang)}</Text>

    <TouchableOpacity onPress={() => navigate('Cinemas')} style={styles.appButtonContainer3}>
      <Text style={styles.textSubmit}>{i18n('cinemas', lang)}</Text>
    </TouchableOpacity>

    <TouchableOpacity onPress={() => navigate('Filmes')} style={styles.appButtonContainer3}>
      <Text style={styles.textSubmit}>{i18n('filmes', lang)}</Text>
    </TouchableOpacity>

    <TouchableOpacity onPress={() => navigate('Sobre')} style={styles.appButtonContainer3}>
      <Text style={styles.textSubmit}>{i18n('sobrenós', lang)}</Text>
    </TouchableOpacity>

    <TouchableOpacity onPress={() => navigate('Ajuda')} style={styles.appButtonContainer3}>
      <Text style={styles.textSubmit}>{i18n('ajuda', lang)}</Text>
    </TouchableOpacity>

    <View style={styles.fixToText}>
      <TouchableOpacity style={styles.appButtonContainer2}>
      </TouchableOpacity>

        <TouchableOpacity onPress={() => navigate('Sair')} style={styles.appButtonContainer}>
          <Text style={styles.textSubmit}>{i18n('sair', lang)}</Text>
        </TouchableOpacity>
      </View>
    </View> 
    </KeyboardAvoidingView>
    );
}

function Sobre({ navigation: { navigate, goBack }}) {
  const [lang] = React.useContext(AppContext);
  const card = ({ name }) => console.log('Card: ' + name);
  return(
    <KeyboardAvoidingView style={styles.background}>
    <View>
      <Image source={require ('./assets/logo1.png')}/>
      <Text style={styles.textSubmit2}>{i18n('sobrenós', lang)}</Text>
    </View> 
      <Text style={styles.textSubmit3}>{i18n('sobretexto', lang)}</Text>

       <TouchableOpacity onPress={() => goBack()} style={styles.btnSubmit2}>
       <Text style={styles.textSubmit}>{i18n('voltar', lang)}</Text>
      </TouchableOpacity>
    </KeyboardAvoidingView>
    );
}

function Ajuda({ navigation: { navigate, goBack }}) {
  const [lang] = React.useContext(AppContext);
  const card = ({ name }) => console.log('Card: ' + name);
  return(
    <KeyboardAvoidingView style={styles.background}>
    <View>
      <Image source={require ('./assets/logo1.png')}/>
    </View> 
      <Text style={styles.textSubmit2}>{i18n('problema', lang)}</Text>
      <TextInput
        style={styles.input2}
        multiline
        numberOfLines={4}
        autoCorrect={false}
      />

       <TouchableOpacity onPress={() => navigate('Perfil')} style={styles.btnSubmit2}>
       <Text style={styles.textSubmit}>{i18n('enviar', lang)}</Text>
      </TouchableOpacity>

       <TouchableOpacity onPress={() => goBack()} style={styles.btnSubmit2}>
       <Text style={styles.textSubmit}>{i18n('voltar', lang)}</Text>
      </TouchableOpacity>
    </KeyboardAvoidingView>
    );
}

function Sair({ navigation: { navigate, goBack }}) {
  const [lang] = React.useContext(AppContext);
  return(
    <KeyboardAvoidingView style={styles.background}>
      <View>
      <Image style={styles.viewLogo}
      source={require ('./assets/logo1.png')}/>
      <Text style={styles.textSubmit2}>{i18n('textosair', lang)}</Text>
      </View>
    <Animated.View style={[styles.viewlogin, {
        transform: []}]}>

      <TouchableOpacity onPress={() => navigate('Obrigado')} style={styles.btnSubmit}>
       <Text style={styles.textSubmit}>{i18n('sim', lang)}</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => goBack()} style={styles.btnSubmit2}>
       <Text style={styles.textSubmit}>{i18n('não', lang)}</Text>
      </TouchableOpacity>
    </Animated.View>

    <Text style={styles.textAutorais}> ©CineFlash </Text>
    </KeyboardAvoidingView>
  )
}

function Obrigado({ navigation: { navigate, goBack }}) {
  const [lang] = React.useContext(AppContext);
  return(
    <KeyboardAvoidingView style={styles.background}>
      <View>
      <Image style={styles.viewLogo}
      source={require ('./assets/logo1.png')}/>
      </View>
      <Text style={styles.textSubmit2}>{i18n('obrigado', lang)}</Text>
      
    <Animated.View style={[styles.viewlogin, {
        transform: []}]}>


      <TouchableOpacity onPress={() => navigate('Linguagem')} style={styles.btnSubmit2}>
       <Text style={styles.textSubmit}>{i18n('final', lang)}</Text>
      </TouchableOpacity>
    </Animated.View>

    <Text style={styles.textAutorais}> ©CineFlash </Text>
    </KeyboardAvoidingView>
  )
}

//Drawer/Mágica

function CustomDrawerContent(props) { 
  const [lang] = React.useContext(AppContext);

  return (
    <DrawerContentScrollView {...props}>
      <DrawerItem
        label={i18n('home', lang)} 
        onPress={() => props.navigation.navigate('Home')}
      />
      <DrawerItem
        label={i18n('languages', lang)}
        onPress={() => props.navigation.navigate('Lang')}
      />
    </DrawerContentScrollView>
  );
}

const AppContext = React.createContext(); 
const Drawer = createDrawerNavigator();

export default function App() {
  const [lang, setLang] = React.useState('br') 
  return (
    <AppContext.Provider value={[lang, setLang]}>
      <NavigationContainer>
        <Drawer.Navigator drawerContent={(props) => <CustomDrawerContent {...props} />}>
          <Drawer.Screen name="Linguagem" component={Linguagem}/>
          <Drawer.Screen name="Login" component={Login}/>
          <Drawer.Screen name="Cadastro" component={Cadastro}/>
          <Drawer.Screen name="Filmes" component={Filmes}/> 
          <Drawer.Screen name="Cinemas" component={Cinemas}/> 
          <Drawer.Screen name="Perfil" component={Perfil}/>
          <Drawer.Screen name="Sobre" component={Sobre}/>
          <Drawer.Screen name="Ajuda" component={Ajuda}/>
          <Drawer.Screen name="Sair" component={Sair}/>
          <Drawer.Screen name="Obrigado" component={Obrigado}/> 
        </Drawer.Navigator>
      </NavigationContainer>
    </AppContext.Provider>
  );
}