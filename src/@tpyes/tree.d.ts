//XXX.d.ts会自动引入哎... 
//.d是全局作用的意思

type TreeList ={
  id:string,
  content:string
  pid:string,
  children?:TreeList[]
}

type FlatList = {
  id:string,
  content:string,
  pid:string,
}