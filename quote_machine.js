var quotes = [
    {quote:"Blessed is the man, who having nothing to say, abstains from giving wordy evidence of the fact.",
    author:"George Eliot (1819-1880)"
},{
    quote:"Once you eliminate the impossible, whatever remains, no matter how improbable, must be the truth.",
    author:"Sherlock Holmes (by Sir Arthur Conan Doyle, 1859-1930)"
},{
    quote:"Black holes are where God divided by zero.",
    author:"Steven Wright"
},{
    quote:"I've had a wonderful time, but this wasn't it.",
    author:"Groucho Marx (1895-1977)"
},{
    quote:"It's kind of fun to do the impossible.",
    author:"Walt Disney (1901-1966)"
},{
    quote:"We didn't lose the game; we just ran out of time.",
    author:"Vince Lombardi"
},{
    quote:"The optimist proclaims that we live in the best of all possible worlds, and the pessimist fears this is true.",
    author:"James Branch Cabell"
},{
    quote:"A friendship founded on business is better than a business founded on friendship.",
    author:"John D. Rockefeller (1874-1960)"
},{
    quote:"All are lunatics, but he who can analyze his delusion is called a philosopher.",
    author:"Ambrose Bierce (1842-1914)"
},{
    quote:"You can only find truth with logic if you have already found truth without it.",
    author:"Gilbert Keith Chesterton (1874-1936)"
},{
    quote:"An inconvenience is only an adventure wrongly considered; an adventure is an inconvenience rightly considered.",
    author:"Gilbert Keith Chesterton (1874-1936)"
},{
    quote:"I have come to believe that the whole world is an enigma, a harmless enigma that is made terrible by our own mad attempt to interpret it as though it had an underlying truth.",
    author:"Umberto Eco"
},{
    quote:"Be nice to people on your way up because you meet them on your way down.",
    author:"Jimmy Durante"
},{
    quote:"The true measure of a man is how he treats someone who can do him absolutely no good.",
    author:"Samuel Johnson (1709-1784)"
}],
    quoteIndex;

$(function(){
    switchQuote();

    $(".quoteContainer button.switch").on("click", switchQuote);

    $("a.share").on("click", function(){
        if($(this).attr('id') == "twitter"){
            shareOnTwitter(quoteIndex);
        } else {
            shareOnTumblr(quoteIndex);
        }
    });
});

var randomNum = function(min, max) {
    return Math.floor((Math.random() * max) + min);
};

var Color = function(randValue) {
    var lightR = Math.round(0.5*randValue + 30),
        lightG = Math.round(-0.5*randValue + 80),
        lightB = 90,
        darkR = Math.round(0.2*randValue + 10),
        darkG = Math.round(-0.2*randValue + 30),
        darkB = 20,
        lightRGB = [lightR,lightG,lightB],
        darkRGB = [darkR,darkG,darkB];

    var light = "rgb(" + lightRGB.join() + ")",
        dark = "rgb(" + darkRGB.join() + ")";

    this.getColorLight = function(){
        return light;
    }

    this.getColorDark = function(){
        return dark;
    }

    this.getGradient = function(){
        return "(" + light + "," + dark + ")";
    }

};

function setQuote(randValue){
    var maxQuote = quotes.length-1;
        quoteIndex = Math.round((randValue*maxQuote)/100);
        currentQuote = quotes[quoteIndex].quote,
        currentAuthor = quotes[quoteIndex].author;

    $("p.quoteText").text(currentQuote);
    $("p.quoteAuthor").text("- " + currentAuthor);

    return quoteIndex;

}

function setColorScheme(randValue){
    var bgGradient = new Color(randValue);
    $("p.quoteText, p.quoteAuthor").css("color", bgGradient.getColorLight());
    $("button.switch, a.share").css("background-color", bgGradient.getColorLight());
    $("body.radial-center").css("background", "linear-gradient"+bgGradient.getGradient());
}

function switchQuote(){
    var randValue = randomNum(0,100);

    setColorScheme(randValue);
    setQuote(randValue);
}

function shareOnTumblr(quote){
    $("#tumblr").attr("href","https://www.tumblr.com/widgets/share/tool?content="+quotes[quoteIndex].quote);

}

function shareOnTwitter(quote){
    $("#twitter").attr("href","http://twitter.com/intent/tweet?text="+quotes[quoteIndex].quote);
}



