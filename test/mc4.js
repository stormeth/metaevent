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
//        }).then(function() {


        }).then(function(result) {
          // result is an object with the following values:
          //
          // result.tx      => transaction hash, string
          // result.logs    => array of decoded events that were triggered within this transaction
          // result.receipt => transaction receipt object, which includes gas used

          // We can loop through result.logs to see if we triggered the Transfer event.

          console.log('result.logs.length = ',result.logs.length)

          for (var i = 0; i < result.logs.length; i++) {
            var log = result.logs[i];

            if (log.event == "Transfer") {
              // We found the event!
              break;
            }
          }
//        }).catch(function(err) {
//          // There was an error! Handle it.
//        });




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
