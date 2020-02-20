import _ from 'lodash';
import React, { Component } from 'react';
import {
    Platform,
    Alert,
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
    Button
} from 'react-native';
import { ExpandableCalendar, AgendaList, CalendarProvider } from 'react-native-calendars';
import Icon from 'react-native-vector-icons/Entypo';

const today = new Date().toISOString().split('T')[0];
const fastDate = getPastDate(3); 
const futureDates = getFutureDates(9);
const dates = [fastDate, today].concat(futureDates);
const themeColor = '#00AAAF';
const lightThemeColor = '#EBF9F9';

function getFutureDates(days){
  const array = [];
  for (let index = 1; index <= days; index++) {
    const date = new Date(Date.now() + (864e5 * index)); // 864e5 == 86400000 == 24*60*60*1000
    const dateString = date.toISOString().split('T')[0];
    array.push(dateString);
  }
  return array;
}

function getPastDate(days) {
  return new Date(Date.now() - (864e5 * days)).toISOString().split('T')[0];
}

const chosenDay = new Date().toISOString().split('T')[0];
const ITEMS = [
     { title: today, data: [{ hour: '12:00 AM', duration: '1h', title: 'Ashtanga Yoga' }] },
     { title: dates[1], data: [{ hour: '04:00 PM', duration: '1h', title: 'Pilates ABC' },
     { hour: '05:00 PM', duration: '1h', title: 'Vinyasa Yoga' }] },
     { title: dates[2], data: [{ hour: '01:00 PM', duration: '1h', title: 'Ashtanga Yoga' },
     { hour: '02:00 PM', duration: '1h', title: 'Deep Streches' }, 
     { hour: '03:00 pM', duration: '1h', title: 'Private Yoga' }] },
     { title: dates[3], data: [{ hour: '12:00 AM', duration: '1h', title: 'Ashtanga Yoga' }] },
     { title: dates[4], data: [{}] },
     { title: dates[5], data: [{ hour: '09:00 PM', duration: '1h', title: 'Pilates Reformer' }, 
     { hour: '10:00 PM', duration: '1h', title: 'Ashtanga' }, 
     { hour: '11:00 PM', duration: '1h', title: 'TRX' }, 
     { hour: '12:00 PM', duration: '1h', title: 'Running Group' }] },
     { title: dates[6], data: [{ hour: '12:00 AM', duration: '1h', title: 'Ashtanga Yoga' }] },
     { title: dates[7], data: [{}] },
     { title: dates[8], data: [{ hour: '09:00 PM', duration: '1h', title: 'Pilates Reformer' }, 
     { hour: '10:00 PM', duration: '1h', title: 'Ashtanga' }, 
     { hour: '11:00 PM', duration: '1h', title: 'TRX' }, 
     { hour: '12:00 PM', duration: '1h', title: 'Running Group' }] },
     { title: dates[9], data: [{ hour: '01:00 PM', duration: '1h', title: 'Ashtanga Yoga' }, 
     { hour: '02:00 PM', duration: '1h', title: 'Deep Streches' }, 
     { hour: '03:00 PM', duration: '1h', title: 'Private Yoga' }] },
     { title: dates[10], data: [{ hour: '12:00 PM', duration: '1h', title: 'Ashtanga Yoga' }] }
];
export default class CalendarScreen extends Component {

    getMarkedDates = () => {
        const marked = {};
        ITEMS.forEach(item => {
            // only mark dates with data
            if (item.data && item.data.length > 0 && !_.isEmpty(item.data[0])) {
                marked[item.title] = { marked: true };
            }
        });
        return marked;
    }

    
    getTheme = () => {
        const themeColor = '#00918d';
        const lightThemeColor = '#e6efff';
        const disabledColor = '#a6acb1';
        const black = '#20303c';
        const white = '#ffffff';

        return {
            // arrows
            arrowColor: black,
            arrowStyle: { padding: 0 },
            // month
            monthTextColor: black,
            textMonthFontSize: 16,
            textMonthFontFamily: 'HelveticaNeue',
            textMonthFontWeight: 'bold',
            // day names
            textSectionTitleColor: black,
            textDayHeaderFontSize: 12,
            textDayHeaderFontFamily: 'HelveticaNeue',
            textDayHeaderFontWeight: 'normal',
            // today
            todayBackgroundColor: lightThemeColor,
            todayTextColor: themeColor,
            // dates
            dayTextColor: themeColor,
            textDayFontSize: 18,
            textDayFontFamily: 'HelveticaNeue',
            textDayFontWeight: '500',
            textDayStyle: { marginTop: Platform.OS === 'android' ? 2 : 4 },
            // selected date
            selectedDayBackgroundColor: themeColor,
            selectedDayTextColor: white,
            // disabled date
            textDisabledColor: disabledColor,
            // dot (marked date)
            dotColor: themeColor,
            selectedDotColor: white,
            disabledDotColor: disabledColor,
            dotStyle: { marginTop: -2 }
        };
    }
    
    renderEmptyItem() {
        return (
            <View style={styles.emptyItem}>
                <Text style={styles.emptyItemText}>No Events Planned</Text>
            </View>
        );
    }

    renderItem = ({ item }) => {
        if (_.isEmpty(item)) {
            return this.renderEmptyItem();
        }

        return (
            <TouchableOpacity
                onPress={() => this.itemPressed(item.title)}
                style={styles.item} >
                <View style={styles.time}>
                    <Text style={styles.itemHourText}>{item.hour}</Text>
                    <Text style={styles.itemDurationText}>{item.duration}</Text>
                </View>
                <Text style={styles.itemTitleText}>{item.title}</Text>
                <View style={styles.itemButtonContainer}>
                    <Button title={'Xem'} onPress={this.buttonPressed} />
                </View>
            </TouchableOpacity>
        );
    }

    render() {
        return (
           
            <CalendarProvider
                date={chosenDay}
                onDateChanged={this.onDateChanged}
                onMonthChange={this.onMonthChange}
                theme={{ todayButtonTextColor: '#0059ff' }}
                showTodayButton
                disabledOpacity={0.6}
            // todayBottomMargin={15}
            >
                <ExpandableCalendar
                    // horizontal={false}
                    // hideArrows
                    // disablePan
                    // hideKnob
                    // initialPosition={ExpandableCalendar.positions.OPEN}
                    firstDay={1}
                    markedDates={this.getMarkedDates()} // {'2019-06-01': {marked: true}, '2019-06-02': {marked: true}, '2019-06-03': {marked: true}};
                    theme={this.getTheme()}
                //   leftArrowImageSource={require('../img/previous.png')}
                //   rightArrowImageSource={require('../img/next.png')}
                // calendarStyle={styles.calendar}
                // headerStyle={styles.calendar} // for horizontal only
                // disableWeekScroll
                />
                <AgendaList
                    sections={ITEMS}
                    extraData={this.state}
                    renderItem={this.renderItem}
                />
                
            </CalendarProvider>
        )
    }
}


const styles = StyleSheet.create({
    calendar: {
        paddingLeft: 20,
        paddingRight: 20,
        elevation:5
    },
    sections: {
        backgroundColor: '#f0f4f7',
        color: '#79838a',
        textTransform: 'capitalize',
    },
    time:{
        alignItems:'center',
        paddingHorizontal:10,
        paddingVertical:5,
        borderRightColor:'#00918d',
        borderRightWidth:2,
    },
    item: {
        flexDirection:'row',
        padding:20,
        backgroundColor: 'white',
        borderWidth:1,
        borderColor: '#e8ecf0',
        elevation:5
    },
    itemHourText: {
        color: 'black',
        fontSize: 15,
    },
    itemDurationText: {
        color: 'grey',
        fontSize: 13,
    },
    itemTitleText: {
        color: 'black',
        fontWeight: 'bold',
        fontSize:18,
        padding:10
    },
    itemButtonContainer: {
        flex: 1,
        alignItems:'flex-end',
        justifyContent:'center'
    },
    emptyItem: {
        paddingLeft: 20,
        height: 52,
        justifyContent: 'center',
        borderBottomWidth: 1,
        borderBottomColor: '#e8ecf0'
    },
    emptyItemText: {
        color: '#79838a',
        fontSize: 14
    }
});