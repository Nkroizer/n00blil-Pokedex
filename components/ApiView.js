import React from 'react';
import { View, Text, Button, FlatList, ActivityIndicator } from 'react-native';

const ApiView = (props) => {
    const { goForAxios, axiosData, renderItem, FlatListItemSeparator, loading } = props;

    return (
        <View>
            <View style={{ margin: 18 }}>
                <Button
                    title={'Kanto'}
                    onPress={goForAxios}
                    color='green'
                />
            </View>
            {
                <FlatList
                    data={axiosData}
                    ItemSeparatorComponent={FlatListItemSeparator}
                    renderItem={item => renderItem(item)}
                    keyExtractor={item => item.id.toString()}
                />
            }
            {loading &&
                <View>
                    <ActivityIndicator size="large" color="#0c9" />
                    <Text>Fetching Data</Text>
                </View>
            }
        </View>
    )
};

export default ApiView;