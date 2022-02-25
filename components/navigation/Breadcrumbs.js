import { useRouter } from "next/router";

const Breadcrumbs = ({att}) => {
    const router = useRouter();
    let routes= router.route.split('/');
    let str='';
    let hlinks=[];
    let isHome= false;
    routes.forEach((i,index,arr)=>{
        if(i.charAt(0)=='[')
        {
            i=i.slice(1);
            i=i.slice(0, i.length - 1);
            arr[index]=router.query[i];
        }
        str=str+arr[index]+'/';
        hlinks.push(str);
    });
    var output = hlinks.map(function(obj,index){
      let myobj = {};
      if (index == 0) {myobj.loc = 'Home';} else {
        myobj.loc = routes[index];
      }
      if (index+1 == hlinks.length) {myobj.loc = att.title;} else {
        myobj.path = obj;
      }
      return myobj;
    });
    if( output[0].loc == output[1].loc) {isHome = true;}
    return (
        <>
        {isHome ? "" : 
            <div className="breadcrumb-wrapper">
                {output.map((bread,i)=>(
                <>
                {i+1 == hlinks.length 
                ? 
                <span key={i} className="breadcrumb-label">{bread.loc}</span> 
                : 
                <><a key={i} href={bread.path} className="breadcrumb-label when-link">{bread.loc}</a> <span className="delim">/</span></>
                }
                </>
                ))}
            </div>
        }
        </>
    )
} 

export default Breadcrumbs