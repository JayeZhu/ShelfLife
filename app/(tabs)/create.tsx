// App.tsx
import {
  View,
  TextInput,
  Button,
  Alert,
  TextInputProps,
  StyleSheet
} from 'react-native'
import { useForm } from 'react-hook-form'
import FormItem from '@/components/FormItem'
import { Datepicker, Select, SelectGroup, Text, Input, SelectItem } from '@ui-kitten/components'
import { YEARS_OPTIONS } from '@/constants/Options'

const emailRegEx =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

const defaultValues = {
  name: '',
  productData: new Date(),
  expirationDate: '',
  shelfLife: {
    years: 0,
    months: 0,
    days: 0,
  }
}

const renderSelectItems = (options: { value: any, label: any, key: any}[]) => {
  console.log(options);
  return options?.map(option => {
    const { value, label, key } = option;
    return <SelectItem key={key} title={label}></SelectItem>
  })
}

export default function App() {
  const {
    control,
    handleSubmit,
    formState: { errors }
  } = useForm({
    defaultValues
  })

  const onSubmit = () => {
    Alert.alert('提交成功~💐')
  }

  return (
    <View style={styles.wrapper}>
      <FormItem
        required
        name="name"
        label="名称"
        control={control}
        errors={errors.name}
        rules={{
          required: '请输入名称',
          // pattern: {
          //   value: emailRegEx,
          //   message: '请输入一个有效的邮箱'
          // }
        }}
        render={({ field: { onChange, value } }) => (
          <Input
            value={value}
            onChangeText={onChange}
            placeholder="请输入名称"
          />
        )}
        style={{ marginBottom: 10 }}
      />

      <FormItem
        required
        label="生产日期"
        control={control}
        name="productData"
        rules={{
          required: '生产日期'
        }}
        errors={errors.productData}
        render={({ field: { onChange, value } }) => (
          <Datepicker date={value} onSelect={nextDate => onChange(nextDate)} />
        )}
        style={{ marginBottom: 10 }}
      />
      <FormItem
        required
        label="保质期"
        control={control}
        name="shelfLife"
        rules={{
          required: '保质期'
        }}
        errors={errors.productData}
        render={({ field: { onChange, value } }) => (
          <View style={{ flexDirection: 'row', }}>
            <Select style={{ flex: 1 }}>{renderSelectItems(YEARS_OPTIONS)}</Select><Input>年</Input>
            <Select style={{ flex: 1 }}>{renderSelectItems(YEARS_OPTIONS)}</Select><Input>月</Input>
            <Select style={{ flex: 1 }}>{renderSelectItems(YEARS_OPTIONS)}</Select><Input>日</Input>
          </View>
        )}
        style={{ marginBottom: 10 }}
      />
      <FormItem
        required
        label="过期时间"
        control={control}
        name="expirationDate"
        rules={{
          required: '过期时间'
        }}
        errors={errors.expirationDate}
        render={({ field: { onChange, value } }) => (
          <Datepicker date={value} onSelect={nextDate => onChange(nextDate)} />
        )}
        style={{ marginBottom: 40 }}
      />

      <Button title="提交" onPress={handleSubmit(onSubmit)} />
    </View>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    justifyContent: 'center',
    paddingLeft: 15,
    paddingRight: 15
  },
  title: {
    marginBottom: 30,
    fontSize: 50
  }
})

