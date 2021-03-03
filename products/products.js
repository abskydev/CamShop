fetch('http://localhost:8000/Cameras')
    .then(function (response) {
    var NewProduct = response.headers;
    console.log(NewProduct);
});
//brands
var cameraBrands = ["sony", "Nikon", "Canon", "FujiFilm", "Lumix", "Kodak", "Blackmagic"];
//opisy
var a7siiiDescription = "A7s 3 generacji";
var a9iiDescription = "Sony A9 2 generacji";
var a7rivDescription = "Sony a7R 4 generacji";
var a1Description = "Najnowszy!, Najlepszy!, Najwydajniejszy!. 3xN od SONY";
var a7cdescription = "SONY a7c kompaktowa wersja sony a7";
var z7Description = "Nikon Z7 body";
var r6Description = "Canon R6";
var pln = " PLN";
var usd = " USD";
var gbp = " GBP";
var usdX = 3.71;
var gbpX = 5.17;
//prices
var sonyaviisiiiPricePLN = 19500;
var sonya7rivPricePLN = 15145;
var sonya1PricePLN = 35999;
var sonyaixiiPricePLN = 22095;
var sonya7cblackPricePLN = 11500;
var sonya7csilverPricePLN = 12500;
var nikonZ7PricePLN = 12500;
var canonr6PricePLN = 12389;
var sonyaviisiii = {
    Brand: cameraBrands[0],
    Model: "A7s III",
    FullName: cameraBrands[0] + " A7s III",
    pricePLN: sonyaviisiiiPricePLN,
    PLN: sonyaviisiiiPricePLN + pln,
    priceUSD: sonyaviisiiiPricePLN * 3.71,
    USD: sonyaviisiiiPricePLN * usdX + usd,
    priceGBP: sonyaviisiiiPricePLN * 5.17,
    GBP: sonyaviisiiiPricePLN * gbpX + gbp,
    image: "https://i.ibb.co/vQrJbdK/sonya7siii6-2011230090.png",
    description: a7siiiDescription,
    buyed: 1,
};
var sonya7riv = {
    Brand: cameraBrands[0],
    Model: "A7RIV",
    FullName: cameraBrands[0] + " A7R IV",
    pricePLN: sonya7rivPricePLN,
    PLN: sonya7rivPricePLN + pln,
    priceUSD: sonya7rivPricePLN * usdX,
    USD: sonya7rivPricePLN * usdX + usd,
    priceGBP: sonya7rivPricePLN * gbpX,
    GBP: sonya7rivPricePLN * gbpX + gbp,
    image: "https://i.ibb.co/2nrJFSK/przod-349903975.jpg",
    description: a7rivDescription,
    buyed: 0,
};
var sonyaixii = {
    Brand: cameraBrands[0],
    Model: "A9II",
    FullName: cameraBrands[0] + " A9 II",
    pricePLN: sonyaixiiPricePLN,
    PLN: sonya1PricePLN + pln,
    priceUSD: sonyaixiiPricePLN * usdX,
    USD: sonya1PricePLN * usdX + usd,
    priceGBP: sonya1PricePLN * gbpX,
    GBP: sonya1PricePLN * gbpX + gbp,
    image: "https://i.ibb.co/XJ2SVbN/sonya9ii1111-1556998494.png",
    description: a9iiDescription,
    buyed: 0,
};
var sonya1 = {
    Brand: cameraBrands[0],
    Model: "A1",
    FullName: cameraBrands[0] + " A1",
    pricePLN: sonya1PricePLN,
    PLN: sonya1PricePLN + pln,
    priceUSD: sonya1PricePLN * usdX,
    USD: sonya1PricePLN * usdX + usd,
    priceGBP: sonya1PricePLN * gbpX,
    GBP: sonya1PricePLN * gbpX + gbp,
    image: "https://i.ibb.co/pzBVnzZ/sonya1-1609764207.png",
    description: a1Description,
    buyed: 0,
};
var sonya7c = {
    Brand: cameraBrands[0],
    modelBlack: "A7c black",
    modelSilver: "A7c silver",
    FullNameBlack: cameraBrands[0] + " a7c " + "black",
    FullNameSilver: cameraBrands[0] + " a7c " + "silver",
    pricePLN: sonya7cblackPricePLN,
    PLN: sonya7cblackPricePLN + pln,
    priceUSD: sonya7cblackPricePLN * usdX,
    USD: sonya7cblackPricePLN * usdX + usd,
    priceGBP: sonya7cblackPricePLN * gbpX,
    GBP: sonya7cblackPricePLN * gbpX + gbp,
    blackImage: "https://i.ibb.co/R4Zc5my/images.jpg",
    description: a7cdescription,
    buyed: 0,
    silver: {
        Brand: cameraBrands[0],
        model: "A7c silver",
        FullName: cameraBrands[0] + " a7c " + "silver",
        pricePLN: sonya7csilverPricePLN,
        PLN: sonya7csilverPricePLN + pln,
        priceUSD: sonya7csilverPricePLN * usdX,
        USD: sonya7csilverPricePLN * usdX + usd,
        priceGBP: sonya7csilverPricePLN * gbpX,
        GBP: sonya7csilverPricePLN * gbpX + gbp,
        Image: "https://i.ibb.co/qC24QgR/1600118443-1594029-2145872247.png",
        description: a7cdescription,
        buyed: 0,
    }
};
var nikonZ7 = {
    Brand: cameraBrands[1],
    Model: "Z7",
    FullName: cameraBrands[1] + "  Z7",
    pricePLN: nikonZ7PricePLN,
    PLN: nikonZ7PricePLN + pln,
    priceUSD: nikonZ7PricePLN * usdX,
    USD: nikonZ7PricePLN * usdX + usd,
    priceGBP: nikonZ7PricePLN * gbpX,
    GBP: nikonZ7PricePLN * gbpX + gbp,
    image: "https://i.ibb.co/jG2hxCZ/17-85849609.png",
    description: z7Description,
    buyed: 0,
};
var canonr6 = {
    Brand: cameraBrands[2],
    Model: "R6",
    FullName: cameraBrands[2] + "  R6",
    pricePLN: canonr6PricePLN,
    PLN: canonr6PricePLN + pln,
    priceUSD: canonr6PricePLN * usdX,
    USD: canonr6PricePLN * usdX + usd,
    priceGBP: canonr6PricePLN * gbpX,
    GBP: canonr6PricePLN * gbpX + gbp,
    image: "https://i.ibb.co/HXK3hQF/canonr6-2-156297611.png",
    description: r6Description,
    buyed: 0,
};
//def
var newProduct = sonyaviisiii;
var Bestseller = sonyaixii;
var preorder = sonya1;
var nowInStock = sonya7c.silver;
var onSale = nikonZ7;
var newUsedProduct = canonr6;
//Sale
var Sale = 15; // sale in %
var sale = Sale / 100;
//New product
var onePrice = document.getElementById("onePricePLN");
var oneProductName = document.getElementById("oneProductName");
onePricePLN.innerHTML = (newProduct.USD);
oneProductName.innerHTML = (newProduct.FullName);
var oneImage = document.createElement("img");
oneImage.setAttribute("src", newProduct.image);
var positionOne = document.getElementById("oneEL");
oneImage.classList.add("elementsIMG");
positionOne.prepend(oneImage);
//Bestsellers
var twoPrice = document.getElementById("twoPricePLN");
var twoProductName = document.getElementById("twoProductName");
twoPrice.innerHTML = (Bestseller.USD);
twoProductName.innerHTML = (Bestseller.FullName);
var twoImage = document.createElement("img");
twoImage.setAttribute("src", Bestseller.image);
var positionTwo = document.getElementById("twoEL");
twoImage.classList.add("elementsIMG");
positionTwo.prepend(twoImage);
//preorder
var threePrice = document.getElementById("threePricePLN");
var threeProductName = document.getElementById("threeProductName");
threePrice.innerHTML = (preorder.USD);
threeProductName.innerHTML = (preorder.FullName);
var threeImage = document.createElement("img");
threeImage.setAttribute("src", preorder.image);
var positionThree = document.getElementById("threeEL");
threeImage.classList.add("elementsIMG");
positionThree.prepend(threeImage);
//nowinstock
var fourPrice = document.getElementById("fourPricePLN");
var fourProductName = document.getElementById("fourProductName");
fourPrice.innerHTML = (nowInStock.USD);
fourProductName.innerHTML = (nowInStock.FullName);
var fourImage = document.createElement("img");
fourImage.setAttribute("src", nowInStock.Image);
var positionFour = document.getElementById("fourEL");
fourImage.classList.add("elementsIMG");
positionFour.prepend(fourImage);
//onSale
var fivePriceFrom = document.getElementById("priceFrom");
var fiveProductName = document.getElementById("fiveProductName");
fivePriceFrom.innerHTML = (onSale.USD);
fiveProductName.innerHTML = (onSale.FullName);
var SALED = onSale.priceUSD * sale;
var onSaleEl = onSale.priceUSD - SALED;
var USDsale = onSaleEl + usd;
var SaledPrice = document.getElementById("fivePricePLN");
SaledPrice.innerHTML = (USDsale);
var fiveImage = document.createElement("img");
fiveImage.setAttribute("src", onSale.image);
var positionFive = document.getElementById("fiveEL");
fiveImage.classList.add("elementsIMG");
positionFive.prepend(fiveImage);
//new used product
var sixPrice = document.getElementById("sixPricePLN");
var sixProductName = document.getElementById("sixProductName");
sixPrice.innerHTML = (newUsedProduct.USD);
sixProductName.innerHTML = (newUsedProduct.FullName);
var sixImage = document.createElement("img");
sixImage.setAttribute("src", newUsedProduct.image);
var positionSix = document.getElementById("sixEL");
sixImage.classList.add("elementsIMG");
positionSix.prepend(sixImage);
