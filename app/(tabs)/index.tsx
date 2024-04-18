import { StyleSheet } from 'react-native';

import EditScreenInfo from '@/components/EditScreenInfo';
import { Text, View } from '@/components/Themed';
import PageContainer from '@/components/widgets/PageContainer';
import { FlashList } from '@shopify/flash-list';
import { useEffect, useState } from 'react';

export default function TabOneScreen() {
  const [data, setData] = useState<any[]>([]);

  const renderItem = ({ item }: { item: any }) => {
    return <View>
      <Text>{item?.title}</Text>
    </View>
  }

  useEffect(() => {
    setData([
      {
        title: '1243',
      }
    ])
  }, [])

  return (
    <View style={styles.container}>
      <View style={{ height: 200, width: 400 }}>
        <FlashList
          data={data}
          renderItem={renderItem}
          estimatedItemSize={200}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingLeft: 16,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  falshListItem: {
    height: 10
  }
});
