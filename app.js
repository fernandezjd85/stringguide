$( document ).ready(function() {
            
    $('#select-guitar').on('change', function() {
        switch(this.value){
            case 'G1':
                 $('#tunning').html("E Standard: E-A-D-G-B-e");
                 $('#description').html(
                     '10-46 <small>(Nomal Tension)</small><br>9-42 <small>(Loose Fell)</small>'
                 );
                $('#front-image').attr('src','img/ernie-ball-10-46.jpg');
                $('#buy-link').attr('href','https://www.amazon.com/Ernie-Ball-Regular-Slinky-Nickel/dp/B00CAV0TRQ/');
            break;
            case 'G2':
                 $('#tunning').html("Drop D: D-A-D-G-B-e");
                 $('#description').html(
                     '10-52 <small>(Light Top Heavy Bottom)</small>'
                 );
                $('#front-image').attr('src','img/ernie-ball-10-52.jpg');
                $('#buy-link').attr('href','https://www.amazon.com/Ernie-Ball-Skinny-Bottom-Nickel/dp/B0002PBS68/');
            break;
            case 'G3':
                 $('#tunning').html("Eb Standard: Eb-Ab-Db-Gb-Bb-eb");
                 $('#description').html(
                     '10-52 <small>(Tighter Feel On Low Strings)</small>'
                 );
                $('#front-image').attr('src','img/ernie-ball-10-52.jpg');
                $('#buy-link').attr('href','https://www.amazon.com/Ernie-Ball-Skinny-Bottom-Nickel/dp/B0002PBS68/');
            break;
            case 'G4':
                 $('#tunning').html("Drop C#: C#-Ab-Db-Gb-Bb-eb");
                 $('#description').html(
                     '11-48 +52<small>(Normal Tension)</small>'
                 );
                $('#front-image').attr('src','img/ernie-ball-11-48.jpg');
                $('#buy-link').attr('href','https://www.amazon.com/Ernie-Ball-Power-Slinky-Nickel/dp/B001NI4M1Q/');
            break;
            case 'G5':
                 $('#tunning').html("D Standard: D-G-C-F-A-D");
                 $('#description').html(
                     '11-54<small>(Higher Tension)</small>'
                 );
                 $('#front-image').attr('src','img/ernie-ball-11-54.jpg');
                $('#buy-link').attr('href','https://www.amazon.com/Ernie-Ball-Beefy-Slinky-Nickel/dp/B0002E1J5E/');
            break;
            case 'G6':
                 $('#tunning').html("C Standard: C-F-A#-D#-G-C");
                 $('#description').html(
                     '12-56<small>(Higher Tension)</small><br>11-54 <small>(Loose Fell)</small>'
                 );
                 $('#front-image').attr('src','img/ernie-ball-12-56.jpg');
                 $('#buy-link').attr('href','https://www.amazon.com/Ernie-Ball-Slinky-Nickel-Wound/dp/B0002E1J3Q/');
            break;
            case 'G7':
                 $('#tunning').html("Drop C: C-G-C-F-A-D");
                 $('#description').html(
                     '11-54 +56<small>(Normal Tension)</small>'
                 );
                 $('#front-image').attr('src','img/ernie-ball-11-54.jpg');
                 $('#buy-link').attr('href','https://www.amazon.com/Ernie-Ball-Beefy-Slinky-Nickel/dp/B0002E1J5E/');
            break;
            case 'G8':
                 $('#tunning').html("Drop B: B-F#-B-E-G#-C#");
                 $('#description').html(
                     '11, 15, 20, 36, 48, 60'
                 );
                 $('#front-image').attr('src','img/ernie-ball-11.png');
                 $('#buy-link').attr('href','#');
            break;
        }
    });
    
});