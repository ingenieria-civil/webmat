$(document).ready(function(){  
 $('.cal2').hide();
 CalcularVolumen();
 calcularcimiento();
 calcularpintura();

 $("#optionsRadios1").click(function(evento){
    $('.cal1').show(); 
    $('.cal2').hide();
    CalcularVolumen();  
});

 $("#optionsRadios2").click(function(evento){ 
    $('.cal2').show(); 
    $('.cal1').hide();
    CalcularVolumen();
});


 $(".calcular1").click(function(){
     CalcularVolumen();
 });

 $(".calcular2").click(function(){
     CalcularVolumen();
 });


  $(".calcular3").click(function(event){
     event.preventDefault();
     calcularcimiento();
 });


  $("#pint").click(function(event){
     event.preventDefault();
     calcularpintura();
 });





  function calcularcimiento(){
    var cant = document.getElementById("cimientoaislado_c").value;
     var h1 = document.getElementById("cimientoaislado_h1").value;
     var h2 = document.getElementById("cimientoaislado_h2").value;
     var b1 = document.getElementById("cimientoaislado_b1").value;
     var f1 = document.getElementById("cimientoaislado_f1").value;
     var a1 = document.getElementById("cimientoaislado_a1").value;

     var vol = redondear(h1/100 * b1/100 * b1/100,2);
     var vol_pedes = redondear( (h1-h2)/100 * a1/100 * a1/100 ,2) ;
     var vol_base = redondear( b1/100 * b1/100 * h2/100 ,2) ;
     var volthorm = redondear(vol_pedes  + vol_base,2);

     var volrelleno = redondear(vol - volthorm,2);

     var cerco = a1/100*4;
     var cant_cerco = (h1 - h2)/100 / 0.25 + 1;
     var totalcerco = redondear(cerco * cant_cerco,2);

     var acerop =  redondear( ( h1/100 + b1/200 ) *f1 ,2) ;

     var acero_plato = redondear(  b1 / 23 * b1/100 * 2  + 1 , 2);


     document.getElementById("cimiento_r1").value = redondear(vol * cant,2);
     document.getElementById("cimiento_r2").value =  redondear(volthorm * cant,2);
     document.getElementById("cimiento_r3").value =  redondear(volrelleno * cant,2);

     document.getElementById("cimiento_r4").value =  redondear(totalcerco * cant,2);
     document.getElementById("cimiento_r5").value =  redondear(acerop * cant,2);
     document.getElementById("cimiento_r6").value =  redondear(acero_plato * cant,2);

     document.getElementById("cimiento_r7").value =  redondear( volthorm * cant * 9.82,2);
     document.getElementById("cimiento_r8").value =  redondear( volthorm * cant * 0.53,2);
     document.getElementById("cimiento_r9").value =  redondear( volthorm * cant * 0.76,2);

  }


 function DameVolumen(){
    if( $('#optionsRadios1').is(':checked') ) 
    {
        return document.getElementById("volumen").value;
    }

    if( $('#optionsRadios2').is(':checked') ) 
    {
       var a = document.getElementById("hormigona").value;
       var b = document.getElementById("hormigonb").value;
       var h = document.getElementById("hormigonh").value;

       var vol  = a * b * h;
       return vol;
   }
}

function CalcularVolumen(){

        // PP250

        var volumen = DameVolumen();       
        $("#pp25010d").text("1x2.81x3.78");
        $("#pp25010c").text( redondear(6.34 * volumen,2) );
        $("#pp25010a").text( redondear(0.59 * volumen,2) );
        $("#pp25010p").text( redondear(0.81 * volumen,2) );

        $("#pp25015d").text("1x2.43x3.46");
        $("#pp25015c").text( redondear(7.08 * volumen,2) );
        $("#pp25015a").text( redondear(0.57 * volumen,2) );
        $("#pp25015p").text( redondear(0.82 * volumen,2) );

        $("#pp25020d").text("1x1.59x2.27");
        $("#pp25020c").text( redondear(9.82 * volumen,2) );
        $("#pp25020a").text( redondear(0.53 * volumen,2) );
        $("#pp25020p").text( redondear(0.76 * volumen,2) );

        // PP350

        $("#pp35010d").text("1x3.04x4.0");
        $("#pp35010c").text( redondear(6.25 * volumen,2) );
        $("#pp35010a").text( redondear(0.64 * volumen,2) );
        $("#pp35010p").text( redondear(0.84 * volumen,2) );

        $("#pp35015d").text("1x2.63x3.53");
        $("#pp35015c").text( redondear(7.08 * volumen,2) );
        $("#pp35015a").text( redondear(0.63 * volumen,2) );
        $("#pp35015p").text( redondear(0.84 * volumen,2) );

        $("#pp35020d").text("1x1.85x2.52");
        $("#pp35020c").text( redondear(9.25 * volumen,2) );
        $("#pp35020a").text( redondear(0.57 * volumen,2) );
        $("#pp35020p").text( redondear(0.79 * volumen,2) );

        $("#pp35025d").text("1x1.51x2.02");
        $("#pp35025c").text( redondear(11.33 * volumen,2) );
        $("#pp35025a").text( redondear(0.56 * volumen,2) );
        $("#pp35025p").text( redondear(0.78 * volumen,2) );

        document.getElementById("hormigonv").value = volumen;


    }
});


function redondear(cantidad, decimales) 
{
    var cantidad = parseFloat(cantidad);
    var decimales = parseFloat(decimales);
    decimales = (!decimales ? 2 : decimales);
    return Math.round(cantidad * Math.pow(10, decimales)) / Math.pow(10, decimales);
}


function calcularpintura(){
     var a = document.getElementById("pintura_a").value;
     var b = document.getElementById("pintura_b").value;
     $("#pintura001").text(redondear(a*b*0.1706256,4));
     $("#pintura002").text(redondear(a*b*0.613836,4));
     $("#pintura003").text(redondear(a*b*0.1019592,4));
     $("#pintura004").text(redondear(a*b*0.1706256,4));
     $("#pintura005").text(redondear(a*b*0.801108,4));
     $("#pintura006").text(redondear(a*b*0.447372,4));
     $("#pintura007").text(redondear(a*b*0.020808,4));
     $("#pintura008").text(redondear(a*b*0.0228888,4));
}


