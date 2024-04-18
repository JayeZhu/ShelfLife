import { StyleSheet } from 'react-native';

import EditScreenInfo from '../EditScreenInfo';
import { Text, View } from '@/components/Themed';

interface IProps {
  title?: string | React.ReactNode;
  separator?: string | React.ReactNode;
  children?: React.ReactNode;
}

export default function PageContainer(props: IProps) {
  const { title, separator, children } = props;
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{ title }</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      {separator}
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
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
})