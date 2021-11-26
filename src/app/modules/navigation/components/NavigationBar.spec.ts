import { generateStorybookSnapshotTests } from '@/tests/tools/StorybookSnapshot'
import { Default } from '@/app/modules/navigation/components/NavigationBar.stories'
import { ComponentTestsGenerator } from '@/tests/tests-generators/ComponentTestsGenerator'
import NavigationBar from './NavigationBar.vue'

describe('NavigationBar', () => {
  generateStorybookSnapshotTests({ Default })

  const componentTestsGenerator = new ComponentTestsGenerator(NavigationBar)
  componentTestsGenerator.itShouldBeDefined()
})
