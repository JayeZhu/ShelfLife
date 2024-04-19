import { Image, StyleSheet, ViewComponent } from 'react-native';

import EditScreenInfo from '@/components/EditScreenInfo';
import { Text, View } from '@/components/Themed';
import PageContainer from '@/components/widgets/PageContainer';
import { FlashList } from '@shopify/flash-list';
import { useEffect, useState } from 'react';
import { Ionicons } from '@expo/vector-icons';

export default function TabOneScreen() {
  const [data, setData] = useState<any[]>([]);

  const renderItem = ({ item }: { item: any }) => {
    const { name, imageSrc, expirationDate, shelfLife, category } = item;
    console.log("🚀 ~ renderItem ~ item:", item)
    return <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start', flexWrap: 'nowrap' }}>
      <Image src={imageSrc} style={{ height: 40, width: 40 }} />
      <View style={{ flexDirection: 'column', paddingLeft: 6 }}>
        <View>
          <Text>{name}</Text>
        </View>
        <View style={{ flexDirection: 'row', rowGap: 4, flexWrap: 'nowrap', alignItems: 'flex-start' }}>
          <View>
            <Ionicons name="folder" size={18} color="gray" />
            <Text>{category}</Text>
          </View>
          <View>
            <Ionicons name="calendar" size={18} color="gray" />
            <Text>{expirationDate}</Text>
          </View>
        </View>
      </View>
    </View>
  }

  useEffect(() => {
    setData([{
      name: 'cola',
      productData: new Date(),
      imageSrc: 'file:///data/user/0/host.exp.exponent/cache/ExperienceData/%2540anonymous%252FShelfLife-6f322de7-dbe4-4936-a478-f0872523913d/ImagePicker/f6d44d74-d681-46ae-9745-d640dfb8c5ee.jpeg',
      expirationDate: '20241012',
      shelfLife: {
        years: 0,
        months: 0,
        days: 0,
      },
      category: '食品',
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
