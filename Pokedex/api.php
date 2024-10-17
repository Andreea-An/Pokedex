<?php
    echo file_get_contents("https://api.deezer.com/search?q=".str_replace(" ", "%20",$_GET["q"]));
?>