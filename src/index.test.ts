import ArbreTree, { TreeNode } from "./index";

const testTreeData: TreeNode[] = [
    {id: 1, pid: -1},
    {id: 2, pid: 1}
]

const testTree = ArbreTree.from(testTreeData)

test('test filter', () => {
    const result = testTree.filter(item => item.id > 0)
    const newTree = new ArbreTree(result)
    expect(newTree.flat().length).toBe(2)
})

test('test map', () => {
    const result = testTree.map(item => ({...item, foo: Math.random()}))
    expect(typeof result[0].foo).toBe('number')
})

test('test find', () => {
    const result = testTree.find(item => item.id == 1)
    expect(result?.id).toBe(1)
})

test('test push', () => {
    testTree.push({id: 3, pid: 1})
    expect(testTree.data[0].children?.length).toBe(2)
})