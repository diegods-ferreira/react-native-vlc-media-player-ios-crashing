import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { SimpleCallbackEventProps, VLCPlayer, VlCPlayerView } from 'react-native-vlc-media-player';

const rtspUrl = 'rtsp://admin:econdos123@192.168.1.123:554/Streaming/channels/101';
// const rtspUrl = 'rtsp://admin%3Aecondos123%40192.168.1.123:554/Streaming/channels/101';

export default function App() {
  const handleSimpleVLCPlayerEvent = (eventName: string, event: SimpleCallbackEventProps) => {
    console.log(eventName, JSON.stringify(event, null, 2))
  }

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text>Open up App.js to start working on your app!</Text>

      <View style={styles.videoPlayerContainer}>
        <VLCPlayer
          style={styles.videoPlayer}
          videoAspectRatio="16:9"
          source={{
            uri: rtspUrl,
            autoplay: true,
            initOptions: ['--codec=avcodec'],
          }}
          // url={rtspUrl}
          onBuffering={event => handleSimpleVLCPlayerEvent('onBuffering', event)}
          onEnd={event => handleSimpleVLCPlayerEvent('onEnd', event)}
          onError={event => handleSimpleVLCPlayerEvent('onError', event)}
          onLoad={event => console.log('onLoad', JSON.stringify(event, null, 2))}
          onPaused={event => handleSimpleVLCPlayerEvent('onPaused', event)}
          onPlaying={event => console.log('onPlaying', JSON.stringify(event, null, 2))}
          onProgress={event => console.log('onProgress', JSON.stringify(event, null, 2))}
          onStopped={event => handleSimpleVLCPlayerEvent('onStopped', event)}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 64,
    paddingHorizontal: 24,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 24
  },
  videoPlayerContainer: {
    flex: 1,
    width: '100%'
  },
  videoPlayer: {
    width: '100%',
    height: '100%',
    backgroundColor: 'black',
    borderRadius: 16,
    overflow: 'hidden',
    // pointerEvents: 'none'
  }
});
