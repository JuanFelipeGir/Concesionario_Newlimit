import React, { useState, useEffect } from 'react';
import { Text, View, Image } from 'react-native';
import { getStorage, ref, getDownloadURL } from 'firebase/storage';
import { get } from 'firebase/database';
import { stylesHome } from './styles';

const VehicleSearch = () => {
    const [url, setUrl] = useState();

    useEffect(() => {
        const func = async () => {
            const storage = getStorage();
            const reference = ref(storage, '/FordRaptorF150.png');
            await getDownloadURL(reference).then((x) => {
                setUrl(x);
            })
        }
        func();
    }, []);
    return (
        <View style={stylesHome.container}>
            <View style={stylesHome.imageContainer}>
                <Image
                    style={stylesHome.image}
                    source={{ uri: url }}
                />
            </View>
        </View>
    )
}

export default VehicleSearch
