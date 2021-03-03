fetch('http://localhost:8000/Cameras')
    .then(response => {
        let NewProduct = response.headers;
        console.log(NewProduct);
    });

//brands
let cameraBrands =["sony", "Nikon", "Canon", "FujiFilm", "Lumix", "Kodak", "Blackmagic"];
//opisy
let a7siiiDescription = "A7s 3 generacji";
let a9iiDescription = "Sony A9 2 generacji";
let a7rivDescription = "Sony a7R 4 generacji";
let a1Description = "Najnowszy!, Najlepszy!, Najwydajniejszy!. 3xN od SONY";
let a7cdescription = "SONY a7c kompaktowa wersja sony a7";
let z7Description = "Nikon Z7 body";
let r6Description = "Canon R6";
let pln = " PLN";
let usd = " USD";
let gbp = " GBP";
let usdX = 3.71;
let gbpX = 5.17;

//prices
let sonyaviisiiiPricePLN = 19500;
let sonya7rivPricePLN = 15145;
let sonya1PricePLN = 35999;
let sonyaixiiPricePLN= 22095;
let sonya7cblackPricePLN = 11500;
let sonya7csilverPricePLN = 12500;
let nikonZ7PricePLN = 12500;
let canonr6PricePLN= 12389;

const sonyaviisiii = {
    Brand:cameraBrands[0],
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
}

const sonya7riv = {
    Brand:cameraBrands[0],
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
}

const sonyaixii = {
    Brand:cameraBrands[0],
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
}

const sonya1 = {
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
}


const sonya7c = {
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
}

const nikonZ7 = {
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
}

const canonr6 = {
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
}

//def
let newProduct = sonyaviisiii;
let Bestseller = sonyaixii;
let preorder = sonya1;
let nowInStock = sonya7c.silver;
let onSale = nikonZ7;
let newUsedProduct = canonr6;

//Sale
let Sale = 15;// sale in %
let sale = Sale / 100;

//New product

let onePrice = document.getElementById("onePricePLN");
let oneProductName = document.getElementById("oneProductName");
onePricePLN.innerHTML=(newProduct.USD);
oneProductName.innerHTML=(newProduct.FullName);

let oneImage = document.createElement("img");
oneImage.setAttribute("src", newProduct.image);
let positionOne = document.getElementById("oneEL");
oneImage.classList.add("elementsIMG");
positionOne.prepend(oneImage);

//Bestsellers

let twoPrice = document.getElementById("twoPricePLN");
let twoProductName = document.getElementById("twoProductName");
twoPrice.innerHTML=(Bestseller.USD);
twoProductName.innerHTML=(Bestseller.FullName);

let twoImage = document.createElement("img");
twoImage.setAttribute("src", Bestseller.image);
let positionTwo = document.getElementById("twoEL");
twoImage.classList.add("elementsIMG");
positionTwo.prepend(twoImage);

//preorder

let threePrice = document.getElementById("threePricePLN");
let threeProductName = document.getElementById("threeProductName");
threePrice.innerHTML=(preorder.USD);
threeProductName.innerHTML=(preorder.FullName);

let threeImage = document.createElement("img");
threeImage.setAttribute("src", preorder.image);
let positionThree = document.getElementById("threeEL");
threeImage.classList.add("elementsIMG");
positionThree.prepend(threeImage);

//nowinstock

let fourPrice = document.getElementById("fourPricePLN");
let fourProductName = document.getElementById("fourProductName");
fourPrice.innerHTML=(nowInStock.USD);
fourProductName.innerHTML=(nowInStock.FullName);

let fourImage = document.createElement("img");
fourImage.setAttribute("src", nowInStock.Image);
let positionFour = document.getElementById("fourEL");
fourImage.classList.add("elementsIMG");
positionFour.prepend(fourImage);

//onSale

let fivePriceFrom = document.getElementById("priceFrom");
let fiveProductName = document.getElementById("fiveProductName");
fivePriceFrom.innerHTML=(onSale.USD);
fiveProductName.innerHTML=(onSale.FullName);
let SALED = onSale.priceUSD * sale;
let onSaleEl = onSale.priceUSD - SALED;
let USDsale = onSaleEl + usd;
let SaledPrice = document.getElementById("fivePricePLN");
SaledPrice.innerHTML=(USDsale);

let fiveImage = document.createElement("img");
fiveImage.setAttribute("src", onSale.image);
let positionFive = document.getElementById("fiveEL");
fiveImage.classList.add("elementsIMG");
positionFive.prepend(fiveImage);

//new used product

let sixPrice = document.getElementById("sixPricePLN");
let sixProductName = document.getElementById("sixProductName");
sixPrice.innerHTML=(newUsedProduct.USD);
sixProductName.innerHTML=(newUsedProduct.FullName);

let sixImage = document.createElement("img");
sixImage.setAttribute("src", newUsedProduct.image);
let positionSix = document.getElementById("sixEL");
sixImage.classList.add("elementsIMG");
positionSix.prepend(sixImage);
