
import { contextBridge } from "electron/renderer";

if(!process.contextId){
  throw new Error('context Isolation')
}

try {
  contextBridge.exposeInMainWorld('context',{
    // todo
  })
} catch (error) {
  console.log(error)
}