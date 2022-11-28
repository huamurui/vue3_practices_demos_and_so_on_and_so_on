import { random } from 'lodash';
import qzone from './qzone.json';
const my_list = qzone.data.photoList.map((item: any) => {
  return {
    id: Math.random(),
    url: item.url,
    width: item.width,
    height: item.height,
    time: item.uploadTime,
  }
})
console.log(my_list)