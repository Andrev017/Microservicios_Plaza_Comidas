import { Slot } from 'expo-router';
import FooterApp from '../../components/footer';
import { View } from 'react-native';
import HeaderApp from '../../components/headerApp';

export default function HomeLayout() {
    return (
        <>
            <HeaderApp />
            <View style={{ flex: 1 }}>
                <Slot />
            </View>
            <FooterApp />
        </>
    );
}
