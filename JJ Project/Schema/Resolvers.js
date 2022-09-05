const fs=require('fs')
const path=require('path')

class FileResults{
    constructor(path){
        this.FullPath=path;
        this.name="";
        this.size=0;
        this.exten="";
        this.type="";
        this.created="";
        this.access="";
        this.children=[""];
    }
}

//let myPath="" ;
function GetFileInfo(pathString){
    try {
        const root= new FileResults(pathString);
        //const LIMIT =100000;
        const BYTES_PER_MB=1024 ** 2;
         let childrenF=[];
        if (fs.statSync(pathString).isDirectory()) {
           let i=0;
            let children=fs.readdirSync(pathString);
            let childrenD =[];
            for(let child of children){
               // if (i<100000) {
                    i+=1;
                    childPath=child;
                   //children[i]=pathString+'/'+child;
                    childrenD.push(pathString+'/'+child);
               // }
            }
           // root.name=path.parse(path).base;
          // root.name="name of file";
            root.name= pathString
            root.size=(fs.statSync(pathString).size/BYTES_PER_MB).toFixed(2);
            root.exten="N/A";
            root.type="Directory";
            root.created=fs.statSync(pathString).birthtime.toString();
            root.access=fs.accessSync(pathString);
           // root.children=children;
           root.children=childrenD ;
        }
        else{
           // root.name=path.parse(path).name;
          // root.name="name of file";
          root.name=path.parse(pathString).base;
            root.size=((fs.statSync(pathString).size /BYTES_PER_MB).toFixed(2));
           // root.exten=path.extname(path);
          // root.exten ="ext";
          root.exten=path.extname(pathString);
            root.type='File';
            root.created=fs.statSync(pathString).birthtime.toString();
            root.access=fs.accessSync(pathString);
            root.children=childrenF;
        }
        return root;
    } catch (error) {
       console.log(error) 
    }
}
//root
const resolvers={
    Query:{
        ListDirectory:(root,{pathString})=>{
            return GetFileInfo(pathString);
        }
    }
}

module.exports={resolvers};