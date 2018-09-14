$(document).ready(function() {
  $(".button").on("click", function() {
    event.preventDefault();
    $("#recipeCards").empty();
    var ingredientA = $("#input1")
      .val()
      .trim();
    var ingredientB = $("#input2")
      .val()
      .trim();
    if (ingredientA === "" || ingredientB === "") {
      return alert("you need to enter an ingredient");
    }
    getRecipeId(ingredientA, ingredientB);
  });
});

function getRecipeId(ing1, ing2) {

  var queryUrl =
    "https://api.yummly.com/v1/api/recipes?_app_id=108507b6&_app_key=dc94d5f4c0691f5dc5db17fb6deb0ca4&q=" +
    ing1 +
    "&allowedIngredient[]=" +
    ing2 +
    "&requirePictures=true&maxResult=6";

  $.get(queryUrl, function(body) {
    var matches = body.matches;

    // If the request is successful
    if (matches.length > 0) {
      var results = matches.map(function(match) {
        return {
          recipeId: match.id
        };
      });

      var recipeArr = [];
      for (var i = 0; i < results.length; i++) {
        var temp = {
          recipeId: results[i].recipeId
        };
        recipeArr.push(temp);
      }
      //this for loop gets the recipe Id for each of the items
      for (var i = 0; i < results.length; i++) {
        var queryUrl =
          "https://api.yummly.com/v1/api/recipe/" +
          results[i].recipeId +
          "?_app_id=108507b6&_app_key=dc94d5f4c0691f5dc5db17fb6deb0ca4";

        $.get(queryUrl, function(body) {
          var images = [body.images[0].hostedLargeUrl];
          var ingredientLines = body.ingredientLines.join("<br>");
          var source = body.source.sourceRecipeUrl;
          var title = body.name;

          var div = $("<div>");
          div.attr("class", "basic-card");
          div.attr("style", "width:450px");

          var img = $("<img>");
          img.attr("src", images);
          img.attr("class", "basic-card-image");
          img.attr("style", "width: 450px");
          div.append(img);

          $("#recipeCards").append("<div>");
          var recipeName = $("<h5>" + title);
          recipeName.attr("id", "headlineh5");
          recipeName.attr("style", "height: 100px");
          recipeName.append(title);
          div.append(recipeName);

          var p = $("<p>");
          var ingredients = $("<p id='ingreds'>");
          ingredients.attr(
            "class",
            "basic-card-content, content, callout, secondary"
          );
          ingredients.attr(
            "style",
            "overflow-y: auto; height: 125px; margin-bottom: 20px;"
          );
          ingredients.append(ingredientLines);
          div.append(ingredients);

          var sourceUrl = $("<a>");
          sourceUrl.append("<h3>Recipe Source</h3>");
          sourceUrl.attr("href", source);
          sourceUrl.attr("class", "menu2");
          sourceUrl.attr("target", "_blank");
          sourceUrl.append(source);
          div.append(sourceUrl);

          $("#recipeCards").append(div);
        });
      }
    }
  });
}
