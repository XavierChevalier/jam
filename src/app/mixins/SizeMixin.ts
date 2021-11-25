import { defineComponent, PropType } from 'vue'

export function SizeMixin<T extends Record<string, string>>(
  availableSizesClass: T
) {
  type AvailableSizes = keyof typeof availableSizesClass

  return defineComponent({
    props: {
      size: {
        type: String as PropType<AvailableSizes>,
        default: 'base',
        validator: (value: AvailableSizes) =>
          Object.keys(availableSizesClass).includes(value as string),
      },
    },
    computed: {
      sizeClass() {
        return availableSizesClass[this.size as string]
      },
    },
  })
}
