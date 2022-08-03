
   // javascript code for about me section for mobile screen sizes
    var acc = document.getElementsByClassName("tablinks");
    var con = document.getElementsByClassName("content");

    function Event(i) {
                var i;
    if (con[i].style.display === "block") {
        con[i].style.display = "none";
                } else {
        con[i].style.display = "block";
                }
            }

    // javascript code for about me section for desktop screen sizes

    function Event_Desktop(skills)
    {
    var con_desk = document.getElementsByClassName("content_deskt");
        var i;

     // Hide all the tabs
    for (i = 0; i < con_desk.length; i++) {
        con_desk[i].style.display = "none";
        }

    // Show the current tab
    document.getElementById(skills).style.display = "block";

            }