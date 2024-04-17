import {BottomTabBarProps} from '@react-navigation/bottom-tabs';
import {mScale, screenWidth} from '../styles/mixins';
import {Text, TouchableOpacity, View} from 'react-native';
import {createStyleSheet, useStyles} from 'react-native-unistyles';
import MoreIcon from '@assets/icons/movie.svg';
import ShowIcon from '@assets/icons/show.svg';
import More from '@assets/icons/more.svg';

function MyTabBar({state, descriptors, navigation}: BottomTabBarProps) {
  const {styles, theme} = useStyles(stylesheet);

  return (
    <View style={[styles.container]}>
      {state.routes.map((route, index) => {
        const {options} = descriptors[route.key];
        const label = route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name, route.params);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <TouchableOpacity
            accessibilityRole="button"
            accessibilityState={isFocused ? {selected: true} : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={styles.touchableOpacityStyle}>
            <Text
              style={{
                color: isFocused ? theme.colors.netflixRed : theme.colors.title,
                marginBottom: mScale(5),
              }}>
              {label}
            </Text>
            {route.name === 'Movies' ? (
              <MoreIcon
                width={25}
                height={25}
                color={isFocused ? theme.colors.netflixRed : theme.colors.title}
              />
            ) : route.name === 'Series' ? (
              <ShowIcon
                width={25}
                height={25}
                color={isFocused ? theme.colors.netflixRed : theme.colors.title}
              />
            ) : (
              <More
                width={25}
                height={25}
                color={isFocused ? theme.colors.netflixRed : theme.colors.title}
              />
            )}
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

export default MyTabBar;

const stylesheet = createStyleSheet(theme => ({
  container: {
    backgroundColor: theme.colors.background,
    borderTopWidth: 1,
    borderTopColor: theme.colors.border,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: mScale(15),
    paddingHorizontal: mScale(20),
  },
  touchableOpacityStyle: {
    // flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
}));
