import React from 'react';
import {
  FlatList, Image, ScrollView, StatusBar, StyleSheet, Text, View
} from 'react-native';
import Button from '../../components/Button';
import Card from '../../components/Card';
import Spacing from '../../components/Spacing';
import { ASSESSMENTS_DATA, CHALLENGE_DATA } from '../../constants';
import { clearStorage } from '../../helpers';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f5fcff',
    flex: 1,
    marginTop: StatusBar.currentHeight,
  },
  itemChallenge: {
    width: 200,
    height: 500,
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  itemChallengeImage: {
    width: 160,
    height: 160,
  },
  itemChallengeContent: {
    height: 230,
  },
  itemAssessment: {
    width: 300,
    height: 160,
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    flexDirection: 'row',
  },
  itemAssessmentImage: {
    width: 100,
    height: 136,
  },
  rowContainer: {
    flexDirection: 'row',
  },

  title1: {
    fontWeight: 'bold',
    fontSize: 32,
  },
  title2: {
    fontWeight: 'bold',
    fontSize: 17,
  },

  textDisable: {
    color: '#9EA3A7',
  },
});

const renderChallengeItem = ({item}) => {
  const {title, point, deadLine} = item;
  return (
    <Card style={styles.itemChallenge}>
      <Image
        style={styles.itemChallengeImage}
        source={require('../../assets/img/work.jpg')}
        resizeMode="cover"
      />
      <View style={styles.itemChallengeContent}>
        <Text style={styles.title2}>{title}</Text>
        {deadLine && <Text style={styles.textDisable}>{`${deadLine} days left`}</Text>}
      </View>
      <View style={styles.rowContainer}>
        <View style={{width: '70%'}}>
          <Text>Say no to sugar</Text>
          <Text style={{color: '#427486', fontWeight: 'bold'}}>
            {point}{' '}
            <Text style={{fontWeight: 'normal', color: '#9EA3A7'}}>pts </Text>
          </Text>
        </View>
        <View style={{alignSelf: 'flex-end'}}>
          <Image
            style={{width: 30, height: 30}}
            source={require('../../assets/img/forward.png')}
            resizeMode="cover"
          />
        </View>
      </View>
    </Card>
  );
};

const renderAssessmentItem = ({item}) => {
  const {title, point} = item;
  return (
    <Card style={styles.itemAssessment}>
      <View>
        <Image
          style={styles.itemAssessmentImage}
          source={require('../../assets/img/work.jpg')}
          resizeMode="cover"
        />
      </View>
      <View style={{marginLeft: 10}}>
        <View style={{height:'60%', width: '80%'}}>
          <Text style={styles.title2}>{title}</Text>
        </View>
        <View style={[styles.rowContainer]}>
          <View style={{width: '60%'}}>
            <Text>Say no to sugar</Text>
            <Text style={{color: '#427486', fontWeight: 'bold'}}>
              {point}{' '}
              <Text style={{fontWeight: 'normal', color: '#9EA3A7'}}>pts </Text>
            </Text>
          </View>
          <View style={{alignSelf: 'flex-end'}}>
            <Image
              style={{width: 30, height: 30}}
              source={require('../../assets/img/forward.png')}
              resizeMode="cover"
            />
          </View>
        </View>
      </View>
    </Card>
  );
};

const Homepage = ({onLogin}) => {

  const handleLogout = ()=>{
    clearStorage('token');
    onLogin(false);
  }

  return (
    <ScrollView style={styles.container}>
      <Spacing height={20}/>
      <Text style={[styles.title1, {marginLeft: 20}]}>Assessments</Text>
      <FlatList
        data={ASSESSMENTS_DATA}
        renderItem={renderAssessmentItem}
        keyExtractor={item => item.id}
        horizontal
      />

      <Text style={[styles.title1, {marginLeft: 20}]}>Challenges</Text>
      <FlatList
        data={CHALLENGE_DATA}
        renderItem={renderChallengeItem}
        keyExtractor={item => item.id}
        horizontal
      />
      <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <Button
          label="Sign out"
          style={{
            paddingVertical: 8,
            marginTop: 24,
            backgroundColor: 'grey',
            borderRadius: 24,
            height: 50,
            width: 150,
          }}
          onPress={handleLogout}
        />
      </View>
      <Spacing height={20}/>
    </ScrollView>
  );
};

export default Homepage;
