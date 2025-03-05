
// Updated 18/03--Naveen


// Equity calculations

$(document).ready(function () {
    $("#equity-calc-form").submit(function (event) {
        event.preventDefault();

        // Get input values
        var equityBuyPrice = parseFloat($("#equitybuy-price").val()) || 0;
        var equitySellPrice = parseFloat($("#equitysell-price").val()) || 0;
        var equityQty = parseInt($("#equityqty").val()) || 0;

        // Equity Intraday calculations
        var equityIntrabrokerage1 = (equityQty * equityBuyPrice >= 33333 ? 10 : (equityBuyPrice * equityQty * 0.0003));
        var equityIntrabrokerage2 = (equityQty * equitySellPrice >= 33333 ? 10 : (equitySellPrice * equityQty * 0.0003));

        var equityIntradayBrokerage = Math.max(20, (equityIntrabrokerage1 + equityIntrabrokerage2));
        var equityIntradayTurnover = (equityBuyPrice + equitySellPrice) * equityQty;
        var equityIntradayExchangeCharges = 0.0000325 * equityIntradayTurnover;
        var equityIntradayCTT = Math.ceil((equitySellPrice * equityQty) * 0.00025);
        var equityIntradaySEBICharges = 0.000001 * equityIntradayTurnover;
        var equityIntradayGST = 0.18 * (equityIntradayExchangeCharges + equityIntradayBrokerage + equityIntradaySEBICharges);
        var equityIntradayStampDuty = Math.round((equityBuyPrice * equityQty) * 0.00003);
        var equityIntradayNSEIPFT = equityIntradaySEBICharges;
        var equityIntradayTotalCharges = equityIntradayBrokerage + equityIntradayExchangeCharges + equityIntradayGST + equityIntradayCTT + equityIntradaySEBICharges + equityIntradayStampDuty + equityIntradayNSEIPFT;
        var equityIntradayBreakEvenPoints = equityIntradayTotalCharges / equityQty;
        var equityIntradayNetProfit = (equitySellPrice - equityBuyPrice) * equityQty - equityIntradayTotalCharges;

        // Equity intraday results
        $("#equity-intraday-brokerage").text(equityIntradayBrokerage.toFixed(2));
        $("#equity-intraday-brokerage1").text(equityIntradayBrokerage.toFixed(2));
        $("#equity-intraday-turnover").text(equityIntradayTurnover.toFixed(2));
        $("#equity-intraday-exchange-charges").text(equityIntradayExchangeCharges.toFixed(2));
        $("#equity-intraday-gst").text(equityIntradayGST.toFixed(2));
        $("#equity-intraday-ctt").text(equityIntradayCTT.toFixed(2));
        $("#equity-intraday-sebi-charges").text(equityIntradaySEBICharges.toFixed(2));
        $("#equity-intraday-stamp-duty").text(equityIntradayStampDuty.toFixed(2));
        $("#equity-intraday-nse-ipft").text(equityIntradayNSEIPFT.toFixed(2));
        $("#equity-intraday-total-charges").text(equityIntradayTotalCharges.toFixed(2));
        $("#equity-intraday-break-even-points").text(equityIntradayBreakEvenPoints.toFixed(2));
        $("#equity-intraday-net-profit").text(equityIntradayNetProfit.toFixed(2));

        // Equity delivery calculations 

        var equityDeliveryBrokerage = Math.max(20, ((equityBuyPrice > 0 ? 10 : 0) + (equitySellPrice > 0 ? 10 : 0)));
        var equityDeliveryTurnover = (equityBuyPrice + equitySellPrice) * equityQty;
        var equityDeliveryExchangeCharges = 0.0000325 * equityDeliveryTurnover;
        var equityDeliveryCTT = Math.ceil(((equitySellPrice * equityQty) * 0.001 + (equityBuyPrice * equityQty) * 0.001));
        var equityDeliverySEBICharges = 0.000001 * equityDeliveryTurnover;
        var equityDeliveryGST = 0.18 * (equityDeliveryExchangeCharges + equityDeliveryBrokerage + equityDeliverySEBICharges);
        var equityDeliveryStampDuty = Math.round((equityBuyPrice * equityQty) * 0.00015);
        var equityDeliveryDPcharges = (equitySellPrice > 0) ? 20 : 0;
        var equityDeliveryNSEIPFT = equityDeliverySEBICharges;
        var equityDeliveryTotalCharges = equityDeliveryBrokerage + equityDeliveryExchangeCharges + equityDeliveryCTT + equityDeliverySEBICharges + equityDeliveryGST + equityDeliveryStampDuty + equityDeliveryDPcharges + equityDeliveryNSEIPFT;
        var equityDeliveryBreakEvenPoints = equityDeliveryTotalCharges / equityQty;
        var equityDeliveryNetProfit = (equitySellPrice - equityBuyPrice) * equityQty - equityDeliveryTotalCharges;

        // Equity delivery results
        $("#equity-delivery-brokerage").text(equityDeliveryBrokerage.toFixed(2));
        $("#equity-delivery-brokerage1").text(equityDeliveryBrokerage.toFixed(2));
        $("#equity-delivery-turnover").text(equityDeliveryTurnover.toFixed(2));
        $("#equity-delivery-exchange-charges").text(equityDeliveryExchangeCharges.toFixed(2));
        $("#equity-delivery-gst").text(equityDeliveryGST.toFixed(2));
        $("#equity-delivery-ctt").text(equityDeliveryCTT.toFixed(2));
        $("#equity-delivery-sebi-charges").text(equityDeliverySEBICharges.toFixed(2));
        $("#equity-delivery-stamp-duty").text(equityDeliveryStampDuty.toFixed(2));
        $("#equity-delivery-dp-charges").text(equityDeliveryDPcharges.toFixed(2));
        $("#equity-delivery-nse-ipft").text(equityDeliveryNSEIPFT.toFixed(2));
        $("#equity-delivery-total-charges").text(equityDeliveryTotalCharges.toFixed(2));
        $("#equity-delivery-break-even-points").text(equityDeliveryBreakEvenPoints.toFixed(2));
        $("#equity-delivery-net-profit").text(equityDeliveryNetProfit.toFixed(2));
    });
});



// F & O Calculations

$(document).ready(function () {
    $("#fno-calc-form").submit(function (event) {
        event.preventDefault();

        // Get input values
        var fnoBuyPrice = parseFloat($("#fnobuy-price").val()) || 0;
        var fnoSellPrice = parseFloat($("#fnosell-price").val()) || 0;
        var fnoQty = parseInt($("#fnoqty").val()) || 0;

        // FNO Options calculations (assuming this is the correct tab)

        var fnoOptionsBrokerage = Math.max(20, ((fnoBuyPrice > 0 ? 10 : 0) + (fnoSellPrice > 0 ? 10 : 0)));
        var fnoOptionsTurnover = (fnoBuyPrice + fnoSellPrice) * fnoQty;
        var fnoOptionsExchangeCharges = 0.0005 * fnoOptionsTurnover;
        var fnoOptionsSTT = (fnoSellPrice * fnoQty) * 0.000625;
        var fnoOptionsSEBICharges = 0.000001 * fnoOptionsTurnover;
        var fnoOptionsGST = 0.18 * (fnoOptionsExchangeCharges + fnoOptionsBrokerage + fnoOptionsSEBICharges);
        var fnoOptionsStampDuty = Math.round((fnoBuyPrice * fnoQty) * 0.00003);
        var fnoOptionsNSEIPFT = ((fnoSellPrice * fnoQty) + (fnoBuyPrice * fnoQty)) * 0.000005;
        var fnoOptionsTotalCharges = fnoOptionsBrokerage + fnoOptionsExchangeCharges + fnoOptionsGST + fnoOptionsSTT + fnoOptionsSEBICharges + fnoOptionsStampDuty + fnoOptionsNSEIPFT;
        var fnoOptionsBreakEvenPoints = fnoOptionsTotalCharges / fnoQty;
        var fnoOptionsNetProfit = (fnoSellPrice - fnoBuyPrice) * fnoQty - fnoOptionsTotalCharges;

        // FNO Options results
        $("#fno-options-brokerage").text(fnoOptionsBrokerage.toFixed(2));
        $("#fno-options-brokerage1").text(fnoOptionsBrokerage.toFixed(2));
        $("#fno-options-turnover").text(fnoOptionsTurnover.toFixed(2));
        $("#fno-options-exchange-charges").text(fnoOptionsExchangeCharges.toFixed(2));
        $("#fno-options-gst").text(fnoOptionsGST.toFixed(2));
        $("#fno-options-ctt").text(fnoOptionsSTT.toFixed(2));
        $("#fno-options-sebi-charges").text(fnoOptionsSEBICharges.toFixed(2));
        $("#fno-options-stamp-duty").text(fnoOptionsStampDuty.toFixed(2));
        $("#fno-options-nse-ipft").text(fnoOptionsNSEIPFT.toFixed(2));
        $("#fno-options-total-charges").text(fnoOptionsTotalCharges.toFixed(2));
        $("#fno-options-break-even-points").text(fnoOptionsBreakEvenPoints.toFixed(2));
        $("#fno-options-net-profit").text(fnoOptionsNetProfit.toFixed(2));

        // FNO delivery calculations
        var fnoFutureBrokerage = Math.max(20, ((fnoQty * fnoBuyPrice >= 33333 ? 10 : (fnoBuyPrice * fnoQty) * 0.0003) + (fnoQty * fnoSellPrice >= 33333 ? 10 : (fnoQty * fnoSellPrice) * 0.0003)));
        var fnoFutureTurnover = (fnoBuyPrice + fnoSellPrice) * fnoQty;
        var fnoFutureExchangeCharges = 0.000019 * fnoFutureTurnover;
        var fnoFutureCTT = Math.ceil((fnoSellPrice * fnoQty) * 0.000125);
        var fnoFutureSEBICharges = 0.000001 * fnoFutureTurnover;
        var fnoFutureGST = 0.18 * (fnoFutureExchangeCharges + fnoFutureBrokerage + fnoFutureSEBICharges);
        var fnoFutureStampDuty = Math.round((fnoBuyPrice * fnoQty) * 0.00002);
        var fnoFutureNSEIPFT = 0.000001 * fnoFutureTurnover;
        var fnoFutureTotalCharges = fnoFutureBrokerage + fnoFutureExchangeCharges + fnoFutureGST + fnoFutureCTT + fnoFutureSEBICharges + fnoFutureStampDuty + fnoFutureNSEIPFT;
        var fnoFutureBreakEvenPoints = fnoFutureTotalCharges / fnoQty;
        var fnoFutureNetProfit = (fnoSellPrice - fnoBuyPrice) * fnoQty - fnoFutureTotalCharges;

        // FNO delivery results
        $("#fno-future-brokerage").text(fnoFutureBrokerage.toFixed(2));
        $("#fno-future-brokerage1").text(fnoFutureBrokerage.toFixed(2));
        $("#fno-future-turnover").text(fnoFutureTurnover.toFixed(2));
        $("#fno-future-exchange-charges").text(fnoFutureExchangeCharges.toFixed(2));
        $("#fno-future-gst").text(fnoFutureGST.toFixed(2));
        $("#fno-future-ctt").text(fnoFutureCTT.toFixed(2));
        $("#fno-future-sebi-charges").text(fnoFutureSEBICharges.toFixed(2));
        $("#fno-future-stamp-duty").text(fnoFutureStampDuty.toFixed(2));
        $("#fno-future-nse-ipft").text(fnoFutureNSEIPFT.toFixed(2));
        $("#fno-future-total-charges").text(fnoFutureTotalCharges.toFixed(2));
        $("#fno-future-break-even-points").text(fnoFutureBreakEvenPoints.toFixed(2));
        $("#fno-future-net-profit").text(fnoFutureNetProfit.toFixed(2));


    });
});



// Currency  Calculations

$(document).ready(function () {
    $("#currency-calc-form").submit(function (event) {
        event.preventDefault();

        // Get input values
        var currencyBuyPrice = parseFloat($("#currencybuy-price").val()) || 0;
        var currencySellPrice = parseFloat($("#currencysell-price").val()) || 0;
        var currencyQty = parseInt($("#currencyqty").val()) || 0;
        var currencyLotSize = 1000;

        // currency Intraday calculations (assuming this is the correct tab)
        var currencyOptionsBrokerage = (currencyBuyPrice > 0 ? 10 : 0) + (currencySellPrice > 0 ? 10 : 0);
        var currencyOptionsTurnover = (currencyBuyPrice + currencySellPrice) * currencyQty * currencyLotSize;
        var currencyOptionsExchangeCharges = 0.00035 * currencyOptionsTurnover;
        var currencyOptionsNSEIPFT = currencyOptionsTurnover * 0.00002;
        var currencyOptionsSEBICharges = (0.0001 / 100) * currencyOptionsTurnover;
        var currencyOptionsGST = 0.18 * (currencyOptionsExchangeCharges + currencyOptionsBrokerage + currencyOptionsSEBICharges);
        var currencyOptionsStampDuty = Math.round((currencyBuyPrice * currencyQty * currencyLotSize) * 0.000001);
        var currencyOptionsTotalCharges = currencyOptionsBrokerage + currencyOptionsExchangeCharges + currencyOptionsNSEIPFT + currencyOptionsSEBICharges + currencyOptionsGST + currencyOptionsStampDuty;
        var currencyOptionsBreakEvenPoints = currencyOptionsTotalCharges / currencyQty;
        var currencyOptionsNetProfit = (currencySellPrice - currencyBuyPrice) * currencyQty - currencyOptionsTotalCharges;

        // currency intraday results
        $("#currency-options-brokerage").text(currencyOptionsBrokerage.toFixed(2));
        $("#currency-options-brokerage1").text(currencyOptionsBrokerage.toFixed(2));
        $("#currency-options-turnover").text(currencyOptionsTurnover.toFixed(2));
        $("#currency-options-exchange-charges").text(currencyOptionsExchangeCharges.toFixed(2));
        $("#currency-options-gst").text(currencyOptionsGST.toFixed(2));
        // $("#currency-options-ctt").text(currencyOptionsCTT.toFixed(2));
        $("#currency-options-sebi-charges").text(currencyOptionsSEBICharges.toFixed(2));
        $("#currency-options-stamp-duty").text(currencyOptionsStampDuty.toFixed(2));
        $("#currency-options-nse-ipft").text(currencyOptionsNSEIPFT.toFixed(2));
        $("#currency-options-total-charges").text(currencyOptionsTotalCharges.toFixed(2));
        $("#currency-options-break-even-points").text(currencyOptionsBreakEvenPoints.toFixed(2));
        $("#currency-options-net-profit").text(currencyOptionsNetProfit.toFixed(2));

        // currency delivery calculations
        var currencyFutureBrokerage = Math.max(20, ((currencyLotSize * currencyQty * currencyBuyPrice >= 33333 ? 10 : (currencyLotSize * currencyQty * currencyBuyPrice) * 0.0003) + (currencyLotSize * currencyQty * currencySellPrice >= 33333 ? 10 : (currencyLotSize * currencyQty * currencySellPrice) * 0.0003)));
        var currencyFutureTurnover = (currencyBuyPrice + currencySellPrice) * currencyQty * currencyLotSize;
        var currencyFutureExchangeCharges = 0.000009 * currencyFutureTurnover;
        // var currencyFutureCTT = (currencySellPrice * currencyQty) * 0.000001 ;
        var currencyFutureSEBICharges = 0.000001 * currencyFutureTurnover;
        var currencyFutureGST = 0.18 * (currencyFutureExchangeCharges + currencyFutureBrokerage + currencyFutureSEBICharges);
        var currencyFutureStampDuty = Math.round((currencyBuyPrice * currencyQty * currencyLotSize) * 0.000001);
        var currencyFutureNSEIPFT = currencyFutureTurnover * 0.0000005;
        var currencyFutureTotalCharges = currencyFutureBrokerage + currencyFutureExchangeCharges + currencyFutureGST + currencyFutureSEBICharges + currencyFutureStampDuty + currencyFutureNSEIPFT;
        var currencyFutureBreakEvenPoints = currencyFutureTotalCharges / currencyQty;
        var currencyFutureNetProfit = (currencySellPrice - currencyBuyPrice) * currencyQty - currencyFutureTotalCharges;

        // currency delivery results
        $("#currency-future-brokerage").text(currencyFutureBrokerage.toFixed(2));
        $("#currency-future-brokerage1").text(currencyFutureBrokerage.toFixed(2));
        $("#currency-future-turnover").text(currencyFutureTurnover.toFixed(2));
        $("#currency-future-exchange-charges").text(currencyFutureExchangeCharges.toFixed(2));
        $("#currency-future-gst").text(currencyFutureGST.toFixed(2));
        // $("#currency-future-ctt").text(currencyFutureCTT.toFixed(2));
        $("#currency-future-sebi-charges").text(currencyFutureSEBICharges.toFixed(2));
        $("#currency-future-stamp-duty").text(currencyFutureStampDuty.toFixed(2));
        $("#currency-future-nse-ipft").text(currencyFutureNSEIPFT.toFixed(2));
        $("#currency-future-total-charges").text(currencyFutureTotalCharges.toFixed(2));
        $("#currency-future-break-even-points").text(currencyFutureBreakEvenPoints.toFixed(2));
        $("#currency-future-net-profit").text(currencyFutureNetProfit.toFixed(2));


    });
});


// Commodity calculations

$(document).ready(function () {

    $("#commodity-calc-form").submit(function (event) {
        event.preventDefault();

        // Get input values
        var commodity = $("#commodity").val();
        // Create a mapping of commodities to lot sizes
        var lotSizes = {
            "ALUMINIUM": 5000,
            "CARDAMOM": 100,
            "CASTORSEED": 100,
            "COPPER": 2500,
            "COTTON": 25,
            "CPO": 1000,
            "CRUDEOIL": 100,
            "GOLD": 100,
            "GOLDGUINEA": 1,
            "GOLDM": 10,
            "GOLDPETAL": 1,
            "KAPAS": 200,
            "LEAD": 5000,
            "MENTHAOIL": 1080,
            "NATURALGAS": 1250,
            "NICKEL": 1500,
            "PEPPER": 10,
            "RBDPMOLEIN": 1000,
            "SILVER": 30,
            "SILVERM": 5,
            "SILVERMIC": 1,
            "ZINC": 5000,
            "MCXBULLDEX": 50,
            "MCXMETLDEX": 50,
            "MCXENRGDEX": 125,
            "RUBBER": 10,
            "ZINCMINI": 1000,
            "LEADMINI": 1000,
            "ALUMINI": 1000,
            "CRUDEOILM": 10,
            "NATGASMINI": 250
        };



        // Look up the lot size in the lotSizes object
        var lotSize = lotSizes[commodity];
        var BuyPrice = parseFloat($("#buy-price").val()) || 0;
        var SellPrice = parseFloat($("#sell-price").val()) || 0;
        var lots = parseInt($("#lots").val()) || 0;

        // Commodity intraday calculations
        var commodityOptionsBrokerage = Math.max(20, ((BuyPrice > 0 ? 10 : 0) + (SellPrice > 0 ? 10 : 0)));
        var commodityOptionsTurnover = (BuyPrice + SellPrice) * lots * lotSize;
        var commodityOptionsExchangeCharges = 0.0005 * commodityOptionsTurnover;
        var commodityOptionsCtt = Math.round((SellPrice * lots * lotSize) * 0.0005);
        var commodityOptionsSebiCharges = 0.000001 * commodityOptionsTurnover;
        var commodityOptionsGst = (commodityOptionsExchangeCharges + commodityOptionsBrokerage + commodityOptionsSebiCharges) * 0.18;
        var commodityOptionsStampDuty = Math.round((lots * BuyPrice * lotSize) * 0.00003);
        var commodityOptionsTotalCharges = commodityOptionsBrokerage + commodityOptionsExchangeCharges + commodityOptionsGst + commodityOptionsCtt + commodityOptionsSebiCharges + commodityOptionsStampDuty;
        var commodityOptionsBreakEvenPoints = commodityOptionsTotalCharges / lotSize;
        var commodityOptionsNetProfit = (SellPrice - BuyPrice - commodityOptionsTotalCharges) * lotSize * lots;

        // Commodity Intraday results
        $("#commodity-options-brokerage").text(commodityOptionsBrokerage.toFixed(2));
        $("#commodity-options-brokerage1").text(commodityOptionsBrokerage.toFixed(2));
        $("#commodity-options-turnover").text(commodityOptionsTurnover.toFixed(2));
        $("#commodity-options-exchange-charges").text(commodityOptionsExchangeCharges.toFixed(2));
        $("#commodity-options-gst").text(commodityOptionsGst.toFixed(2));
        $("#commodity-options-ctt").text(commodityOptionsCtt.toFixed(2));
        $("#commodity-options-sebi-charges").text(commodityOptionsSebiCharges.toFixed(2));
        $("#commodity-options-stamp-duty").text(commodityOptionsStampDuty.toFixed(2));
        $("#commodity-options-total-charges").text(commodityOptionsTotalCharges.toFixed(2));
        $("#commodity-options-break-even-points").text(commodityOptionsBreakEvenPoints.toFixed(2));
        $("#commodity-options-net-profit").text(commodityOptionsNetProfit.toFixed(2));

        // Commodity Delivery calculations
        var commodityFutureBrokerage = Math.max(20, ((lotSize * lots * BuyPrice >= 33333 ? 10 : (lotSize * lots * BuyPrice) * 0.0003) + (lotSize * lots * SellPrice >= 33333 ? 10 : (lotSize * lots * SellPrice) * 0.0003)));
        var commodityFutureTurnover = (BuyPrice + SellPrice) * lots * lotSize;
        var commodityFutureExchangeCharges = 0.000026 * commodityFutureTurnover;
        var commodityFutureCtt = Math.round((SellPrice * lots * lotSize) * 0.0001);
        var commodityFutureSebiCharges = 0.000001 * commodityFutureTurnover;
        var commodityFutureGst = (commodityFutureExchangeCharges + commodityFutureBrokerage + commodityFutureSebiCharges) * 0.18;
        var commodityFutureStampDuty = Math.round((lots * BuyPrice * lotSize) * 0.00002);
        var commodityFutureTotalCharges = commodityFutureBrokerage + commodityFutureExchangeCharges + commodityFutureGst + commodityFutureCtt + commodityFutureSebiCharges + commodityFutureStampDuty;
        var commodityFutureBreakEvenPoints = commodityFutureTotalCharges / lotSize;
        var commodityFutureNetProfit = (SellPrice - BuyPrice - commodityFutureTotalCharges) * lotSize * lots;

        // Commodity Delivery results
        $("#commodity-future-brokerage").text(commodityFutureBrokerage.toFixed(2));
        $("#commodity-future-brokerage1").text(commodityFutureBrokerage.toFixed(2));
        $("#commodity-future-turnover").text(commodityFutureTurnover.toFixed(2));
        $("#commodity-future-exchange-charges").text(commodityFutureExchangeCharges.toFixed(2));
        $("#commodity-future-gst").text(commodityFutureGst.toFixed(2));
        $("#commodity-future-ctt").text(commodityFutureCtt.toFixed(2));
        $("#commodity-future-sebi-charges").text(commodityFutureSebiCharges.toFixed(2));
        $("#commodity-future-stamp-duty").text(commodityFutureStampDuty.toFixed(2));
        $("#commodity-future-total-charges").text(commodityFutureTotalCharges.toFixed(2));
        $("#commodity-future-break-even-points").text(commodityFutureBreakEvenPoints.toFixed(2));
        $("#commodity-future-net-profit").text(commodityFutureNetProfit.toFixed(2));

    });
});

$(document).ready(function () {
    var allowedOptions = [
        'COPPER',
        'CRUDEOIL',
        'GOLD',
        'GOLDM',
        'NATURALGAS',
        'SILVER',
        'SILVERM',
        'ZINC'
    ];

    function showAllowedOptions() {
        $('#commodity option').hide();
        $.each(allowedOptions, function (index, value) {
            $('#commodity option[value="' + value + '"]').show();
        });
    }

    $('#w-tabs-4-data-w-tab-1').click(function () {
        showAllowedOptions();
    });

    $('#w-tabs-4-data-w-tab-0').click(function () {
        $('#commodity option').show();
    });
});


