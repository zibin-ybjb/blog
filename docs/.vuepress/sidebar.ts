import type {
  SidebarConfig,
  SidebarConfigArray,
} from "@vuepress/theme-default/lib/shared";
import {readdirSync, lstatSync} from 'fs';

type Entries<T> = {
  [K in keyof T]: [K, T[K]];
}[keyof T][];

function entries<T>(obj: T): Entries<T> {
  return Object.entries(obj) as any;
}

function readSider(){
    const files = readdirSync('./docs');
    const res = {}
    for (const item of files) {
        if(lstatSync(`./docs/${item}`).isDirectory() && item !== '.vuepress'){
            res[item] = readdirSync(`./docs/${item}`)
        }
    }
    return res;
}
const sidebarOrigin = readSider()
// {
//   计算机网络: ["HTTP", "TCPIP"],
//   JavaScript: [
//     "let,const,var的区别",
//     // 'new操作符'
//   ],
// };
function parseSidebar(sidebar): SidebarConfigArray {
   let aaa =  readSider();
   console.log(aaa);
   
  let res = [];
  for (const [key, value] of entries(sidebar)) {
    res.push({
      text: key,
      collapsible: true,
      children: value.map((item) => {
        return `/${key}/${item}`;
      }),
    });
  }



  
  return res;
}

const sidebar: SidebarConfig = {
  "/": parseSidebar(sidebarOrigin),
};

export default sidebar;
