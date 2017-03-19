var MetaCoin = artifacts.require("./MetaCoin.sol");

contract('Mc2', function(accounts) {

    it("t1", function() {
        var meta;

        // Get initial balances of first and second account.
        var ac1 = accounts[0];
        var ac2 = accounts[1];

        var ac1_end;
        var ac2_end;

        var amount = 10;

        return MetaCoin.deployed().then(function(instance) {
            meta = instance;
            return meta.sendCoin(ac2, amount);
        }).then(function() {
            return meta.sendCoin(ac2, amount);
        }).then(function() {
            return meta.sendCoin(ac2, amount);
        }).then(function() {
            return meta.getBalance.call(ac1);
        }).then(function(balance) {
            ac1_end = balance.toNumber();
            console.log('1e', ac1_end);
            return meta.getBalance.call(ac2);
        }).then(function(balance) {
            ac2_end = balance.toNumber();
            console.log('2e', ac2_end);
        });
    });

    it("t2", function() {
        var meta;

        // Get initial balances of first and second account.
        var ac1 = accounts[0];
        var ac2 = accounts[1];

        var ac1_end;
        var ac2_end;

        var amount = 10;

        return MetaCoin.deployed().then(function(instance) {
            meta = instance;
            return meta.sendCoin(ac2, amount);
        }).then(function() {
            return meta.sendCoin(ac2, 20);
        }).then(function() {
            return meta.sendCoin(ac2, 30);
        }).then(function() {
            return meta.getBalance.call(ac1);
        }).then(function(balance) {
            ac1_end = balance.toNumber();
            console.log('1e', ac1_end);
            return meta.getBalance.call(ac2);
        }).then(function(balance) {
            ac2_end = balance.toNumber();
            console.log('2e', ac2_end);
        });
    });

    it("t3", function() {
        var meta;

        // Get initial balances of first and second account.
        var ac1 = accounts[0];
        var ac2 = accounts[1];

        var ac1_end;
        var ac2_end;

        var amount = 10;

        return MetaCoin.deployed().then(function(instance) {
            meta = instance;
            return meta.sendCoin(ac2, amount);
        }).then(function() {
            return meta.sendCoin(ac2, 40);
        }).then(function() {
            return meta.sendCoin(ac2, 60);
        }).then(function() {
            return meta.getBalance.call(ac1);
        }).then(function(balance) {
            ac1_end = balance.toNumber();
            console.log('1e', ac1_end);
            return meta.getBalance.call(ac2);
        }).then(function(balance) {
            ac2_end = balance.toNumber();
            console.log('2e', ac2_end);
        });
    });

});