function age(){
     var d1 = document.getElementById('Date').value;
     var m1 = document.getElementById('Month').value;
     var y1 = document.getElementById('year').value;

     var date = new date();
     var d2= date.getdate();
     var m2 = 1+ date.getMonth();
     var y2 = date.getFullYear();

     var month = [31, 28, 31, 30, 31, 30,31,  31, 30,31,30,31 ]


     if (d1> d2){
          d2 =d2+month[m2-1];
          m2 =m2 - 1;
     }
     if(m2> m3){
          m2 = m2 +12;
          y2 = y2-1;
     }
     var d = d2 -d1;

     var m= m2 - m1;

     var y= y2 - y1;

document.getElementById('age').innerHTML = 'Your age is '+y+'years and'+m+ 'months and' +d+'days';
}