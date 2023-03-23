import React from 'react';
import {FlatList, Image, useWindowDimensions, View} from 'react-native';

const Banner = ({data, height = 170, roundedSize = 0, autoplay = true, autoplayInterval = 5000, dotColor = '#f97316', onChange = null}) => {
  const [active, setActive] = React.useState(0);
  const {width} = useWindowDimensions();
  const dataRef = React.useRef(data);
  const indexRef = React.useRef(0);
  const listRef = React.useRef(null);
  const offsetRef = React.useRef(0);
  const intervalRef = React.useRef(0);

  dataRef.current = data;

  React.useEffect(() => {
    autoPlay();
    return () => clearInterval(intervalRef.current);
  }, []);

  function scrollBegin(e){
    clearInterval(intervalRef.current);
    offsetRef.current = e.nativeEvent.contentOffset.x;
  }

  function scroll(e){
    const offsetEnd = e.nativeEvent.contentOffset.x;
    if(offsetEnd - offsetRef.current > 0){
      indexRef.current += 1;
    }else if(offsetEnd - offsetRef.current < 0){
      indexRef.current -= 1;
    }
    if(indexRef.current < 0){
      indexRef.current = 0;
    }
    if(indexRef.current > data.length - 1){
      indexRef.current = Math.max(0, data.length - 1);
    }
    setActive(indexRef.current);
    listRef.current.scrollToIndex({index: indexRef.current, animated: true});
    onChange && onChange(indexRef.current, data.length);
    autoPlay();
  }

  function autoPlay(){
    if(!autoplay){
      return;
    }
    intervalRef.current = setInterval(() => {
      indexRef.current += 1;
      if(indexRef.current > dataRef.current.length - 1){
        indexRef.current = 0;
      }
      setActive(indexRef.current);
      if(dataRef.current.length > 0){
        listRef.current.scrollToIndex({index: indexRef.current, animated: true});
        onChange && onChange(indexRef.current, dataRef.current.length);
      }
    }, autoplayInterval);
  }

  return (
    <View>
      <FlatList ref={listRef} decelerationRate={0} showsHorizontalScrollIndicator={false} onScrollBeginDrag={scrollBegin} onScrollEndDrag={scroll} data={data} horizontal={true} renderItem={({item, index}) => <View key={index}>
        <Image source={{uri: item}} resizeMode={'cover'} style={{width, height, borderRadius: roundedSize}} />
      </View>} />
      <View style={{position: 'absolute', width: '100%', bottom: 6, flexDirection: 'row', justifyContent: 'center'}}>
        {new Array(data.length).fill('').map((item, index) => <View key={index} className={'mx-0.5 w-1 h-1 rounded-full'} style={{backgroundColor: index === active ? dotColor: '#6b7280'}} />)}
      </View>
    </View>
  );
};

export default Banner;
