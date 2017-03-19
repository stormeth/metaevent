var MetaCoin = artifacts.require("./MetaCoin.sol");

contract('Mc4', function(accounts) {

    it("t1", function() {
        var meta;

        // Get initial balances of first and second account.
        var ac1 = accounts[0];
        var ac2 = accounts[1];
        var ac3 = accounts[2];

        var ac1_end;
        var ac2_end;
        var ac3_end;

        var amount = 10;

        return MetaCoin.deployed().then(function(instance) {
            meta = instance;

            return meta.sendCoin(ac2, amount);
        }).then(function() {

            return meta.sendCoin(ac2, amount).then(function(tx) {
                // console.log(tx);
            })
        }).then(function() {

            return meta.sendCoin(ac3, amount);
        }).then(function() {
            console.log('bye...');
        });
    });

});
