import React, {Component, version} from 'react';

import { StyleSheet, Text, View,Image,TouchableOpacity,ImageBackground,
  FlatList,
        ScrollView,Animated, Dimensions
     } from 'react-native';
import { Icon,ListItem} from 'react-native-elements'
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import logo from '../src/images/loker_link_logo.png'
import bgImage from '../src/images/bg_lk.jpg'


const {width, height}=Dimensions.get('window')
const mock=[{
  id: 1,
  user: {
    name: 'Lelia Chavez',
    avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
  },
  saved: true,
  location: 'PT. Astra Graphia Information Technology',
  temperature: 34,
  title: 'IT Audit',
  description: 'Santorini is one of the Cyclades islands in the Aegean Sea. It was devastated by a volcanic eruption in the 16th century BC, forever shaping its rugged landscape. The whitewashed, cubiform houses of its 2 principal towns, Fira and Oia, cling to cliffs above an underwater caldera (crater). They overlook the sea, small islands to the west and beaches made up of black, red and white lava pebbles.',
  rating: 4.3,
  reviews: 3212,
  preview: 'https://images.unsplash.com/photo-1507501336603-6e31db2be093?auto=format&fit=crop&w=800&q=80',
  images: [
    'https://images.unsplash.com/photo-1507501336603-6e31db2be093?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1507501336603-6e31db2be093?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1507501336603-6e31db2be093?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1507501336603-6e31db2be093?auto=format&fit=crop&w=800&q=80',
  ]
},
{
  id: 2,
  user: {
    name: 'Lelia Chavez',
    avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
  },
  saved: false,
  location: 'PT Firmas',
  temperature: 34,
  title: 'Sales Officer',
  description: 'This attractive small town, 80 kilometers from Athens',
  rating: 4.6,
  reviews: 3212,
  preview: 'https://images.unsplash.com/photo-1458906931852-47d88574a008?auto=format&fit=crop&w=800&q=80',
  images: [
    'https://images.unsplash.com/photo-1458906931852-47d88574a008?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1446903572544-8888a0e60687?auto=format&fit=crop&w=800&q=80',
  ]
},
{
  id: 3,
  user: {
    name: 'Lelia Chavez',
    avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
  },
  saved: false,
  location: 'PT Bumi dan Langit',
  temperature: 34,
  title: 'IT Manager',
  description: 'This attractive small town, 80 kilometers from Athens',
  rating: 4.6,
  reviews: 3212,
  preview: 'https://images.unsplash.com/photo-1458906931852-47d88574a008?auto=format&fit=crop&w=800&q=80',
  images: [
    'https://images.unsplash.com/photo-1458906931852-47d88574a008?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1446903572544-8888a0e60687?auto=format&fit=crop&w=800&q=80',
  ]
},
{
  id: 4,
  user: {
    name: 'Lelia Chavez',
    avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
  },
  location: 'PT Gunung Pulosari',
  temperature: 34,
  title: 'Data Science',
  description: 'This attractive small town, 80 kilometers from Athens',
  rating: 5,
  reviews: 3212,
  preview: 'https://images.unsplash.com/photo-1458906931852-47d88574a008?auto=format&fit=crop&w=800&q=80',
  images: [
    'https://images.unsplash.com/photo-1458906931852-47d88574a008?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1446903572544-8888a0e60687?auto=format&fit=crop&w=800&q=80',
  ]
},
]

const styles=StyleSheet.create({
  flex:{
    flex:0
  },
  row:{
    flexDirection:'row'
  },
  column:{
    flexDirection:'column'
  },
  header:{
    backgroundColor:'white',
    paddingTop:25,  
    paddingHorizontal: 36,
    justifyContent:'space-between'
  },
  seharch:{
    justifyContent:'space-around',
    backgroundColor:'red',
    marginHorizontal:36
    
  },
  logo:{
    width:50,
    height:50,
    resizeMode:'contain',
    
  },
  iconSearch:{
    paddingTop:10

  },
  banner:{
    width:width *1,
    height:385, 
    alignItems:'center', 
    alignContent:'stretch',
  backgroundColor:'white'
  },
  bannerText:{
      width:370, 
    height:100, 
    padding:10,
    marginTop:15,
    borderWidth:0.4, 
    borderColor:'gray', 
    backgroundColor:'white',
  },
  apply:{width:370, 
    height:80, 
    // padding:10,
    marginTop:15,
    // borderWidth:0.4, 
    // borderColor:'gray', 
    backgroundColor:'white',
    flexDirection:'row'
  },
  apply_in:{
    flexDirection:'row', 
    flex:1, 
    marginRight:7.5, 
    borderWidth:0.4, 
    borderColor:'gray',
    alignItems:'center',
    justifyContent:'center'
  },
  popular:{
    width:width - 55,
    height:200,
    backgroundColor:'white',
    marginHorizontal:27,
    alignItems:'center'


  },
  popularJobTitle:{
    width:370,
    height:50,
    justifyContent:'space-between',
    backgroundColor:'white'

  },
  recommendedHeader: {
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    paddingHorizontal: 36,
  },
  destinations: {
    flex: 1,
    justifyContent: 'space-between',
    paddingBottom: 30,
  },
  destination: {
    width: width - (36 * 2),
    height: width * 0.6,
    marginHorizontal: 36,
    paddingHorizontal: 36,
    paddingVertical: 36 * 0.66,
    borderRadius: 12,
  },
  destinationInfo: {
    position: 'absolute',
    borderRadius: 12,
    paddingHorizontal: 36,
    paddingVertical: 36 / 2,
    bottom: 20,
    left: (width - (36 * 4)) ,
    backgroundColor: '#FFF',
    width: width - (36 * 4),
  },
  recommendedList: {
  },
  recommendation: {
    width: (width - (36 * 2)) / 2,
    marginHorizontal: 8,
    backgroundColor: '#FFF',
    overflow: 'hidden',
    borderRadius: 12,
    marginVertical: 36 * 0.5,
  },
  recommendationHeader: {
    overflow: 'hidden',
    borderTopRightRadius: 12,
    borderTopLeftRadius: 12,
  },
  recommendationOptions: {
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 36 / 2,
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
  },
  recommendationTemp: {
    fontSize: 12 * 1.25,
    color: '#FFF'
  },
  recommendationImage: {
    width: (width - (36 * 2)) / 2,
    height: (width - (36 * 2)) / 2,
  },
  avatar: {
    width: 36,
    height: 36,
    borderRadius: 12 / 2,
  },
  rating: {
    fontSize: 12 * 2,
    color: '#FFF',
    fontWeight: 'bold'
  },
  shadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.05,
    shadowRadius: 10,
    elevation: 5,
  },
  dots: {
    width: 10,
    height: 10,
    borderWidth: 2.5,
    borderRadius: 5,
    marginHorizontal: 6,
    backgroundColor: '#DCE0E9',
    borderColor: 'transparent',
  },
  activeDot: {
    width: 12.5,
    height: 12.5,
    borderRadius: 6.25,
    borderColor: '#007BFA',
  }
})

class SearchJobScreen extends Component{
  static navigationOptions ={
    header:(
      <View style={[styles.flex, styles.row, styles.header, ]}>
        <View style={{flexDirection:'row', flex:1, justifyContent:'space-between' }}>
          <View>
          <Image source={logo} style={[styles.logo]}/>
          </View>
          <View style={styles.iconSearch}>
          <Icon  name='search' type='font-awesome' size={25} color='gray'/>
          </View>
        </View>
        
      </View>
    )
  }

  banner=()=>{
    return(
      <View style={styles.banner}>
        <ImageBackground source={bgImage} style={{width:415, height:160}}>

        </ImageBackground>
        <View style={styles.bannerText}>
          <Text style={{fontSize:14,color:'gray',textAlign:'center'}}>
            Let's register to LokerLink so that the process of finding and applying a job is easier! 
          </Text><Text style={{fontSize:14, color:'blue', fontWeight:'bold',textAlign:'center'}}>Register to LokerLink</Text>

        </View>

        <View style={styles.apply}>
          <View style={styles.apply_in}>
            <Icon name='book' size={25} color='black'/><Text style={{fontSize:14, marginLeft:5}}>Swipe & Apply</Text>

          </View>
          <View style={styles.apply_in}>
          <Icon name='bookmark' size={25} color='black'/><Text style={{fontSize:14, marginLeft:5}}>Career test</Text>

          </View>
        </View>

      </View>
    );
    
  }

  


  popularJobs = () => {
    return (
      <View style={[styles.flex, styles.column, styles.recommended, ]}>
        <View
          style={[
            styles.row,
            styles.recommendedHeader
          ]}
        >
          <Text style={{ fontSize: 12 * 1.4 }}>Jobs Popular</Text>
          <TouchableOpacity activeOpacity={0.5}>
            <Text style={{ color: '#BCCCD4' }}>More ></Text>
          </TouchableOpacity>
        </View>
        <View style={[styles.column, styles.recommendedList]}>
          <FlatList
            horizontal
            pagingEnabled
            scrollEnabled
            showsHorizontalScrollIndicator={false}
            scrollEventThrottle={16}
            snapToAlignment="center"
            style={[ styles.shadow, { overflow: 'visible' }]}
            data={this.props.destinations}
            keyExtractor={(item, index) => `${item.id}`}
            renderItem={({ item, index }) => this.jobDetail(item, index)}
          />
        </View>
      </View>
    );
  }

  jobDetail = (item, index) => {
    const { destinations } = this.props;
    const isLastItem = index === destinations.length - 1;
    return (
      <View style={[
        styles.flex, styles.column, styles.recommendation, styles.shadow, 
        index === 0 ? { marginLeft: 36 } : null,
        isLastItem ? { marginRight: 36 / 2 } : null,
      ]}>
        <View style={[styles.flex, styles.recommendationHeader]}>
          <Image style={[styles.recommendationImage]} source={{ uri: item.preview }} />
          <View style={[ styles.flex, styles.row, styles.recommendationOptions ]}>
            <Text style={styles.recommendationTemp}>
              {item.id}℃
            </Text>
            <FontAwesome
              name={item.saved ? 'bookmark' : 'bookmark-o'}
              color={'#FFF'}
              size={12 * 1.25}
            />
          </View>
        </View>
        <View style={[styles.flex, styles.column, styles.shadow, { justifyContent: 'space-evenly', padding: 36 / 2 }]}>
          <Text style={{ fontSize: 12 * 1.25, fontWeight: '500', paddingBottom: 36 / 4.5, }}>{item.title}</Text>
          <Text style={{ color: '#BCCCD4' }}>{item.location}</Text>
          <View style={[
            styles.row,
            { alignItems: 'center', justifyContent: 'space-between', marginTop: 36 }
          ]}>
            {/* {this.renderRatings(item.rating)} */}
            <Text style={{ color: '#007BFA' }}>
              {item.rating}
            </Text>
          </View>
        </View>
      </View>
    )
  }



  render(){
    return(
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 36 }}
      >
             
        {this.banner()}
        {this.popularJobs()}
        </ScrollView>
    );

  }
}

SearchJobScreen.defaultProps={
  destinations:mock
}

export default SearchJobScreen;

