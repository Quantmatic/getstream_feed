import React from 'react';
import SafeAreaView from 'react-native-safe-area-view';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import {
    StreamApp,
    FlatFeed,
    Activity,
    LikeButton,
    StatusUpdateForm,
} from 'expo-activity-feed';

const CustomActivity = (props) => {
  console.log(props);
  return (
    <Activity
      {...props}
      Footer={
        <LikeButton {...props} />
      }
    />
  );
};

const App = () => {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{flex: 1}} forceInset={{ top: 'always' }}>
        <StreamApp
            apiKey="jt26nbs7uctt"
            appId="102662"
            token="eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoidXNlci1vbmUifQ.3z1LV0Rns3lI1HAZLZd11kZOs5CvHdJIA0peleuv4VY"
        >
          <FlatFeed Activity={CustomActivity} notify />
          <StatusUpdateForm feedGroup="timeline" />
        </StreamApp>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default App;