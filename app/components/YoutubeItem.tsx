import React from 'react';
import {View, Image, StyleSheet, TouchableOpacity} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    paddingVertical: 10,
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  image: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  content: {
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    color: '#3a3a3a',
  },
  subtitle: {
    color: '#666',
    fontSize: 16,
    marginTop: 2,
  },
  separator: {
    backgroundColor: '#ececec',
    height: 1,
  },
  right: {
    alignItems: 'flex-end',
    flex: 1,
  },
});

export const YoutubeItem = ({
  image,
  //   title,
  //   subtitle,
  //   lastMesssageAt,
  //   onPress,
}) => (
  <TouchableOpacity onPress={() => {}} style={styles.container}>
    <View>
      <Image source={image} style={styles.image} />
    </View>
    {/* <View style={styles.content}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.subtitle}>{subtitle}</Text>
    </View>
    <View style={styles.right}>
      <Text>{lastMesssageAt}</Text>
    </View> */}
  </TouchableOpacity>
);

export const Separator = () => <View style={styles.separator} />;
