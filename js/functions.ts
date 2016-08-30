var appId = "67e63e4e";
var appKey = "7a4fefa0bfa8b4cf8254e7cad6e808dc"

// Submit button
function submitButton(searchValue) {
    //document.getElementById("label").innerHTML = searchValue;
    var phrase = searchValue;
    var brand_id = "";
    var results = "0%3A20";
    var cal_min = 0;
    var cal_max = 50000;
    var fields = "*";
    var url = "https://api.nutritionix.com/v1_1/search/" + phrase + "?" + "results=" + results + "&cal_min=" + cal_min + "&cal_max=" + cal_max + "&fields=" + fields + "&appId=" + appId + "&appKey=" + appKey;
    $.ajax({
        url: url,
        type: "GET",
        success: function(result){
            // alert(url)
            // document.getElementById("label").innerHTML = result.hits[0].fields.brand_name;
            // alert(results.hits[0].fields.brand_name + results.hits[0].fields.item_name )
            // $("#itemTable tbody").append('<tr> <td>' + result.hits[0].fields.brand_name + '</td> <td>' + result.hits[0].fields.item_name + '</td> </tr>')
            for (var i = 0; i < result.total_hits; i ++) {
                $('#itemTable tbody').append('<tr> <td>' + result.hits[i].fields.brand_name + '</td> <td>' + result.hits[i].fields.item_name + '</td> </tr>')
            }
            // $("#label").html(result);
        }

    })
}
