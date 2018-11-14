/*
This script handles the amount users will be charged on paypal
*/
// calculate price to charge for paypal

$('.classpick').change( function() {
    var $numclasses = $('.dropdownnum').val();

    var $multifamily = $( "input[type=radio][name=multifamily]:checked" ).val();

    var $specialclasses1 = $( "input[type=checkbox][name=spec1]:checked" ).val();
    var $specialclasses2 = $( "input[type=checkbox][name=spec2]:checked" ).val();
    var $specialclasses3 = $( "input[type=checkbox][name=spec3]:checked" ).val();
    var $specialclasses4 = $( "input[type=checkbox][name=spec4]:checked" ).val();
    var $specialclasses5 = $( "input[type=checkbox][name=spec5]:checked" ).val();
    var $specialclasses6 = $( "input[type=checkbox][name=spec6]:checked" ).val();
    var $specialclasses7 = $( "input[type=checkbox][name=spec7]:checked" ).val();

    var $finalval = 0;

    switch ($numclasses)
    {
      case "1": $finalval = 55; break;
      case "2": $finalval = 80; break;
      case "3": $finalval = 110; break;
      case "4": $finalval = 140; break;
      case "5": $finalval = 175; break;
    }

    if ($specialclasses1 == "1") {$finalval += 10;}
    if ($specialclasses2 == "1") {$finalval += 10;}
    if ($specialclasses3 == "1") {$finalval += 10;}
    if ($specialclasses4 == "1") {$finalval += 10;}
    if ($specialclasses5 == "1") {$finalval += 20;}
    if ($specialclasses6 == "1") {$finalval += 15;}
    if ($specialclasses7 == "1") {$finalval += 30;}

    if ($multifamily == 1){$finalval *= 0.85;}

    $finalval = $finalval + $finalval*0.029 + 0.30;
    $finalval = $finalval.toFixed(2);

    var $paypalreplacer = $('.paypalvalue');
    var $visibletotal = $('.runningtotal');

    $paypalreplacer.val($finalval);
//    $paypalreplacer.html("");
//    $paypalreplacer.append("<input type='hidden' name='amount' value='" + $finalval + "'>");

    $visibletotal.html("");
    $visibletotal.append("<p>Your monthly fee: $" + $finalval + " / mo</p>");

});
