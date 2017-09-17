var countryOrigin = "";
var countryShow = "";
var searchTerm = "";
var countryPageID = "";
var flagImg = "";
jQuery(($) => { // document on ready

    $(document).on("click", "#doSearch", function () {
        console.log("search button was clicked");
        event.preventDefault();

        // empty out the div where the results are displayed
        $("#dataShow").empty();

        // grab the name from the input box
        var searchTerm = $("#searchInput").val().trim();

        // send the request to BehindTheName using ajax
        $.ajax({
            type: "GET",
            url: "https://www.behindthename.com/api/lookup.php?name=" + searchTerm + "&key=jo493898",
            dataType: "xml",
            success: function (xml) {

                // grab the results from the XML data returned from BehindTheName
                var originInfo = $(xml).find('usage').text();
                console.log("origin info", originInfo);
                // if no origin was returned, mark as unknown
                if (originInfo == "") {
                    countryShow = "Unknown";
                } else {
                    // find the first origin returned in the last
                    $(xml).find('usage_full').each(function (i) {
                        if (i > 0) {
                            return false;
                        }
                        // assign the returned origin to variable countryOrigin
                        var countryOrigin = $(this).text();
                        console.log("origin", countryOrigin);

                        // change variable to country name instead of origin, ie: from Spanish to Spain
                        if (countryOrigin == "American") {
                            countryShow = "USA";
                            countryPageID = "3434750";
                            flagImg = "us.png";
                        } else if (countryOrigin == "Chinese") {
                            countryShow = "China";
                            countryPageID = "5405";
                            flagImg = "cn.png";
                        } else if (countryOrigin == "Czech") {
                            countryShow = "Czech Republic";
                            countryPageID = "5321";
                            flagImg = "cz.png";
                        } else if (countryOrigin == "Danish") {
                            countryShow = "Denmark";
                            countryPageID = "76972";
                            flagImg = "dk.png";
                        } else if (countryOrigin == "Dutch") {
                            countryShow = "Netherlands";
                            countryPageID = "21148";
                            flagImg = "nl.png";
                        } else if (countryOrigin == "English") {
                            countryShow = "United Kingdom";
                            countryPageID = "31717";
                            flagImg = "gb.png";
                        } else if (countryOrigin == "Finnish") {
                            countryShow = "Finland";
                            countryPageID = "10577";
                            flagImg = "fi.png";
                        } else if (countryOrigin == "French") {
                            countryShow = "France";
                            countryPageID = "5843419";
                            flagImg = "fr.png";
                        } else if (countryOrigin == "German") {
                            countryShow = "Germany";
                            countryPageID = "11867";
                            flagImg = "de.png";
                        } else if (countryOrigin == "Irish") {
                            countryShow = "Ireland";
                            countryPageID = "147575";
                            flagImg = "ie.png";
                        } else if (countryOrigin == "Italian") {
                            countryShow = "Italy";
                            countryPageID = "14532";
                            flagImg = "it.png";
                        } else if (countryOrigin == "Japanese") {
                            countryShow = "Japan";
                            countryPageID = "15573";
                            flagImg = "jp.png";
                        } else if (countryOrigin == "Norwegian") {
                            countryShow = "Norway";
                            countryPageID = "21241";
                            flagImg = "no.png";
                        } else if (countryOrigin == "Polish") {
                            countryShow = "Poland";
                            countryPageID = "22936";
                            flagImg = "pl.png";
                        } else if (countryOrigin == "Portuguese") {
                            countryShow = "Portugal";
                            countryPageID = "23033";
                            flagImg = "pt.png";
                        } else if (countryOrigin == "Russian") {
                            countryShow = "Russia";
                            countryPageID = "25391";
                            flagImg = "ru.png";
                        } else if (countryOrigin == "Slovak") {
                            countryShow = "Slovakia";
                            countryPageID = "26830";
                            flagImg = "sk.png";
                        } else if (countryOrigin == "Spanish") {
                            countryShow = "Spain";
                            countryPageID = "26667";
                            flagImg = "es.png";
                        } else if (countryOrigin == "Swedish") {
                            countryShow = "Sweden";
                            countryPageID = "5058739";
                            flagImg = "se.png";
                        } else if (countryOrigin == "Ukrainian") {
                            countryShow = "Ukraine";
                            countryPageID = "31750";
                            flagImg = "ua.png";
                        } else { // if not in this list, mark as unknown
                            countryShow = "Unknown";
                        }
                    });
                }
                // show the country name in the dataShow div on index.html
                $("#dataShow").append('<h1>' + countryShow + '</h1>');
                // create buttons for MAP, History, and Actors
                $("#dataShow").append('<a href="map.html?data-country='+countryShow+'"><button class="maps">MAP</button></a>');    
                // $("#dataShow").append('<button class="btn maps" data-flag="'+flagImg+'" data-country="'+countryShow+'">MAP</button>');
                $("#dataShow").append('<button class="btn history" data-flag="'+flagImg+'" data-pageID="'+countryPageID+'" data-country="'+countryShow+'">HISTORY</button>');
                $("#dataShow").append('<button class="btn actors" data-name="'+searchTerm+'" data-country="'+countryShow+'">ACTORS</button>');

            }
        });
    });
});