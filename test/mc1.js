var MetaCoin = artifacts.require("./MetaCoin.sol");

contract('Mc1', function(accounts) {

    it("t1", function() {
        var meta;

        // Get initial balances of first and second account.
        var ac1 = accounts[0];
        var ac2 = accounts[1];

        var ac1_start;
        var ac2_start;
        var ac1_end;
        var ac2_end;

        var amount = 10;

        return MetaCoin.deployed().then(function(instance) {
            meta = instance;
            return meta.getBalance.call(ac1);
        }).then(function(balance) {
            ac1_start = balance.toNumber();
            console.log('1s', ac1_start);
            return meta.getBalance.call(ac2);
        }).then(function(balance) {
            ac2_start = balance.toNumber();
            console.log('2s', ac2_start);
            return meta.sendCoin(ac2, amount, {
                from: ac1
            });
        }).then(function() {
            return meta.getBalance.call(ac1);
        }).then(function(balance) {
            ac1_end = balance.toNumber();
            console.log('1e', ac1_end);
            return meta.getBalance.call(ac2);
        }).then(function(balance) {
            ac2_end = balance.toNumber();
            console.log('2e', ac2_end);
            assert.equal(ac1_end, ac1_start - amount, "Amount wasn't correctly taken from the sender");
            assert.equal(ac2_end, ac2_start + amount, "Amount wasn't correctly sent to the receiver");
        });
    });
});