import { createNativeStackNavigator } from "@react-navigation/native-stack";
const ProfileStack = createNativeStackNavigator();
import { Profile, Location } from "../screens";


function ProfileNavigator() {
  return (
      <ProfileStack.Navigator
        initialRouteName="Profile"
        screenOptions={({}) => ({
          headerTitleAlign: "center",
        })}
      >
        <ProfileStack.Screen name="Profile" component={Profile} />
        <ProfileStack.Screen name="Location" component={Location} />
      </ProfileStack.Navigator>
  );
}

export default ProfileNavigator;