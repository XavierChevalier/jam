import ProvidesCallback = jest.ProvidesCallback

type Test = { description: string; fn: ProvidesCallback }

export class TestsGeneratorContainer {
  private tests: Test[] = []

  addTest(description: string, fn: ProvidesCallback) {
    this.tests.push({ description, fn })
  }

  generateTests(describeName?: string) {
    if (describeName) {
      describe(describeName, () => this.generateAllTest())
      return
    }

    this.generateAllTest()
  }

  private generateAllTest() {
    this.tests.forEach((testItem) => test(testItem.description, testItem.fn))
  }
}
