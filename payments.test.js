describe("Tests on functions in payments.test.js",function(){
    beforeEach(function(){
        //console.log('before');
        billAmtInput.value = 100;
        tipAmtInput.value = 25;
    });

    it("Should test the function submitPaymentInfo", function(){
        submitPaymentInfo();
        expect(Object.keys(allPayments).length).toEqual(1);
        expect(allPayments['payment1'].billAmt).toEqual('100');
        expect(allPayments['payment1'].tipAmt).toEqual('25');
        expect(allPayments['payment1'].tipPercent).toEqual(25);
    });

    it("Should test the function createCurPayment",function(){
        
        let curPay = createCurPayment();
        //console.log(curPay);
        expect(curPay['billAmt']).toEqual('100');
        expect(curPay['tipAmt']).toEqual('25');
        expect(curPay['tipPercent']).toEqual(25);
    });

    it("Should test the function appendPaymentTable", function(){
        let curPay = createCurPayment();
        //console.log(curPay.billAmt, curPay.tipAmt, curPay.tipPercent);
        //console.log('before creation',paymentTbody);
        appendPaymentTable(curPay);
        let testTbody = document.querySelectorAll('#paymentTable tbody tr td');
        //console.log(testTbody);
        expect(testTbody[0].innerText).toEqual('$100');
        expect(testTbody[1].innerText).toEqual('$25');
        expect(testTbody[2].innerText).toEqual('25%');
    });

    // it("Should test the function updateSummary", function(){
    //     updateSummary();
    //     let testSummary = document.querySelectorAll('#summaryTable tbody tr td');
    //     expect(testSummary[0].innerText).toEqual('$100');
    //     expect(testSummary[1].innerText).toEqual('$25');
    //     expect(testSummary[2].innerText).toEqual('25%');
    // });

    afterEach(function(){
        billAmtInput.value = '';
        tipAmtInput.value = '';
        paymentId = 0;
        paymentTbody.innerHTML = '';
        summaryTds[0].innerHTML = '';
        summaryTds[1].innerHTML = '';
        summaryTds[2].innerHTML = '';
        serverTbody.innerHTML = '';
        allPayments = {};
    });
});