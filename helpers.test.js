describe("Helpers functions tests",function(){
    beforeEach(function(){
        allPayments = {payment1:{billAmt:100, tipAmt:25, tipPercent:25}, payment2:{billAmt:25, tipAmt:25, tipPercent:100}};
    });

    it("Should test the calculteTipPercent function", function(){
        expect(calculateTipPercent(20, 10)).toEqual(50);
        expect(calculateTipPercent(33, 11)).toEqual(33);
    });

    it("Should test the function appendTd", function(){
        let testTr = document.createElement('tr');
        appendTd(testTr, 'yoyo');
        expect(testTr.children[0].innerText).toEqual('yoyo');
    });

    it("Should test the function sumPaymentTotal", function(){
        expect(sumPaymentTotal('tipAmt')).toEqual(50);
        expect(sumPaymentTotal('billAmt')).toEqual(125);
    });

    // it("Should test the function appendDeleteBtn",function(){

    // });

    afterEach(function(){
        billAmtInput.value = '';
        tipAmtInput.value = '';
        paymentTbody.innerHTML = '';
        summaryTds[0].innerHTML = '';
        summaryTds[1].innerHTML = '';
        summaryTds[2].innerHTML = '';
        serverTbody.innerHTML = '';
        allPayments = {};
        paymentId = 0;
    });
});