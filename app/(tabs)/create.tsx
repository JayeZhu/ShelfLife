import { View, Button, Alert, StyleSheet } from 'react-native'
import { Form, useForm } from 'react-hook-form'
import { Datepicker, Select, Text, Input, SelectItem } from '@ui-kitten/components'

import FormItem from '@/components/FormItem'
import { DAYS_OPTIONS, MONTHS_OPTIONS, YEARS_OPTIONS } from '@/constants/Options'
import ImageSelector from '@/components/ImagePicker'

const defaultValues = {
  name: '',
  productData: new Date(),
  imageSrc: '',
  expirationDate: '',
  shelfLife: {
    years: 0,
    months: 0,
    days: 0,
  },
  category: '',
}

const renderSelectItems = (options: { value: any, label: any, key: any }[]) => {
  console.log('options', options);
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

  const onSubmit = (values: any) => {
    console.log("🚀 ~ onSubmit ~ values:", values)
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
        }}
        render={({ field: { onChange, value } }) => (
          <Input
            maxLength={20}
            value={value}
            onChangeText={onChange}
            placeholder="请输入名称"
          />
        )}
        style={{ marginBottom: 10 }}
      />
      <FormItem
        name="category"
        label="类别"
        control={control}
        errors={errors.category}
        render={({ field: { onChange, value } }) => (
          <Input
            maxLength={20}
            value={value}
            onChangeText={onChange}
            placeholder="请输入类别"
          />
        )}
        style={{ marginBottom: 10 }}
      />

      <FormItem
        label="生产日期"
        control={control}
        name="productData"
        rules={{
          required: '生产日期'
        }}
        errors={errors.productData}
        render={({ field: { onChange, value } }) => (
          <>
            <Datepicker date={value} onSelect={nextDate => onChange(nextDate)} />
          </>
        )}
        style={{ marginBottom: 10 }}
      />

      <Text style={styles.formItemTitle}>
        保质期
      </Text>
      <View style={{ flexDirection: 'row', }}>
        <FormItem
          required
          control={control}
          name="shelfLife.years"
          errors={errors.shelfLife?.years}
          render={({ field: { onChange, value } }) => (
            <Select
              onSelect={(selection: any) => { onChange(YEARS_OPTIONS[selection.row].value) }}
              placeholder="请选择"
              value={value}
              key="years"
              accessoryRight={() => <Text>年</Text>}
            >{renderSelectItems(YEARS_OPTIONS)}</Select>
          )}
          style={{ marginBottom: 10, flex: 1 }}
        />
        <FormItem
          required
          control={control}
          name="shelfLife.months"
          errors={errors.shelfLife?.months}
          render={({ field: { onChange, value } }) => (
            <Select
              onSelect={(selection: any) => { onChange(MONTHS_OPTIONS[selection.row].value) }}
              placeholder="请选择"
              value={value}
              accessoryRight={() => <Text>月</Text>}
            >{renderSelectItems(MONTHS_OPTIONS)}</Select>
          )}
          style={{ marginBottom: 10, flex: 1 }}
        />
        <FormItem
          required
          control={control}
          name="shelfLife.days"
          errors={errors.shelfLife?.days}
          render={({ field: { onChange, value } }) => (
            <Select
              onSelect={(selection: any) => { onChange(DAYS_OPTIONS[selection.row].value) }} value={value}
              placeholder="请选择"
              accessoryRight={() => <Text>天</Text>}
            >{renderSelectItems(DAYS_OPTIONS)}</Select>
          )}
          style={{ marginBottom: 10, flex: 1 }}
        />
      </View>

      <FormItem
        required
        label="过期时间"
        control={control}
        name="expirationDate"
        rules={{ required: '过期时间' }}
        errors={errors.expirationDate}
        render={({ field: { onChange, value } }) => (
          <Datepicker date={value} onSelect={nextDate => onChange(nextDate)} />
        )}
        style={{ marginBottom: 10 }}
      />

      <FormItem
        required
        name="imageSrc"
        label="图片"
        control={control}
        errors={errors.imageSrc}
        render={({ field: { onChange, value } }) => (
          <View style={{ height: 200, flexDirection: 'row' }}>
            <ImageSelector src={value} setSrc={onChange} type='both' />
          </View>
        )}
        style={{ marginBottom: 20 }}
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
  },
  formItemTitle: {
    fontSize: 20,
    marginBottom: 5,
    fontWeight: '700',
  }
})

