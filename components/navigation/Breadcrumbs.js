import { useRouter } from "next/router";

const Breadcrumbs = ({att}) => {
    const router = useRouter();
    let routes= router.route.split('/');
    let str='';
    let hlinks=[];
    let isHome= false;
    const { slug } = router.query
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
      if (index == 0) {myobj.loc = 'Home';} 
      else if(routes[index] == undefined) {
        // do nothing
      }
      else {
        myobj.loc = routes[index].replace(/-/g, ' ');
      }
      if (index+1 == hlinks.length) {
        
        if(routes[index-1] == "category") {
          // do nothing
        } else {
          myobj.loc = att.title;
        }
      } 
      else if(routes[index] == 'category') {
        myobj.loc = "category: "+slug
        
      } else {
        myobj.path = obj;
      }
      return myobj;
    });
    if( output[0].loc == output[1].loc) {isHome = true;}
    
    if (routes[2] == 'category') {
      output.pop()
    }
    // if( output[2].loc == output[1].loc) {isHome = true;}
    return (
        <>
        {isHome ? "" : 
            <div className="breadcrumb-wrapper">
                {output.map((bread,i)=>(
                <>
                {i+1 == output.length 
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