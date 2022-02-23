var screen=document.querySelector('#screen');
    var btn=document.querySelectorAll('.btn');
/*============ For getting the value of btn, Here we are using the for loop ============*/
    for(item of btn)
    {
        item.addEventListener('click',(e)=>{
            btntext=e.target.innerText;
            screen.value+=btntext;
        });
    }
     function calc()
    {
        let out,str,num,k;
        var count=0;
        num='';
        temp='';
        str=screen.value;
        for(var i=0;i<str.length;i+=1){
            if (( str[i]>='0' && str[i] <='9') || (str[i] >='A' && str[i] <='F') || (str[i] >='a' && str[i]<='f')) {
                temp=temp.concat(str[i]);
                count=0;
            } else{
                if(!count){
                temp=temp.toLowerCase();
                k=parseInt(temp, 16).toString();
                num=num.concat(k);
                temp='';
                }
                num=num.concat(str[i]);
                count++;
            }
        }
            if(temp)
            {
                temp=temp.toLowerCase();
                k=parseInt(temp, 16).toString();
                num=num.concat(k);
                temp='';
            }
            out=eval(num);
            screen.value=out.toString(16).toUpperCase();
    
    }

    function backspc()
    {
        screen.value=screen.value.substr(0,screen.value.length-1);
    }
