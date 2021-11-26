import AppIcon from './AppIcon.vue'
import { storiesOf } from '@storybook/vue3'
import * as AllMdiExtra from '@/assets/images/icons/MdiExtra'
import { MdiExtra } from '@/assets/images/icons/MdiExtra'
import { omit } from 'lodash-es'
import { mdiAlert } from '@mdi/js'

const stories = storiesOf('Components/AppIcon', module).addParameters({
  layout: 'centered',
})

const icons: Record<string, MdiExtra> = {
  mdiAlert,
  ...omit(AllMdiExtra, ['MdiExtra']),
}
Object.keys(icons).forEach((iconName) => {
  stories.add(iconName, () => ({
    components: { AppIcon },
    setup() {
      return { args: { path: icons[iconName] } }
    },
    template: '<AppIcon v-bind="args" />',
  }))
})
