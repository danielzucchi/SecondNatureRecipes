import React from 'react';

import { View, Image } from 'react-native';

const HeaderBarImage = () => {
  return (
    <View>
      <Image
        source={{
          uri: 'https://www.secondnature.io/img/logo/sn-logo-white@2x.png',
        }}
        style={{
          width: 100,
          height: 30,
          justifyContent: 'center',
          alignItems: 'center',
        }}
      />
    </View>
  );
};

export default HeaderBarImage;
