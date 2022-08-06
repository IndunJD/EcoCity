import React from 'react';
import {Text, View, StyleSheet, Dimensions, LogBox, Image, TouchableOpacity} from "react-native";
import {VictoryPie} from "victory-native";

import FilterImg from '../assets/images/filter.png';

import {Responsive} from "../helpers/Responsive";

const HEIGHT = Dimensions.get('window').height;
const WIDTH = Dimensions.get('window').width;

LogBox.ignoreLogs([
  "Require cycle: node_modules/victory",
]);

const Complaints = () => {
  const TableRow = (index, id, date, status) => {
    return (
      <View style={styles.complaints.table.content.row}>
        <Text style={styles.complaints.table.content.row.index}>{index}</Text>
        <Text style={styles.complaints.table.content.row.id}>{id}</Text>
        <Text style={styles.complaints.table.content.row.date}>{date}</Text>
        <Text style={
          status === 'Viewed' ? styles.complaints.table.content.row.status.viewed :
          status === 'Not Viewed' ? styles.complaints.table.content.row.status.notViewed :
          status === 'Resolved' ? styles.complaints.table.content.row.status.resolved :
          styles.complaints.table.content.row.status.removed
        }>{status}</Text>
      </View>
    );
  }

  const PieChart = () => {
    return (
      <VictoryPie
        style={{labels: {fontSize: 10, fill: "white", fontWeight: 'bold',},}}
        labelRadius={Responsive(12, WIDTH)}
        width={Responsive(100, WIDTH)}
        height={Responsive(25, HEIGHT)}
        padding={10}
        radius={Responsive(20, WIDTH)}
        innerRadius={Responsive(5, WIDTH)}
        padAngle={5}
        categories={{x: ["dogs", "cats", "mice"]}}
        colorScale={["#03989E", "#68ADCA", "#ABC2E4", "#075061",]}
        responsive={true}
        data={[
          {x: '1', y: 1},
          {x: '3', y: 3},
          {x: '2', y: 2},
          {x: '2', y: 2},
        ]}
      />
    );
  }

  const Card = (title, count) => {
    return (
      <View style={styles.complaints.statistics.section1.card}>
        <View style={styles.complaints.statistics.section1.card.title}>
          <Text style={styles.complaints.statistics.section1.card.title.txt}>{title}</Text>
        </View>
        <View style={styles.complaints.statistics.section1.card.count}>
          <Text style={styles.complaints.statistics.section1.card.count.txt}>{count}</Text>
        </View>
      </View>
    );
  }

  return (
    <View style={styles.complaints}>
      <View style={styles.complaints.title}>
        <Text style={styles.complaints.title.txt}>Complaints</Text>
      </View>
      <View style={styles.complaints.statistics}>
        <View style={styles.complaints.statistics.section1}>
          {Card('Viewed', '1')}
          {Card('Not Viewed', '6')}
          {Card('Resolved', '3')}
          {Card('Removed', '2')}
        </View>
        <View style={styles.complaints.statistics.section2}>
          {PieChart()}
        </View>
      </View>
      <View style={styles.complaints.table}>
        <View style={styles.complaints.table.title}>
          <Text style={styles.complaints.table.title.txt}>My Complaints</Text>
          <TouchableOpacity style={styles.complaints.table.title.filter}>
            <Text style={styles.complaints.table.title.filter.txt}>Filter</Text>
            <Image source={FilterImg} style={styles.complaints.table.title.filter.icon}/>
          </TouchableOpacity>
        </View>
        <View style={styles.complaints.table.content}>
          {TableRow()}
          {/*{TableRow()}*/}
          {/*{TableRow()}*/}
          {/*{TableRow()}*/}
          {/*{TableRow()}*/}
          {/*{TableRow()}*/}
        </View>
        <View style={styles.complaints.table.last}>

        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  complaints: {
    // borderColor: 'red',
    // borderWidth: 2,
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    // backgroundColor: '#F7F7F7',
    title: {
      // borderColor: 'blue',
      // borderWidth: 2,
      paddingLeft: 10,
      width: '100%',
      flex: 1,
      justifyContent: 'center',
      txt: {
        fontSize: 25,
        fontWeight: 'bold',
        color: '#042434',
        // marginLeft: 5,
      },
    },
    statistics: {
      // borderColor: 'green',
      // borderWidth: 2,
      paddingVertical: 5,
      paddingLeft: 20,
      flex: 4,
      display: 'flex',
      flexDirection: 'row',
      section1: {
        // borderColor: 'black',
        // borderWidth: 2,
        flex: 5,
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        alignContent: 'space-around',
        card: {
          borderColor: '#BFDDDE',
          borderWidth: 1,
          backgroundColor: '#EDFBFC',
          borderRadius: 5,
          width: Responsive(18.5, WIDTH),
          height: Responsive(11, HEIGHT),
          display: 'flex',
          title: {
            // borderColor: 'blue',
            // borderWidth: 2,
            flex: 3,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            txt: {
              fontSize: 12,
              color: '#042434',
            },
          },
          count: {
            // borderColor: 'blue',
            // borderWidth: 2,
            flex: 8,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            txt: {
              color: '#042434',
              fontWeight: '900',
              fontSize: 35,
            },
          },
        },
      },
      section2: {
        // borderColor: 'black',
        // borderWidth: 2,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flex: 7,
      },
    },
    table: {
      borderColor: 'red',
      borderWidth: 2,
      padding: 5,
      flex: 8,
      paddingHorizontal: 23,
      // paddingTop: 20,
      display: 'flex',
      flexDirection: 'column',
      title: {
        borderColor: 'orange',
        borderWidth: 2,
        marginTop: 15,
        flex: 1,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        txt: {
          color: '#042434',
          fontSize: 18,
          fontWeight: '600',
        },
        filter: {
          borderWidth: 1,
          borderColor: '#BFDDDE',
          borderRadius: 5,
          height: '100%',
          width: Responsive(23, WIDTH),
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingVertical: 3,
          paddingHorizontal: 10,
          txt: {
            color: '#042434',
          },
          icon: {
            width: 20,
            height: '100%',
          },
        },
      },
      content: {
        borderColor: 'black',
        borderWidth: 2,
        flex: 8.5,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        // alignItems: 'center',
        row: {
          borderColor: 'blue',
          borderWidth: 2,
          height: Responsive(5, HEIGHT),
          display: 'flex',
          flexDirection: 'row',
          index: {
            borderColor: 'green',
            borderWidth: 2,
            flex: 1,
            textAlignVertical: 'center',
            textAlign: 'center',
            color: '#707070',
          },
          id: {
            borderColor: 'green',
            borderWidth: 2,
            flex: 3,
            textAlignVertical: 'center',
            textAlign: 'center',
            color: '#707070',
          },
          date: {
            borderColor: 'green',
            borderWidth: 2,
            flex: 3,
            textAlignVertical: 'center',
            textAlign: 'center',
            color: '#707070',
          },
          status: {
            viewed: {
              flex: 2,
              textAlignVertical: 'center',
              textAlign: 'center',
              borderColor: 'blue',
              borderWidth: 1,
            },
            notViewed: {
              flex: 2,
              textAlignVertical: 'center',
              textAlign: 'center',
              borderColor: 'orange',
              borderWidth: 1,
            },
            resolved: {
              flex: 2,
              textAlignVertical: 'center',
              textAlign: 'center',
              borderColor: 'green',
              borderWidth: 1,
            },
            removed: {
              flex: 2,
              textAlignVertical: 'center',
              textAlign: 'center',
              borderColor: 'red',
              borderWidth: 1,
            },
          },
        },
      },
      last: {
        borderColor: 'black',
        borderWidth: 2,
        flex: 1.5,
      },
    },
  },
});

export default Complaints;
