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

    function sin()
    {
        screen.value=Math.sin(screen.value);
    }
    function cos()
    {
        screen.value=Math.cos(screen.value);
    }

    function tan()
    {
        screen.value=Math.tan(screen.value);
    }

    function pow()
    {
        screen.value=Math.pow(screen.value,2);
    }

    function sqrt()
    {
        screen.value=Math.sqrt(screen.value,2);
    }

    function log()
    {
        screen.value=Math.log(screen.value);
    }

    function pi()
    {
        screen.value= 3.14159265359;
    }

    function e()
    {
        screen.value=2.71828182846;
    }
    function fact()
    {
        var i, num, f;
        f=1
        num=screen.value;
        for(i=1; i<=num; i++)
        {
            f=f*i;
        }
        screen.value=f;
    }
    function hex2bin()
    {
        var num,out;
        out="";
        num=screen.value;
        for(var c of num) {
            switch(c) {
                case '0': out += "0000"; break;
                case '1': out += "0001"; break;
                case '2': out += "0010"; break;
                case '3': out += "0011"; break;
                case '4': out += "0100"; break;
                case '5': out += "0101"; break;
                case '6': out += "0110"; break;
                case '7': out += "0111"; break;
                case '8': out += "1000"; break;
                case '9': out += "1001"; break;
                case 'A':
                case 'a': out += "1010"; break;
                case 'B':
                case 'b': out += "1011"; break;
                case 'C':
                case 'c': out += "1100"; break;
                case 'D':
                case 'd': out += "1101"; break;
                case 'E':
                case 'e': out += "1110"; break;
                case 'F':
                case 'f': out += "1111"; break;
                default: out+="";
            }
        }
        screen.value=out;
    }
    function bin2hex()
    {
        var digits;
        digits=screen.value;
        var len=digits.length;

        var extrabits=len%4;
        if(extrabits>0)
        {
            var zeroes="";
            for(var i=0;i<4-extrabits;i++)
            {
                zeroes="0"+zeroes;
                len++;
            }
            digits=zeroes+digits;
        }
        var hexDigits = [
            ["0000","0"],
            ["0001","1"],
            ["0010","2"],
            ["0011","3"],
            ["0100","4"],
            ["0101","5"],
            ["0110","6"],
            ["0111","7"],
            ["1000","8"],
            ["1001","9"],
            ["1010","A"],
            ["1011","B"],
            ["1100","C"],
            ["1101","D"],
            ["1110","E"],
            ["1111","F"]];
            
            var outHex = "";
            var temp="";
            for(var i = 0; i <len; i+=4)
            {
               temp=digits.substring(i,i+4);
               for(var j = 0; j < 16; j++)
               {
                  if(temp == hexDigits[j][0])
                  {
                      outHex += hexDigits[j][1];
                  }
               }
            }
            screen.value=outHex;
    }
    function backspc()
    {
        screen.value=screen.value.substr(0,screen.value.length-1);
    }