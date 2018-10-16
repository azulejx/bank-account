$(document).ready(function(){
  function Account(name, balance) {
    this.name = name;
    this.balance = balance;
  };
  Account.prototype.adjust = function(adjustment) {
    this.balance = this.balance + adjustment;
  };
  var newAccount = {
    name: "none",
    balance: "none"
  };
  function adjustFunction(dep, draw) {
    if (isNaN(dep) && isNaN(draw)) {
      alert("Please input a number");
      finalAdjustment = 0;
    }
    else if (isNaN(dep)) {
      finalAdjustment = (-1 *draw);
    }
    else if (isNaN(draw)) {
      finalAdjustment = dep;
    }
    else {
      finalAdjustment = dep - draw;
    }
  };

  $("button#makeaccount").click(function(){
    $("form#new-account").submit(function(event){
      event.preventDefault();
    });
    var name = $("#new-name").val();
    var initialDeposit = parseFloat($("#initial-deposit").val());
    newAccount = new Account(name, initialDeposit);
    $("#your-account").show();
    $("#account-name").text(newAccount.name + "'s ");
    $("#account-balance").text("$" + newAccount.balance);
  });
  $("button#submit").click(function(){
    $("form#new-account").submit(function(event){
      event.preventDefault();
    });
    if (newAccount.name === "none") {
      alert("No information given");
    }
    else {
      var deposit = parseFloat($("#deposit").val());
      var withdrawal = parseFloat($("#withdrawal").val());
      //console.log(deposit, withdrawal);
      adjustFunction(deposit, withdrawal);
      newAccount.adjust(finalAdjustment);
      //console.log(finalAdjustment);
    };
    $("#account-balance").text("$" + newAccount.balance);
  });
});
