import { Form as AntdForm } from 'antd'
import { Children, cloneElement, isValidElement } from 'react'
import { useController } from 'react-hook-form'

// TODO: Support `onBlur` `ref` `reset`
export const FormItem = ({
  children,
  control,
  name,
  disabled,
  help,
  valuePropName,
  ...props
}) => {
  const { field, fieldState } = useController({ name, control, disabled })

  return (
    <AntdForm.Item
      {...props}
      name={name}
      initialValue={field.value}
      validateStatus={fieldState.invalid ? 'error' : undefined}
      help={fieldState.error?.message ?? help}
    >
      {Children.map(
        children,
        (child) =>
          isValidElement(child) &&
          cloneElement(child, {
            ...field,
            ...(valuePropName && {
              [valuePropName]: field.value,
            }),
          }),
      )}
    </AntdForm.Item>
  )
}