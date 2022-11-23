interface TreeList {
  id: string,
  content: string
  pid: string,
  children?: TreeList[]
}

interface FlatList {
  id: string,
  content: string,
  pid: string,
}