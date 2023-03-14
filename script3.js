function labels(tagname,attrname,attrvalue,content)
{
    var ele=document.createElement(tagname);
    ele.SetAttribute(attrname,attrvalue);
    ele.InnerHtml=content;
    return ele;
}
function linebreak(tagname)
{
    var br=document.createElement(tagname);
    return br;
}
function input(tagname,attrname,attrvalue,attrname1,attrvalue1,attrname2,attrvalue2)
{
    var ele1=document.createElement(tagname);
    ele1.SetAttribute(attrname,attrvalue);
    ele1.SetAttribute(attrname1,attrvalue1);
    ele1.SetAttribute(attrname2,attrvalue2);
    return ele1;
}

var fnmae=labels("label","for","name","Firstname");
var br=linebreak(br);
var input=input("input","type","text","name","fname","id","name");
var br1=linebreak(br);
var mname=labels("label","for","name1","Middlename");
var br2=linebreak(br);
var input1=input("input","type","text","name","mname","id","name1");
var br3=linebreak(br);
var lname=labels("label","for","name2","Lastname");
var br4=linebreak(br);
var input2=input("input","type","text","name","lname","id","name2");
var br5=linebreak(br);
var email=labels("label","for","main","Email");
var br6=linebreak(br);
var input3=input("input","type","text","name","email","id","main");
var br7=linebreak(br);
var pass=labels("label","for","pass","Password");
var br8=linebreak(br);
var input4=input("input","type","text","name","pass","id","pass");
var br9=linebreak(br);

document.body.append(fname,br,input,br1,mname,br2,input1,br3,lname,br4,input2,br5,email,br6,input3,br7,pass,br8,input4,br9);